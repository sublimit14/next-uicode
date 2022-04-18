import {useEffect, useState} from "react";
import MainLayout from "../../components/MainLayout";
import styles from './Cases.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const Cases = ({cases}) => {
    const filtredCategories = new Set();
    const [filteredCases, setFilteredCases] = useState(cases);
    const [select, setSelect] = useState()
    const catArray = ['Все']
    const options = [ ...filtredCategories
        // { value: 'chocolate', label: 'Chocolate' },
        // { value: 'strawberry', label: 'Strawberry' },
        // { value: 'vanilla', label: 'Vanilla' }
    ]
    //Получаем массив категорий
    cases.map(c => (
        c.attributes.categories.data.map(cat => (
            filtredCategories.add(cat.attributes.category)
        ))
    ))

    //Получаем массив категорий
    for (let category of filtredCategories) {
        catArray.push(category)
    }

    const handleSelect = (e) => {
        e.target.className=`${styles.filterItem} ${styles.selected}`
        // console.log(e.target.outerText)
    }
    console.log(cases[0].attributes.headerText)
    return (
        <MainLayout>
            <section className="container">

                <div className={styles.cases}>
                    <div className={styles.upper}>
                        <h1>Наши кейсы</h1>
                        <div className={styles.filter}>
                            {/*{catArray.map(item => <div key={item} className={styles.filterItem} onClick={handleSelect}>{item}</div>)}*/}
                            <Select
                                defaultValue={'Все'}
                                options={options}
                            />
                            {/*https://react-select.com/home#getting-started*/}
                        </div>
                    </div>

                    <div className={styles.wrapper}>
                        {
                            filteredCases?.map((cas) => (
                                <Link key={cas.id} href={`/cases/${cas.id}`}>
                                    <div className={styles.card}>
                                        <h2>{cas.attributes.title}</h2>
                                        <div className={styles.tags}>
                                            {
                                                cas.attributes.categories.data.map(tag => (
                                                    <div key={tag.attributes.category}
                                                         className={styles.tag}>{tag.attributes.category}</div>
                                                ))
                                            }
                                        </div>

                                        <div className={styles.overlay}/>
                                        <Image
                                            className={styles.img}
                                            objectFit={'cover'}
                                            layout='fill'
                                            src={`http://localhost:1337${cas.attributes.preview_img.data.attributes.url}`}
                                            priority
                                        />
                                    </div>

                                </Link>
                            ))
                        }
                    </div> {/* wrapper */}
                </div>
            </section>
        </MainLayout>
    );
};

Cases.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:1337/api/cases?populate=*`)
    const json = await res.json()
    return {
        cases: json.data
    }
}
export default Cases;