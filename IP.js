/* eslint-disable no-unused-vars */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  delhif  from "./imagegallery/Delhi Fashion Confluence Logo.png";
// import  bubf from "./imagegallery/barbeque.png";
import  fashionweek  from "./imagegallery/fashionweek.png";
import './Ip.css'

// const BrandCollaboration = () => {
  

    const IP = () => {
    const brandLogos = [
    { id: 1, src:fashionweek },
    { id: 2, src: delhif },
   
  ];
    return (
      <>
        <h2 className="Heading-1 text-center py-5 mt-5">
          Intellectual Presentors
        </h2>
        {/* <Container  className="py-3  ">
         

          <Row
            className="justify-content-center py-5"
          >
            {brandLogos.map((logo) => (
              <Col xs={10} sm={6} md={4} lg={3} key={logo.id} className="p-4">
                <img
                  src={logo.src}
                  alt={`Logo ${logo.id}`}
                  className="img-fluid"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </Col>
            ))}
          </Row>
        </Container> */}
      <div  className="container-fluid cont-1">
        <div className="container cont-2">
          <div className="img-box"> <img src={fashionweek}></img></div>
          <div className="img-box"> <img src={delhif}></img></div>


        </div>
      </div>
      </>

    );
}

export default IP