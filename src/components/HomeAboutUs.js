import React from "react";
import '../scss/HomeAboutUs.scss'
import {ReactComponent as ReactLogo} from '../assets/Decoration.svg'
import signature from '../assets/Signature.svg'

const HomeAboutUs = () =>{
    return(
        <>
            <div className='containerPeople'>
                <div className="aboutUs">
                    <div className="desc">
                    <p>O nas</p>
                    <ReactLogo/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    </div> 
                    <img className="signature" src={signature} alt="signature" /> 
                </div>
                <div className="peopleImg">
                </div>
            </div>
        </>
    )
}

export default HomeAboutUs