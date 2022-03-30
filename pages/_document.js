import { Html, Head, Main, NextScript } from 'next/document'
import HeadContent from "../components/HeadContent/HeadContent";

export default function Document() {
    return (
        <Html>
            <Head>
                <HeadContent />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}