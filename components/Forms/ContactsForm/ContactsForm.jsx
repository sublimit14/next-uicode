import styles from './ContactsForm.module.scss';
import { Formik, Form } from 'formik'
import TextField from '../TextField/TextField'
import axios from "axios";
import { validate, sleep } from '../validate';

const ContactsForm = () => {
    const onSubmit = async (values) => {
        await sleep(500);
        // alert(JSON.stringify(values, null, 2));
        axios({
            method: "post",
            url: "https://admin.uicode.ru/index.php",
            data: {
                name: values.name,
                phone: values.phone
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (response) {
                // console.log(response);
            });
    }
    return (
        <Formik
            initialValues={{
                name: '',
                phone: ''
            }}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
            {
                (formik)=> (
                    <div className={styles.ContactsForm}>
                        <h2>Связаться с нами</h2>
                        <p>Мы ценим ваше и своё время и готовы обсудить любые вопросы по телефону или при личной встрече.</p>
                        <Form className={styles.Fields}>
                            <TextField
                                name={'name'}
                                type={'text'}
                                placeholder={'Ваше имя'}
                                maxLength={35}
                                className={`input-field ${styles.input}`}
                            />
                            <TextField
                                mask="+7(999)999-99-99"
                                name={'phone'}
                                type={'text'}
                                placeholder={'Контактный телефон'}
                                className={`input-field ${styles.input}`}
                            />
                            <button type={'submit'} className={`submit-btn ${styles.btn}`}>
                                Отправить
                            </button>
                            {/*{ console.log(formik.values) }*/}
                        </Form>
                    </div>
                )
            }
        </Formik>
    );
};

export default ContactsForm;