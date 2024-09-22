
import React, { useEffect, useState } from "react";
import './../styles/App.css';
// import { set } from "cypress/types/lodash";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
    const [data, setData] = useState({
        temperature: 0,
        conditions: "Cold"
    });

    useEffect(() => {
        setTimeout(() => {
            setData({
                temperature: 25,
                conditions: "Sunny"
            }, 1000);
        })
    });

    return (
        <div style={{padding: "10px"}}>
            {/* Do not remove the main div */}
            <WeatherDisplay data={data}/>
        </div>
    )
}

export default App