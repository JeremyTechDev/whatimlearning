import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="./favicon.ico" />
          <link rel="apple-touch-icon" href="./favicon.ico" />
          <meta name="author" content="Jeremy" />
          <meta name="theme-color" content="#FD5150" />
          <meta
            name="description"
            content="Find out what your favorite creators are learning and their favorite resources"
          />
          <meta name="application-name" content="WhatImLearning" />
          <meta name="apple-mobile-web-app-title" content="WhatImLearning" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="msapplication-navbutton-color" content="#FD5150" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <meta property="og:site_name" content="WhatImLearning" />
          <meta property="og:title" content="WhatImLearning" />
          <meta property="og:url" content="https://whatimlearning.live" />
          <meta
            property="og:image"
            content="https://whatimlearning.live/logo.png"
          />
          <meta
            content="Find out what your favorite creators are learning and their favorite resources 🚀"
            property="og:description"
          />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="font-mono text-gray-600">
          <Main />
          <NextScript />
        </body>

        <script
          async
          charSet="utf-8"
          src="https://platform.twitter.com/widgets.js"
        />
      </Html>
    );
  }
}

export default MyDocument;
