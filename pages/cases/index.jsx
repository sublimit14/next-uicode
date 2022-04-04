import {useEffect, useState} from "react";

// import Link from 'next/link';
import MainLayout from "../../components/MainLayout";
import styles from './Cases.module.scss';
// import transliter from "./translit";
// import UicodeButton from "../../components/UicodeButton/UicodeButton";


const Cases = ({cases}) => {
    let options = [];

    const [filteredCases, setFilteredCases] = useState(cases);
    // let deletedDoubleOptions = [...new Set(options)];
    //
    // const handlerSelect = (e) => {
    //     if (e.target.value === 'All category'){
    //         setFilteredCases(cases)
    //     } else {
    //         console.log(filteredCases)
    //         setFilteredCases(cases.filter(x => x.category === e.target.value))
    //     }
    // }

    return (
        <MainLayout>
            <section className="container page">
                <h1>Cases</h1>
                <div className={styles.Links}>

                </div>
                {/*<select onChange={ handlerSelect }>*/}
                {/*    <option>All category</option>*/}
                {/*    {*/}
                {/*        deletedDoubleOptions?.map(opt => (*/}
                {/*            <option key={opt}> {opt} </option>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</select>*/}
                <ul className={styles.ul}>234
                    {/*{*/}
                    {/*    cases?.map(caa => (*/}
                    {/*        <li key={caa.id} className={styles.li}>*/}
                    {/*            <span className={styles.subtitle}>{caa.subtitle}</span>*/}
                    {/*            <h2 className={styles.title}>{caa.title}</h2>*/}
                    {/*            <p className={styles.text}>{caa.text}</p>*/}
                    {/*            <p className={styles.link}>*/}
                    {/*            <Link href={`/cases/${transliter(caa.title)}`}>Подробнее</Link>*/}
                    {/*            </p>*/}
                    {/*        </li>*/}
                    {/*    ))*/}
                    {/*}*/}
                </ul>
            </section>
        </MainLayout>
    );
};

// Cases.getInitialProps = async () => {
//     const response = await fetch('http://localhost:4200/cases');
//     const cases = await response.json();
//
//     return {
//         cases: cases
//     }
// }

// Cases.getInitialProps = async () => {
//     const response = await fetch('http://localhost:4200/cases');
//     const cases = await response.json();
//     return {
//         cases : cases
//     }
// }

export default Cases;