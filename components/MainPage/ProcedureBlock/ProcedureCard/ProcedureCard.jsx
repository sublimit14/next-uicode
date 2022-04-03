import styles from './ProcedureCard.module.scss';

const ProcedureCard = ({ id, title, text }) => {
    return (
        <div className={styles.card}>
            <div className={styles.upper}>
                <div className={styles.id}>{id}</div>
                <h2>{title}</h2>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default ProcedureCard;