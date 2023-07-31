import { mockSocketMiddlewareresponse } from "../../utils/const";
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
} from "../actions/wsAction";
import { initialState, wsReducer } from "./wsReducer";

describe("test of reducer wsReducer", () => {
    test("action WS_CONNECTION_SUCCESS", () => {
        const expected = {
            ...initialState,
            wsConnected: true,
            error: null,
        };
        const received = wsReducer(initialState, { type: WS_CONNECTION_SUCCESS });
        expect(received).toEqual(expected);
    });
    test("action return InitialState", () => {
        const expected = {
            ...initialState,
        };
        const received = wsReducer(undefined, {});
        expect(received).toEqual(expected);
    });
    test("action WS_CONNECTION_ERROR", () => {
        const expected = {
            ...initialState,
            error: "test",
            wsConnected: false,
        };
        const received = wsReducer(initialState, {
            type: WS_CONNECTION_ERROR,
            payload: "test",
        });
        expect(received).toEqual(expected);
    });
    test("action WS_CONNECTION_CLOSED", () => {
        const expected = {
            ...initialState,
            error: null,
            wsConnected: false,
        };
        const received = wsReducer(initialState, {
            type: WS_CONNECTION_CLOSED,
        });
        expect(received).toEqual(expected);
    });
    test("action WS_GET_MESSAGE", () => {
        const expected = {
            ...initialState,
            wsConnected: false,
            privateFeed:mockSocketMiddlewareresponse,
            orders: mockSocketMiddlewareresponse.orders,
            total: mockSocketMiddlewareresponse.total,
            totalToday: mockSocketMiddlewareresponse.totalToday,
        };
        const received = wsReducer(initialState, {
            type: WS_GET_MESSAGE,
            payload: mockSocketMiddlewareresponse,
        });
        expect(received).toEqual(expected);
    });
});