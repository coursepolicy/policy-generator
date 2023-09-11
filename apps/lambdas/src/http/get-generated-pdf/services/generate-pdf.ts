import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export const generatePdf = async (generatedId: string) => {
  let browser = null;
  let result = null;

  try {
    const baseUrl = process.env.CORE_BASE_URL;

    await chromium.font(
      'https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf'
    );

    chromium.setGraphicsMode = false;
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: null,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    console.info('hello', `${baseUrl}/preview/${generatedId}`);

    await page.goto(`${baseUrl}/preview/${generatedId}`, {
      waitUntil: 'networkidle0',
    });

    result = await page.pdf({
      printBackground: true,
      width: 1000,
      preferCSSPageSize: true,
      format: 'Letter',
      margin: {
        top: '0.75in',
        right: '0.75in',
        bottom: '0.75in',
        left: '0.75in',
      },
      displayHeaderFooter: true,
      footerTemplate: `
            <div style="font-size:10px; margin: 0 auto; text-align: center; width: 100%;">
                <p>created using 
                    <a href="https://coursepolicy.ai" target="_blank" rel="noopener noreferrer nofollow">
                        CoursePolicy.AI
                    </a>
                </p>
            </div>
        `,
    });

    console.info(
      'Before close **********************',
      JSON.stringify({
        pageInfo: {
          url: await page.url(),
          viewport: await page.viewport(),
          // ... any other properties you're interested in
        },
        browserInfo: {
          version: await browser.version(),
          isConnected: browser.isConnected(),
          // ... any other properties you're interested in
        },
      })
    );
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error));
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return result;
};
