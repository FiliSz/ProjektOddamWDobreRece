import React, { useState } from "react";
import '../scss/FormStepThird.scss'
import Forms from "./Form";
import {ReactComponent as ReactIcon} from '../assets/Icon-Arrow-Down.svg'

const CustomSpan = ({el, id, colour, changeColor}) => {
    return (
        <span
        key={id} 
        style={{
        backgroundColor: colour === id ? '#FAD648' : '',
        color: colour === id ? 'white' : '',
        }}
        onClick={() => changeColor(id)}>{el}</span>
    )
}

const FormThirdStep = () => {

    const [helpTarget, setHelpTarget] = useState(['dzieciom', 'samotnym matkom', 'bezdomnym', 'niepelnosprawnym', 'osobom starszym'])
    const [colour, setColour] = useState(false);
    const changeColor = (id) =>{
        setColour(id);
    }

    const [months, setMonths] = useState(['Swiecie', 'Bydgoszcz', 'Torun', 'Grudziadz', 'Lipno', 'Wloclawek']);
    const [selected, setSelected] = useState(1);
    const [visible, setVisible] = useState(false);
    const [mainText, setMainText] = useState('--Wybierz--')
    
    return(
        <>
            <Forms/>
            <div className="thirdStepCnt">
                <form className="firstStepForm">    
                    <p>Krok 3/4</p>
                    <span>Lokalizacja:</span>
                    <div className="checkboxThirdStep">
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
                    <div className="checkboxFirstStep">
                        <label>Komu chcesz pomoc?</label>
                        <div className="spanList">
                            {helpTarget.map((el, i) => <CustomSpan el={el} id={i} colour={colour} changeColor={changeColor}/>)}
                        </div>
                    </div>
                    <div className="checkboxFirstStep">
                        <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                        <input type='text'/>
                    </div>
                    <div className="buttonCnt">
                        <button>Wstecz</button>
                        <button>Dalej</button>
                    </div>
                    
                </form>    
            </div>        
        </>
    )
}

export default FormThirdStep