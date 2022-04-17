import styles from './PartnersBlock.module.scss';
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import { partners } from "./partners";

const PartnersBlock = () => {

    return (
        <div>
            <div className={styles.partnersBlock}>
                {/*<div className={'container'}>*/}
                <Marquee
                    // pauseOnHover="true"
                    speed={30}
                    gradient="true"
                    gradientColor={[235, 238, 245]}
                    gradientWidth={200}
                    loop={0}
                >
                    <div className={styles.partners}>
                        {
                            partners.map((partner) => (
                                <Image
                                    key={partner.desc}
                                    src={partner.path}
                                    alt={partner.desc}
                                    objectFit={'contain'}
                                />
                            ))
                        }
                    </div>
                </Marquee>
                {/*</div>*/}
            </div>
        </div>
    );
};

export default PartnersBlock;