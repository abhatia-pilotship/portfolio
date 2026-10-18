import { test, expect } from "@playwright/test";

// prefers-reduced-motion: reduce — content must be fully visible, no travel.
test.use({ reducedMotion: "reduce" });

test.describe("reduced motion", () => {
  test("home content is visible with reduced motion", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });

    // Hero (CSS masked reveal) settles to no transform.
    const heroLine = page.locator(".line-mask > span").first();
    await expect(heroLine).toBeVisible();

    // Below-fold entrance elements must be revealed (not left at opacity 0).
    for (const sel of ["#about-heading", "#writing-heading", '[aria-live]']) {
      const el = page.locator(sel).first();
      await expect(el).toBeVisible();
      await expect(el).toHaveCSS("opacity", "1");
    }
  });

  test("a content page is fully visible with reduced motion", async ({ page }) => {
    await page.goto("/blog/kalman-filter-sensor-fusion", { waitUntil: "load" });
    await expect(page.locator("h1")).toBeVisible();
    // Section headings in the article body (data-animate) must resolve to visible.
    const h2 = page.locator("article h2").first();
    await expect(h2).toBeVisible();
    await expect(h2).toHaveCSS("opacity", "1");
  });

  test("experience entries are visible with reduced motion", async ({ page }) => {
    await page.goto("/experience", { waitUntil: "load" });
    const items = page.locator("ol > li");
    await expect(items.first()).toBeVisible();
    await expect(items.first()).toHaveCSS("opacity", "1");
    await expect(items.last()).toBeVisible();
    await expect(items.last()).toHaveCSS("opacity", "1");
  });
});
