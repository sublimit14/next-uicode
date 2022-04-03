import {useState} from "react";
import {useFormik, useField, ErrorMessage} from "formik";
import * as Yup from 'yup';
import styles from './BottomForm.module.scss';

const BottomForm = () => {

    const [check, setCheck] = useState(false);
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const initialValues = {
        name: '',
        phone: '',
        telegram: '',
        description: '',
    };

    const onSubmit = async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(100, 'Too Long!')
            .required('Required'),
        phone: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        telegram: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')
    });
    //TODO ASYNC VALIDATION from https://formik.org/docs/guides/validation
    const formik = useFormik({onSubmit, initialValues, validationSchema});

    return (
        <div className={'container'}>
            <div className={styles.bottomForm}>
                <div className={styles.upper}>
                    <h2>Запустить проект вместе с нами</h2>
                    <p>Наш менеджер ответит на все ваши вопросы и отправит индивидуальное коммерческое предложение.</p>
                </div>

                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <input
                        name="name"
                        type="text"
                        placeholder={'Ваше имя или название компании'}
                        className={`${styles.input} ${styles.name}`}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {!check &&
                        <input
                            type="text"
                            name={'phone'}
                            className={`${styles.input} ${styles.phone}`}
                            placeholder={'Контактный телефон'}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                    }
                    {check &&
                        <input
                            type="text"
                            name={'telegram'}
                            className={`${styles.input} ${styles.phone}`}
                            placeholder={'Telegram'}
                            onChange={formik.handleChange}
                            value={formik.values.telegram}
                        />
                    }
                    <label className={`${styles.checkbox}`}>
                        <input
                            type="checkbox"
                            name={'confirmation'}
                            onChange={() => {
                                setCheck(!check)
                            }}
                        />Предпочитаю общаться через месенджер</label>
                    <textarea
                        name={'description'}
                        maxLength={460}
                        className={`${styles.input} ${styles.description}`}
                        placeholder={'Расскажите, какой проект вам нужен, опишите детали или задайте вопрос'}
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                    <button
                        type="submit"
                        className={`${styles.submit}`}
                    >Получить коммерческое предложение
                    </button>
                </form>

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