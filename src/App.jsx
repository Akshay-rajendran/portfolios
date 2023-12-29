import { useEffect, useRef, useState } from "react";

import "./App.css";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import MenuIcon from "@mui/icons-material/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navref = useRef();

  const handleToggle = () => {
    navref.current.classList.toggle("responsive");
  };

  useEffect(() => {
    const fakeAsyncOperation = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2300);
    };

    fakeAsyncOperation();
  }, []);
  const styles = {
    largeIcon: {
      width: 60,
      height: 50,
      color: "white",
      fontSize: "larger",
      margin: "0px",
    },
  };
  return (
    <>
      {isLoading && (
        <div className="loaderbody">
          <div className="loader">
            <div className="loader-inner"></div>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <div className={`body ${isLoading ? "hide" : ""}`}>
            <div className={`image ${isLoading ? "" : "loaded"}`}>
              <div className="nav">
                <h1 className="name">Portfolio</h1>
                <MenuIcon
                  className="dropdown"
                  onClick={handleToggle}
                  style={styles.largeIcon}
                />
                <ul className="centernav" ref={navref}>
                  <li>
                    <a href="#project" className="navwords  a">
                      Project
                    </a>
                  </li>
                  <li>
                    <a href="" className="navwords a">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="navwords a">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="" className="navwords c">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#technology" className="navwords b">
                      Technology
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="intro">
            <img className="aro" src="/user.jpeg" alt="" />
            <div className="intropara">
              <p className="heading">Hello , i am Akshay Rajendran</p>
              <p className="heading">Mern Stack Developer</p>
              <p className="para">
                i am web developer excited about the world of coding and
                creating cool stuff on the internet. I'm still on my learning
                journey, but I've got a solid grasp of the basics like HTML,
                CSS, and JavaScript. I'm diving into exciting technologies like
                React and Node.js to build both the front and back ends of
                websites.
              </p>
            </div>
          </div>
          <p className="project" id="project">
            {" "}
            Some Project
          </p>
          <div className="work">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Blog</p>
                  <p>Take A Look</p>
                </div>
                <div className="flip-card-back">
                  <img className="title extra" src="/blog.png" alt="" />
                  <a href="https://6458fd0d077e6b37222b18b7--brilliant-bombolone-96d7e3.netlify.app/">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Job Portal</p>
                  <p>Take A Look</p>
                </div>
                <div className="flip-card-back">
                  <img className="title extra" src="/job.png" alt="" />
                  <a href="https://job-example-1.onrender.com/">Live Preview</a>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Task Manager</p>
                  <p>Take A Look</p>
                </div>
                <div className="flip-card-back">
                  <img className="title extra" src="/task.png" alt="" />
                  <a href="https://658c64032e9b3d0e73db9101--golden-valkyrie-c6bb09.netlify.app/">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Netflix Clone</p>
                  <p>Take A Look</p>
                </div>
                <div className="flip-card-back">
                  <img className="title extra" src="/clone.png" alt="" />
                  <a href="https://658c72cdb5ce801e2cee52d7--willowy-ganache-28c5d3.netlify.app/">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="project" id="technology">
            Technology
          </p>
          <div className="technology">
            <div>
              <h3 style={{ color: "white", margin: "40px", fontWeight: "800" }}>
                HTML
              </h3>
              <ProgressBar
                now={80}
                label={`${80}%`}
                className=" bg-custom-color"
                style={{
                  width: "80%",
                  height: "25px",
                  borderRadius: "100px",
                  marginLeft: "40px",
                }}
              />
            </div>
            <div>
              <h3 style={{ color: "white", margin: "40px", fontWeight: "800" }}>
                CSS & Bootstarp
              </h3>
              <ProgressBar
                now={90}
                label={`${90}%`}
                className=" bg-custom-color"
                style={{
                  color: "#00cccc",
                  width: "80%",
                  height: "25px",
                  borderRadius: "100px",
                  marginLeft: "40px",
                }}
              />
            </div>
            <div>
              <h3 style={{ color: "white", margin: "40px", fontWeight: "800" }}>
                React
              </h3>
              <ProgressBar
                now={70}
                label={`${70}%`}
                className=" bg-custom-color"
                style={{
                  width: "80%",
                  height: "25px",
                  borderRadius: "100px",
                  marginLeft: "40px",
                }}
              />
            </div>
            <div>
              <h3 style={{ color: "white", margin: "40px", fontWeight: "800" }}>
                Javascript
              </h3>
              <ProgressBar
                now={85}
                label={`${85}%`}
                className="bg-custom-color"
                style={{
                  width: "80%",
                  height: "25px",
                  borderRadius: "100px",
                  marginLeft: "40px",
                }}
              />
            </div>
            <div>
              <h3 style={{ color: "white", margin: "40px", fontWeight: "800" }}>
                Mongo DB && Mysql
              </h3>
              <ProgressBar
                now={70}
                label={`${70}%`}
                className=" bg-custom-color"
                style={{
                  width: "80%",
                  height: "25px",
                  borderRadius: "100px",
                  marginLeft: "40px",
                }}
              />
            </div>
          </div>
          <div>
            <p className="project" id="about">
              About me
            </p>
            <div className="futtor">
              <div className="aboutitem">
                <div>
                  <p className="aboutp">.2022</p>
                  <p>
                    i joined a mern stack course.then after that .after i train
                    myself to become better developer
                  </p>
                  <p>Address: Akshay bhavan pattanakad po cherthala,Alapuzha</p>
                </div>
                <div>
                  <p className="aboutp">.2023 / .2024</p>
                  <p>currently i am working </p>
                  <a href="mailto:akshayaromal9@gmail.com">
                    akshayaromal9@gmail.com
                  </a>

                  <a href="tel:+916282053987"> :6282053987</a>
                  <p className="aboutp">feel free to contact me</p>
                </div>
              </div>
              <div className="socialmedia">
                <ul className="wrapper">
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <span>
                      <a href="https://twitter.com/akshay_k_r_">
                        <i className="fab fa-twitter">
                          <svg
                            viewBox="0 0 16 16"
                            class="bi bi-twitter"
                            fill="currentColor"
                            height="18"
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                          </svg>
                        </i>
                      </a>
                    </span>
                  </li>
                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <span>
                      <a href="https://www.instagram.com/akshayrajedran/?hl=en">
                        <i className="fab fa-instagram">
                          <InstagramIcon />
                        </i>
                      </a>
                    </span>
                  </li>
                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <span>
                      <a href="https://github.com/Akshay-rajendran">
                        <i className="fab fa-instagram">
                          <GitHubIcon />
                        </i>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
