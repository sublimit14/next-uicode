import styles from './BenefitCard.module.scss'

const BenefitCard = ({title, text, svg}) => {
    return (
        <div className={styles.card}>
            {svg}
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default BenefitCard;