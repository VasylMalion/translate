import React, {useEffect, useState} from "react";
import {FaRegCopy} from "react-icons/fa";
import {MdClose} from "react-icons/md";
import {api} from "../../api/api";
import Clipboard from "clipboard/dist/clipboard";
import {ReplaceLang} from "../replaceLang/replaceLang";
import "./translate.scss";

export const Translate = () => {

    useEffect(() => {
        new Clipboard('.translate__btnCopy-first');
        new Clipboard('.translate__btnCopy-last');
    }, []);

    const [text, setText] = useState('');
    const [translate, setTranslate] = useState('');
    const [lang1, setLang1] = useState('en');
    const [lang2, setLang2] = useState('uk');

    const changeText = (e) => {
        setText(e.target.value)
    };

    const changeTranslate = (e) => {
        setTranslate(e.target.value)
    };

    const translateText = () => {
        api(text, lang1, lang2).then(data => setTranslate(data));
    };

    const translateField = translate ?
        <div className = "translate__textarea-last" >
            <span>
                <FaRegCopy
                    className = "translate__btnCopy-last"
                    data-clipboard-target=".translate__textarea-translate"/>
            </span>
            <textarea
                className = "translate__textarea-translate"
                value = {translate}
                onChange = {changeTranslate} />
            <span
                className = "translate__bottom" >
            </span>
        </div> :
        <div className = "translate__textarea-last" >
            <textarea
                className = "translate__textarea-translate"
                value = {translate}
                onChange = {changeTranslate} />
        </div>;

    return <React.Fragment>
        <ReplaceLang
            lang1 = {lang1}
            lang2 = {lang2}
            setLang1={setLang1}
            setLang2={setLang2} />
        <div className = "translate" >
            <div className = "translate__textarea-first" >
                <div className = "translate__icons">
                    <span
                        className = "translate__btnCopy-first"
                        data-clipboard-target=".translate__initial-textarea">
                        <FaRegCopy/>
                    </span>
                    <span
                        onClick = {() => setText("")}>
                    <MdClose/>
                    </span>
                </div>
                <textarea
                    placeholder = "Введіть текст"
                    className = "translate__initial-textarea"
                    onChange = {changeText}
                    value = {text}/>
                <div className = "translate__bottom" >
                    <span
                        className = "translate__maxLen" >
                        {text.length} / 3000
                    </span>
                    {text.length ?
                        <button
                            onClick = {translateText}>
                            ПЕРЕКЛАСТИ
                        </button>
                        : null}
                </div>
            </div>
            {translateField}
        </div>
    </React.Fragment>
};