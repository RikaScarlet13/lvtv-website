import { useRef } from "react";
import profilePic from "../assets/profile-pic.jpg";
import AuthNavbar from "../components/AuthNavbar";

const TeleRadio = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const openOwncastPage = () => {
        window.open("http://localhost:8080", "_blank");
    };

    const handleIframeClick = () => {
        openOwncastPage();
    };

    const teams = [
        {
            name: "Name1",
            imageUrl: profilePic,
        },
        {
            name: "Name2",
            imageUrl: profilePic,
        },
        {
            name: "Name3",
            imageUrl: profilePic,
        },
        {
            name: "Name4",
            imageUrl: profilePic,
        },
    ];
    return (
        <div>
            <AuthNavbar />
            {/* Add your other components and content here */}
            <div className="divide-y-8 px-10 m-10 divide-yellow-400">
                <div className="m-10">
                    <div className="flex justify-center p-5 text-4xl font-bold font-color 2-[92%] mx-auto">
                        <h1>TeleRadio</h1>
                    </div>
                    <div className="">
                        <div className="flex justify-center w-full h-full items-center">
                            <div className="flex justify-center relative w-fit p-10">
                                <div
                                    className="h-[480px] w-[854px] bg-blue-100/40 z-10 absolute cursor-pointer"
                                    onClick={openOwncastPage}
                                />
                                <iframe
                                    src="http://localhost:8080/embed/video"
                                    width="854"
                                    height="480"
                                    frameBorder={0}
                                    scrolling="no"
                                    //   className="w-full "
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Upcoming Live END */}

                {/* Weekly Host Start */}
                <div>
                    <div className="md:px-20 text-2xl font-bold font-color md:text-left text-center w-full my-10">
                        Weekly Host
                    </div>
                    <div>
                        <div className="flex justify-around flex-row flex-wrap gap-10">
                            {teams.map((person) => (
                                <div className="flex justify-center items-center flex-col gap-4 rounded-md p-7">
                                    <img
                                        src={person.imageUrl}
                                        alt="Profile"
                                        className="object-cover w-full rounded-full"
                                    />
                                    <h2 className="text-2xl font-bold font-color">
                                        {person.name}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-around m-10"></div>
                    </div>
                </div>
                {/* Weekly Host End */}

                {/* Programs Start */}
                <div>
                    <div>
                        <div className="flex justify-center pt-10 text-2xl font-bold font-color">
                            Programs
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center flex-row flex-wrap gap-10">
                            <div className="m-5">
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg"></div>
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg"></div>
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg"></div>
                            </div>
                            <div className="m-5">
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg"></div>
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg"></div>
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        /* Programs End */
    );
};
export default TeleRadio;
