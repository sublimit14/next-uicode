import Footer from "./Footer/Footer";

const MainLayout = ({children}) => {


    return (
        <>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
            <style jsx>{`
              main {
                margin-top: 72px;
              }
            `}</style>
        </>

    );
};

export default MainLayout;