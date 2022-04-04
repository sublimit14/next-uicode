import MainLayout from "../../components/MainLayout";
import axios from 'axios';
import {useEffect} from "react";


const Index = () => {

    useEffect(()=>{
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
        }).then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        });
    },[])


    return (
        <>
            <MainLayout>
                <div className="container">
                    <h1>Test page</h1>
                    <pre>
                        213
                    </pre>
                </div>
            </MainLayout>
        </>
    );
};

export default Index;