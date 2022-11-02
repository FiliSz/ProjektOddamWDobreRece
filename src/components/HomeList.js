import React, { useState } from "react";
import '../scss/HomeList.scss'
import {ReactComponent as ReactLogo} from '../assets/Decoration.svg'

const HomeList = () =>{
    
    const [elList, setElList] = useState([
        {name: 'Fundacja “Dbam o Zdrowie”', target: 'Pomoc osobom znajudjacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
     ]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(3);

    const indexOfLastPost = page * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currentPosts = elList.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(elList.length / perPage); i++){
        pageNumbers.push(i)
     };

    const paginate = pageNumbers =>{
        setPage(pageNumbers)
    } ;

    const fundationList = [
        {name: 'Fundacja “Dbam o Zdrowie”', target: 'Pomoc osobom znajudjacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
     ];
     const fundationList1 = [
        {name: 'Fundacja “Bieda”', target: 'Pomoc osobom znajdujacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
     ];
     const fundationList2 = [
        {name: 'Fundacja “OGIEN”', target: 'Pomoc osobom znajudjacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
        {name: 'Fundacja “Dla dzieci”', target: 'Pomoc dzieciom z ubogich rodzin.', items:'ubrania, meble, zabawki'},
        {name: 'Fundacja "Bez domu"', target:'Pomoc dla osob nie posiadajcych miejsca zamieszkania', items: 'ubrania, jedzenie, cieple koce'},
        {name: 'Fundacja “OGIEN”', target: 'Pomoc osobom znajudjacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
        {name: 'Fundacja “OGIEN”', target: 'Pomoc osobom znajudjacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
        {name: 'Fundacja “OGIEN”', target: 'Pomoc osobom znajudjacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
        {name: 'Fundacja “OGIEN”', target: 'Pomoc osobom znajudjacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
        {name: 'Fundacja “OGIEN”', target: 'Pomoc osobom znajudjacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
        {name: 'Fundacja “OGIEN”', target: 'Pomoc osobom znajudjacym sie w trudnej sytuacji zyciowej', items:'ubrania, jedzenie, sprzet AGD, meble, zabawki'},
     ];
    return(
        <>
        <div className="containerList">
            <div className="titleListCont">
                <span>Komu pomagamy?</span>
                <ReactLogo/>
                <div>
                    <p onClick={()=> setElList(fundationList)}>Fundacjom</p>
                    <p onClick={()=> setElList(fundationList1)}>Organizacjom pozarzadowym</p>
                    <p onClick={()=> setElList(fundationList2)}>Lokalnym zbiorkom</p>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className="listCnt">
                <ul>
                {currentPosts.map(({name, target, items})=>(
                    <li className="listElement">
                        <div>
                        <p>{name}</p>
                        <p>{target}</p>
                        </div>
                        <p>{items}</p>
                    </li>
                ))}
                </ul>
                <nav>
                    <ul className="paginationUl">
                        {pageNumbers.map(number=>(
                            <li key={number}>
                                <a className="paginationElement" onClick={()=> paginate(number)}>{number}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}


export default HomeList
