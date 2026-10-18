import { test, expect } from "@playwright/test";

// Visual regression baselines (per engine × viewport). Animations are disabled by
// toHaveScreenshot; we also wait for entrance elements to resolve before capturing.
test.describe("visual", () => {
  test("home — above the fold", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    // Hero signature reveal settles to full opacity.
    await expect(page.locator(".line-mask > span").first()).toHaveCSS("opacity", "1");
    await expect(page).toHaveScreenshot("home-fold.png", {
      animations: "disabled",
      maxDiffPixelRatio: 0.02,
    });
  });

  test("project detail — above the fold", async ({ page }) => {
    await page.goto("/projects/09", { waitUntil: "load" });
    await expect(page.locator("h1")).toHaveCSS("opacity", "1");
    await expect(page).toHaveScreenshot("project-fold.png", {
      animations: "disabled",
      maxDiffPixelRatio: 0.02,
    });
  });
});
