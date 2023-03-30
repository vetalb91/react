import { BURGER_API_URL } from "../utils/const";

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getItemsRequest = () => {

    const url = `${BURGER_API_URL}/ingredients`;
    return fetch(url).then(checkReponse);
};

export const postItemsRequest = (body) => {

    const url = `${BURGER_API_URL}/orders`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then(checkReponse);
};