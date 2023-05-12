import { useContext, useEffect, useState, useRef } from "react";

import PropTypes from "prop-types";
import { FaFacebook } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

import NavLink from "./NavLink";
import { waypointContext } from "./providers/WaypointProvider";

import { commandments } from "./data";

const dataForNav = commandments.map(({ _id, textId }) => {
    return { _id, textId };
});

export default function Navbar() {
    const { activeWaypoint, setActiveWaypoint } = useContext(waypointContext);

    useEffect(() => {
        if (activeWaypoint === undefined)
            setActiveWaypoint(dataForNav[0].textId);
    });

    return (
        <>
            <div className="hidden lg:grid h-full w-full max-w-xs relative gap-4">
                <div>
                    <div className="leading-6 border-2 border-cyan-400 bg-gray-50 p-4 rounded-lg text-sm max-h-[75vh] overflow-y-auto">
                        {dataForNav.map(({ _id, textId }) => (
                            <NavLink
                                to={textId}
                                key={_id}
                                active={activeWaypoint === textId}
                            />
                        ))}
                    </div>
                </div>

                <div className="self-end w-full max-w-xs mb-4 py-2">
                    <div className="">
                        <div className="text-center">Loharano nakana</div>
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
        </>
    );
}

const ResponsiveNavbar = ({ state, setState }) => {
    const navbar = useRef(null);
    const [attemptTop, setAttemptTop] = useState(false);
    const { activeWaypoint, setActiveWaypoint } = useContext(waypointContext);

    useEffect(() => {
        if (activeWaypoint === undefined)
            setActiveWaypoint(dataForNav[0].textId);
    });
    useEffect(() => {
        console.log(state);
    }, [state]);

    useEffect(() => {
        const verifySticky = (event) => {
            console.log(event);
            console.log("verify");
            if (navbar.current !== undefined) {
                console.log(
                    window.scrollY + navbar.current.getBoundingClientRect().top
                );
                console.log(navbar.current.offsetHeight);
                if (
                    window.scrollY +
                        navbar.current.getBoundingClientRect().top >
                    navbar.current.offsetHeight
                ) {
                    console.log("attempt" + attemptTop);
                } else {
                    setAttemptTop(false);
                    console.log("attempt" + attemptTop);
                }
            }
        };

        document.addEventListener("scroll", verifySticky);

        return () => {
            document.removeEventListener("scroll", verifySticky);
        };
    }, [navbar, activeWaypoint, attemptTop, setActiveWaypoint]);

    return (
        <>
            <div
                ref={navbar}
                className={`w-full lg:hidden bg-white h-[15vh] border border-b p-4 ${
                    state
                        ? "blur"
                        : attemptTop
                        ? "sticky top-0 left-0 z-10"
                        : ""
                } `}
            >
                <div className="flex items-center h-full w-full">
                    <button onClick={() => setState(true)}>
                        <MdMenuBook size={48} className="text-blue-500" />
                    </button>
                </div>
            </div>
            <div
                className={`${
                    state ? "block" : "hidden"
                } w-4/5 bg-white absolute top-0 left-0 h-screen overflow-y-auto border border-l z-10`}
            >
                <div className="p-4 flex justify-end">
                    <button onClick={() => setState(false)}>
                        <FaTimes />
                    </button>
                </div>
                <div className="w-4/5 m-auto">
                    {dataForNav.map(({ _id, textId }) => (
                        <NavLink
                            key={_id}
                            onClick={setState}
                            to={textId}
                            active={activeWaypoint === textId}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

ResponsiveNavbar.propTypes = {
    state: PropTypes.bool,
    setState: PropTypes.func,
};

export { ResponsiveNavbar };
