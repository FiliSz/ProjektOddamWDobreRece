import React from "react";
import '../scss/home4steps.scss'
import {ReactComponent as ReactLogo} from '../assets/Decoration.svg'
import {ReactComponent as Icon1} from '../assets/Icon-1.svg'
import icon1 from '../assets/Icon-1.svg'
import icon2 from '../assets/Icon-2.svg'
import icon3 from '../assets/Icon-3.svg'
import icon4 from '../assets/Icon-4.svg'

const HomeStep = () =>{
    return(
        <>
        <div className="stepContainer">
            <div className="stepTitle">
            <div>Wystarcza 4 proste kroki</div>
            <ReactLogo/>
            </div>
            <div className="greyContainer">
                <div className="allIconsContainer">
                <div className="iconContainer">
                    <img src={icon1} alt="icon" />
                    <p>Wybierz rzeczy</p>
                    <div className="lines"></div>
                    <p>ubrania, zabawki, sprzet i inne</p>
                </div>
                <div className="iconContainer">
                    <img src={icon2} alt="icon" />
                    <p>Spakuj je</p>
                    <div className="lines"></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="iconContainer">
                    <img src={icon3} alt="icon" />
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <div className="lines"></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="iconContainer">
                    <img src={icon4} alt="icon" />
                    <p>Zamow kuriera</p>
                    <div className="lines"></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
                </div>
                
            </div>
            <div className="stepTitle">
                <button>ODDAJ RZECZY</button>
            </div>
        </div>
        </>
    )
}


export default HomeStep