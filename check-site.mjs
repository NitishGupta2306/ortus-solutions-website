import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the site
  await page.goto('http://localhost:5173');

  // Wait for page to load
  await page.waitForTimeout(2000);

  // Take screenshots of each section
  console.log('Taking screenshots...');

  // Hero section
  await page.screenshot({ path: 'screenshots/hero.png', fullPage: false });
  console.log('✓ Hero screenshot taken');

  // Scroll and capture other sections
  const sections = ['#values', '#about', '#services', '#process', '#contact'];

  for (const section of sections) {
    try {
      await page.locator(section).scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: `screenshots/${section.replace('#', '')}.png`, fullPage: false });
      console.log(`✓ ${section} screenshot taken`);
    } catch (e) {
      console.log(`✗ Could not find section: ${section}`);
    }
  }

  // Check for AnimatedBackground components
  console.log('\n=== Checking for AnimatedBackground components ===');
  const animatedBackgrounds = await page.locator('.absolute.inset-0.overflow-hidden.pointer-events-none').count();
  console.log(`Found ${animatedBackgrounds} AnimatedBackground components`);

  // Check what's in each section
  console.log('\n=== Section Analysis ===');
  const allSections = await page.locator('section').all();
  for (let i = 0; i < allSections.length; i++) {
    const section = allSections[i];
    const id = await section.getAttribute('id');
    const hasAnimatedBg = await section.locator('.absolute.inset-0.overflow-hidden.pointer-events-none').count();
    console.log(`Section ${id || i}: ${hasAnimatedBg > 0 ? '✓ Has AnimatedBackground' : '✗ No AnimatedBackground'}`);
  }

  // Keep browser open for inspection
  console.log('\n=== Browser will stay open for 30 seconds for inspection ===');
  await page.waitForTimeout(30000);

  await browser.close();
})();
