import { applyMiddleware, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rootReducer } from "./reducers";
import { createSocketMiddleware } from "./middleWare/socketMiddleware";
import {
    WS_CONNECTION_PROFILE_FEED_START,
    WS_CONNECTION_PROFILE_FEED_CLOSE,
    WS_CONNECTION_PROFILE_FEED_SUCCESS,
    WS_CONNECTION_PROFILE_FEED_CLOSED,
    WS_CONNECTION_PROFILE_FEED_ERROR,
    WS_GET_PROFILE_FEED_MESSAGE
} from "./actions/profile-feed";
import {
    WS_CONNECTION_START,
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_GET_MESSAGE,
    WS_CONNECTION_CLOSED,
}  from "./actions/wsAction";
export type TwsActions = {
    wsInit: typeof WS_CONNECTION_START;
    wsClose: typeof WS_CONNECTION_CLOSE;
    onOpen: typeof WS_CONNECTION_SUCCESS;
    onClose: typeof WS_CONNECTION_CLOSED;
    onError: typeof WS_CONNECTION_ERROR;
    onMessage: typeof WS_GET_MESSAGE;
};

export type TwsProfileFeedActions = {
    wsInit: typeof WS_CONNECTION_PROFILE_FEED_START;
    wsClose: typeof WS_CONNECTION_PROFILE_FEED_CLOSE;
    onOpen: typeof WS_CONNECTION_PROFILE_FEED_SUCCESS;
    onClose: typeof WS_CONNECTION_PROFILE_FEED_CLOSED;
    onError: typeof WS_CONNECTION_PROFILE_FEED_ERROR;
    onMessage: typeof WS_GET_PROFILE_FEED_MESSAGE;
};

export type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = ThunkDispatch<RootState, undefined, any>;

const wsUrl = "wss://norma.nomoreparties.space/";

const wsActions: TwsActions = {
    wsInit: "WS_CONNECTION_START",
    wsClose: "WS_CONNECTION_CLOSE",
    onOpen: "WS_CONNECTION_SUCCESS",
    onClose: "WS_CONNECTION_CLOSED",
    onError: "WS_CONNECTION_ERROR",
    onMessage: "WS_GET_MESSAGE",
};

const wsProfileFeedActions: TwsProfileFeedActions = {
    wsInit: "WS_CONNECTION_PROFILE_FEED_START",
    wsClose: "WS_CONNECTION_PROFILE_FEED_CLOSE",
    onOpen: "WS_CONNECTION_PROFILE_FEED_SUCCESS",
    onClose: "WS_CONNECTION_PROFILE_FEED_CLOSED",
    onError: "WS_CONNECTION_PROFILE_FEED_ERROR",
    onMessage: "WS_GET_PROFILE_FEED_MESSAGE",
};

const middleware: Middleware[] = [
    thunk,
    createSocketMiddleware(wsUrl, wsActions, wsProfileFeedActions),
];

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
