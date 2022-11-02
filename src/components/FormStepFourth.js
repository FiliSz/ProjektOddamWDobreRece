import React from "react";
import '../scss/FormStepFourth.scss'
import Forms from "./Form";

const FormFourthStep = () => {
    return(
        <>
            <Forms/>
            <div className="fourthStepCnt">
                <div className="cntTitle">
                    <p>Krok 4/4</p>
                    <span>Podaj adres oraz termin odbioru rzecz przez kuriera</span>
                </div>
                    
                <form className="fourthStepForm">    
                    <div className="inputForthStep">
                        <label>Adres odbioru:</label>
                        <div>
                            <p>Ulica</p>
                            <input/>
                        </div>
                        <div>
                            <p>Miasto</p>
                            <input/>
                        </div>
                        <div>
                            <p>Kod pocztowy</p>
                            <input/>
                        </div>
                        <div>
                            <p>Numer telefonu</p>
                            <input/>
                        </div>
                    </div>
                    <div className="inputForthStep">
                        <label>Termin odbioru:</label>
                        <div>
                            <p>Data</p>
                            <input/>
                        </div>
                        <div>
                            <p>Godzina</p>
                            <input/>
                        </div>
                        <div>
                            <p>Uwagi dla kuriera</p>
                            <textarea/>
                        </div>
                    </div>
                </form>
                <div className="buttonCnt">
                    <button>Wstecz</button>
                    <button>Dalej</button>   
                </div>
                 
            </div>        
        </>
    )
}

export default FormFourthStep