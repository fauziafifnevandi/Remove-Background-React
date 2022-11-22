import { useState, React } from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

function NavItemDesktop() {
  const [NavClass, setNavClass] = useState(1);
  const [ShowDiv, setShowDiv] = useState(1);

  const navList = [
    { id: 1, item: "People", link: "#people" },
    { id: 2, item: "Product", link: "#product" },
    { id: 3, item: "Car", link: "#car" },
    { id: 4, item: "Animals", link: "#animals" },
    { id: 5, item: "Graphic", link: "#graphic" },
    { id: 6, item: "Real Estate", link: "#realestate" },
  ];

  const navListImg = [
    {
      id: 1,
      before: [
        {
          title: "Original Image",
          src_img:
            "https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg",
        },
      ],
      after: [
        {
          title: "Removed Background",
          src_img:
            "https://www.slazzer.com/static/images/home-page/individual-image-remove-bg.jpg",
        },
      ],
    },
    {
      id: 2,
      before: [
        {
          title: "Original Image",
          src_img:
            "https://www.slazzer.com/static/images/home-page/ecommerce-image-upload.jpg",
        },
      ],
      after: [
        {
          title: "Removed Background",
          src_img:
            "https://www.slazzer.com/static/images/home-page/ecommerce-image-remove-bg.jpg",
        },
      ],
    },
    {
      id: 3,
      before: [
        {
          title: "Original Image",
          src_img:
            "https://www.slazzer.com/static/images/home-page/car-image-upload.jpg",
        },
      ],
      after: [
        {
          title: "Removed Background",
          src_img:
            "https://www.slazzer.com/static/images/home-page/car-image-remove-bg.jpg",
        },
      ],
    },
    {
      id: 4,
      before: [
        {
          title: "Original Image",
          src_img:
            "https://www.slazzer.com/static/images/home-page/animal-image-upload.jpg",
        },
      ],
      after: [
        {
          title: "Removed Background",
          src_img:
            "https://www.slazzer.com/static/images/home-page/animal-image-remove-bg.jpg",
        },
      ],
    },
    {
      id: 5,
      before: [
        {
          title: "Original Image",
          src_img:
            "https://www.slazzer.com/static/images/home-page/designer-image-upload.jpg",
        },
      ],
      after: [
        {
          title: "Removed Background",
          src_img:
            "https://www.slazzer.com/static/images/home-page/designer-image-remove-bg.jpg",
        },
      ],
    },
    {
      id: 6,
      before: [
        {
          title: "Original Image",
          src_img:
            "https://www.slazzer.com/static/images/home-page/realestate-image-upload.jpg",
        },
      ],
      after: [
        {
          title: "Removed Background",
          src_img:
            "https://www.slazzer.com/static/images/home-page/realestate-image-remove-bg.jpg",
        },
      ],
    },
  ];

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <h1>Visualize the power of AI</h1>
      </div>
      <div className="nav-tab mt-3">
        <ul>
          {navList.map(function (navlist) {
            return (
              <li key={navlist.id}>
                <button
                  style={{ backgroundColor: "transparent" }}
                  href={navlist.link}
                  className={NavClass === navlist.id ? "active" : ""}
                  onClick={function () {
                    setNavClass(navlist.id);
                    setShowDiv(navlist.id);
                  }}
                >
                  {navlist.item}
                </button>
                {/* <a
                  href={navlist.link}
                  className={NavClass === navlist.id ? "active" : ""}
                  onClick={function () {
                    setNavClass(navlist.id);
                    setShowDiv(navlist.id);
                  }}
                >
                  {navlist.item}
                </a> */}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-3">
        {navListImg.map(function (navListImgs) {
          return ShowDiv === navListImgs.id ? (
            <ul>
              <div className="d-flex justify-content-center fauzi">
                <Fade cascade damping={0.1}>
                  <li style={{ listStyle: "none", position: "relative" }}>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {navListImgs.before[0].title}
                    </span>
                    <br></br>
                    <img
                      style={{
                        maxHeight: "800px",
                        maxWidth: "450px",
                        position: "relative",
                        marginRight: "90px",
                      }}
                      src={navListImgs.before[0].src_img}
                    ></img>

                    <img
                      style={{
                        maxHeight: "300px",
                        position: "absolute",
                        zIndex: "10",
                        right: "485px",
                        top: "150px",
                      }}
                      src="https://www.slazzer.com/static/images/banner-arrow.png"
                    ></img>
                    <img
                      style={{
                        maxHeight: "800px",
                        maxWidth: "450px",
                        position: "relative",
                        marginLeft: "50px",
                      }}
                      src={navListImgs.after[0].src_img}
                    ></img>
                    <div className="d-flex justify-content-end">
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {navListImgs.after[0].title}
                      </span>
                    </div>
                  </li>
                </Fade>
              </div>
            </ul>
          ) : (
            ""
          );
        })}
      </div>
    </Container>
  );
}

export default NavItemDesktop;
