import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.scss';

const Home = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div className="home">
            <div className="about">
                <img src="../../assets/images/dalia-main-img.jpg" alt="Dalia" />
                <p style={{ fontWeight: "bold" }}>שלום, שמי דליה שחם, ואני מטפלת מוסמכת במספר שיטות.</p>
                <p>העולם הרוחני אף פעם לא היה זר עבורי, אף שלא כל החיים עסקתי בו. אמא שלי קראה בקפה לאנשים רבים והייתה מאוד טובה בזה. הייתה לה אינטואיציה חזקה באופן טבעי, וכנראה ספגתי את זה ממנה.</p>
                <p>אני חושבת שמי שחווה טראומות בחייו (ואין מי שלא חווה כך או כך), צריך ויכול לחפש דרכים כדי לא לחיות בפחד, בכעס ובכל מה שלא נעים ולא מקדם. כך גם אני חיפשתי מוצא ואכן מצאתי, ועל כך אני מודה כל יום וכל רגע.</p>
                <p>מרגע שנכנסתי לדרך המסקרנת והמרתקת השתנו חיי. אני מסתכלת אחרת על החיים, והכל נראה קל יותר ופשוט יותר גם כשלא ממש קל.</p>
                <p>זו עבודה יומיומית של חשיבה חיובית, לקיחת אחריות על חיי, שחרורים של מה שאינו רלוונטי ואינו משרת אותי עוד, למידות חדשות, מיגנוט ויצירת מציאות, הגשמת חלומות, ועוד...</p>
                <p>אני כל כך מאושרת שבחרתי להיפתח אל העולם הזה. היום, כשיש בארגז הכלים שלי כל כך הרבה שיטות ריפוי גוף/נפש, זו חגיגה ללב ולנשמה.</p>
                <h3>אם החלטת שהגיע הזמן לשחרר את הישן ולהמשיך הלאה בחיים בקלות ובפשטות, אני כאן בשבילך.</h3>
                <p style={{ textDecoration: "underline" }}>השכלתי:</p>
                <p style={{ textIndent: "1.5rem" }}>בשנת 1998 התחלתי את דרכי הרוחנית, כשנרשמתי לשלוש שנים של לימודים במכללת כרכור. למדתי איך עובדים עם תמציות פרחי באך, ובנוסף, למדתי דמיון מודרך והילינג עם אבני קריסטל. אלו היו שלוש שנים מרתקות ומופלאות.</p>
                <p style={{ textIndent: "1.5rem" }}>כשסיימתי במכללה, המשכתי לקורס קריאה בקלפי טארוט. מאז, אני עוזרת לאנשים רבים בייעוץ והכוונה בעזרת הקלפים המדהימים. הקריאה בטארוט מרתקת ומאוד אהובה עליי. יש אנשים החוששים קצת מהקלפים, אך ברגע שהם מוכנים להתנסות בהם – החששות הללו נעלמים.</p>
                <p style={{ textIndent: "1.5rem" }}>בשנת 2010 הגעתי ללמוד שיטת ריפוי קסומה שנקראת תטא הילינג, ומאז חיי השתנו בעקבות השינוי שחל בי כשהבנתי שעליי לקחת אחריות על חיי וליצור את המציאות בה אני רוצה להימצא. עברתי קורסים רבים בתטא הילינג וטיפלתי בשיטה, בשילוב כלים נוספים שיש ברשותי. זו דרך חיים משחררת ובונה, והחיים הרבה יותר מהנים וקלים עם התטא הילינג!</p>
                <p style={{ textIndent: "1.5rem" }}>בסוף 2014 למדתי עוד שיטת ריפוי – אקסס בארס – כל כך מיוחדת וקלילה ואני מודה על כך בכל ליבי. זוהי שיטת ריפוי מופלאה ומדהימה בפשטותה, העובדת על שחרור של קירות הבטון והסורגים ששמנו להגנות במשך זמן רב: זכרונות, דפוסי חשיבה, אמונות חוסמות ומעכבות, ביקורתיות, שיפוטיות, פחד וכעס.</p>
                <p style={{ textIndent: "1.5rem" }}>במשך השנים למדתי עוד שיטות ריפוי רבות לגוף/נפש, כגון: פירמידות האור, אנרגיית הסוסים, שיטת אלפא, אומגה... עם רוב הכלים אני משתמשת עד היום בחיי ובקליניקה שלי.</p>
            </div>
            <div className="boxes">
                <Link to="access-bars">
                    <ul className="therapy-card">
                        <li className="title-he">אקסס בארס</li>
                        <li className="title-en">Access Bars®</li>
                        <li className="desc">הבארס היא שיטת טיפול המתבצעת דרך מגע עדין ב-32 נקודות בראש, ללא מאמץ ובקלות. התהליך משחרר מחסומים שעד כה לא איפשרו לך ליצור את מה שרצית. הנקודות מאכסנות מטען אלקטרו מגנטי המורכב מאמונות חוסמות ומעכבות, דעות, רגשות, זכרונות, דפוסי חשיבה ועוד. <span style={{ textDecoration: "underline" }}>[המשך]</span></li>
                    </ul>
                </Link>
                <Link to="theta-healing">
                    <ul className="therapy-card">
                        <li className="title-he">תטא הילינג</li>
                        <li className="title-en">Theta Healing®</li>
                        <li className="desc">תטא הילינג היא שיטה רבת עוצמה לריפוי והגשמה. פותחת את הדלת לעולם טהור, אמת גבוהה, ניסים ואושר. גלי התטא במוח הינם גלים חשמליים שהתדר שלהם איטי במיוחד. גלים אלו מאפיינים אותנו בזמן שינה עמוקה או מדיטציה עמוקה. כשאנו שוהים בגלי התטא  הדרך למרחב תת המודע נפתחת בפנינו ומידע רב מתת המודע הופך נגיש. <span style={{ textDecoration: "underline" }}>[המשך]</span></li>
                    </ul>
                </Link>
                <Link to="tarot-cards">
                    <ul className="therapy-card">
                        <li className="title-he">קלפי טארוט</li>
                        <li className="title-en">Tarot Cards</li>
                        <li className="desc">קלפי הטארוט, מהווים עבורי כלי לייעוץ והכוונה. הם מספרים את סיפור חייו של האדם, וכוללים ציורים, המסמלים מצבים אנושיים מחיי היומיום – הן מבחינת התהליכים הרגשיים והפסיכולוגיים, והן מבחינת ההתרחשויות הפיזיות היומיומיות שחווה האדם. <span style={{ textDecoration: "underline" }}>[המשך]</span></li>
                    </ul>
                </Link>
            </div>
        </div>
    )
}

export default Home;