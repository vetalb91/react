import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { RootState , TwsActions, TwsProfileFeedActions } from "../store";


export const createSocketMiddleware = (
    wsUrl: string,
    wsActions: TwsActions,
    wsProfileFeedActions: TwsProfileFeedActions
): Middleware => {
    let socket: null | WebSocket = null;

    return ({ dispatch }: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch) => (
        action: any
    ) => {
        const { type, payload } = action;

        if (type === wsActions.wsInit) {
            socket = new WebSocket(`${wsUrl}${payload}`);

            socket.onopen = (event) => {
                dispatch({ type: wsActions.onOpen, payload: event });
            };

            socket.onerror = (event) => {
                dispatch({ type: wsActions.onError, payload: event });
            };

            socket.onmessage = (event) => {
                const { data } = event;
                const parsedData = JSON.parse(data);
                dispatch({
                    type: wsActions.onMessage,
                    payload: parsedData,
                });
            };


            socket.onclose = (event) => {
                dispatch({ type: wsActions.onClose, payload: event });
            };
        }

        if (type === wsActions.wsClose && socket) {
            socket.close();
        }

        if (type === wsProfileFeedActions.wsInit) {
            socket = new WebSocket(`${wsUrl}${payload}`);

            socket.onopen = (event) => {
                dispatch({ type: wsProfileFeedActions.onOpen, payload: event });
            };

            socket.onerror = (event) => {
                dispatch({ type: wsProfileFeedActions.onError, payload: event });
            };




            socket.onmessage = (event) => {
                const { data } = event;
                const parsedData = JSON.parse(data);
                dispatch({
                    type: wsProfileFeedActions.onMessage,
                    payload: parsedData,
                });
            };

            socket.onclose = (event) => {
                dispatch({ type: wsProfileFeedActions.onClose, payload: event });
            };
        }

        if (type === wsProfileFeedActions.wsClose && socket) {
            socket.close();
        }

        return next(action);
    };
};
