import styles from './ProcedureBlock.module.scss';
import ProcedureCard from "./ProcedureCard/ProcedureCard";

const ProcedureBlock = () => {

    const ProcedureCards = [
        {
            id: 1,
            title: `Анализируем ваш\u00A0бизнес`,
            text: 'Выявляем особенности, разбираемся в бизнес-процессах. Анализируем конкурентов и проводим аудит текущего сайта.'
        },
        {
            id: 2,
            title: 'Предлагаем\nидеи',
            text: 'Вместе определяем цели и задачи проекта.\n' +
                'Находим лучшие решения для вашего бизнеса. Формируем индивидуальную стратегию.'
        },
        {
            id: 3,
            title: 'Разрабатываем решения',
            text: 'Над вашим проектом будет работать команда, уже имеющая опыт в вашей сфере, состоящая из дизайнеров, аналитиков и технических специалистов.'
        },
        {
            id: 4,
            title: 'Сопровождаем проект',
            text: 'Сопровождаем и развиваем разработанный нами продукт. Внедряем современные решения, подстваиваемся под изменения в бизнес-логике.'
        },
    ]

    return (
        <div className={'container'}>
            <div className={styles.cards}>
            {
                ProcedureCards.map(card => (
                    <ProcedureCard
                        id = {card.id}
                        title = {card.title}
                        text = {card.text}
                    />
                ))
            }
            </div> {/* cards */}
        </div>
    );
};

export default ProcedureBlock;