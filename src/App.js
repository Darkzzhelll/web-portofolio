import "./App.css";
import Navbar from "./Navbar.js";
import Tools from "./Tools.js";
import Project from "./Project.js";
import Profile from "./assets/profile.png";
import Skill from "./Skill.js";
import Footer from "./Footer";
import CV from "./assets/cv.pdf"
import { Component, useEffect } from "react";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header>
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="basis-2/5 flex flex-col items-start self-center mx-8 lg:ml-16">
              <span className="md:text-2xl text-base text-secondary1">
                Hello, i'am Ryan Sutawijaya
              </span>
              <h1 className="text-2xl md:text-4xl text-aksen md:mt-1 mt-auto font-bold">
                Junior UI/UX Designer
              </h1>
              <p className="text-start text-sm text-secondary2 md:text-base md:mt-6 mt-3">
                I’am Ryan Sutawijaya from Malang, Indonesian. I am beginner
                ui/ux designer who will learn and keep to continuously improve
                my ui/ux design skills. My best experience is i ever made
                capstone project in a goverment program
              </p>
              {/* EMAIL ME */}

              <div className="flex flex-row mt-7 md:mt-10">
                <a
                  href="mailto:ryansutawijaya@gmail.com "
                  className="flex mr-3 rounded-md bg-aksen text-secondary1 px-4 py-3 self-center hover:bg-secondary2 hover:text-primary"
                >
                  <EnvelopeIcon
                    className="block h-6 w-6 mr-2 hover:fill-primary"
                    aria-hidden="true"
                  />
                  <p className="lg:text-base text-sm self-center ">Email Me</p>
                </a>

                {/* DOWNLOAD CV */}
                <a
                  href={CV} 
                  target="_blank"
                  className="flex border border-aksen hover:bg-secondary2 hover:text-primary rounded-md text-secondary1 px-4 py-3 self-center"
                >
                  <ArrowDownTrayIcon
                    className="animate-bounce block h-6 w-6 mr-2 hover:fill-primary"
                    aria-hidden="true"
                  />
                  <p className="lg:text-base text-sm ">Download CV</p>
                </a>
              </div>

              {/* Button Untuk Social Media*/}
              <div className="flex flex-row mt-3 mb-8">
                {/* Button Dribble */}
                <a
                  href="https://dribbble.com/Darkzzhelll"
                  target={"_blank"}
                  className="mr-2 group"
                >
                  <button className="block rounded-full group-hover:hidden">
                    <SocialIcon
                      network="dribbble"
                      style={{ height: 40, width: 40 }}
                      bgColor="#CCCCCC"
                    />
                  </button>
                  <button className="hidden group-hover:flex px-3 py-2 rounded-full bg-secondary2">
                    <SocialIcon
                      network="dribbble"
                      style={{ height: 24, width: 24 }}
                      className="mr-2"
                      bgColor="#343434"
                    />
                    <span className=" lg:text-base text-sm font-medium self-center">
                      Dribbble
                    </span>
                  </button>
                </a>

                {/* Button Instagram */}
                <a
                  href="https://www.instagram.com/ryansutawijaya/"
                  target={"_blank"}
                  className="mr-2 group"
                >
                  <button className="block rounded-full group-hover:hidden">
                    <SocialIcon
                      network="instagram"
                      style={{ height: 40, width: 40 }}
                      bgColor="#CCCCCC"
                    />
                  </button>
                  <button className="hidden group-hover:flex px-3 py-2 rounded-full bg-secondary2">
                    <SocialIcon
                      network="instagram"
                      style={{ height: 24, width: 24 }}
                      className="mr-2"
                      bgColor="#343434"
                    />
                    <span className=" lg:text-base text-sm font-medium self-center">
                      Instagram
                    </span>
                  </button>
                </a>

                {/* Button Facebook */}
                <a
                  href="https://www.facebook.com/ryan.sutawijayahunter/"
                  target={"_blank"}
                  className="mr-2 group"
                >
                  <button className="block  rounded-full  group-hover:hidden">
                    <SocialIcon
                      network="facebook"
                      style={{ height: 40, width: 40 }}
                      bgColor="#CCCCCC"
                    />
                  </button>
                  <button className="hidden group-hover:flex px-3 py-2 rounded-full bg-secondary2 ">
                    <SocialIcon
                      network="facebook"
                      style={{ height: 24, width: 24 }}
                      className="mr-2"
                      bgColor="#343434"
                    />
                    <span className=" lg:text-base text-sm font-medium self-center">
                      Facebook
                    </span>
                  </button>
                </a>

                {/* Button Github */}
                <a
                  href="https://github.com/Darkzzhelll"
                  target={"_blank"}
                  className="mr-2 group"
                >
                  <button className="blockrounded-full group-hover:hidden">
                    <SocialIcon
                      network="github"
                      style={{ height: 40, width: 40 }}
                      bgColor="#CCCCCC"
                    />
                  </button>
                  <button className="hidden group-hover:flex px-3 py-2 rounded-full bg-secondary2">
                    <SocialIcon
                      network="github"
                      style={{ height: 24, width: 24 }}
                      className="mr-2"
                      bgColor="#343434"
                    />
                    <span className=" lg:text-base text-sm font-medium self-center">
                      Github
                    </span>
                  </button>
                </a>


              </div>
            </div>
            <div className="basis-1/2">
              <img
                className="hidden h-screen w-full object-cover lg:block"
                style={{ objectPosition: "0px 10px" }}
                src={Profile}
                alt="Your Company"
              />
              <img
                className="block h-fit w-full lg:hidden mb-5"
                src={Profile}
                alt="Your Company"
              />
            </div>
          </div>
          <div>
            <Skill />
          </div>
          <div>
            <Project />
          </div>
          <div>
            <Tools/>
          </div>
          <div>
            <Footer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
