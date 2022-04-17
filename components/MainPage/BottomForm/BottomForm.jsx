import {useState} from "react";
import axios from "axios";
import { Formik, Form } from 'formik'
import TextField from '../../Forms/TextField/TextField'
import {sleep, validate_2} from "../../Forms/validate";
import TextArea from "../../Forms/TextArea/TextArea";
import styles from './BottomForm.module.scss';

const BottomForm = () => {
    const [check, setCheck] = useState(false);

    const onSubmit = async (values) => {
        await sleep(500);
        // alert(JSON.stringify(values, null, 2));
        axios({
            method: "post",
            url: "https://admin.uicode.ru/index.php",
            data: {
                name: values.name,
                phone: values.phone,
                telegram: values.telegram,
                description: values.description
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });
    }
    return (
        <div className={'container'}>
            <div className={styles.bottomForm}>
                <div className={styles.upper}>
                    <h2>Запустить проект вместе с нами</h2>
                    <p>Наш менеджер ответит на все ваши вопросы и отправит индивидуальное коммерческое предложение.</p>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        telegram: '',
                        description: ''
                    }}
                    validationSchema={validate_2}
                    onSubmit={onSubmit}
                >
                {
                    (formik)=>(
                        <Form className={styles.form}>

                            <TextField
                                area = {'name-area'}
                                name={'name'}
                                type={'text'}
                                placeholder={'Ваше имя или название компании'}
                                // maxLength={35}
                                className={`input-field ${styles.name}`}
                            />

                            {!check &&
                                <TextField
                                    area = {'phone-area'}
                                    name={'phone'}
                                    type={'text'}
                                    placeholder={'Контактный телефон'}
                                    // maxLength={35}
                                    className={`input-field ${styles.phone}`}
                                />
                            }
                            {check &&
                                <TextField
                                    area = {'phone-area'}
                                    name={'telegram'}
                                    type={'text'}
                                    placeholder={'Telegram'}
                                    // maxLength={35}
                                    className={`input-field ${styles.phone}`}
                                />
                            }
                            <label className={`${styles.checkbox}`}>
                                <input
                                    type="checkbox"
                                    name={'confirmation'}
                                    onChange={() => {
                                        setCheck(!check)
                                    }}
                                />
                                Предпочитаю общаться через месенджер
                            </label>

                            <TextArea
                                className={`input-field ${styles.description}`}
                                name={'description'}
                                maxLength={460}
                                placeholder={'Расскажите, какой проект вам нужен, опишите детали или задайте вопрос'}
                            />

                            <button type={'submit'} className={`submit-btn ${styles.btn}`}>
                                Получить коммерческое предложение
                            </button>

                        </Form>
                    )
                }
                </Formik>


                {/*<form className={styles.form}>*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name={'name'}*/}
                {/*        className={`${styles.input} ${styles.name}`}*/}
                {/*        placeholder={'Ваше имя или название компании'}*/}
                {/*    />*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name={'phone'}*/}
                {/*        className={`${styles.input} ${styles.phone}`}*/}
                {/*        placeholder={'Контактный телефон'}*/}
                {/*    />*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        name={'confirmation'}*/}
                {/*        className={`${styles.checkbox}`}*/}
                {/*    />*/}
                {/*    <textarea*/}
                {/*        name={'description'}*/}
                {/*        className={`${styles.input} ${styles.description}`}*/}
                {/*        placeholder={'Расскажите, какой проект вам нужен, опишите детали или задайте вопрос'}*/}
                {/*    />*/}
                {/*    <input*/}
                {/*        type="submit"*/}
                {/*        value="Получить коммерческое предложение"*/}
                {/*        className={`${styles.submit}`}*/}
                {/*    />*/}
                {/*</form>*/}
            </div>
        </div>
    );
};

export default BottomForm;