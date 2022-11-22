import React from "react";
import { Container } from "react-bootstrap";

const SupportDesktop = () => {
  return (
    <Container className="support-container-d">
      <div className="d-flex justify-content-center">
        <div class="row">
          <div class="col" style={{ marginRight: "105px" }}>
            <img
              className="microsoft-desktop"
              src="https://www.slazzer.com/static/images/home-page/microsoft.svg"
              alt="Microsoft"
            ></img>
          </div>
          <div
            class="col"
            style={{ marginLeft: "105px", marginRight: "105px" }}
          >
            <img
              className="scandi-desktop"
              src="https://www.slazzer.com/static/images/home-page/scandi-system.png"
              alt="Microsoft"
            ></img>
          </div>
          <div class="col " style={{ marginLeft: "105px" }}>
            <img
              className="visme-desktop"
              src="https://www.slazzer.com/static/images/home-page/visme.svg"
              alt="Microsoft"
            ></img>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SupportDesktop;
