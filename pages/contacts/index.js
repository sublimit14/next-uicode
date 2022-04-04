import MainLayout from "../../components/MainLayout";
import styles from './Contacts.module.scss';
import ContactsForm from "../../components/Forms/ContactsForm/ContactsForm";

const Contacts = (props) => {

    return (
        <MainLayout>
            <section className='container'>
                <div className={styles.Contacts}>
                    <div className={styles.left}>
                        
                        <div className={styles.upper}>
                            <h1>Контактная информация</h1>
                            <div className={styles.buttons}></div>
                        </div>
                        <div className={styles.bottom}>
                            <h2>Социальные сети</h2>
                            <div className={styles.socials}></div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <ContactsForm />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};


export default Contacts;