import React, { useEffect, useState } from "react";
import '../scss/HomeFormFooter.scss'
import {ReactComponent as ReactLogo} from '../assets/Decoration.svg'

const HomeFormFooter = () =>{
    
    const [values, setValues] = useState({
        username: "",
        emailname:"",
        yourmessage:""
    })
    
   
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    } 

   
    
    const  handleSubmit = (e) =>{
        e.preventDefault();
        
             fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return console.log(response);
                    console.log(response);
                    window.location.reload();
                  } else {
                   console.log('Somthing happened wrong');
                  }
            }).catch(err => err);
            
        
    }
    
    return(
        <>
        <div className="formFooterCnt">
            <div className="wallpaperCnt">
                <p>Skontaktuj sie z nami</p>
                <ReactLogo/>
                <form className="formInputs" onSubmit={handleSubmit}>
                     <div className="inputBox1">
                        <input type='text' name="username" value={values.username} onChange={onChange} pattern="[A-Za-z]{1,32}"></input>
                        <span className="infoo">Wpisz swoje imie</span>
                        <span className="errorInfo">Bledy format imienia</span>
                </div>
                    <div className="inputBox2">
                        <input  type='text' name="emailname" value={values.emailname} onChange={onChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></input>
                        <span className="infoo">Wpisz swoj email</span>
                        <span className="errorInfo">Bledny format email </span>
                    </div>
                    <div className="textareaBox">
                        <textarea type='text' name="yourmessage" value={values.yourmessage} onChange={onChange}></textarea>
                        <span className="infoo">Wpisz swoja wiadomosc</span>
                        <span className="errorInfo">Wiadomosc musi miec minimum 120 znakow</span>

                    </div>
                    <button>WYSLIJ</button>
                </form>
            
            </div>
        </div>
        </>
    )
}

export default HomeFormFooter