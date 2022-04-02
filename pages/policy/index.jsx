import {Link, animateScroll as scroll} from "react-scroll";

import MainLayout from "../../components/MainLayout";
import {H2, H4, Par, A, A2} from "../../components/textComponents/Text/Text";
import {MAIL_LINK} from "../../utils/links";
import styles from './Policy.module.scss';

const Policy = () => {

    const headers = [
        {
            text: '1. Общие положения',
            section: 'sec_1',
            offset: -400
        },
        {
            text: '2. Основные понятия, используемые в Политике',
            section: 'sec_2',
            offset: -94
        },
        {
            text: '3. Оператор может обрабатывать следующие персональные данные Пользователя',
            section: 'sec_3',
            offset: -94
        },
        {
            text: '4. Цели обработки персональных данных',
            section: 'sec_4',
            offset: -94
        },
        {
            text: '5. Правовые основания обработки персональных данных',
            section: 'sec_5',
            offset: -94
        },
        {
            text: '6. Порядок сбора, хранения, передачи и других видов обработки персональных данных',
            section: 'sec_6',
            offset: -94
        },
        {
            text: '7. Трансграничная передача персональных данных',
            section: 'sec_7',
            offset: -94
        },
        {
            text: '8. Заключительные положения',
            section: 'sec_8',
            offset: -94
        }
    ]

    return (
        <MainLayout>
            <section className={`container page ${styles.policy}`}>
                <div className={styles.left}>
                    <div className={styles.sticky}>

                        {
                            headers.map((el, index) => (

                                    <Link className={styles.span}
                                        activeClass="active"
                                        to={`sec_${index + 1}`}
                                        spy={true}
                                        smooth={true}
                                        offset={el.offset}
                                        duration={500}
                                    >
                                        {el.text}
                                    </Link>

                            ))
                        }

                    </div>
                </div>

                <div className={styles.right}>

                    <h1 className={styles.h1}>Политика в отношении обработки персональных данных</h1>

                    <section id={'sec_1'} className={styles.section}>
                        <H4>1. Общие положения</H4>
                        <Par>Настоящая политика обработки персональных данных составлена в соответствии с требованиями
                            Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок
                            обработки
                            персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые
                            Долгополов Богдан Сергеевич (далее – Оператор).</Par>
                        <Par>1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности
                            соблюдение
                            прав и свобод человека и гражданина при обработке его персональных данных, в том числе
                            защиты
                            прав
                            на неприкосновенность частной жизни, личную и семейную тайну.</Par>
                        <Par>1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее –
                            Политика)
                            применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта <A
                                href={'/'} text={'https://uicode.ru'}/>.</Par>
                    </section>

                    <section id={'sec_2'} className={styles.section}>
                        <H4>2. Основные понятия, используемые в Политике</H4>
                        <Par>2.1. Автоматизированная обработка персональных данных – обработка персональных данных с
                            помощью
                            средств вычислительной техники;</Par>
                        <Par>2.2. Блокирование персональных данных – временное прекращение обработки персональных данных
                            (за
                            исключением случаев, если обработка необходима для уточнения персональных данных);</Par>
                        <Par>2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для
                            ЭВМ
                            и
                            баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу <A href={'/'}
                                                                                                            text={'https://uicode.ru'}/>;</Par>
                        <Par>2.4. Информационная система персональных данных — совокупность содержащихся в базах данных
                            персональных данных, и обеспечивающих их обработку информационных технологий и технических
                            средств;</Par>
                        <Par>2.5. Обезличивание персональных данных — действия, в результате которых невозможно
                            определить
                            без
                            использования дополнительной информации принадлежность персональных данных конкретному
                            Пользователю
                            или иному субъекту персональных данных;</Par>
                        <Par>2.6. Обработка персональных данных – любое действие (операция) или совокупность действий
                            (операций), совершаемых с использованием средств автоматизации или без использования таких
                            средств с
                            персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение
                            (обновление, изменение), извлечение, использование, передачу (распространение,
                            предоставление,
                            доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;</Par>
                        <Par>2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое
                            лицо,
                            самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку
                            персональных данных, а также определяющие цели обработки персональных данных, состав
                            персональных
                            данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;
                        </Par>
                        <Par>2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному
                            или
                            определяемому Пользователю веб-сайта <A href={'/'} text={'https://uicode.ru'}/>;</Par>
                        <Par>2.9. Пользователь – любой посетитель веб-сайта <A href={'/'}
                                                                               text={'https://uicode.ru'}/>;</Par>
                        <Par>2.10. Предоставление персональных данных – действия, направленные на раскрытие персональных
                            данных
                            определенному лицу или определенному кругу лиц;</Par>
                        <Par>2.11. Распространение персональных данных – любые действия, направленные на раскрытие
                            персональных
                            данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с
                            персональными
                            данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах
                            массовой информации, размещение в информационно-телекоммуникационных сетях или
                            предоставление
                            доступа к персональным данным каким-либо иным способом;
                        </Par>
                        <Par>2.12. Трансграничная передача персональных данных – передача персональных данных на
                            территорию
                            иностранного государства органу власти иностранного государства, иностранному физическому
                            или
                            иностранному юридическому лицу;
                        </Par>
                        <Par>2.13. Уничтожение персональных данных – любые действия, в результате которых персональные
                            данные
                            уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания
                            персональных
                            данных
                            в информационной системе персональных данных и (или) уничтожаются материальные носители
                            персональных
                            данных.</Par>
                    </section>
                    <section id="sec_3" className={styles.section}>
                        <H4>3. Оператор может обрабатывать следующие персональные данные Пользователя</H4>
                        <Par>3.1. Фамилия, имя, отчество;</Par>
                        <Par>3.2. Электронный адрес;</Par>
                        <Par>3.3. Номера телефонов;</Par>
                        <Par>3.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч.
                            файлов
                            «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и
                            других).</Par>
                        <Par>3.5. Вышеперечисленные данные далее по тексту Политики объединены общим понятием
                            Персональные
                            данные.</Par>
                    </section>

                    <section id={'sec_4'} className={styles.section}>
                        <H4>4. Цели обработки персональных данных</H4>
                        <Par>4.1. Цель обработки персональных данных Пользователя — информирование Пользователя
                            посредством
                            отправки электронных писем.</Par>
                        <Par>4.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и
                            услугах,
                            специальных предложениях и различных событиях. Пользователь всегда может отказаться от
                            получения
                            информационных сообщений, направив Оператору письмо на адрес электронной почты <A2
                                href={MAIL_LINK}
                                text={'hello@uicode.ru'}/> с
                            пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных
                            предложениях».</Par>
                        <Par>4.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики,
                            служат
                            для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его
                            содержания.</Par>
                    </section>

                    <section id={'sec_5'} className={styles.section}>
                        <H4>5. Правовые основания обработки персональных данных</H4>

                        <Par>5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения
                            и/или
                            отправки Пользователем самостоятельно через специальные формы, расположенные на сайте <A
                                href={'/'}
                                text={'https://uicode.ru'}/>.
                            Заполняя соответствующие формы и/или отправляя свои персональные данные
                            Оператору, Пользователь выражает свое согласие с данной Политикой.</Par>
                        <Par>5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено
                            в
                            настройках браузера Пользователя (включено сохранение файлов «cookie» и использование
                            технологии
                            JavaScript).</Par>
                    </section>

                    <section id={'sec_6'} className={styles.section}>
                        <H4>6. Порядок сбора, хранения, передачи и других видов обработки персональных данных</H4>

                        <Par>Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем
                            реализации правовых, организационных и технических мер, необходимых для выполнения в полном
                            объеме
                            требований действующего законодательства в области защиты персональных данных.</Par>
                        <Par>6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры,
                            исключающие доступ к персональным данным неуполномоченных лиц.</Par>
                        <Par>6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы
                            третьим
                            лицам, за исключением случаев, связанных с исполнением действующего законодательства.</Par>
                        <Par>6.3. В случае выявления неточностей в персональных данных, Пользователь может
                            актуализировать
                            их
                            самостоятельно, путем направления Оператору уведомление на адрес электронной почты
                            Оператора <A2
                                href={MAIL_LINK} text={'hello@uicode.ru'}/> с пометкой «Актуализация персональных
                            данных».</Par>
                        <Par>6.4. Срок обработки персональных данных является неограниченным. Пользователь может в любой
                            момент
                            отозвать свое согласие на обработку персональных данных, направив Оператору уведомление
                            посредством
                            электронной почты на электронный адрес Оператора <A2 href={MAIL_LINK}
                                                                                 text={'hello@uicode.ru'}/> с
                            пометкой «Отзыв согласия
                            на обработку персональных данных».</Par>
                    </section>

                    <section id={'sec_7'} className={styles.section}>
                        <H4>7. Трансграничная передача персональных данных</H4>

                        <Par>7.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан
                            убедиться
                            в том, что иностранным государством, на территорию которого предполагается осуществлять
                            передачу
                            персональных данных, обеспечивается надежная защита прав субъектов персональных
                            данных.</Par>
                        <Par>7.2. Трансграничная передача персональных данных на территории иностранных государств, не
                            отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия
                            в
                            письменной форме субъекта персональных данных на трансграничную передачу его персональных
                            данных
                            и/или исполнения договора, стороной которого является субъект персональных данных.</Par>
                    </section>

                    <section id={'sec_8'} className={styles.section}>
                        <H4>8. Заключительные положения</H4>

                        <Par>8.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся
                            обработки
                            его персональных данных, обратившись к Оператору с помощью электронной почты <A2
                                href={MAIL_LINK}
                                text={'hello@uicode.ru'}/>.</Par>
                        <Par>8.2. В данном документе будут отражены любые изменения политики обработки персональных
                            данных
                            Оператором. Политика действует бессрочно до замены ее новой версией.</Par>
                        <Par>8.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по
                            адресу <A2
                                href={''} text={'https://uicode.ru/policy'}/>.</Par>
                        <div className={styles.bottomMargin}></div>
                    </section>
                </div>
            </section>
        </MainLayout>
    );
};

export default Policy;