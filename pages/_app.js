import { useRouter } from "next/router"
import PageTransition from "../components/PageTransition";
import '../styles/globals.scss'
import Header from "../components/Header/Header";
import { Scrollbars } from 'react-custom-scrollbars-2';

function MyApp({Component, pageProps}) {

    const router = useRouter()
    return (
        <>
                <nav>
                    <Header />
                </nav>

                <PageTransition location={router.pathname}>
                    {/*<Scrollbars*/}
                    {/*    autoHeight*/}
                    {/*    autoHeightMin = { 100 }*/}
                    {/*    autoHeightMax = { 1080 }*/}
                    {/*    autoHide*/}
                    {/*    // Задержка скрытия в мс*/}
                    {/*    autoHideTimeout = { 1000 }*/}
                    {/*    // Длительность анимации скрытия в мс.*/}
                    {/*    autoHideDuration = { 200 }*/}
                    {/*>*/}
                        <Component {...pageProps} />
                    {/*</Scrollbars>*/}
                </PageTransition>

        </>
    )
}

export default MyApp;
