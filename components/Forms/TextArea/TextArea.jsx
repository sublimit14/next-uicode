import styles from './TextArea.module.scss';
import { useField, ErrorMessage } from 'formik';

const TextArea = ({ maxLength, placeholder, label, ...props }) => {

    const [field, meta] = useField(props)
    return (
        <>
            <textarea
                autoComplete={'off'}
                placeholder={placeholder}
                maxLength={maxLength}
                {...field}
                {...props}
            />
            {/*{ ErrorMessage &&*/}
            {/*    <div className={styles.error}>*/}
            {/*        <ErrorMessage name={field.name} />*/}
            {/*    </div>*/}
            {/*}*/}

        </>
    );
};

export default TextArea;