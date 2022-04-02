import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PageTransition from "./PageTransition";
import {useRouter} from "next/router";

const MainLayout = ({ children }) => {


    return (
        <>
            <style jsx>{`
                main {
                  margin-top: 72px;
                }
            `}</style>


                <main>
                    { children }
                </main>
            <footer>
                <Footer />
            </footer>

        </>

    );
};

export default MainLayout;