import React, {useState} from "react";
import {MdCompareArrows} from "react-icons/md";
import {IoIosArrowDown} from "react-icons/all";
import {AllLang} from "../allLang/allLang";
import "./replaceLang.scss";

export const ReplaceLang = ({lang1, lang2, setLang1, setLang2}) => {

    const [visibleAllLang1, setVisibleAllLang1] = useState(false);
    const [visibleAllLang2, setVisibleAllLang2] = useState(false);

    const languages = [
        {value: "en", label: "English"},
        {value: "de", label: "German"},
        {value: "uk", label: "Українська"},
        {value: "ru", label: "Русский"},
        {value: "es", label: "Spanish"},
        {value: "fr", label: "French"}
    ];

    const setLang = () => {
        setLang1(lang2);
        setLang2(lang1);
    };

    const itemLang = (lang) => {
        let idLan = languages.findIndex( item => item.value === lang);
        return languages[idLan].label;
    };

    const isVisible  = (visibleAllLang, setVisibleAllLang, setLang) => {
        const langMap = <div className = 'replaceLang__allLang-map' >
            {languages.map((item, idx) => <div key = {idx}>
                <AllLang
                    lang = {item}
                    setLang = {setLang}
                    visibleAllLang = {visibleAllLang}
                    setVisibleAllLang = {setVisibleAllLang} />
            </div>)}
        </div>;

        return visibleAllLang ? langMap : null;
    };

    return <div className = "replaceLang" >
        <div className = "replaceLang__first" >
            <span className = 'replaceLang__lang1' onClick = {() => setVisibleAllLang1(!visibleAllLang1)} >
                <span>{itemLang(lang1)}</span>
                <span className = "replaceLang__arrow-down" ><IoIosArrowDown /></span>
            </span>
            {isVisible(visibleAllLang1, setVisibleAllLang1, setLang1)}
        </div>
        <span onClick = {setLang} className = "setLang" >
            <MdCompareArrows/>
        </span>
        <div className = "replaceLang__last" >
            <span className = "replaceLang__lang2" onClick = {() => setVisibleAllLang2(!visibleAllLang2)} >
            <span>{itemLang(lang2)}</span>
            <span className = "replaceLang__arrow-down" ><IoIosArrowDown /></span>
        </span>
            {isVisible(visibleAllLang2, setVisibleAllLang2, setLang2)}
        </div>
    </div>
};