import React from "react";
import { FaRegImage } from "react-icons/fa";
import { Button, Row, Col, Image } from "react-bootstrap";

const HeroDesktop = () => {
  return (
    <div class="container-hero">
      <Row>
        <Col>
          <Image
            style={{ maxHeight: "50vh", maxWidth: "100%" }}
            src="https://www.slazzer.com/static/images/home-page/home_banner.jpg"
          ></Image>
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <a
              target="_blank"
              className="product-hunt"
              href="https://www.producthunt.com/posts/slazzer-3-0?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-slazzer-3-0"
            >
              <img
                className="row-two-image"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=367132&theme=light"
              ></img>
            </a>
          </div>
          <h1 className="row-two-text-one">Remove Image Background</h1>
          <div className="d-flex justify-content-center">
            <p className="row-two-text-two">
              Automatically and <span>Free</span>
            </p>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button href="/workspace" className="px-5 py-2 mb-1" size="lg">
              <FaRegImage></FaRegImage> Upload Image
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <span>or drag and drop images</span>
          </div>
          <div className="d-flex justify-content-center">
            <span className="row-two-text-three">Paste image or Ctrl + V</span>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-center">
              <span className="row-two-text-four">
                By uploading an image you hereby agree to our Terms of Service.
                This site is protected by
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <span className="row-two-text-four">
                reCAPTCHA and the Google Privacy Policy and Terms of Service
                apply.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroDesktop;
