import {useRouter} from "next/router"
import PageTransition from "../components/PageTransition";
import '../styles/globals.scss'
import Header from "../components/Header/Header";

function UicodeApp({Component, pageProps}) {

    const router = useRouter()
    return (
        <>
            <nav>
                <Header/>
            </nav>

            <PageTransition location={router.pathname}>
                <Component {...pageProps} />
            </PageTransition>
        </>
    )
}

export default UicodeApp;
