import Head from 'next/head'
import HeadContent from "../components/HeadContent/HeadContent";
import MainLayout from '../components/MainLayout'
import styles from './Home.module.scss'
import Hero from "../components/MainPage/HeroBlock/Hero";

export default function Home() {
    return (
        <MainLayout>

            <Head>
                <HeadContent
                    title={'Web site | uicode.ru 🤔'}
                    description={'uicode description '}
                    keywords={'uicode keywords'}
                />
            </Head>

            <div className={styles.Home}>
                <Hero/>
            </div>


        </MainLayout>
    )
}
