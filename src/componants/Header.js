import "./Header.css";
import { Link } from "react-router-dom" ; 



const HeaderComp = () => {
    return(
        <div>
            <div className = "itemsheader">
                <h1>💫اختار الرقم الصحيح</h1>
                <h3>طورت من قبل  : <Link to = "https://shorturl.at/bwL58" >جلوان</Link></h3>
                <h5>اذا سويتها من <big>اول محاولة</big> شاركها معي لربح <big>10 دولار</big> </h5>
                <h5>اذا سويتها من <big>ثاني محاولة</big> شاركها معي لربح <big>5 دولار</big> </h5> 
            </div>
        <h4 className = "Ajr">❤️ صلي على النبي</h4>
        </div>
    );

}

export default HeaderComp ; 