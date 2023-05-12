import { FaFacebook } from "react-icons/fa";
import { useContext, useEffect } from "react";

import NavLink from "./NavLink";
import { waypointContext } from "./providers/WaypointProvider";

import { commandments } from "./data";

export default function Navbar() {
    const { activeWaypoint, setActiveWaypoint } = useContext(waypointContext);

    const dataForNav = commandments.map(({ _id, textId }) => {
        return { _id, textId };
    });

    useEffect(() => {
        if (activeWaypoint === undefined)
            setActiveWaypoint(dataForNav[0].textId);
    });

    return (
        <div className="grid h-full w-full max-w-xs overflow-y-auto">
            <div>
                <div className="leading-6 border-2 border-cyan-400 bg-gray-50 p-4 rounded-lg text-sm">
                    {dataForNav.map(({ _id, textId }) => (
                        <NavLink
                            to={textId}
                            key={_id}
                            active={activeWaypoint === textId}
                        />
                    ))}
                </div>
            </div>

            <div className="self-end">
                <div className="">
                    <div className="text-center">Loharano nakana :</div>
                    <div className="flex justify-center">
                        <a href="https://www.facebook.com/ilayhiraka.lova/posts/483657446028587">
                            <FaFacebook
                                size={48}
                                className="text-blue-500 hover:text-blue-900"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
