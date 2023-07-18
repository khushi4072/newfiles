/* eslint-disable no-unused-vars */


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Collaboration.css'
 
  import  bigb from "./imagegallery/bigb.png"
  // import  fashionweek from "./imagegallery/bigb.png"
  import  pantaloon from "./imagegallery/pantaloons.png" 
  import  toi from "./imagegallery/the-official-fface-logo-KJ382R.jpg"
  import  dalmia from "./imagegallery/dalmia.png"
  import  hero from "./imagegallery/hero.png"
  import  fresh from "./imagegallery/frespreso.jpg"
  import  gdg from "./imagegallery/gdgpng.png"
  import  feed from "./imagegallery/feedingIndia.png"
  import  tele from "./imagegallery/telegraph.png"
  import  chai from "./imagegallery/chai-break-logo.jpg"
  import  amri from "./imagegallery/AMRI.png"
  import  elev from "./imagegallery/Elleven-Logo_.png"
  import  mayfair from "./imagegallery/mayfair.jpg"
  import  jugad from "./imagegallery/jugad.png"
  import  sports from "./imagegallery/sports.png"
  import  fame from "./imagegallery/fashionweek.png"
  import  brand12  from "./images/brand12.jpg"
  import  brand3  from "./images/brand3.png"
  import  brand10  from "./images/brand10.png"
  import  brand2  from "./images/brand2.png"
  import  telegraph from "./images/telegraph.png"
  import  dpu  from "./images/dpu.jpg"
  import hoichoi from "./images/hoichoi.png"


  






  // import  fashionweek from "./imagegallery/bigb.png" "./imagegallery";

const BrandCollaboration = () => {
  const brandLogos = [
    { id: 1, src:pantaloon },
    { id: 2, src: bigb }, 
    { id: 3, src:hero  },
    { id: 4, src:  dalmia},
    { id: 5, src: fresh },
    { id: 6, src: gdg },
    { id: 7, src: feed },
    { id: 8, src: tele },
    { id: 9, src: chai },
    { id: 10, src: amri },
    { id: 11, src: elev },
    { id: 12, src: mayfair },
    { id: 13, src: jugad },
    { id: 14, src: sports },
    { id: 15, src: fame },
    { id: 16, src: toi },
    // Add more logo objects as needed
  ];

  return (
    <>
      <h2 className="Heading-1 text-center  py-5">Our Brand Collaborations</h2>
      <div className="continer-fluid main-logo">
        <div className="container-fluid main-logo1">
          <div className="img"><img src={pantaloon}></img></div>
          <div  className="img"><img src={bigb}></img></div>

          <div  className="img"><img src={dpu}></img></div>
          <div  className="img"><img src={feed}></img></div>





        </div>
        <div className="container-fluid main-logo1">
          <div  className="img"><img src={tele}></img></div>
          <div  className="img"><img src={fresh}></img></div>

          <div  className="img"><img src={gdg}></img></div>
          <div className="img"><img src={chai}></img></div>





        </div>
        <div className="container-fluid main-logo1">
          <div  className="img"><img src={amri}></img></div>
          <div  className="img"><img src={elev}></img></div>

          <div  className="img"><img src={brand12}></img></div>
          <div  className="img"><img src={brand2}></img></div>





        </div>
        <div className="container-fluid main-logo1">
          <div  className="img"><img src={brand3}></img></div>
          <div  className="img"><img src={brand10}></img></div>

          <div  className="img"><img src={hoichoi}></img></div>
          <div  className="img"><img src={telegraph}></img></div>





        </div>

      </div>
  
    </>
  );
};

export default BrandCollaboration;
