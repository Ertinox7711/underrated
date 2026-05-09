// E2E test for Gen M dashboard — verifies deploy + JS health + UI states
const { chromium } = require('playwright');

const TARGET_URL = 'https://robot-validation-produit.web.app/dashboard.html';

(async () => {
  const browser = await chromium.launch({ headless: true, slowMo: 50 });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  const errors = [];
  const consoleMsgs = [];
  page.on('console', m => consoleMsgs.push(`[${m.type()}] ${m.text()}`));
  page.on('pageerror', e => errors.push(`PAGE_ERROR: ${e.message}`));
  page.on('requestfailed', r => errors.push(`REQ_FAIL: ${r.url()} ${r.failure()?.errorText}`));

  console.log('=== TEST 1: Initial load + JS health ===');
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  console.log('Title:', await page.title());

  // Check CDN libs loaded
  const libs = await page.evaluate(() => ({
    confetti: typeof window.confetti,
    Sortable: typeof window.Sortable,
    gsap: typeof window.gsap,
    Fuse: typeof window.Fuse,
    Compressor: typeof window.Compressor,
    Howl: typeof window.Howl,
    tippy: typeof window.tippy,
    Cropper: typeof window.Cropper,
    driver: typeof window.driver
  }));
  console.log('CDN libs loaded:', JSON.stringify(libs, null, 2));

  // Screenshot auth screen
  await page.screenshot({ path: 'C:/Users/maths/AppData/Local/Temp/genm-1-auth-desktop.png', fullPage: true });
  console.log('Saved: genm-1-auth-desktop.png');

  // Check auth screen visible
  const authVisible = await page.locator('#auth-screen').isVisible();
  const dashHidden = await page.locator('#dash-screen').evaluate(el => el?.classList.contains('hidden'));
  console.log('Auth screen visible:', authVisible, '| Dash hidden:', dashHidden);

  console.log('\n=== TEST 2: Mobile responsive ===');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'C:/Users/maths/AppData/Local/Temp/genm-2-mobile.png', fullPage: true });
  console.log('Saved: genm-2-mobile.png');
  // Note: burger only visible when dash-shell visible (after login). Auth screen covers full.

  console.log('\n=== TEST 3: DOM structure ===');
  await page.setViewportSize({ width: 1440, height: 900 });
  const domCheck = await page.evaluate(() => ({
    sidebarItems: document.querySelectorAll('.side-nav a[data-view]').length,
    views: document.querySelectorAll('.view').length,
    studioDrawer: !!document.getElementById('studio-drawer'),
    charCreator: !!document.getElementById('char-creator'),
    decorCreator: !!document.getElementById('decor-creator'),
    uiModal: !!document.getElementById('ui-modal'),
    mascot: !!document.getElementById('gh-mascot'),
    burger: !!document.getElementById('mobile-burger'),
    versionBadge: !!document.getElementById('admin-ver-badge')
  }));
  console.log('DOM components:', JSON.stringify(domCheck, null, 2));

  // Verify wizard steps in view-generate
  const wizardSteps = await page.evaluate(() => {
    const v = document.getElementById('view-generate');
    if (!v) return null;
    const steps = v.querySelectorAll('.gh-step');
    return { stepCount: steps.length, headers: Array.from(steps).map(s => s.querySelector('.gh-h')?.textContent?.trim().slice(0,60)) };
  });
  console.log('Wizard steps:', JSON.stringify(wizardSteps, null, 2));

  console.log('\n=== TEST 4: Try login form submit (will fail without real creds) ===');
  // Just verify form fields exist + accept input
  const emailInput = await page.locator('#auth-email').count();
  const passInput = await page.locator('#auth-pass').count();
  const submitBtn = await page.locator('#auth-submit').count();
  console.log('Login form: email=', emailInput, 'pass=', passInput, 'submit=', submitBtn);

  if (emailInput && passInput) {
    await page.fill('#auth-email', 'test@example.com');
    await page.fill('#auth-pass', 'invalidpass');
    console.log('Form fillable: OK');
  }

  console.log('\n=== TEST 5: VERSION.json reachable ===');
  const verRes = await page.request.get('https://robot-validation-produit.web.app/VERSION.json?t=' + Date.now());
  console.log('VERSION.json status:', verRes.status());
  if (verRes.ok()) console.log('Body:', await verRes.text());

  console.log('\n=== TEST 6: Asset health (favicon, fonts) ===');
  const failedReqs = errors.filter(e => e.startsWith('REQ_FAIL'));
  console.log('Failed requests:', failedReqs.length);
  failedReqs.slice(0, 5).forEach(f => console.log(' -', f));

  console.log('\n=== TEST 7: Console errors during init ===');
  const errs = consoleMsgs.filter(m => m.startsWith('[error]'));
  console.log('Console errors:', errs.length);
  errs.forEach(e => console.log(' -', e));

  console.log('\n=== TEST 8: Page errors ===');
  const pageErrs = errors.filter(e => e.startsWith('PAGE_ERROR'));
  console.log('Page errors:', pageErrs.length);
  pageErrs.forEach(e => console.log(' -', e));

  console.log('\n=== SUMMARY ===');
  const allLibsLoaded = Object.values(libs).every(t => t === 'function' || t === 'object');
  console.log('All 9 CDN libs loaded:', allLibsLoaded ? 'PASS' : 'FAIL');
  console.log('All 6 studio components in DOM:', Object.values(domCheck).every(Boolean) ? 'PASS' : 'FAIL');
  console.log('Wizard step count >= 6:', (wizardSteps?.stepCount >= 6) ? 'PASS' : 'FAIL');
  console.log('No JS errors on init:', (errs.length === 0 && pageErrs.length === 0) ? 'PASS' : 'FAIL');
  console.log('Auth flow rendered:', authVisible && dashHidden ? 'PASS' : 'FAIL');

  await browser.close();
})().catch(e => { console.error('FATAL:', e.message); process.exit(1); });
