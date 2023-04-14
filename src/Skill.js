import {
  WrenchScrewdriverIcon,
  ClipboardIcon,
  CommandLineIcon,
  ForwardIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import Saya from "./assets/Saya.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skill() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <section className="bg-aksen relative">
      <img
        src={Saya}
        alt="Fotoku"
        className="hidden lg:block absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 object-cover scale-125"
        style={{ objectPosition: "35px -110px" }}
      />
      <div className="py-8 lg:py-16">
        <span className="text-center self-center font-medium text-3xl lg:text-5xl base:font-semibold text-secondary2 ">
          My Skill
        </span>

        {/* Skill baris 1 */}
        <div className="flex flex-col lg:flex-row justify-between mt-16 mx-16">
          <div className="flex flex-col lg:flex-row" data-aos="zoom-in-down">
            <ClipboardIcon className="block h-16 w-auto lg:mr-3 stroke-secondary2 stroke-1 " />
            <span className="text-base font-medium self-center text-secondary2 basis-1/2 text-center lg:text-left mb-6 w-80 lg:w-auto">
              Mampu memahami dan menggunakan Figma dengan baik.
            </span>
          </div>

          <div
            className="flex flex-col-reverse lg:flex-row lg:items-end lg:justify-end"
            data-aos="zoom-in-down"
          >
            <span className="text-base font-medium self-center text-secondary2 basis-3/4 text-center lg:text-end w-80 lg:w-auto">
              Memahami dasar dasar programming
            </span>
            <CommandLineIcon className="block h-16 w-auto lg:ml-3 stroke-secondary2 stroke-1" />
          </div>
        </div>

        {/* Skill baris 2 */}
        <div className="flex flex-col lg:flex-row justify-evenly mt-6 lg:mt-32">
          <div className="flex flex-col lg:flex-row" data-aos="zoom-in-down">
            <WrenchScrewdriverIcon className="block h-16 w-auto lg:mr-3 stroke-secondary2 stroke-1" />
            <span className="text-base font-medium self-center text-secondary2 basis-3/5 text-center lg:text-start mb-6">
              Memahami problem solving menggunakan pendekatan Design Thinking
            </span>
          </div>
          <div
            className="flex flex-col-reverse lg:flex-row lg:items-end lg:justify-end"
            data-aos="zoom-in-down"
          >
            <span className="text-base font-medium self-center text-secondary2 basis-3/5 text-center lg:text-end">
              Cukup mengenal metode pengembangan Agile Scrum
            </span>
            <ForwardIcon className="block h-16 w-auto lg:ml-3 stroke-secondary2 stroke-1" />
          </div>
        </div>

        {/* Skill baris 3 */}
        <div
          className="flex justify-center items-center mt-6 lg:mt-32 "
          data-aos="zoom-in-down"
        >
          <div className="flex flex-col ">
            <PencilIcon className="block h-16 w-auto stroke-secondary2 stroke-1" />
            <p className="text-base font-medium self-center text-secondary2 w-80 ">
              Cukup memahami dasar dan pengoperasian Adobe photoshop dan
              Illustrator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
