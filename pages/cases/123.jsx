//https://strapi.io/blog/creating-strapi-dynamic-zone-in-nuxtjs-app

import styles from './Case.module.scss';

const id = ({ caseData }) => {
    return (
        <div className={styles.case}>
            <div className="container">
                <h1>Кейс: {caseData.id} </h1>
                <h1>Title: {caseData.attributes.title} </h1>
            </div>

        </div>
    );
};



export default id;

export async function getServerSideProps({params}) {
    // console.log(params)
    const res = await fetch(`http://localhost:1337/api/cases/${params.id}`)
    const json = await res.json()
    console.log(json.data)
    return {
        props: {
            caseData: json.data
        },
    }
}