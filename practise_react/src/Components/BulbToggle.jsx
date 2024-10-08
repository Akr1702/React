import React, { useState } from "react";
const bulbOnImg = "https://th.bing.com/th/id/OIP.zHtYy800GhmmVF2UfkgymwAAAA?rs=1&pid=ImgDetMain"
const bulbOffImg = "https://th.bing.com/th/id/OIP.dTmDdvOWEO-0s7t0Z3Yr4gAAAA?rs=1&pid=ImgDetMain"

const BulbToggle = () => {
    const [isOn, setIsOn] = useState(false);
    const toggleBulb = () => {
        setIsOn(!isOn);
    };
    return (
        <div>
            <h1>BulbToggle</h1>

            <img src={isOn ? bulbOnImg : bulbOffImg} alt="bulboff.png" />
            <br />
            <button onClick={toggleBulb}>Click me</button>
        </div>
    )
}

export default BulbToggle