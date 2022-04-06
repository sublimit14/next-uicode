import {useEffect, useRef} from "react";
import MainLayout from "../../components/MainLayout";
import styles from './Case.module.scss';
import {gsap} from "gsap";
import ToTopButton, { scrollTop,  } from "../../components/ToTopButton/ToTopButton";
const Case = () => {
    const bodyRef = useRef(null);
    const bgImgRef = useRef(null);

    // const scrollToTop = () => {setTimeout(()=>{
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // }, 50)}

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
                <div className={styles.case}  ref={bgImgRef}>

                </div>
                <div className="container">
                    <div
                        ref={bodyRef}
                        className={styles.body}
                    >


                    </div>

                </div>
            </MainLayout>
        </>
    );
};

export default Case;