import {
    WS_CONNECTION_PROFILE_FEED_CLOSED,
    WS_CONNECTION_PROFILE_FEED_ERROR,
    WS_CONNECTION_PROFILE_FEED_SUCCESS,
    WS_GET_PROFILE_FEED_MESSAGE,
} from "../actions/profile-feed";
import { initialState, profileFeedReducer } from "./profile-feed";
import { mockSocketMiddlewareresponse } from "../../utils/const";

describe("Test for profile feed reducer", () => {
    test("Action WS_CONNECTION_PROFILE_FEED_SUCCESS", () => {
        const expected = { ...initialState, wsConnected: true, error: null };
        const received = profileFeedReducer(initialState, {
            type: WS_CONNECTION_PROFILE_FEED_SUCCESS,
        });
        expect(received).toEqual(expected);
    });

    test("Action WS_CONNECTION_PROFILE_FEED_ERROR", () => {
        const errorPayload = "WebSocket connection error";
        const expected = { ...initialState, error: errorPayload, wsConnected: false };
        const received = profileFeedReducer(initialState, {
            type: WS_CONNECTION_PROFILE_FEED_ERROR,
            payload: errorPayload,
        });
        expect(received).toEqual(expected);
    });

    test("Action WS_CONNECTION_PROFILE_FEED_CLOSED", () => {
        const expected = { ...initialState, error: null, wsConnected: false };
        const received = profileFeedReducer(initialState, {
            type: WS_CONNECTION_PROFILE_FEED_CLOSED,
        });
        expect(received).toEqual(expected);
    });

    test("Action WS_GET_PROFILE_FEED_MESSAGE", () => {
        const expected = {
            ...initialState,
            error: null,
            orders: mockSocketMiddlewareresponse.orders,
            total: mockSocketMiddlewareresponse.total,
            totalToday: mockSocketMiddlewareresponse.totalToday,
        };
        const received = profileFeedReducer(initialState, {
            type: WS_GET_PROFILE_FEED_MESSAGE,
            payload: mockSocketMiddlewareresponse,
        });
        expect(received).toEqual(expected);
    });

    test("Default Action", () => {
        // Testing default case when an unknown action is dispatched
        const expected = { ...initialState };
        const received = profileFeedReducer(initialState, { type: "UNKNOWN_ACTION" });
        expect(received).toEqual(expected);
    });
});