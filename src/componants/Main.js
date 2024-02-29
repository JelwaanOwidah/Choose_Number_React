//which i import to use it :
import "./Main.css" ; 
import {useState , useRef} from "react" ; 
import UrlWIn from '../sounds/mixkit-winning-notification-2018.wav'
import UrlLose from '../sounds/wrong-answer-126515.mp3'
import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti';

//run it once time  : 
let RandomNum = Math.floor(Math.random(0)*101) ; 
let HintText = ": 👀 تلمحيات";

// my arrows function :
const MainComp = () =>{
    
    // make a Variables & Lists & Objects :
    const [InputV , setInput] = useState(null) ; 
    let [attemptsV , setAttempts] = useState(null) ; 
    let MyNum = InputV ;
    const WinMoney = {
        Code :  Math.random(100)*1000   ,
        answer : RandomNum , 
        price_1st : '10$' , 
        price_2nd  : '5$' ,  
    };
    const fName = useRef("") ; 
    const WinSound = new Audio(UrlWIn) ;
    const LoseSound = new Audio(UrlLose);
    let bot = {
        TOKENID : "6761088053:AAHMfOmvI6XjEXL9RIQRhb_sIQ8IiTsVk-g" ,
        CHATID : "1248245493" ,
    };

    // make an arrow funcation :
    const TakeInput = (e) => {
        setInput(e.target.value * 1) ;
    };
    const ClickButtonSend = () =>{
        setAttempts(attemptsV + 1) ; 
        MyNum = InputV ; 
        if (RandomNum < MyNum){
            HintText = '👇 جرب رقم أقل' ; 
            LoseSound.play();
        }else if (RandomNum === MyNum ){
            if (attemptsV === null ){
                HintText = ` يالعيب يا لعيب يا بطل يابطل فعلا الرقم هو${WinMoney.answer} وربحت ${WinMoney.price_1st}🤯 شاركني بالرمز للربح 🎉👏  : ${WinMoney.Code}`
                WinSound.play() ;
                canvasConfetti();
                fetch(`https://api.telegram.org/bot${bot.TOKENID}/sendMessage?chat_id=${bot.CHATID}&text=${HintText}` , {mathod : "Get"});
            }else if (attemptsV === 1){
                HintText = ` يالعيب يا لعيب يا بطل يابطل ${WinMoney.price_2nd}🤯 شاركني بالرمز للربح 🎉👏 : ${WinMoney.Code}`
                WinSound.play() ; 
                canvasConfetti();
                fetch(`https://api.telegram.org/bot${bot.TOKENID}/sendMessage?chat_id=${bot.CHATID}&text=${HintText}` , {mathod : "Get"});
            }else{
            HintText = `👏 ${RandomNum} جبتها صح 🎉 والرقم هو ` ; 
            WinSound.play() ;
            canvasConfetti();
            }
        }else if(RandomNum > MyNum){
            HintText = '☝️ جرب رقم أعلى' ; 
            LoseSound.play();
        }else{
            HintText = '🤯 إختيارك من الرقم 1 الى 100' ; 
            LoseSound.play();
        }
        if (MyNum > 100 ){
            HintText = "🚫 لاتجرب فوق ال100 ياشاطر"; 
            LoseSound.play();
        }else if (MyNum < 0) {
            HintText = "🚫 لاتجرب تحت الصفر ياشاطر"; 
            LoseSound.play();
        }
        if (MyNum === null){
            HintText = "🤔 الرقم ؟"
            LoseSound.play();
        }
      
    };
    const ReasetAll = () =>{
        setAttempts(null) ; 
        setInput(null) ;  
        fName.current.value = '' ; 
        RandomNum = Math.floor(Math.random(0)*101) ;  ; 
        MyNum = null ;
        HintText = ": 👀 تلمحيات";
    };
    const ClickKeyBoard = (event) => {
        if (event.key === 'Enter'){
            ClickButtonSend();
        }
    };

    // which will return (SHOW):
    return(
        <div className = 'boxmain'>
            <div className = "itemsmain">               
                <h2>أختار رقم من 0 الى 100</h2>
                <input type="number" className="input" placeholder="أدخل الرقم" ref={fName} onChange={TakeInput} onKeyDown={ClickKeyBoard}/>
                
                <br/>
                <button className = "btn" onClick={ClickButtonSend}>أرسل</button>
                <button className = "btn" onClick={ReasetAll}>إعادة</button>

                <h3>{HintText}</h3>       
                <h3><big>{attemptsV}</big> : عدد المحاولات</h3>
            </div>
        </div>
    );
}
//export my componants to insert it in my app :
export default MainComp ; 