import React from "react";
import '../scss/homethreecolumns.scss';

const HomeThreeColumns = () => {
    return(
        <>
        <div className="threeDivs">
            <div>
                <p className="threeNum">10</p>
                <p className="threeTitle">ODDANYCH WORKOW</p>
                <p className="threeDesc">
                    Lorem ipsum dolor sit
                    consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.
                  </p>
            </div>
            <div>
                <p className="threeNum">5</p>
                <p className="threeTitle">WSPARTYCH ORGANIZACJI</p>
                <p className="threeDesc">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div>
                <p className="threeNum">7</p>
                <p className="threeTitle">ZORGANIZOWANYCH ZBIOREK</p>
                <p className="threeDesc">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </div>
        
        </>
        
    )
}

export default HomeThreeColumns