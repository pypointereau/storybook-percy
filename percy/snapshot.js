const PercyScript = require('@percy/script');

// const knobsTabSelector = '#storybook-panel-root > div:nth-child(1) button:nth-child(2)';

PercyScript.run(async (page, percySnapshot) => {
    // await page.goto('http://localhost:61026/?path=/story/navigation--simple');
    // await page.waitFor('a[title="Navigation"]');
    // await page.click('a[title="Navigation - Simple"]');
    // await percySnapshot('Navigation - Simple - nca');
    // await page.click(knobsTabSelector);
    // await page.select('select[name="Brand style"]', 'mhr');
    // await percySnapshot('Navigation - Simple - mhr');
    // await page.select('select[name="Brand style"]', 'bodyandsoul');
    // await percySnapshot('Navigation - Simple - bodyandsoul');
    // await page.select('select[name="Brand style"]', 'whimn');
    // await percySnapshot('Navigation - Simple - whimn');
    // await page.select('select[name="Brand style"]', 'kidspot');
    // await percySnapshot('Navigation - Simple - kidspot');

    await page.goto('http://localhost:61026/iframe.html?id=navigation--navigation-simple&knob-Brand%20style=nca');
    await percySnapshot('Navigation - Simple - nca');

    await page.goto('http://localhost:61026/iframe.html?id=navigation--navigation-simple&knob-Brand%20style=mhr');
    await percySnapshot('Navigation - Simple - mhr');

    await page.goto('http://localhost:61026/iframe.html?id=navigation--navigation-simple&knob-Brand%20style=bodyandsoul');
    await percySnapshot('Navigation - Simple - bodyandsoul');

    await page.goto('http://localhost:61026/iframe.html?id=navigation--navigation-simple&knob-Brand%20style=whimn');
    await percySnapshot('Navigation - Simple - whimn');

    await page.goto('http://localhost:61026/iframe.html?id=navigation--navigation-simple&knob-Brand%20style=kidspot');
    await percySnapshot('Navigation - Simple - kidspot');
});