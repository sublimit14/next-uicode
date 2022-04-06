import {useEffect, useRef} from "react";
import styles from './Hero.module.scss';
import Image from 'next/image';
import bgImage from '../../../public/hero_bg.jpg'
import { gsap } from "gsap";
import {scrollTop} from "../../ToTopButton/ToTopButton";

const Hero = () => {

    const h1Ref = useRef(null);
    const textRef = useRef(null);

    const timeLine = gsap.timeline({
        defaults: {
            duration: .6,
        }
    })

    useEffect(() => {
        timeLine
            .from(h1Ref.current, {
                opacity: 0,
                delay: .1,
                y: 20,
            })
            .from(textRef.current, {
                opacity: 0,
                delay: .4,
                y: 20,
            })
    }, [])

    return (

        <div className={styles.hero}>

            <div className={`container`}>

                <div className={styles.content}>

                    <div className={styles.upper}>
                        <h1 ref={h1Ref}>Разработка сервисов, <br/>веб-приложений и&nbsp;eComerce</h1>
                        <p ref={textRef}>Создаем сайты&nbsp;и приложения&nbsp;с нуля. Развиваем&nbsp;уже существующие. <br/>Переводим задачи бизнеса в
                            интерфейсы и&nbsp;API.</p>
                    </div>

                    <div className={styles.bottom}>
                        <span>Смотреть портфолио</span>
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.7972 14.7139L19 21.5111L12.2027 14.7139L9.96387 16.9527L19 25.9888L28.036 16.9527L25.7972 14.7139Z"
                                fill="white"/>
                        </svg>
                        <span>Заполнить бриф →</span>
                    </div>

                </div>
            </div>

            <div className={styles.overlay}>
                <Image
                    layout="fill"
                    objectFit={"cover"}
                    quality={"90"}
                    alt="Background image"
                    src={bgImage}
                    placeholder={'blur'}

                />
            </div>
        </div>
    );
};

export default Hero;