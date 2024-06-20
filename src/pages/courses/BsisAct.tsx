const BsisAct = () => {
    return (
        <div>
            {/* Add your other components and content here */}
            <div className="divide-y-8 px-10 m-10 divide-yellow-400">
                <div className="m-10">
                    <div className="flex justify-center p-10 text-4xl font-bold font-color 2-[92%] mx-auto">
                        <h1>BSIS / ACT</h1>
                    </div>
                    <div>
                        <div className="flex justify-around h-96 m-10">
                            <div className="flex rounded-sm size-full mx-20 bg-white shadow hover:shadow-lg"></div>
                        </div>
                    </div>
                </div>
                {/* Course End */}

                {/* Previous Broadcast Start */}
                <div>
                    <div>
                        <div className="pl-20 m-10 text-2xl font-bold font-color">
                            Featured Broadcast
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-around h-96 m-10">
                            <div className="flex w-1/2 rounded-sm mx-20 bg-white shadow hover:shadow-lg"></div>
                        </div>
                    </div>

                    <div className="m-10">
                        <div className="pl-20 text-xl font-bold font-color">
                            Broadcast Title
                        </div>
                        <div className="pl-20 text-ml indent-5 font-color">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Optio itaque, reprehenderit sit dolorem libero
                            laborum, reiciendis esse mollitia, delectus pariatur
                            nobis corrupti maxime id exercitationem quia nihil
                            eos voluptatem quis.
                        </div>
                    </div>
                </div>
                {/* Previous Broadcast End */}

                {/* Events Start */}
                <div>
                    <div>
                        <div className="flex justify-center pt-10 text-2xl font-bold font-color">
                            Events
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center">
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
        /* Events End */
    );
};
export default BsisAct;
