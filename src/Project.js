import React from "react";
import { SocialIcon } from "react-social-icons";
import project1 from "./assets/idea_finder.jpg";
import project2 from "./assets/nakam.jpg";
import project3 from "./assets/outness.jpg";
import code_project1 from "./assets/simas.jpg";
import code_project2 from "./assets/jedekan.jpg";
import code_project3 from "./assets/widuri.jpg"
import Modal from "./Modals";

export default function Projects() {
  return (
    <div >
      <section className=" mx-8 lg:mx-16 py-8 lg:py-16 " id="Projects">
        <span className="font-medium text-3xl lg:text-5xl text-secondary1">
          Selected Projects
        </span>

        {/* UI/UX Projects */}
        <div className="flex seelf-start mt-4 lg:mt-8">
          <span className="font-bold text-xl lg:text-3xl text-secondary1 ">
            UI/UX Projects
          </span>
        </div>
        {/* Project1 */}
        <div className="flex flex-col lg:flex-row justify-between my-4 lg:my-4">
          <div className="basis-0,3">
            <a
              href="https://dribbble.com/shots/19180403-IDHE-Idea-Finder-App"
              target={"_blank"}
            >
              <img
                className="w-full h-auto mb-3 rounded-lg hover:scale-105 transition hover:duration-500 md:transform-none"
                src={project1}
                alt="Project1"
              />
            </a>
            <p className="flex mb-2 text-xl text-secondary1 font-semibold items-start justify-start">
              IDHE - Idea Finder App
            </p>
            <div className="flex flex-row">
              <a
                href="https://dribbble.com/shots/19180403-IDHE-Idea-Finder-App"
                target={"_blank"}
                className="mb-8 "
              >
                <SocialIcon
                  className="mr-2 "
                  network="dribbble"
                  style={{ height: 24, width: 24 }}
                  bgColor="#CCCCCC"
                  fgColor="#343434"
                />
                <span className="text-base font-normal align-middle text-secondary2 ">
                  Dribbble
                </span>
              </a>
            </div>
          </div>

          {/* Project2 */}
          <div className="basis-0,3 ">
            <a
              href="https://dribbble.com/shots/19180403-IDHE-Idea-Finder-App"
              target={"_blank"}
            >
              <img
                className="w-full h-auto mb-3 rounded-lg hover:scale-105 transition hover:duration-500 md:transform-none"
                src={project2}
                alt="Project2"
              />
            </a>
            <p className="flex mb-2 text-xl text-secondary1 font-semibold items-start justify-start">
              Restaurant Booking App
            </p>
            <div className="flex flex-row">
              <a
                href="https://dribbble.com/shots/17329923-Restaurant-Booking-App"
                target={"_blank"}
                className="mb-8"
              >
                <SocialIcon
                  className="mr-2 "
                  network="dribbble"
                  style={{ height: 24, width: 24 }}
                  bgColor="#CCCCCC"
                  fgColor="#343434"
                />
                <span className="text-base font-normal align-middle text-secondary2">
                  Dribbble
                </span>
              </a>
            </div>
          </div>

          {/* Project3 */}
          <div className="basis-0,3 ">
            <a
              href="https://dribbble.com/shots/19180403-IDHE-Idea-Finder-App"
              target={"_blank"}
            >
              <img
                className="w-full h-auto mb-3 rounded-lg hover:scale-105 transition hover:duration-500 md:transform-none"
                src={project3}
                alt="Project3"
              />
            </a>
            <p className="flex mb-2 text-xl text-secondary1 font-semibold items-start justify-start">
              Outness - Event Finder App
            </p>
            <div className="flex flex-row">
              <a
                href="https://dribbble.com/shots/17497504-Outness-Event-Finder-App"
                target={"_blank"}
                className="mb-8"
              >
                <SocialIcon
                  className="mr-2 "
                  network="dribbble"
                  style={{ height: 24, width: 24 }}
                  bgColor="#CCCCCC"
                  fgColor="#343434"
                />
                <span className="text-base font-normal align-middle text-secondary2 ">
                  Dribbble
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Programming Project */}
        <div className="flex seelf-start mt-4 lg:mt-8">
          <span className="font-bold text-xl lg:text-3xl text-secondary1 ">
            Programming Projects
          </span>
        </div>
        {/* Project1 */}
        <div className="flex flex-col lg:flex-row justify-between my-4 lg:my-4">
          <div className="basis-0,3">
            <a
              href="https://github.com/lamkhil/react_batu_air"
              target={"_blank"}
            >
              <img
                className="w-full h-auto mb-3 rounded-lg hover:scale-105 transition hover:duration-500 md:transform-none"
                src={code_project1}
                alt="code_project1"
              />
            </a>
            <p className="flex mb-2 text-xl text-secondary1 font-semibold items-start justify-start text-start">
              SIMAS - Aplikasi Pemantauan Air Sungai kota Batu
            </p>
            <div className="flex flex-row">
              <a
                href="https://github.com/lamkhil/react_batu_air"
                target={"_blank"}
                className="mb-8 "
              >
                <SocialIcon
                  className="mr-2 "
                  network="github"
                  style={{ height: 24, width: 24 }}
                  bgColor="#CCCCCC"
                  fgColor="#343434"
                />
                <span className="text-base font-normal align-middle text-secondary2 ">
                Github
                </span>
              </a>
            </div>
          </div>

          {/* Project2 */}
          <div className="basis-0,3 ">
            <a
              href="https://github.com/bigshifu/Jedekan"
              target={"_blank"}
            >
              <img
                className="w-full h-auto mb-3 rounded-lg hover:scale-105 transition hover:duration-500 md:transform-none"
                src={code_project2}
                alt="code_project2"
              />
            </a>
            <p className=" mb-2 text-xl text-secondary1 font-semibold text-start">
              Jedekan - Aplikasi Game Tebak Gambar
            </p>
            <div className="flex flex-row">
              <a
                href="https://github.com/bigshifu/Jedekan"
                target={"_blank"}
                className="mb-8"
              >
                <SocialIcon
                  className="mr-2 "
                  network="github"
                  style={{ height: 24, width: 24 }}
                  bgColor="#CCCCCC"
                  fgColor="#343434"
                />
                <span className="text-base font-normal align-middle text-secondary2">
                Github
                </span>
              </a>
            </div>
          </div>

          {/* Project3 */}
          <div className="basis-0,3 ">
            <a
              href="https://github.com/lamkhil/widuri"
              target={"_blank"}
            >
              <img
                className="w-full h-auto mb-3 rounded-lg hover:scale-105 transition hover:duration-500 md:transform-none"
                src={code_project3}
                alt="code_Project3"
              />
            </a>
            <p className=" mb-2 text-xl text-secondary1 font-semibold text-start">
              Widuri - Aplikasi Pencatatan Keuangan
            </p>
            <div className="flex flex-row">
              <a
                href="https://github.com/lamkhil/widuri"
                target={"_blank"}
                className="mb-8"
              >
                <SocialIcon
                  className="mr-2 "
                  network="github"
                  style={{ height: 24, width: 24 }}
                  bgColor="#CCCCCC"
                  fgColor="#343434"
                />
                <span className="text-base font-normal align-middle text-secondary2 ">
                  Github
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="my-8 lg:my-16">
          <Modal />
        </div>
      </section>
    </div>
  );
}
