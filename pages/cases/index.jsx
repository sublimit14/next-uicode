import {useState} from "react";
import MainLayout from "../../components/MainLayout";
import styles from './Cases.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import axios from 'axios';

const Cases = ({cases, error}) => {

    const [filteredCases, setFilteredCases] = useState(cases);
    // console.log(filteredCases);

    if (error) {
        return <div>An error occured: {error.message}</div>;
    }
    const cardStyleBg = {
        // backgroundImage: "url(" + { Background } + ")"
        backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" + ")"
    };

    return (
        <MainLayout>
            <section className="container">

                <div className={styles.cases}>
                <h1>Наши кейсы</h1>

                    <div className={styles.wrapper}>

                        {

                            filteredCases?.map((cas)=>(
                                <Link href={`/cases/${cas.attributes.title_unique}`}>
                                    <div key={cas.id} className={styles.card} style={ cardStyleBg }>
                                        <h2>{cas.attributes.title}</h2>
                                        <div className={styles.tags}>
                                            <div className={styles.tag}>Дизайн</div>
                                            <div className={styles.tag}>Разработка сайта</div>
                                        </div>

                                        <div className={styles.overlay} />

                                    </div>
                                </Link>
                            ))
                        }
                    </div>


                </div>
            </section>
        </MainLayout>
    );
};

Cases.getInitialProps = async ctx => {
    try {
        const res = await axios.get('http://localhost:1337/api/cases');
        const cases = res.data;
        return { cases: cases.data };
    } catch (error) {
        return { error };
    }
};


export default Cases;