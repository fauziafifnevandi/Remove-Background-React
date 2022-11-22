import React, { useState } from "react";
import NavbarDesktop from "../Layouts/Desktop/NavbarDesktop";
import axios from "axios";
import { FaRegImage } from "react-icons/fa";
import { Container, Button } from "react-bootstrap";

function Workspace() {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [apis, setApi] = useState("");
  const [btnDownload, setBtnDownload] = useState(false);
  const [beforeUpload, setBeforeUpload] = useState("");

  const loadImage = async (e) => {
    const image = e.target.files[0];
    console.log(image);
    setFile(image);
    setPreview(URL.createObjectURL(image));
    const formData = new FormData();
    formData.append("files[]", image);
    console.log(formData);
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
      setBtnDownload(true);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarDesktop></NavbarDesktop>
      <Container>
        <div
          style={{ marginTop: "10rem" }}
          className="d-flex justify-content-center"
        >
          <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
            Upload an image to remove
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>background</h1>
        </div>
        <div className="d-flex justify-content-center">
          <form>
            <div className="field">
              <div className="control">
                <div className="file">
                  <label className="btn btn-primary">
                    <FaRegImage></FaRegImage> Upload Images
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

            {preview ? (
              <figure className="image is-128x128">
                <img
                  style={{ width: "100px" }}
                  src={preview}
                  alt="Preview Image"
                />
              </figure>
            ) : (
              ""
            )}
          </form>
        </div>

        <img
          style={{ maxHeight: "200px" }}
          src={`data:image/jpeg;base64,${apis}`}
        />

        {btnDownload ? (
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
        )}
      </Container>
    </>
  );
}

export default Workspace;
