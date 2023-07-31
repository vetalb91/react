
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
} from "../actions/feed";
export interface Ifeed {
    wsConnected: boolean;
    publicFeed: any;
    total: null | number;
    totalToday: null | number;
    error: null;
}
export const initialState = {
    wsConnected: false,
    publicFeed: [],
    total: null,
    totalToday: null,
    error: null,
};

export const feedReducer = (state: Ifeed = initialState, action: any) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true,
                error: null,
            };

        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false,
            };

        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                error: null,
                wsConnected: false,
            };

        case WS_GET_MESSAGE:
            console.log(action.payload);

            return {
                ...state,
                error: null,
                publicFeed: [...action.payload.orders],
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };

        default:
            return state;
    }
};