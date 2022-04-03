import MainLayout from "../../components/MainLayout";
import axios from 'axios';
import {useEffect} from "react";
import {raw} from "next/dist/build/webpack/loaders/next-middleware-wasm-loader";



const Index = () => {

    useEffect(()=>{
        axios({
            method: 'post',
            url: 'http://localhost:1337/api/auth/local/',
            data: {
                identifier: 'sublimmmit',
                password: 'Bagration6915831'
            }
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