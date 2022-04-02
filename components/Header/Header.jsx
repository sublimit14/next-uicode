import Link from 'next/link'
import Image from 'next/image';
import {useRouter} from 'next/router'
import styles from './Header.module.scss';
import Logo from '../../asset/svg/logo.svg';
import UicodeButton from "../UicodeButton/UicodeButton";

const Header = () => {

    const router = useRouter();

    return (
        <>

            <div className={styles.headerContainer}>

                <div className={styles.inner}>
                    <Image src={Logo} className={styles.Logo} onClick={()=>{router.push('/');}}/>
                    <div className={styles.Links}>
                        <span className={styles.Link}><Link href={'/cases'} ><a>Наши работы</a></Link></span>
                        <span className={styles.Link}><Link href={'/contacts'} className={styles.Link}><a>Контакты</a></Link></span>
                        <UicodeButton
                            label={'Заполнить бриф'}
                            handleClick={()=>{router.push('/brief')}}
                        />
                        {/*<Link href={'/brief'} className={styles.LinkBtn}><a>Запролнить бриф</a></Link>*/}
                    </div>

                </div>

            </div>

        </>
    );
};

export default Header;