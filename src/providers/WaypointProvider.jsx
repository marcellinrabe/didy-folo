import { createContext, useState } from "react";

const waypointContext = createContext(undefined);

export { waypointContext };

// eslint-disable-next-line react/prop-types
export default function WaypointProvider({ children }) {
    const [activeWaypoint, setActiveWaypoint] = useState(undefined);

    return (
        <waypointContext.Provider value={{ activeWaypoint, setActiveWaypoint }}>
            {children}
        </waypointContext.Provider>
    );
}
