import PropTypes from "prop-types";
import { useContext } from "react";
import { Waypoint } from "react-waypoint";

import { waypointContext } from "./providers/WaypointProvider";

export default function Card({ commandment, textId, desc }) {
    const { setActiveWaypoint } = useContext(waypointContext);

    const onEnter = () => {
        console.log(textId);
        setActiveWaypoint((waypoint) => {
            if (waypoint !== textId) {
                return textId;
            }
        });
    };

    return (
        <div>
            <div className="m-4">
                <div
                    id={textId}
                    className="text-right underline decoration-dotted my-2"
                >
                    <Waypoint onEnter={onEnter}>
                        <span className="text-sm">{textId}</span>
                    </Waypoint>
                </div>
                <div className="p-4 bg-gray-100 rounded-xl text-center">
                    <h1 className="font-bold text-lg uppercase">
                        {commandment}
                    </h1>
                </div>
            </div>

            <div className="p-4">
                <div className="leading-8">{desc}</div>
            </div>

            <div className="block lg:hidden text-sm">{textId}</div>
        </div>
    );
}

Card.propTypes = {
    commandment: PropTypes.string,
    textId: PropTypes.string,
    desc: PropTypes.string,
};
