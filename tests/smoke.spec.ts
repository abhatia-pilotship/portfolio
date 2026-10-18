import { test, expect, type ConsoleMessage } from "@playwright/test";

const ROUTES = [
  "/",
  "/projects",
  "/projects/01",
  "/projects/09",
  "/projects/11",
  "/experience",
  "/blog",
  "/blog/kalman-filter-sensor-fusion",
  "/blog/deploying-ml-models-at-scale",
  "/blog/accessibility-in-code-editors",
  "/contact",
];

// Benign messages that aren't real app errors.
function isBenign(text: string): boolean {
  return (
    text.includes("favicon") ||
    text.includes("Download the React DevTools") ||
    text.includes("[Fast Refresh]")
  );
}

test.describe("smoke", () => {
  for (const route of ROUTES) {
    test(`loads ${route} with no console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg: ConsoleMessage) => {
        if (msg.type() === "error" && !isBenign(msg.text())) errors.push(msg.text());
      });
      page.on("pageerror", (err) => errors.push(err.message));

      const res = await page.goto(route, { waitUntil: "load" });
      expect(res?.status(), `status for ${route}`).toBeLessThan(400);
      await expect(page.locator("main")).toBeVisible();
      expect(errors, `console errors on ${route}`).toEqual([]);
    });
  }

  test("every internal link resolves", async ({ page, request }) => {
    const checked = new Set<string>();
    for (const route of ["/", "/projects", "/blog", "/experience", "/contact"]) {
      await page.goto(route, { waitUntil: "load" });
      const hrefs = await page.$$eval("a[href^='/']", (as) =>
        as.map((a) => (a as HTMLAnchorElement).getAttribute("href")!).filter(Boolean)
      );
      for (const href of hrefs) {
        if (checked.has(href)) continue;
        checked.add(href);
        const res = await request.get(href);
        expect(res.status(), `internal link ${href}`).toBeLessThan(400);
      }
    }
    expect(checked.size).toBeGreaterThan(5);
  });

  test("the contact mailto works", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "load" });
    const mailto = page.locator('a[href^="mailto:"]').first();
    await expect(mailto).toBeVisible();
    await expect(mailto).toHaveAttribute("href", "mailto:aryan.bhatia@gatech.edu");
  });
});
