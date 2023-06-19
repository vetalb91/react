import { getCookie } from "../../cookie/cookie";

export const WS_CONNECTION_PROFILE_FEED_START: "WS_CONNECTION_PROFILE_FEED_START" = "WS_CONNECTION_PROFILE_FEED_START";
export const WS_CONNECTION_PROFILE_FEED_SUCCESS: "WS_CONNECTION_PROFILE_FEED_SUCCESS" =
    "WS_CONNECTION_PROFILE_FEED_SUCCESS";
export const WS_CONNECTION_PROFILE_FEED_ERROR: "WS_CONNECTION_PROFILE_FEED_ERROR" = "WS_CONNECTION_PROFILE_FEED_ERROR";
export const WS_CONNECTION_PROFILE_FEED_CLOSE: "WS_CONNECTION_PROFILE_FEED_CLOSE" =
    "WS_CONNECTION_PROFILE_FEED_CLOSE";
export const WS_GET_PROFILE_FEED_MESSAGE: "WS_GET_PROFILE_FEED_MESSAGE" = "WS_GET_PROFILE_FEED_MESSAGE";
export const WS_CONNECTION_PROFILE_FEED_CLOSED: "WS_CONNECTION_PROFILE_FEED_CLOSED" = "WS_CONNECTION_PROFILE_FEED_CLOSED";


export interface IstartWsAction {
    type: typeof WS_CONNECTION_PROFILE_FEED_START;
    payload: string;
}
export interface IstartWsProtectedWsAction {
    type: typeof WS_CONNECTION_PROFILE_FEED_START;
    payload: string;
}
export interface IdisconnectWsAction {
    type: typeof WS_CONNECTION_PROFILE_FEED_CLOSE;
}



export type profileFeedActionsType =
    | IstartWsAction
    | IstartWsProtectedWsAction
    | IdisconnectWsAction;


export const startWsAction = (): IstartWsAction => {
    return { type: WS_CONNECTION_PROFILE_FEED_START, payload: "orders" };
};

export const startWsProtectedWsAction = (): IstartWsProtectedWsAction => {
    const accessToken = getCookie("accessToken")?.trim();
    return {
        type: WS_CONNECTION_PROFILE_FEED_START,
        payload: `orders?token=${accessToken}`,
    };
};
export const disconnectWsAction = (): IdisconnectWsAction => ({
    type: WS_CONNECTION_PROFILE_FEED_CLOSE,
});


