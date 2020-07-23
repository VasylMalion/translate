import React from "react";
import "./allLang.scss";

export const AllLang = ({lang, setLang, visibleAllLang, setVisibleAllLang}) => {

    const clickLang = () => {
        setLang(lang.value);
        setVisibleAllLang(!visibleAllLang);
    };

    return <div>
        <span onClick = {clickLang} className = "allLang" >
            <span>{lang.label}</span>
        </span>
        <br />
    </div>
};