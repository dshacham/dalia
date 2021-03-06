import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Tihur.scss';
import Context from './Context';

const Tihur = () => {
    const { setNavClass } = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="tihur">
            <h2>טיהור בית להחלפת האנרגיות והטענת המרחב באנרגיות חדשות של אהבה, שפע, בריאות, רוגע, אור ושמחה!</h2>
            <div className="tihur-body">
                <div className="tihur-text">
                    <h3>הטיהור משפר את האוירה הכללית, יוצר תחושה נעימה במקדש הפרטי שלכם<br /> ולפי עדויות שונות, גם משפר את היחסים בין דיירי הבית.</h3>
                    <ul>
                        <li>טיהור הבית נעשה על ידי ועל ידי בתי. שתינו מתקשרות, עוסקות בכוח הריפוי ומטהרות בתים מנוסות!</li>
                        <li>ניקיון אנרגטי על ידי טיהור הבית בשיטה ייחודית!</li>
                        <li>ביתנו = מבצרינו. אנחנו אמורים לחוש הכי בטוח בדלת אמותינו.</li>
                        <li>אם מסיבה כלשהי אינכם חשים כך, כנראה שהבית שלכם זקוק לטיהור!</li>
                    </ul>
                    <h3>הבית שלנו סופג הכל: שמחות, חגיגות, אירועים טובים, וגם: עצב, פחד, כעס ומריבות שהתרחשו.
                    לכן חשוב לטהר את הבית אחת לתקופה ולהכניס אליו אנרגיות חדשות.</h3>
                    <p>טיהור אנרגטי בבית נועד להוצאת אנרגיות מיותרות שיכולות ליצור כובד, תקיעות, חסימות וכאב אצל השוכנים בו.
                    הבית שלנו סופג לתוכו את אנרגיית החיים שמסביבו. אנרגיה זו נכנסת לקירות הבית, לרהיטים, לחפצים ולחללי הבית. יש לה השפעה רבה על הדיירים, גם חיובית וגם שלילית. חשוב מאוד לטהר את האנרגיות הלא רצויות, כיוון שהן עלולות להשפיע על כל תחומי החיים.</p>
                    <p>טיהור הבית מנקה זכרונות של מריבות ורגעים לא נעימים של דייריו. ההרגשה מאוד נעימה בקתופה שאחרי הטיהור.
                    הטיהור נעשה על ידי מעבר בכל חדרי הבית עם כלים הידועים בסגולות הטיהור שלהם, כגון מרווה וקטורת.
                    לאחר הטיהור נטעין את הבית באנרגיות חיוביות והצלחה בכל תחומי החיים. מתוך נסיוני בטיהורי בתים אני יכולה להעיד שדברים משתנים לטובה ונוצרת זרימה נעימה.</p>
                    <ol><strong>מתי מומלץ הטיהור?</strong>
                        <li>במעבר לבית חדש או שגרו בו קודם.</li>
                        <li>לאחר משבר כלכלי או רגשי.</li>
                        <li>כאשר הבריאות לקויה.</li>
                        <li>לאחר פרידה או קושי בזוגיות קיימת.</li>
                        <li>כשיש קשיים בשינה.</li>
                        <li>כשיש פחדים חוסמים.</li>
                        <li>כשיש תחושת בדידות.</li>
                        <li>כשיש תחושה לא נעימה בבית.</li>
                        <li>כשיש תקיעות, עצב, דכאון.</li>
                    </ol>
                    <p>לקוחה שלחה לנו בהיסטריה סרטון ופירטה: "קניתי בית מדהים ורכשתי ציוד חדש. באחד מכיסאות המטבח יש השתקפות של יד כמו שלד, משהו מפחיד. אנחנו לא מצליחים לישון בבית ואני מבקשת שתגיעו לעשות בו טיהור!" <br/>הגענו לשם, בית יפהפה, בהחלט תופעה מוזרה. התחלנו מיד בתהליך טיהור יסודי בכל החדרים וכשסיימנו במטבח התנפצה לנו קערה טיבטית עימה אנו נוהגות לסיים את התהליך. מסתבר שהסתובבה שם ישות עקשנית שפשוט לא רצתה שיפריעו את "מנוחתה", ולכן גם הפחידה את דיירי הבית. בעזרת תקשור ושאר הכלים בהם אנו משתמשות לטיהור, הצלחנו במשימה (הלא כ"כ פשוטה) ודאגנו לשחרר את אותה ישות ולהעביר אותה הלאה למימד גבוה יותר. הלקוחה נרגעה ואף חזרה אלינו וציינה שהצליחו לישון בשקט בבית מאותו לילה, ושהתופעות לא חזרו על עצמן יותר מרגע הטיהור.</p>
                    <h4>לבירורים והזמנות ניתן <Link to="contact" onClick={() => setNavClass("/contact")}>ליצור קשר</Link> בכל אחת מהדרכים המוצעות באתר.</h4>
                </div>
                <div className="tihur-imgs">
                    <img src="../../assets/images/tihur2.png" alt="tihur" />
                    <img src="../../assets/images/tihur1.png" alt="tihur" />
                </div>
            </div>
        </div>
    )
}

export default Tihur;