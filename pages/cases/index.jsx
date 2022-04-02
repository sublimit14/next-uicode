import {useEffect, useState} from "react";

import Link from 'next/link';
import MainLayout from "../../components/MainLayout";
import styles from './Cases.module.scss';
import transliter from "./translit";

// const aerRee = new Promise(resolve => {
//     setTimeout(()=>{
//         console.log('10')
//
//         resolve('adsdadasdasd')
//     }, 3000)
// });
//
// aerRee.then(x=>{
//     console.log(x)
// })

const Cases = ({cases}) => {
    let options = [];

    const [filteredCases, setFilteredCases] = useState(cases);
    console.log(typeof(filteredCases))
    let deletedDoubleOptions = [...new Set(options)];


    // console.log('filteredCases >>>',filteredCases)
    // console.log('typeof filteredCases>>>',typeof(filteredCases))
    // filteredCases.map( (x)=> {
    //     console.log('category >>>',x.category)
    // })

    // ПРОМИСЫ
    // const response2 = fetch('http://localhost:4200/cases');
    // response2.then(resp=>{
    //     return resp.json();
    // }).then(x=>{
    //     console.log('JSON >',x)
    // })
    // console.log('response1111 >',response2);
    //
    // cases.forEach((c) => {
    //     options.push(c.category)
    // })

    // if(0){
    //     console.log('Yes')
    // } else {
    //     console.log('No')
    // }
    //
    // 0 ? console.log('Yes') : console.log('No')
    //
    // if (1) console.log('Yes123213')

    const handlerSelect = (e) => {
        if (e.target.value === 'All category'){
            setFilteredCases(cases)
        } else {
            console.log(filteredCases)
            setFilteredCases(cases.filter(x => x.category === e.target.value))
        }
    }

    // filteredCases.map(cas => {
    //     options.push(cas.category)
    //     console.log(options)
    // })


    console.log('deletedDoubleOptions>>',deletedDoubleOptions);
    console.log('options>>',options);

    return (
        <MainLayout>
            <section className="container page">
                <h1>Cases</h1>
                <select onChange={ handlerSelect }>
                    <option>All category</option>
                    {/*<option>design</option>*/}
                    {/*<option>web</option>*/}

                    {
                        deletedDoubleOptions?.map(opt => (
                            <option key={opt}> {opt} </option>
                        ))
                    }
                </select>
                <ul className={styles.ul}>
                    {
                        filteredCases?.map(caa => (
                            <li key={caa.id} className={styles.li}>
                                <span className={styles.subtitle}>{caa.subtitle}</span>
                                <h2 className={styles.title}>{caa.title}</h2>
                                <p className={styles.text}>{caa.text}</p>
                                <p className={styles.link}>
                                <Link href={`/cases/${transliter(caa.title)}`}>Подробнее</Link>
                                </p>
                            </li>
                        ))
                    }
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

Cases.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/cases');
    const cases = await response.json();
    return {
        cases : cases
    }
}

export default Cases;