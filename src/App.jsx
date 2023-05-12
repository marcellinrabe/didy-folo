import Card from "./Card";
import Navbar from "./Navbar";
import WaypointProvider from "./providers/WaypointProvider";

import { commandments } from "./data";

export default function App() {
    return (
        <WaypointProvider>
            <div className="w-screen h-screen overflow-hidden flex">
                <div className="flex-auto w-1/4 h-full p-4">
                    <Navbar />
                </div>
                <div className="flex-auto w-3/4 h-full overflow-y-auto">
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
                        </div>
                    </div>
                </div>
            </div>
        </WaypointProvider>
    );
}
