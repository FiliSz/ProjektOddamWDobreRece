import React from "react";
import '../scss/Login.scss';
import {ReactComponent as ReactLogo} from '../assets/Decoration.svg'

const Login = () =>{
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
                <div className="registerFormLog">
                    <div>
                        <p>Zaloguj sie</p>
                        <ReactLogo/>
                    </div>
                    <form>
                        <div className="inputCnt">
                            <label>Email</label>
                            <input></input>
                        </div>
                        <div className="inputCnt">
                            <label>Haslo</label>
                            <input></input>
                        </div>
                    </form>
                    <div className="btnCnt">
                        <button>Zaloguj sie</button>
                        <button>Zaloz konto</button>
                    </div>
                </div>
        </div>

        </>
    )
}

export default Login