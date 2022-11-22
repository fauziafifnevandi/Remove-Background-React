import React from "react";
import { Container } from "react-bootstrap";

function SupportMobile() {
  return (
    <Container className="support-container">
      <div className="d-flex justify-content-around ">
        <div class="row">
          <div class="col">
            <img
              className="microsoft"
              src="https://www.slazzer.com/static/images/home-page/microsoft.svg"
              alt="Microsoft"
            ></img>
          </div>
          <div class="col">
            <img
              className="scandi"
              src="https://www.slazzer.com/static/images/home-page/scandi-system.png"
              alt="Microsoft"
            ></img>
          </div>
          <div class="col">
            <img
              className="visme"
              src="https://www.slazzer.com/static/images/home-page/visme.svg"
              alt="Microsoft"
            ></img>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SupportMobile;
