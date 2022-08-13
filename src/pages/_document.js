import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'common/utils/createEmotionCache';


export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    try {
      const cache = createEmotionCache();
      const { extractCriticalToChunks } = createEmotionServer(cache);

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
        });


      const initialProps = await Document.getInitialProps(ctx);
      const emotionStyles = extractCriticalToChunks(initialProps.html);

      const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          key={style.key}
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      ));

      return {
        ...initialProps,
        styles: [...emotionStyleTags, ...React.Children.toArray(initialProps.styles)],
      };
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Html lang="kr">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
          <meta name="theme-color" content="#3D405B" />
          <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
          <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

