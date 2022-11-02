import React from "react";
import '../scss/FormStepFirst.scss'
import Forms from "./Form";
import HomeFormFooter from "./HomeFormFooter";

const FormFirstStep = () => {
    return(
        <>
            <Forms/>
            <div className="firstStepCnt">
                <form className="firstStepForm">    
                    <p>Krok 1/4</p>
                    <span>Zaznacz co chcesz oddac:</span>
                    <label className="checkboxFirstStep">ubrania, które nadają się do ponownego użycia
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkboxFirstStep">ubrania do wyrzucenia
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkboxFirstStep">zabawki
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkboxFirstStep">ksiazki
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="checkboxFirstStep">inne
                        <span className="checkmark"></span>
                    </label>
                    <button>Dalej</button>
                </form>    
            </div>        
            <HomeFormFooter/>
        </>
    )
}

export default FormFirstStep