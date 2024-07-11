import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { BiSolidBookmark } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import imggg from "../public/Group.png";
import Image from 'next/image';


import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <>
      <div className="Navbar">
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "FFFFFF", color: "black" }}
        >
          <div className="logo">
            <img
              src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8SVoUDB2-YW-X1yEaRtlaHdZ4AOlKp1vuyPIUB7EpB1G945jFRhY~A-brlpu7oMe8uQHWzMtXuSQwRAz8bQvFLn5rechEF-rZgRwStM4wqjQlWFP4oxAXuQiGuHU2S3sUgSlnZxOUBGEN4pg1~JXe5aM-YnRgOUiss~RWhzgWCxuxnlKrfcoU6Qw6E0GO~GR5iXNLBD8MG9GWgzkRKfnCv2YGW3vTB~YUYQheqog69tZlefLNMvFeXegbg0C6F6u0ti-nnPUktIWUIxwwjtNFAtTKJqYv7IAJ2bL016XkqjolsT2XBtwtfsXUQVSxNA05nckqRgVRXBwTw0szZGxQ__"
              alt="..."
            />
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <button>
                    <FaSearch className="a22" size={12} />
                  </button>
                </td>
                <td>
                  <button>
                    <FaBell className="a21" />
                  </button>
                </td>
                <td>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="input-group">
            <div className="form-outline" data-mdb-input-init>
              <input
                style={{ backgroundColor: "#EBEDF0" }}
                type="search"
                id="form1"
                placeholder="Search here..."
                className="form-control searchinput"
              />
            </div>
            <button
              style={{ background: "#8064A2", border: "none" }}
              type="button"
              className="btn btn-primary"
              data-mdb-ripple-init
            >
              <FaSearch size={12} />
            </button>
          </div>
          <div className="na">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <FaCompass size={15} style={{ color: "#8064A2" }} />
                        </td>
                        <td>
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="abc">Explore</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      People - Community
                    </a>
                    <a className="dropdown-item" href="#">
                      Places - Venues
                    </a>
                    <a className="dropdown-item" href="#">
                      Programs - Events
                    </a>
                    <a className="dropdown-item" href="#">
                      Products - Store
                    </a>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="abc">Hobbies</span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li>
                  <BiSolidBookmark
                    style={{ color: "#8064A2" }}
                    className="a1"
                  />
                </li>
                <li>
                  <FaBell style={{ color: "#8064A2" }} className="a2" />
                </li>
                <li>
                  <FaShoppingCart style={{ color: "#8064A2" }} className="a3" />
                </li>
                <li>
                  <div className="navbtn">Sign in</div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


      <section className="Hero_Section">
<div className="row" style={{backgroundColor:"#F7F5F9"}}>
        <div className="col-lg-6" style={{backgroundColor:"#F7F5F9"}}>
          <div id="c1">
        <span className="herotext">Explore your hobby or passion</span>
        <div className="d1">
        <span className="herotext1">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. <span className="d11">Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</span>
        </span>
        </div>
        <div className="d2">
        <span className="herotext2">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</span>
        </div>
        </div>
        <div className="img pq">
        <Image src={imggg} alt="..."/>
        </div>
        </div>
        <div className="col-lg-6 hero" style={{backgroundColor:"#F7F5F9"}}>
          <div className="c2 a">
            <table>
              <tbody>
                <tr>
                  <td>
                  <a href="#" style={{color:"black",textDecoration:"none"}}><span className="signin">Sign In</span></a>
                  </td>
                  <td>
                  <a href="#" style={{color:"black",textDecoration:"none"}}><span className="joinin">Join In</span></a>

                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{marginTop:"30px"}}>
            <button>
              <span className="bb1">Continue with Google</span>
            </button>
            </div>
           <div style={{marginTop:"30px"}}>
            <button>
             <span className="bb2">Continue with Facebook</span> 
            </button>
            </div>
            <hr style={{marginTop:"30px" ,width:"60%"}}/>
            <span className="d3">or connect with</span>
            <div>
            <input type="email" className="email" placeholder="Email" style={{backgroundColor:"#FFFFFF"}}></input>
            <input type="password" className="email" placeholder="Password" style={{backgroundColor:"#FFFFFF"}}></input><br></br>
            <table>
              <tbody>
                <tr>
                  <td>
                  <input type="checkbox"></input><span className="Remember">Remember Me</span>
                  </td>
                  <td>
                  <span className="Remember1">Forgot Password?</span>

                    </td>
                </tr>
              </tbody>
            </table>
            <div style={{marginTop:"20px"}}>
            <button>
             <span className="bb3">Continue</span> 
            </button>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col" >
          <div className="c2" style={{backgroundColor:"#F7F5F9",paddingTop:"0px"}}>
            <table>
              <tbody>
                <tr>
                  <td>
                  <a href="#" style={{color:"black",textDecoration:"none"}}><span className="signin">Sign In</span></a>
                  </td>
                  <td>
                  <a href="#" style={{color:"black",textDecoration:"none"}}><span className="joinin">Join In</span></a>

                  </td>
                </tr>
              </tbody>
            </table>
            
            <div>
            <input type="email" className="email" placeholder="Email" style={{backgroundColor:"#FFFFFF"}}></input><br></br>
            <input type="password" className="email" placeholder="Password" style={{backgroundColor:"#FFFFFF"}}></input><br></br>
            <table>
              <tbody>
                <tr>
                  <td>
                  <input className="Remember" type="checkbox"></input><span className="abc">Remember Me</span>
                  </td>
                  <td>
                  <span className="Remember1">Forgot Password?</span>

                    </td>
                </tr>
              </tbody>
            </table>
            <div style={{marginTop:"30px"}}>
            <button>
              <span className="bb1">Continue with Google</span>
            </button>
            </div>
           <div style={{marginTop:"30px"}}>
            <button>
             <span className="bb2">Continue with Facebook</span> 
            </button>
            
            </div>
            
            <hr style={{marginTop:"30px" ,width:"60%"}}/>
            <span className="d3">or connect with</span>
            
            <div style={{marginTop:"20px"}}>
            <button style={{backgroundColor:"#8064A2"}}>
             <span className="bb3">Continue</span> 
            </button>
            </div>
            </div>
          
        <div className="col" style={{backgroundColor:"#F7F5F9"}}>
        <div className="img">
        <Image className="im" style={{width:"1000px"}} src={imggg} alt="..."/>
        </div>
        </div>
        </div>
      </div>
  </section>

    </>
  );
}
