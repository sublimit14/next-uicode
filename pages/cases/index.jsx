import {useState} from "react";
import MainLayout from "../../components/MainLayout";
import styles from './Cases.module.scss';
import Link from 'next/link';
import Image from 'next/image'
const Cases = ({cases, id}) => {

    const [filteredCases, setFilteredCases] = useState(cases);
    console.log(filteredCases);
    return (
        <MainLayout>
            <section className="container page">
                <h1>Cases</h1>

                <ul className={styles.ul}>
                    {

                        filteredCases?.map((cas)=>(
                            <li key={cas.id}>
                                <Image
                                src={'/PS_Dnon_B_Feb262_4_7693a0e7df.png'}
                                width={300}
                                height={200}
                                alt={cas.attributes.title}
                                />
                                <h2>ID: {cas.id}</h2>
                                <span>{cas.attributes.subtitle}</span>
                                <p>{cas.attributes.title}</p>
                                <Link href={`/cases/${cas.attributes.title_unique}`}>Link</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </MainLayout>
    );
};

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}cases/`);
    // const response = await fetch(`${process.env.API_HOST}/upload/files/`);
    const cases = await response.json();
    console.log(cases)
    return {
        props: {
            cases: cases.data
        }
    }
}

export default Cases;