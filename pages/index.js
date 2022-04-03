import Head from 'next/head'
import HeadContent from "../components/HeadContent/HeadContent";
import MainLayout from '../components/MainLayout'

import Hero from "../components/MainPage/HeroBlock/Hero";
import BenefitBlock from "../components/MainPage/BenefitBlock/BenefitBlock";
import CasesBlock from "../components/MainPage/CasesBlock/CasesBlock";
import PartnersBlock from "../components/MainPage/PartnersBlock/PartnersBlock";
import ProcedureBlock from "../components/MainPage/ProcedureBlock/ProcedureBlock";

import styles from './Home.module.scss'
import BottomForm from "../components/MainPage/BottomForm/BottomForm";

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

            <div className={`page ${styles.Home}`}>
                <Hero />
                <BenefitBlock />
                <PartnersBlock />
                <CasesBlock />
                <ProcedureBlock />
                <BottomForm />
            </div>


        </MainLayout>
    )
}
