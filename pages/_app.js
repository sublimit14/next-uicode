import { useRouter } from "next/router"
import PageTransition from "../components/PageTransition";
import '../styles/globals.scss'
import Header from "../components/Header/Header";
import { SessionProvider } from "next-auth/react"

function MyApp({Component, pageProps}) {

    const router = useRouter()
    return (
        <>
            <nav>
                <Header />
            </nav>
            <SessionProvider>
                <PageTransition location={router.pathname}>
                    <Component {...pageProps} />
                </PageTransition>
            </SessionProvider>
        </>
    )
}

export default MyApp;
