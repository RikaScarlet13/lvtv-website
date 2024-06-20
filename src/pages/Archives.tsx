import AuthNavbar from "../components/AuthNavbar";

function Archives() {
    let items = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return (
        <div>
            <AuthNavbar />
            <div className="p-20">
                <p className="font-color text-3xl font-bold flex justify-center">
                    Archives
                </p>
                <div className="grid grid-cols-2 ">
                    <div className="justify-center">
                        <h1 className="font-color text-2xl font-bold justify-center flex">
                            Weekly Broadcast
                        </h1>

                        {items.length === 0 && <p>No item found</p>}
                        <div>
                            {
                                <ul className="flex flex-col gap-3 justify-items-center p-10 w-80 mx-5">
                                    {items.map((item) => (
                                        <li className="flex rounded-sm w-100 bg-white shadow p-10 hover:shadow-lg transition delay-100 duration-100 ease-in-out hover:scale-105 transform ">
                                            <li
                                                className="flex justify-items-center"
                                                key={item}
                                            >
                                                {item}
                                            </li>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items-center pt-96">
                        <div style={{ height: "30vh" }}></div>
                        <h1 className="font-color text-2xl font-bold justify-center flex">
                            Explore Past Archives
                        </h1>
                        <button className="text-xl rounded-lg bg-yellow-400 font-color px-5 py-2 mr-5 hover:text-white hover:bg-blue-300 mt-5">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Archives;
