import React, { useState } from "react";
import NavbarDesktop from "../Layouts/Desktop/NavbarDesktop";
import axios from "axios";
import {
  FaInfoCircle,
  FaRegImage,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import { Container, Button, Row, Col, Placeholder } from "react-bootstrap";

function Workspace() {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [apis, setApi] = useState("");
  const [btnDownload, setBtnDownload] = useState(false);
  const [isProcess, setisProcess] = useState("upload");

  const loadImage = async (e) => {
    const image = e.target.files[0];
    console.log(image);
    setFile(image);
    setPreview(URL.createObjectURL(image));
    const formData = new FormData();
    formData.append("files[]", image);
    console.log(formData);
    setisProcess("proccess");
    try {
      await axios
        .post("http://127.0.0.1:5001/v1/remove-bg", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          console.log(response.data);
          setApi(response.data["ImageBytes"]);
        });
      setisProcess("result");
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarDesktop></NavbarDesktop>
      {isProcess == "upload" ? (
        <Container>
          <div
            style={{ marginTop: "8rem" }}
            className="d-flex justify-content-center"
          >
            <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
              Upload an image to remove
            </h1>
          </div>
          <div className="d-flex justify-content-center mb-2">
            <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>background</h1>
          </div>
          <div
            className="card shadow "
            style={{
              marginLeft: "35%",
              marginRight: "35%",
              paddingTop: "80px",
              paddingBottom: "80px",
              border: "none",
              borderRadius: "30px",
            }}
          >
            <form
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="field">
                <div className="control">
                  <div className="file">
                    <label
                      className="btn btn-primary px-4 rounded-pill py-2"
                      style={{ fontSize: "20px" }}
                    >
                      <FaRegImage className="me-2" size="26"></FaRegImage>{" "}
                      Upload Image
                      <input
                        id="file"
                        type="file"
                        className="file-input"
                        onChange={loadImage}
                      ></input>
                    </label>
                  </div>
                </div>
              </div>

              {/* {preview ? (
                <figure className="image is-128x128">
                  <img
                    style={{ width: "100px" }}
                    src={preview}
                    alt="Preview Image"
                  />
                </figure>
              ) : (
                ""
              )} */}
            </form>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              or drag and drop images
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "12px",
              }}
            >
              Paste image or Ctrl + V
            </span>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <span style={{ fontSize: "10px", color: "#777" }}>
              By uploading an image you hereby agree to our{" "}
              <a href="/" style={{ textDecoration: "none" }}>
                Terms of Service
              </a>
              . This site is protected by
            </span>
          </div>
          <div className="d-flex justify-content-center">
            <span style={{ fontSize: "10px", color: "#777" }}>
              reCAPTCHA and the Google{" "}
              <a href="/" style={{ textDecoration: "none" }}>
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/" style={{ textDecoration: "none" }}>
                Terms of Service
              </a>{" "}
              apply.
            </span>
          </div>

          {/* <img
            style={{ maxHeight: "200px" }}
            src={`data:image/jpeg;base64,${apis}`}
          /> */}

          {/* {btnDownload ? (
            <a
              className="button is-alert mt-2"
              download="images.jpeg"
              href={`data:image/jpeg;base64,${apis}`}
            >
              Download
            </a>
          ) : (
            <a disabled className="button is-alert mt-2">
              Download
            </a>
          )} */}
        </Container>
      ) : isProcess == "result" ? (
        <>
          <div
            style={{
              marginTop: "95px",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #ddd",
            }}
          >
            <button
              className="btn btn-primary mb-4"
              style={{ padding: "11px 35px 11px 35px" }}
            >
              Upload Image
            </button>
          </div>
          <Container className="mt-4">
            <div
              className="card shadow "
              style={{
                marginLeft: "12%",
                marginRight: "12%",
                // border: "none",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  padding: "24px 30px 12px 30px",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <h5
                  style={{
                    borderBottom: "5px solid #3577ff",
                    color: "#3577ff",
                    borderRadius: "3px",
                  }}
                >
                  Removed Background
                </h5>
              </div>
              <div
                className="mb-3"
                style={{
                  padding: "0px 30px 12px 30px",
                }}
              >
                <Row>
                  <Col sm={8}>
                    {" "}
                    <img
                      style={{ maxHeight: "50vh", maxWidth: "100%" }}
                      src={`data:image/jpeg;base64,${apis}`}
                    />
                  </Col>
                  <Col sm={4}>
                    <div className="d-flex justify-content-center mt-2">
                      <a
                        style={{
                          padding: "6px 61px 6px 61px",
                          borderRadius: "3px",
                        }}
                        className="btn btn-primary"
                        download="images.jpeg"
                        href={`data:image/jpeg;base64,${apis}`}
                      >
                        Download
                      </a>
                    </div>
                    <div className="d-flex justify-content-center mt-1">
                      <span style={{ fontSize: "12px", color: "#6c757d" }}>
                        Preview size: 665 * 375 {""}
                        <FaInfoCircle
                          title="Preview Images up to 0.25 megapixel (eg: 625 x 400) are always free at slazzer.com website, 1/5 credit will be charged via Apps and API."
                          className="mb-1"
                          size={14}
                        ></FaInfoCircle>
                      </span>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <a
                        style={{
                          padding: "6px 47px 6px 47px",
                          borderRadius: "3px",
                        }}
                        className="btn btn-outline-secondary"
                        download="images.jpeg"
                        href={`data:image/jpeg;base64,${apis}`}
                      >
                        Download HD
                      </a>
                    </div>
                    <div className="d-flex justify-content-center mt-1">
                      <span style={{ fontSize: "12px", color: "#6c757d" }}>
                        Full size: 1024 * 578 {""}
                        <FaInfoCircle
                          title="Full Images up to 25 megapixel (eg: 6250 x 4000 ) will be charged as 1 credit."
                          className="mb-1"
                          size={14}
                        ></FaInfoCircle>
                      </span>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <span style={{ fontSize: "14px", color: "#314572" }}>
                        * Need{" "}
                        <span style={{ fontWeight: "bold" }}>
                          unlimited cutouts ?
                        </span>
                      </span>
                    </div>
                    <img
                      style={{
                        height: "27px",
                        position: "absolute",
                        marginLeft: "30px",
                        transform: "rotate(30deg)",
                      }}
                      src="https://www.slazzer.com/static/images/arrow.png"
                    ></img>
                    <div className="d-flex justify-content-center mt-2">
                      <a
                        style={{
                          padding: "8px 20px 8px 20px",
                          borderRadius: "30px",
                        }}
                        className="btn btn-primary"
                        download="images.jpeg"
                        onClick={() => {
                          alert("features are coming soon");
                        }}
                      >
                        <span style={{ fontSize: "14px" }}>Try Remove Now</span>
                      </a>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#314572",
                        }}
                      >
                        Rate this result:
                      </span>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                      <div
                        className="rounded-circle px-2 py-1 me-3"
                        style={{
                          border: "1px solid #314572",
                        }}
                      >
                        <a
                          href="#"
                          onClick={() => {
                            alert("Thank You for Your Feedback!");
                          }}
                          style={{}}
                        >
                          <FaThumbsUp className="mb-1"></FaThumbsUp>
                        </a>
                      </div>
                      <div
                        className="rounded-circle px-2 py-1"
                        style={{
                          border: "1px solid #314572",
                        }}
                      >
                        <a
                          href="#"
                          onClick={() => {
                            alert("Thank You for Your Feedback!");
                          }}
                          style={{}}
                        >
                          <FaThumbsDown className="mb-1"></FaThumbsDown>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <span style={{ fontSize: "14px" }}>
              *Don't forget to download your files. They will be automatically
              discarded within 30 minutes.
            </span>
          </div>
        </>
      ) : isProcess == "proccess" ? (
        <>
          <div
            style={{
              marginTop: "95px",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #ddd",
            }}
          >
            <button
              className="btn btn-primary mb-4"
              style={{ padding: "11px 35px 11px 35px" }}
            >
              Upload Image
            </button>
          </div>
          <Container className="mt-4">
            <div
              className="card shadow "
              style={{
                marginLeft: "12%",
                marginRight: "12%",
                // border: "none",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  padding: "24px 30px 12px 30px",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <h5
                  style={{
                    borderBottom: "3px solid #3577ff",
                    color: "#3577ff",
                    borderRadius: "3px",
                  }}
                >
                  Removed Background
                </h5>
              </div>
              <div
                className="mb-3"
                style={{
                  padding: "0px 30px 12px 50px",
                }}
              >
                <Row>
                  <Col sm={8}>
                    <Placeholder style={{}} as="p" animation="glow">
                      <Placeholder
                        style={{ padding: "150px" }}
                        xs={12}
                      ></Placeholder>
                    </Placeholder>
                  </Col>
                  <Col sm={4}>
                    <Placeholder
                      style={{ display: "flex", justifyContent: "center" }}
                      as="p"
                      animation="glow"
                    >
                      <Placeholder style={{ padding: "20px" }} xs={8} />
                    </Placeholder>

                    <Placeholder
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "-10px",
                      }}
                      as="p"
                      animation="glow"
                    >
                      <Placeholder style={{ padding: "10px" }} xs={8} />
                    </Placeholder>
                    <Placeholder
                      style={{ display: "flex", justifyContent: "center" }}
                      as="p"
                      animation="glow"
                    >
                      <Placeholder style={{ padding: "20px" }} xs={8} />
                    </Placeholder>

                    <Placeholder
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "-10px",
                      }}
                      as="p"
                      animation="glow"
                    >
                      <Placeholder style={{ padding: "10px" }} xs={8} />
                    </Placeholder>
                    <Placeholder
                      style={{ display: "flex", justifyContent: "center" }}
                      as="p"
                      animation="glow"
                    >
                      <Placeholder style={{ padding: "30px" }} xs={10} />
                    </Placeholder>
                    <Placeholder
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                      as="p"
                      animation="glow"
                    >
                      <Placeholder style={{ padding: "10px" }} xs={10} />
                    </Placeholder>
                    <Placeholder
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "-10px",
                      }}
                      as="p"
                      animation="glow"
                    >
                      <Placeholder
                        style={{ padding: "15px", marginRight: "10px" }}
                        xs={1}
                      />
                      <Placeholder style={{ padding: "15px" }} xs={1} />
                    </Placeholder>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <span style={{ fontSize: "14px" }}>
              *Don't forget to download your files. They will be automatically
              discarded within 30 minutes.
            </span>
          </div>
        </>
      ) : (
        <Container>
          <div style={{ marginTop: "100px" }}></div>
          <h2>ini tidak terjadi apa-apa</h2>
        </Container>
      )}
    </>
  );
}

export default Workspace;
