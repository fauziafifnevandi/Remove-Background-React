import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import { FaRegArrowAltCircleRight, FaRegImage } from "react-icons/fa";
import "react-before-after-slider-component/dist/build.css";

function SliderMobile() {
  const FIRST_IMAGE = {
    imageUrl: "https://www.slazzer.com/static/images/sample/png/demo-009.jpg",
  };
  const SECOND_IMAGE = {
    imageUrl: "	https://www.slazzer.com/static/images/sample/jpg/demo-009.jpg",
  };

  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h3 className="mb-3" style={{ fontWeight: "bold" }}>
          Remove backgrounds 100% Automatically in just seconds
        </h3>
        <div>
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          ></ReactBeforeSliderComponent>
        </div>
        <div className="mt-4">
          <span>
            Our online background remover instantly detects the subject from any
            photo and gives you a smooth & clear cutout.
          </span>
        </div>
        <div className="mt-3">
          <span>
            Now you can save a incredible amount of time as our AI is capable of
            handling hair, fur or any complex edges in just a few seconds.
          </span>
        </div>
        <div className="mt-3">
          <a style={{ textDecoration: "none", marginRight: "10px" }} href="/">
            {" "}
            Try it for Free
            <FaRegArrowAltCircleRight className="ms-2"></FaRegArrowAltCircleRight>
          </a>
          <a style={{ textDecoration: "none", marginRight: "10px" }} href="/">
            {" "}
            See more samples
            <FaRegArrowAltCircleRight className="ms-2"></FaRegArrowAltCircleRight>
          </a>
        </div>
      </Container>
      <Container style={{ marginTop: "50px" }}>
        <div>
          <h3 className="mb-3" style={{ fontWeight: "bold" }}>
            Best background remover for Windows/Mac/Linux
          </h3>
        </div>
        <div className="d-flex justify-content-center">
          <img
            style={{ width: "85%" }}
            src="https://www.slazzer.com/static/images/home-page/desktop-app.jpg"
          ></img>
        </div>
        <div className="mt-4">
          <span>
            Install our desktop application to drag and drop 1000s of images at
            once. Click "Start" and watch as each image gets cut out
            automatically.
          </span>
        </div>
        <div className="mt-3">
          <span>
            Boost your efficiency and replace background from multiple images to
            get thousands of AI powered cut outs for all your design needs.
          </span>
        </div>
        <div className="mt-3">
          <a style={{ textDecoration: "none", marginRight: "10px" }} href="/">
            {" "}
            Learn More
            <FaRegArrowAltCircleRight className="ms-2"></FaRegArrowAltCircleRight>
          </a>
        </div>
      </Container>
      <Container style={{ marginTop: "50px" }}>
        <h3 className="mb-3" style={{ fontWeight: "bold" }}>
          Speed up your workflow with our integrations
        </h3>
        <div className="d-flex justify-content-center">
          <img
            style={{ width: "85%" }}
            src="https://www.slazzer.com/static/images/home-page/integrate-slazzer.png"
          ></img>
        </div>
        <div className="mt-4">
          <span>
            Install our desktop application to drag and drop 1000s of images at
            once. Click "Start" and watch as each image gets cut out
            automatically.
          </span>
        </div>
        <div className="mt-3">
          <span>
            Boost your efficiency and replace background from multiple images to
            get thousands of AI powered cut outs for all your design needs.
          </span>
        </div>
        <div className="mt-3">
          <a style={{ textDecoration: "none", marginRight: "10px" }} href="/">
            {" "}
            Learn More
            <FaRegArrowAltCircleRight className="ms-2"></FaRegArrowAltCircleRight>
          </a>
        </div>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Row>
          <div className=" mt-5 d-flex justify-content-center">
            <h3 style={{ fontWeight: "bold" }}>Remove Image Background</h3>
          </div>
          <div className="d-flex justify-content-center">
            <h3 style={{ fontWeight: "bold" }}>Automatily</h3>
          </div>
          <div className="mb-5 mt-1 d-flex justify-content-center">
            <span style={{ fontSize: "15px" }}>
              Upload image and get a clear transparent background
            </span>
          </div>

          <Col sm={5}>
            <div
              style={{
                border: "3px dashed #36b3ff",
                borderRadius: "10px",
                marginLeft: "40px",
                marginRight: "40px",
              }}
            >
              <div className="d-flex justify-content-center">
                <Button className="px-3 py-1 mt-5 mb-5" size="lg">
                  <FaRegImage fontSize={40}></FaRegImage>{" "}
                  <span className="ms-2" style={{ fontWeight: "bold" }}>
                    Upload Image
                  </span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div style={{ borderTop: "1px solid #e3e3e3", marginTop: "30px" }}></div>
      <Container>
        <p style={{ fontSize: "12px" }}>
          All trademarks, service marks, trade names, product names, logos and
          trade dress appearing on our website are the property of their
          respective owners.
        </p>
        <p style={{ fontSize: "14px" }}>
          Terms of Service <span className="me-1 ms-1">|</span>
          General Terms and Conditions <span className="me-1 ms-1">|</span>
          Privacy Policy
        </p>
        <p style={{ fontSize: "12px", marginTop: "-10px" }}>
          Copyright 2019-2022 NETFLAIRS TECHNOLOGY - All rights reserved.
        </p>
      </Container>
    </>
  );
}

export default SliderMobile;
