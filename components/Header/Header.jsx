import Link from 'next/link'
import Image from 'next/image';
import {useRouter} from 'next/router'

import UicodeButton from "../UicodeButton/UicodeButton";

import styles from './Header.module.scss';
import Logo from '../../asset/svg/logo.svg';
import {BEHANCE_LINK, TELEGRAM_LINK} from "../../utils/links";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Header = () => {

    const router = useRouter();

    return (
        <>

            <div className={styles.headerContainer}>

                <div className={styles.inner}>
                    <Image src={Logo} className={styles.Logo} onClick={ ()=>{router.push('/');} }/>
                    <div className={styles.Links}>
                        {/*<span className={styles.Link}><Link href={'/cases'} ><a>Наши работы</a></Link></span>*/}
                        {/*<span className={styles.Link}><Link href={'/contacts'} className={styles.Link}><a>Контакты</a></Link></span>*/}

                        <span className={styles.Link}><Link href={'/cases'} ><a>Наши работы</a></Link></span>
                        <span className={styles.Link}><Link href={'/contacts'} className={styles.Link}><a>Контакты</a></Link></span>
                        <span className={styles.Link}><Link href={'/test'} className={styles.Link}><a>Тестовая</a></Link></span>

                    </div>
                    <div className={styles.right}>
                        <UicodeButton
                            label={'Заполнить бриф'}
                            handleClick={()=>{router.push('/brief')}}
                        />
                        <div className={styles.Socials}>
                            <a href={BEHANCE_LINK} target={'_blank'}>
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1625_22283)">
                                    <path d="M9.66667 11.213C10.9917 10.575 11.6833 9.6095 11.6833 8.10672C11.6833 5.14315 9.49167 4.42114 6.9625 4.42114H0V19.2978H7.15833C9.84167 19.2978 12.3625 18.0007 12.3625 14.9784C12.3625 13.1104 11.4833 11.7293 9.66667 11.213V11.213ZM3.24583 6.96075H6.29167C7.4625 6.96075 8.51667 7.29237 8.51667 8.66082C8.51667 9.92433 7.69583 10.4322 6.5375 10.4322H3.24583V6.96075V6.96075ZM6.71667 16.7708H3.24583V12.6738H6.78333C8.2125 12.6738 9.11667 13.2741 9.11667 14.7979C9.11667 16.3006 8.0375 16.7708 6.71667 16.7708V16.7708ZM21.6542 6.66691H15.6667V5.20191H21.6542V6.66691V6.66691ZM24 14.0675C24 10.8814 22.15 8.22426 18.7958 8.22426C15.5375 8.22426 13.325 10.6925 13.325 13.9247C13.325 17.2787 15.4208 19.579 18.7958 19.579C21.35 19.579 23.0042 18.4205 23.8 15.9564H21.2083C20.9292 16.8757 19.7792 17.3627 18.8875 17.3627C17.1667 17.3627 16.2625 16.3468 16.2625 14.6216H23.975C23.9875 14.4453 24 14.2564 24 14.0675ZM16.2667 12.7578C16.3625 11.3432 17.2958 10.4574 18.7042 10.4574C20.1792 10.4574 20.9208 11.3306 21.0458 12.7578H16.2667Z"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1625_22283">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            </a>
                            <a href={TELEGRAM_LINK} target={'_blank'}>
                             <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9316 4.3661L20.3099 20.2066C20.0366 21.3246 19.3241 21.6028 18.3115 21.0761L12.7931 17.3048L10.1304 19.6799C9.83572 19.9532 9.58926 20.1818 9.02136 20.1818L9.41782 14.9695L19.6455 6.39834C20.0902 6.03065 19.5491 5.82693 18.9544 6.19462L6.3104 13.5782L0.86706 11.9982C-0.316975 11.6553 -0.338405 10.9001 1.11351 10.3734L22.4047 2.76615C23.3905 2.42331 24.2531 2.96987 23.9316 4.3661V4.3661Z"/>
                            </svg>
                            </a>
                        </div>
                    </div> {/* right */}
                        {/*<Link href={'/brief'} className={styles.LinkBtn}><a>Запролнить бриф</a></Link>*/}


                </div> {/* inner */}

            </div>

        </>
    );
};

export default Header;