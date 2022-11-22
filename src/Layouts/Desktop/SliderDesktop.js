import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import { FaRegArrowAltCircleRight, FaRegImage } from "react-icons/fa";
import "react-before-after-slider-component/dist/build.css";

function SliderDesktop() {
  const FIRST_IMAGE = {
    imageUrl: "https://www.slazzer.com/static/images/sample/png/demo-009.jpg",
  };
  const SECOND_IMAGE = {
    imageUrl: "	https://www.slazzer.com/static/images/sample/jpg/demo-009.jpg",
  };

  return (
    <>
      <Container style={{ marginTop: "120px" }}>
        <div>
          <Row>
            <Col className="me-5">
              <div>
                <ReactBeforeSliderComponent
                  firstImage={FIRST_IMAGE}
                  secondImage={SECOND_IMAGE}
                ></ReactBeforeSliderComponent>
              </div>
            </Col>
            <Col className="me-5">
              <h3 style={{ fontWeight: "bold" }}>
                Remove backgrounds 100% Automatically in just seconds
              </h3>
              <br></br>
              <div className="me-5">
                <span>
                  Our online background remover instantly detects the subject
                  from any photo and gives you a smooth & clear cutout.
                </span>
              </div>
              <br></br>
              <div className="me-5">
                <span>
                  Now you can save a incredible amount of time as our AI is
                  capable of handling hair, fur or any complex edges in just a
                  few seconds.
                </span>
              </div>
              <div className="mt-5">
                <a
                  style={{ textDecoration: "none", marginRight: "10px" }}
                  href="/"
                >
                  {" "}
                  Try it for Free
                  <FaRegArrowAltCircleRight className="ms-2"></FaRegArrowAltCircleRight>
                </a>
                <a
                  style={{ textDecoration: "none", marginRight: "10px" }}
                  href="/"
                >
                  {" "}
                  See more samples
                  <FaRegArrowAltCircleRight className="ms-2"></FaRegArrowAltCircleRight>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container style={{ marginTop: "70px" }}>
        <div>
          <Row>
            <Col>
              <h3 style={{ fontWeight: "bold" }}>
                Best background remover for Windows/Mac/Linux
              </h3>
              <br></br>
              <div className="me-5">
                <span>
                  Install our desktop application to drag and drop 1000s of
                  images at once. Click "Start" and watch as each image gets cut
                  out automatically.
                </span>
              </div>
              <br></br>
              <div className="me-5">
                <span>
                  Boost your efficiency and replace background from multiple
                  images to get thousands of AI powered cut outs for all your
                  design needs.
                </span>
              </div>
              <div className="mt-3">
                <a
                  style={{ textDecoration: "none", marginRight: "10px" }}
                  href="/"
                >
                  {" "}
                  Learn more
                  <FaRegArrowAltCircleRight className="ms-2"></FaRegArrowAltCircleRight>
                </a>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  style={{ width: "85%" }}
                  src="https://www.slazzer.com/static/images/home-page/desktop-app.jpg"
                ></img>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container style={{ marginTop: "70px" }}>
        <div>
          <Row>
            <Col>
              <div>
                <img
                  style={{ width: "85%" }}
                  src="https://www.slazzer.com/static/images/home-page/integrate-slazzer.png"
                ></img>
              </div>
            </Col>
            <Col>
              <h3 style={{ fontWeight: "bold" }}>
                Speed up your workflow with our integrations
              </h3>
              <br></br>
              <div className="me-5">
                <span>
                  Looking to process millions of images? We've made it super
                  easy to integrate our API into your project with just a few
                  lines of code so you can remove bg at scale!
                </span>
              </div>
              <br></br>
              <div className="me-5">
                <span>
                  We've also built plugins directly in the best design tools,
                  programs, apps, and eCommerce platforms to improve your
                  efficiency and workflow.
                </span>
              </div>
              <div className="mt-3">
                <a
                  style={{ textDecoration: "none", marginRight: "10px" }}
                  href="/"
                >
                  {" "}
                  View All Plugins
                  <FaRegArrowAltCircleRight className="ms-2"></FaRegArrowAltCircleRight>
                </a>
                <a
                  style={{ textDecoration: "none", marginRight: "10px" }}
                  href="/"
                >
                  {" "}
                  Read API docs
                  <FaRegArrowAltCircleRight className="ms-2"></FaRegArrowAltCircleRight>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container style={{ marginTop: "60px" }}>
        <Row>
          <Col sm={7} className="d-flex justify-content-center">
            <div className="mb-5 mt-5">
              <h3 style={{ fontWeight: "bold" }}>
                Remove Image Background Automatically
              </h3>
              <span>Upload image and get a clear transparent background</span>
            </div>
          </Col>
          <Col sm={5}>
            <div style={{ border: "3px dashed #36b3ff", borderRadius: "10px" }}>
              <div className="d-flex justify-content-center">
                <Button className="px-5 py-3 mt-5 mb-5" size="lg">
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
      <Container className="footbar mb-5" style={{ marginTop: "100px" }}>
        <Row>
          <Col style={{ marginRight: "60px" }} sm={2}>
            <h5 className="fw-bold">How to use</h5>
            <li className="mt-2">
              <a href="/">Personal Use</a>
            </li>
            <li className="mt-2">
              <a href="/">Photography</a>
            </li>
            <li className="mt-2">
              <a href="/">Advertising</a>
            </li>
            <li className="mt-2">
              <a href="/">News & Media</a>
            </li>
            <li className="mt-2">
              <a href="/">E-commerce</a>
            </li>
          </Col>
          <Col style={{ marginRight: "60px" }} sm={2}>
            <h5 className="fw-bold">Tools & API</h5>
            <li className="mt-2">
              <a href="/">API Documentation</a>
            </li>
            <li className="mt-2">
              <a href="/">Photography</a>
            </li>
            <li className="mt-2">
              <a href="/">Advertising</a>
            </li>
            <li className="mt-2">
              <a href="/">News & Media</a>
            </li>
            <li className="mt-2">
              <a href="/">E-commerce</a>
            </li>
          </Col>
          <Col style={{ marginRight: "60px" }} sm={2}>
            <h5 className="fw-bold">Company</h5>
            <li className="mt-2">
              <a href="/">About Us</a>
            </li>
            <li className="mt-2">
              <a href="/">Help & FAQ</a>
            </li>
            <li className="mt-2">
              <a href="/">Support</a>
            </li>
          </Col>
          <Col sm={4}>
            <img style={{ height: "70px" }} src="/remove-bg.png"></img>
            <br></br>
            <span>
              "Remove Bg is an AI powered tool that uses advanced computer
              vision algorithms to remove bg from any image online and replace
              background automatically with the best detailing in just a few
              seconds."
            </span>
          </Col>{" "}
        </Row>
      </Container>
      <div style={{ borderTop: "1px solid #e3e3e3", marginTop: "30px" }}></div>
      <Container className="mt-4 mb-5">
        <Row>
          <Col>
            <div style={{ textAlign: "left", maxWidth: "420px" }}>
              <p style={{ fontSize: "12px" }}>
                All trademarks, service marks, trade names, product names, logos
                and trade dress appearing on our website are the property of
                their respective owners.
              </p>
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "12px" }}>
                Terms of Service <span className="me-1 ms-1">|</span>
                General Terms and Conditions{" "}
                <span className="me-1 ms-1">|</span>
                Privacy Policy
              </p>
              <p style={{ fontSize: "12px", marginTop: "-10px" }}>
                Copyright 2019-2022 NETFLAIRS TECHNOLOGY - All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SliderDesktop;
