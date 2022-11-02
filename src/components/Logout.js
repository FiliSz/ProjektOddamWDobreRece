import React from "react";
import '../scss/Logout.scss';
import {ReactComponent as ReactLogo} from '../assets/Decoration.svg'

const Logout = () =>{
    return(
        <>
        <div className="navBarReg">
                <ul className="firstLine">
                    <li>Zaloguj</li>
                    <li>Zaloz konto</li>
                </ul>
                <ul className="secondLine">
                    <li>Start</li>
                    <li> O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
                <div className="registerForm">
                    <div>
                        <p>Wylogowanie nastapilo <br></br> pomyslnie!</p>
                        <ReactLogo/>
                    </div>
                    <div className="btnCnt">
                        
                        <button>Strona glowna</button>
                    </div>
                </div>
        </div>

        </>
    )
}

export default Logout