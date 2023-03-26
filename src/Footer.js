import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer(){
    return(
        <section className="px-8 lg:px-16 bg-black drop-shadow-lg pb-8 lg:pt-8 lg:pb-16">
            <div className="flex flex-col">
                <span className="text-medium text-3xl text-start text-secondary2">Get in touch</span>
                <p className="text-base text-start text-secondary2 mt-2">For business inquiry please send email to <a href="mailto:ryansutawijaya@gmail.com" className="text-blue"><u>ryansutawijaya@gmail.com</u></a></p>
            </div>
             {/* Button Untuk Social Media*/}
             <div className="flex flex-row mt-4">
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
                  <button className="block rounded-full  group-hover:hidden">
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
                  <button className="block rounded-full group-hover:hidden">
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
        </section>
    )
}