import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100,200,300,400,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-black text-white ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
