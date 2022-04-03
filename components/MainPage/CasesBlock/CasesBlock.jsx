import styles from './CasesBlock.module.scss';

const CasesBlock = () => {
    return (
        <div className={'container'}>
            <div className={styles.casesBlock}>
                <div className={styles.upper}>
                    <h2>Наши кейсы</h2>
                    <div className={styles.selectors}>
                        selectors
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={`${styles.case} ${styles.case1}`}>
                        case #1
                    </div>
                    <div className={`${styles.case} ${styles.case2}`}>
                        case #1
                    </div>
                    <div className={styles.case}>
                        case #3
                    </div>
                    <div className={styles.case}>
                        case #4
                    </div>
                    <div className={styles.case}>
                        case #5
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CasesBlock;