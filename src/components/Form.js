import React from "react";
import '../scss/Form.scss'
import decor from '../assets/Decoration.svg'
import YellowBanner from "./FormYellowBanner";
import FormFirstStep from "./FormStepFirst";
import FormSecondStep from "./FormStepSecond";
import FormThirdStep from "./FormStepThird";
import FormFourthStep from "./FormStepFourth";

const Forms = () =>{
    return(
        <>
            <div className="navBarForm">
                <ul className="firstLine">
                    <li >Zaloguj</li>
                    <li >Zaloz konto</li>
                </ul>
                <ul className="secondLine">
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
                <div className="homePageFirst">
                <p>Oddaj rzeczy, których już nie chcesz <br></br> POTRZEBUJĄCYM</p>
                <img src={decor} alt='decor'></img>
                <p>Wystarcza 4 proste kroki</p>
                <div>
                    <div className="formSquare">
                        <p>1<br></br>Wybierz rzeczy</p>
                    </div>
                    <div className="formSquare">
                        <p>2<br></br>Spakuj je w worki</p>
                    </div>
                    <div className="formSquare">
                        <p>3<br></br>Wybierz fundacje</p>
                    </div>
                    <div className="formSquare">
                        <p>4<br></br>Zamow kuriera</p>
                    </div>
                </div>
                </div>
            </div>
            <YellowBanner/>
        

            
                
        </>
    )
}

export default Forms;