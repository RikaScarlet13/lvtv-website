// import React from "react";
// import { useAuth } from "../context/AuthContext";
// import Navbar from "../components/Navbar";
// import React from "react";
import heroImage from "../assets/heroimage.jpg";
import AuthNavbar from "../components/AuthNavbar";

function HomePage() {
  return (
    <div>
      <AuthNavbar />
      <div className="px-10">
        <div className="divide-y-8 divide-yellow-400 md:px-10 px-4 font-color">
          <div className="flex justify-between items-center mx-auto md:p-20 p-4 md:flex-row flex-col gap-6">
            <div className="mx-auto flex justify-center flex-col space-x-80">
              <div>
                <h1 className="text-4xl">LV.TV</h1>
                <br />
                <h2 className="text-2xl">
                  Livestreaming Website <br />
                  for La Verdad Christian College <br />
                  to improve academic excellence
                </h2>
              </div>
            </div>
            <div className="relative md:w-[500px] flex justify-center items-center w-full">
              <img
                className="flex rounded-sm w-full bg-white shadow hover:shadow-lg object-cover"
                src={heroImage}
                alt="Descriptive text"
              />
            </div>
          </div>
          <div className="md:p-20 px-3 flex justify-center py-10">
            <div>
              <h1 className="text-2xl myFont">About LV.tv</h1>
              <br />
              <p className="indent-8 text-2xl">
                creating a convenient streaming website that provides Bachelor
                of Arts in Broadcasting (BAB) <br />
                students in La Verdad Christian College with an effective and
                accessible platform for streaming
                <br />
                projects among the students of LVCC providing educational
                resources, engagement among students,
                <br />
                participating in live streaming broadcasts, in that way
                enhancing their learning endeavors and <br />
                providing academic excellence in the field of broadcasting.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-centermx-auto md:flex-row flex-col gap-10">
            <div className="flex justify-center items-center flex-col space-y-4 md:px-4 w-full">
              <h1 className="text-2xl myFont py-6">Schedules & Programs</h1>
              <br />
              <div className="flex rounded-sm lg:w-96 min-w-52 w-full h-16 bg-white shadow p-10 hover:shadow-lg">
                <h1 className="text-black">Sample</h1>
              </div>
              <div className="flex rounded-sm lg:w-96  min-w-52 w-full h-24 bg-white shadow p-10 hover:shadow-lg">
                <h1 className="text-black">Sample</h1>
              </div>
              <div className="flex rounded-sm lg:w-96  min-w-52 w-full h-24 bg-white shadow p-10 hover:shadow-lg">
                <h1 className="text-black">Sample</h1>
              </div>
            </div>
            <div className="mx-auto flex justify-center flex-col space-y-4 w-full relative">
              <h1 className="text-2xl">Recent Programs</h1>
              <br />
              <div className="flex rounded-sm md:w-96 w-full h-24 bg-white shadow hover:shadow-lg"></div>
              <div className="flex rounded-sm md:w-96 w-full h-24 bg-white shadow hover:shadow-lg"></div>
            </div>
          </div>
          <div className="flex justify-center mx-auto flex-col mt-10 ">
            <div className="mx-auto flex justify-center flex-col space-x-80">
              <div>
                <h1 className="text-4xl text-center mt-10">
                  School News and Upcoming Events
                </h1>
                <br />
              </div>
            </div>
            <div className="space-y-4 py-5">
              <div className="mx-auto flex rounded-sm w-5/6 h-80 bg-white shadow p-20 hover:shadow-lg"></div>
              <div className="mx-auto flex rounded-sm w-5/6 h-80 bg-white shadow p-20 hover:shadow-lg"></div>
            </div>
          </div>
          {/* <div className="p-20 flex justify-center flex-col">
        <div className="pb-8">
          <h1 className="text-2xl">We want to hear from you!</h1>
          <br />
          <p className="indent-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tortor nisl, dictum id pulvinar ut, fringilla bibendum elit. Morbi
            auctor lectus erat, a interdum magna lobortis vitae. Donec sapien
            purus, mattis id sollicitudin in, dapibus volutpat elit. Quisque
            sed dignissim urna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Suspendisse blandit pharetra sapien at
            fringilla.
          </p>
        </div>
        <div className="mx-auto flex rounded-sm w-5/6 h-12 bg-white shadow p-2 hover:shadow-lg">
          <h2>Search Archives</h2>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
