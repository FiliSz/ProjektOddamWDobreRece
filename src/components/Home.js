import React from 'react';
import { Navigate} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import HomeThreeColumns from './homethreecolumns'
import HomeStep from './home4steps'
import {ReactComponent as ReactLogo} from '../assets/Decoration.svg'
import '../scss/home.scss';
import HomeAboutUs from './HomeAboutUs';
import HomeList from './HomeList';
import HomeFormFooter from './HomeFormFooter';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    
        const history =useNavigate("/register");
      
        function handleClick() {
          history('/register');
        }

        function handleClick2(){
            history('/login');
        }
   
    
    return(
        <>
            <div className="navBar">
                <ul className="firstLine">
                    <li onClick={handleClick2}>Zaloguj</li>
                    <li onClick={handleClick}>Zaloz konto</li>
                </ul>
                <ul className="secondLine">
                    <li>Start</li>
                    <li><Link to='test1'> O co chodzi?</Link></li>
                    <li><Link to='test4'>O nas</Link></li>
                    <li><Link to='test3'>Fundacja i organizacje</Link></li>
                    <li><Link to='test2'>Kontakt</Link></li>
                </ul>
                <div className="homePageFirst">
                <p>Zacznij pomagac!</p>
                <p>Oddaj niechciane rzeczy w zaufane rece!</p>
                <ReactLogo/>
                <div>
                <button className='btnFirst'>ODDAJ<br></br> RZECZY</button>
                <button className='btnFirst'>ZORGANIZUJ<br></br>ZBIORKE</button>
                </div>
                </div>
            </div>
            <Element name='test1'><HomeThreeColumns/></Element>
            <HomeStep/>
            <Element name='test4'><HomeAboutUs/></Element>
            <Element name='test3'><HomeList/></Element>
            <Element name='test2'><HomeFormFooter/></Element>
           
        </>
    )
}

export default Home