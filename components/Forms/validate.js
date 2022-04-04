import * as Yup from "yup";
import {phoneRegExp, nameRegExp} from '../../utils/regExp';

export const validate = Yup.object({
    name: Yup.string()
        .matches(nameRegExp, 'Неверный ввод')
        .min(2, 'Слишком короткое имя')
        .required('Пожалуйста, заполните поле'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Неверный номер телефона')
        .required('Пожалуйста, заполните поле'),
})

export const validate_2 = Yup.object({
    name: Yup.string()
        .matches(nameRegExp, 'Неверный ввод')
        .min(2, 'Слишком короткое имя')
        .required('Пожалуйста, заполните поле'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Неверный номер телефона')
        .required('Пожалуйста, заполните поле'),
    telegram: Yup.string()
        .required('Пожалуйста, заполните поле'),
    description: Yup.string()
        .required(false,'Пожалуйста, заполните поле'),
})

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));