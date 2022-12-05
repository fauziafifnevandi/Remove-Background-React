import React from "react";
import { FaRegImage } from "react-icons/fa";
import { Button, Container, Image } from "react-bootstrap";

function HeroMobile() {
  return (
    <Container>
      <div class="container-hero-mobile">
        <div className="d-flex justify-content-center">
          <a
            target="_blank"
            className="product-hunt"
            href="https://www.producthunt.com/posts/slazzer-3-0?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-slazzer-3-0"
          >
            <img
              className="row-two-image-mobile"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=367132&theme=light"
            ></img>
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <h1 className="row-two-text-one">Remove Image Background</h1>
        </div>
        <div className="d-flex justify-content-center">
          <p className="row-two-text-two">
            Automatically and <span>Free</span>
          </p>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <Image
            className="banner-image-mobile"
            src="https://www.slazzer.com/static/images/home-page/home_banner.jpg"
          ></Image>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Button href="/workspace" className="px-4 py-2 mb-1" size="lg">
            <FaRegImage></FaRegImage> Upload Image
          </Button>
        </div>
        <div className="mt-2">
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
      </div>
    </Container>
  );
}

export default HeroMobile;
