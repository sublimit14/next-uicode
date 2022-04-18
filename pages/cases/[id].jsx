import {useEffect, useRef} from "react";
import MainLayout from "../../components/MainLayout";
import styles from './Case.module.scss';
import {gsap} from "gsap";
import ToTopButton, {scrollTop,} from "../../components/ToTopButton/ToTopButton";
import Image from "next/image";

const Case = ({caseData}) => {
    // const IMG_PATH = caseData.attributes.bg_img.data.attributes.url
    const bodyRef = useRef();
    const bgImgRef = useRef();

    const timeLine = gsap.timeline({
        defaults: {
            duration: .3,
        }
    })

    useEffect(() => {
        timeLine
            .from(bgImgRef.current, {
                opacity: 0,
                delay: .3,
                y: -100,
            })
            .from(bodyRef.current, {
                delay: .3,
                y: 700,
                ease: "none"
            })
        scrollTop();
    })
    return (
        <>
            <MainLayout>
                <ToTopButton text={'Наверх'}/>
                <div className={styles.case} ref={bgImgRef}>
                    {caseData.attributes.bg_img.data &&
                        <Image
                            objectFit={'cover'}
                            layout='fill'
                            src={`http://localhost:1337${caseData.attributes.bg_img.data.attributes.url}`}
                            priority
                        />
                    }
                </div>
                <div className="container">
                    <div
                        ref={bodyRef}
                        className={styles.body}
                    >

                        <div className="container">
                            <h1>Кейс: {caseData.id} </h1>
                            <h1>Title: {caseData.attributes.title} </h1>
                        </div>


                    </div>

                </div>
            </MainLayout>
        </>
    );
};

export default Case;

export async function getServerSideProps({params}) {
    // console.log(params)
    const res = await fetch(`http://localhost:1337/api/cases/${params.id}?populate=*`)
    const json = await res.json()
    console.log(json.data)
    return {
        props: {
            caseData: json.data
        },
    }
}