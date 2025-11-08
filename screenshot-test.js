import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    colorScheme: 'dark'
  });
  const page = await context.newPage();

  await page.goto('http://localhost:5173');

  // Wait for page to load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Take full page screenshot
  await page.screenshot({
    path: 'screenshots/full-page.png',
    fullPage: true
  });

  // Screenshot hero section
  await page.screenshot({
    path: 'screenshots/hero-section.png',
    clip: { x: 0, y: 0, width: 1920, height: 1080 }
  });

  // Scroll and screenshot team section
  await page.locator('#team').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshots/team-section.png',
    clip: { x: 0, y: 0, width: 1920, height: 1080 }
  });

  // Screenshot projects section
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshots/projects-section.png',
    clip: { x: 0, y: 0, width: 1920, height: 1080 }
  });

  // Screenshot contact section
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshots/contact-section.png',
    clip: { x: 0, y: 0, width: 1920, height: 1080 }
  });

  // Screenshot header with Book Consultation button
  await page.goto('http://localhost:5173');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshots/header-button.png',
    clip: { x: 0, y: 0, width: 1920, height: 100 }
  });

  console.log('Screenshots saved to screenshots/ directory');

  await browser.close();
})();
