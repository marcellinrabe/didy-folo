import { useState } from "react";
import { FaFacebook } from "react-icons/fa";

import Card from "./Card";
import Navbar, { ResponsiveNavbar } from "./Navbar";
import WaypointProvider from "./providers/WaypointProvider";

import { commandments } from "./data";

export default function App() {
    const [navbarResponsiveActive, setNavbarResponsiveActive] = useState(false);

    return (
        <WaypointProvider>
            <div className="w-screen h-screen overflow-hidden lg:flex">
                <ResponsiveNavbar
                    state={navbarResponsiveActive}
                    setState={setNavbarResponsiveActive}
                />
                <div className="flex-auto hidden lg:block lg:w-1/4 p-4">
                    <Navbar />
                </div>
                <div className="flex-auto lg:w-3/4 h-screen overflow-y-auto">
                    <div className={`${navbarResponsiveActive ? "blur" : ""}`}>
                        <div className="flex w-full justify-center">
                            <div className="max-w-2xl mx-8">
                                {commandments.map(
                                    ({ _id, textId, commandment, desc }) => (
                                        <div className="mb-8" key={_id}>
                                            <Card
                                                key={_id}
                                                textId={textId}
                                                commandment={commandment}
                                                desc={desc}
                                            />
                                        </div>
                                    )
                                )}
                                <div className="lg:hidden w-full mb-4 py-2">
                                    <div className="">
                                        <div className="text-center">
                                            Loharano nakana
                                        </div>
                                        <div className="flex justify-center">
                                            <a href="https://www.facebook.com/ilayhiraka.lova/posts/483657446028587">
                                                <FaFacebook
                                                    size={48}
                                                    className="text-blue-500 hover:scale-90 hover:text-blue-600"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WaypointProvider>
    );
}
