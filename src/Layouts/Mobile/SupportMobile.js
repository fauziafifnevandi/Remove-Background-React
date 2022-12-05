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
              src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
              alt="Microsoft"
            ></img>
          </div>
          <div class="col">
            <img
              className="scandi"
              src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
              alt="Microsoft"
            ></img>
          </div>
          <div class="col">
            <img
              className="visme"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png"
              alt="Microsoft"
            ></img>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SupportMobile;
