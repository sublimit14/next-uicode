import React, {useEffect, useState} from 'react';
import Head from "next/head";
import MainLayout from "../../components/MainLayout";
import HeadContent from "../../components/HeadContent/HeadContent";
import Cases from "../cases";

const Contacts = (props) => {
    const TYPE_USER = 'users'
    const TYPE_COMMENTS = 'comments'
    const TYPE_TODOS = 'todos'

    const [type, setType] = useState(TYPE_USER)
    const [data, setData] = useState('')

    useEffect(()=>{
        console.log('Type is: ',type)

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])


    return (
        <MainLayout>
            {/*<Head>*/}
            {/*    <HeadContent*/}
            {/*        title={'Contact information | uicode.ru 🤔'}*/}
            {/*        description={'uicode description'}*/}
            {/*        keywords={'uicode keywords'}*/}
            {/*    />*/}
            {/*</Head>*/}

            <section className='container'>
                <h1>TIPE IS: {type}</h1>
                <hr/>
                <button onClick={() => {setType(TYPE_USER)}} >TYPE_USER</button>
                <hr/>
                <button onClick={() => {setType(TYPE_COMMENTS)}} >TYPE_COMMENTS</button>
                <hr/>
                <button onClick={() => {setType(TYPE_TODOS)}} >TYPE_TODOS</button>
                <hr/>
                <h2>Data</h2>

                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </section>

        </MainLayout>
    );
};


export default Contacts;