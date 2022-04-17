import styles from './TextField.module.scss';
import { useField, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask'

const TextField = ({ area, stylesOuter, maxLength, placeholder, label, ...props }) => {

    const [field, meta] = useField(props)

    return (
        <div className={area}>
            <InputMask
                // className={`input-field`}
                autoComplete={'off'}
                type={'text'}
                placeholder={placeholder}
                maxLength={maxLength}
                {...field}
                {...props}
            />
            {
                ErrorMessage &&
                <div className={styles.error}>
                    <ErrorMessage name={field.name} />
                </div>
            }

        </div>
    );
};

export default TextField;