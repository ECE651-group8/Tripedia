import React from "react";
import "./TopbarOption.css";

function TopbarOption({ active, text, Icon}) {
    return (
        <div className = {`topbarOption ${active && "topbarOption--active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default TopbarOption;
