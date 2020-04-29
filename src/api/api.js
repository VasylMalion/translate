const axios = require('axios').default;

const apiBase = " https://translate.yandex.net/api/v1.5/tr/translate";
const key = "trnsl.1.1.20200427T185355Z.d995d42466e14629.56b810f545294151c8008da9ff03e1f48f142bd6";

const api = (text, lang1, lang2) => {

    const url = apiBase + "?key=" + key + "&text=" + text + `&lang=${lang1}-${lang2}`;
    return axios.get(url)
            .then(data => data.data.match(/<text>(.*)<\/text>/)[1]);

};

export {api}