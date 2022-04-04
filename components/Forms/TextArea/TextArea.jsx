import styles from './TextArea.module.scss';
import { useField, ErrorMessage } from 'formik';

const TextArea = ({ maxLength, placeholder, label, ...props }) => {

    const [field, meta] = useField(props)
    return (
        <div>
            <textarea
                autoComplete={'off'}
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

export default TextArea;