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
              src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
              alt="Microsoft"
            ></img>
          </div>
          <div
            class="col"
            style={{ marginLeft: "105px", marginRight: "105px" }}
          >
            <img
              className="scandi-desktop"
              src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
              alt="Microsoft"
            ></img>
          </div>
          <div class="col " style={{ marginLeft: "105px" }}>
            <img
              className="visme-desktop"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png"
              alt="Microsoft"
            ></img>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SupportDesktop;
