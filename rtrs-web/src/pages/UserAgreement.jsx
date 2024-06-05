import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/App.css'

function UserAgreement(){
    return(
        <div className="page agreement-page">
            <Header/>

            <div className='agreement__content'>
                <Link className='toLoginBtn' to='/login'>Войти в кабинет</Link>

                <hr/>

                <span className='agreement__title'>Пользовательское соглашение</span>
                <ul className='agreement__text'>
                    <li>
                        <b>Предмет пользовательского соглашения</b><br/>
                        <ol>
                            <li>Предметом настоящего Пользовательского соглашения («ПС») являются отношения между Федеральным государственным унитарным предприятием «Российская телевизионная и радиовещательная сеть», далее «РТРС», являющегося правообладателем программного продукта «Кабинет телезрителя», расположенного в сети Интернет по адресу https://online.rtrn.ru/ (далее «Кабинет»), и Вами (физическим лицом — пользователем сети Интернет), далее «Пользователь», по поводу использования Кабинета. Используя Кабинет, Пользователь соглашается соблюдать условия, описанные в настоящем Пользовательском соглашении.</li>
                            <li>Пользовательское соглашение регулирует порядок использования Кабинета. Положения настоящего Пользовательского соглашения являются обязательными для всех Пользователей, начавших использовать Кабинет.</li>
                            <li>Пользователь может ознакомиться с действующей версией ПС, перейдя по следующей ссылке: https://online.rtrn.ru/agreement.</li>
                            <li>При каждом доступе и/или фактическом использовании Кабинета, Пользователь соглашается с условиями настоящего Пользовательского Соглашения в редакции, которая действовала на момент фактического использования Кабинета.</li>
                        </ol>
                    </li>
                    <li>
                        <b>Общие условия</b><br/>
                        <ol>
                            <li>РТРС предоставляет доступ к Кабинету посредством персонального компьютера, а также мобильных и сходных устройств.</li>
                            <li>Кабинет предоставляется Пользователям «как есть». РТРС не принимает на себя ответственности за задержку, удаление, недоставку или невозможность загрузить любые данные Пользователя, в том числе настройки Пользователя, а также не несет ответственности за соответствие Кабинета целям Пользователя. Все вопросы предоставления прав доступа к сети Интернет, покупки и наладки для этого соответствующего оборудования и программных продуктов решаются Пользователем самостоятельно и не подпадают под действие настоящего Пользовательского соглашения.</li>
                            <li>Кабинет — это служба, обеспечивающая создание и направление в РТРС обращений Пользователей с помощью веб-интерфейса, расположенного по адресу: https://online.rtrn.ru/ (с возможностью хранения обращений Пользователей).</li>
                            <li>Пользователь соглашается с тем, что РТРС может осуществлять обработку предоставленных Пользователями данных и собранной обезличенной статистической информации о Пользователях в соответствии с порядком, целями и условиями политики обработки и защиты персональных данных РТРС, актуальная версия которой размещена по адресу https://cdn.rtrs.ru/upload/iblock/d06/okxnqr7wuz773at9xia6uw5gpf8rx4zc/80_Politika-obrabotki-personalnykh-dannykh-v-RTRS.pdf.</li>
                            <li>Пользователь соглашается на получение посредством Кабинета e-mail и иных видов рассылок информационного содержания, осуществляемых только в целях выполнения настоящего Соглашения.</li>
                            <li>РТРС вправе устанавливать любые дополнительные требования и ограничения применительно к регистрации в Кабинете и его использованию.</li>
                            <li>В целях использования Кабинета как совокупности программ для ЭВМ РТРС предоставляет Пользователю (лицензиату) на условиях простой (неисключительной) безвозмездной лицензии право использования бесплатных функциональных (программных) возможностей Кабинета.</li>
                        </ol>
                    </li>
                    <li>
                        <b>Вступление пользовательского соглашения в силу</b><br/>
                        <ol>
                            <li>Настоящее Пользовательское соглашение, а также изменения и дополнения к настоящему Пользовательскому соглашению, вступают в силу с момента их опубликования по адресу https://online.rtrn.ru/agreement. Согласие Пользователя с условиями Пользовательского соглашения выражается в форме нажатия Пользователем кнопки «ЗАРЕГИСТРИРОВАТЬСЯ», либо путем фактического использования Кабинета.</li>
                            <li>Пользователь вправе отказаться от принятия изменений и дополнений ПС, производимых РТРС, что означает отказ Пользователя от использования Кабинета.</li>
                        </ol>
                    </li>
                    <li>
                        <b>Обязательства Пользователя по регистрации Кабинета</b><br/>
                        <ol>
                            <li>Для использования Кабинета Пользователь должен пройти следующую процедуру: ознакомиться c актуальной версией настоящего ПС, опубликованному по адресу https://online.rtrn.ru/agreement</li>
                            <li>Доступ к индивидуальному Кабинету может быть восстановлен Пользователю только в случае точного, верного и полного указания информации, указанной при регистрации учётной записи. Если Пользователь пренебрег точным, верным и полным указанием регистрационной информации, РТРС не сможет при обращении восстановить пароль.</li>
                        </ol>
                    </li>
                    <li>
                        <b>Предмет пользовательского соглашения</b><br/>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </li>
                    <li>
                        <b>Некоммерческое использование</b><br/>
                        <ol>
                            <li>Пользователь соглашается не воспроизводить, не повторять и не копировать, не продавать и не перепродавать, а также не использовать в каких-либо коммерческих целях любые объекты интеллектуальной собственности, размещенные в Кабинете, кроме тех случаев, когда такое разрешение дано Пользователю со стороны РТРС.</li>
                        </ol>
                    </li>
                    <li>
                        <b>Изменения и дополнения к ПС</b><br/>
                        <ol>
                            <li>Настоящее Пользовательское соглашение могут быть изменены РТРС без какого-либо предварительного уведомления. Любые изменения в Пользовательское соглашение, внесенные РТРС в одностороннем порядке, вступают в силу со дня следующего за днем опубликования таких изменений по следующей ссылке: https://online.rtrn.ru/agreement</li>
                            <li>Пользователь обязуется самостоятельно проверять Пользовательское соглашение предмет внесенных изменений.</li>
                            <li>В случае принятия нормативно-правовых актов органами власти Российской Федерации, а также изменения действующих политик РТРС, затрагивающих целиком или в части функционирование Кабинета, РТРС также сохраняет за собой право внесения любых изменений в функционирование Кабинета, направленных на приведение деятельности РТРС в соответствие с новыми нормами.</li>
                            <li>Пользователь вправе отказаться от принятия изменений и дополнений в Пользовательское соглашение, что означает отказ Пользователя от использования Кабинета и всех предоставленных ему ранее прав.</li>
                        </ol>
                    </li>
                </ul>
            </div>

            <Footer/>
        </div>
    )
}

export default UserAgreement;