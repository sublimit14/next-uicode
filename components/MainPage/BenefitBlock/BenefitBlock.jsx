import styles from './BenefitBlock.module.scss'
import BenefitCard from "./BenefitCard/BenefitCard";
import { benefitCards } from './BenefitCards'

const BenefitBlock = () => {
    return (
        <div className={'container'}>
            <div className={styles.benefit}>
                {
                    benefitCards.map(({title, svg,text})=>(
                        <BenefitCard
                            key={title}
                            svg={svg}
                            title={title}
                            text={text}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default BenefitBlock;