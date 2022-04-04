import styles from './TextField.module.scss';
import { useField, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask'

const TextField = ({ maxLength, placeholder, label, ...props }) => {

    const [field, meta] = useField(props)
    // console.log('field >>', field)
    // console.log('meta >>', meta)

    return (
        <div>
            <InputMask
                className={`input-field ${styles.input}`}
                autoComplete={'off'}
                type={'text'}
                placeholder={placeholder}
                maxLength={maxLength}
                {...field}
                {...props}
            />
            <div className={styles.error}>
                <ErrorMessage name={field.name} />
            </div>


        </div>
    );
};

export default TextField;