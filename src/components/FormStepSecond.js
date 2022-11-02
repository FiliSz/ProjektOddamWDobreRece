import React from "react";
import '../scss/FormStepSecond.scss'
import { useState } from "react";
import Forms from "./Form";
import {ReactComponent as ReactIcon} from '../assets/Icon-Arrow-Down.svg'

const FormSecondStep = () => {
    const [months, setMonths] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
    const [selected, setSelected] = useState(1);
    const [visible, setVisible] = useState(false);
    const [mainText, setMainText] = useState('--Wybierz--')

    
    return(
        <>
            <Forms/>
            <div className="firstStepCnt">
                <form className="firstStepForm">    
                    <p>Krok 2/4</p> 
                    <span>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>
                    <div className="checkboxSecondStep">
                        <label>Liczba 60l worków:</label>
                        <label className='customSelect' onClick={() => setVisible(true)}>{mainText}<ReactIcon onClick={()=>setVisible(false)}/></label>
                        <ul style={{               
                            position: "absolute"
                        }}>
                        
                        {
                            visible && months.map((el, i) => {
                                return (
                                    <li
                                        className='customList'
                                        key={i}
                                        onClick={() => {
                                            
                                            console.log(el, i)
                                            setSelected(el);
                                            setVisible(false)
                                            setMainText(el)
                                        }}
                                    >
                                        {el}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </div>
                    <div className="buttonWindow">
                        <button>Wstecz</button>
                        <button>Dalej</button>
                    </div>
                    
                </form>
                 
            </div>        
        </>
    )
}

export default FormSecondStep

