import Link from 'next/link'
import { TELEGRAM_LINK, BEHANCE_LINK, WHATSAPP_LINK} from '../../utils/links';
import styles from './Footer.module.scss'


const Footer = () => {

    return (
        <section className={`container ${styles.footer}`}>
           <span>© 2019 — { new Date().getFullYear() }</span>

            <div className={styles.center}>
                {/*<span>Презентация компании</span>*/}
                <span><Link href={'/policy'}><a>Политика в отношении обработки персональных данных</a></Link></span>
            </div>

            <div className={styles.socials}>
                <a href={TELEGRAM_LINK} target={'_blank'} rel={'noreferrer'}>Behance</a>
                <a href={BEHANCE_LINK} target={'_blank'} rel={'noreferrer'}>Telegram</a>
                <a href={WHATSAPP_LINK} target={'_blank'} rel={'noreferrer'}>WhatsApp</a>
            </div>
        </section>
    );
};

export default Footer;