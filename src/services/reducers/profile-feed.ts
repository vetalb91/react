import {
    WS_CONNECTION_PROFILE_FEED_CLOSED,
    WS_CONNECTION_PROFILE_FEED_ERROR,
    WS_CONNECTION_PROFILE_FEED_SUCCESS,
    WS_GET_PROFILE_FEED_MESSAGE,
} from "../actions/profile-feed";
export interface IprofileFeed {
    wsConnected: boolean;
    orders: any;
    total: null | number;
    totalToday: null | number;
    error: null;
}
export const initialState = {
    wsConnected: false,
    orders: [],
    total: null,
    totalToday: null,
    error: null,
};

export const profileFeedReducer = (state: IprofileFeed = initialState, action: any) => {
    switch (action.type) {
        case WS_CONNECTION_PROFILE_FEED_SUCCESS:
            return {
                ...state,
                wsConnected: true,
                error: null,
            };

        case WS_CONNECTION_PROFILE_FEED_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false,
            };

        case WS_CONNECTION_PROFILE_FEED_CLOSED:
            return {
                ...state,
                error: null,
                wsConnected: false,
            };

        case WS_GET_PROFILE_FEED_MESSAGE:
            console.log(action.payload);

            return {
                ...state,
                error: null,
                orders: [...action.payload.orders],
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };

        default:
            return state;
    }
};