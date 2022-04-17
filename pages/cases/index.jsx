import {useState} from "react";
import MainLayout from "../../components/MainLayout";
import styles from './Cases.module.scss';
import Link from 'next/link';
import Image from 'next/image'

const Cases = ({cases}) => {

    const [filteredCases, setFilteredCases] = useState(cases);

    return (
        <MainLayout>
            <section className="container">

                <div className={styles.cases}>
                    <h1>Наши кейсы</h1>

                    <div className={styles.wrapper}>

                        {
                            filteredCases?.map((cas) => (
                                <Link key={cas.id} href={`/cases/${cas.attributes.title_unique}`}>
                                    <div  className={styles.card}>
                                        <h2>{cas.attributes.title}</h2>
                                        <div className={styles.tags}>
                                            {
                                                cas.attributes.categories.data.map(tag => (
                                                    <div className={styles.tag}>{tag.attributes.category}</div>
                                                ))
                                            }
                                        </div>

                                        <div className={styles.overlay}/>
                                        <Image
                                            className={styles.img}
                                            width="440"
                                            height="308"
                                            objectFit={'cover'}
                                            layout='fill'
                                            src={`http://localhost:1337${cas.attributes.preview_img.data.attributes.url}`}
                                        />
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

Cases.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:1337/api/cases?populate=*`)
    const json = await res.json()
    return {
        cases: json.data
    }
}
export default Cases;