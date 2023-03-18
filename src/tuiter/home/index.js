import React from "react";
import TuitsListComponent from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsListComponent />
        </>
    );
}
export default HomeComponent;