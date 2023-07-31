import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
} from "../actions/feed";
import { initialState, feedReducer } from "./feed";
import { mockSocketMiddlewareresponse } from "../../utils/const";
describe("Test for feed reducer", () => {
    test("Action WS_CONNECTION_SUCCESS", () => {
        const expected = { ...initialState, wsConnected: true, error: null };
        const received = feedReducer(initialState, {
            type: WS_CONNECTION_SUCCESS,
        });
        expect(received).toEqual(expected);
    });

    test("Action WS_CONNECTION_ERROR", () => {
        const errorPayload = "WebSocket connection error";
        const expected = { ...initialState, error: errorPayload, wsConnected: false };
        const received = feedReducer(initialState, {
            type: WS_CONNECTION_ERROR,
            payload: errorPayload,
        });
        expect(received).toEqual(expected);
    });

    test("Action WS_CONNECTION_CLOSED", () => {
        const expected = { ...initialState, error: null, wsConnected: false };
        const received = feedReducer(initialState, {
            type: WS_CONNECTION_CLOSED,
        });
        expect(received).toEqual(expected);
    });

    test("Action WS_GET_MESSAGE", () => {
        const expected = {
            ...initialState,
            error: null,
            publicFeed: mockSocketMiddlewareresponse.orders,
            total: mockSocketMiddlewareresponse.total,
            totalToday: mockSocketMiddlewareresponse.totalToday,
        };
        const received = feedReducer(initialState, {
            type: WS_GET_MESSAGE,
            payload: mockSocketMiddlewareresponse,
        });
        expect(received).toEqual(expected);
    });

    test("Default Action", () => {
        // Testing default case when an unknown action is dispatched
        const expected = { ...initialState };
        const received = feedReducer(initialState, { type: "UNKNOWN_ACTION" });
        expect(received).toEqual(expected);
    });
});