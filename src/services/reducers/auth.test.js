import {
    mockRegistrationSuccessresponse,
    mockGetUserresponse,
    mockLoginSuccessresponse,
    mockChangeUserresponse,
    mockErrorFailure,
} from "../../utils/const";
import {
    authCheckAction,
    authFailureAction,
    authRequestAction,
    changeUserAction,
    getUserSuccessAction,
    loginSuccessAction,
    logOutSuccessAction,
    postCodeToResetPasswordAction,
    registrationSuccessAction,
    resetPasswordSuccessAction,
} from "../actions/auth";
import { authReducer, initialState } from "./auth";

describe("test for reducer of auth", () => {
    test("Action return InitialState", () => {
        const expected = { ...initialState };
        const received = authReducer(undefined, {});
        expect(received).toEqual(expected);
    });
    test("Action AUTH_REQUEST", () => {
        const expected = { ...initialState, isAuthRequest: true };
        const received = authReducer(initialState, authRequestAction());
        expect(received).toEqual(expected);
    });

    test("Action AUTH_CHECK", () => {
        const expected = {
            ...initialState,
            isAuthRequest: false,
            isAuthChecked: true,
        };
        const received = authReducer(initialState, authCheckAction());
        expect(received).toEqual(expected);
    });
    test("Action REGISTRATION_SUCCESS", () => {
        const expected = {
            ...initialState,
            isAuthRequest: false,
            isAuthChecked: true,
            user: mockRegistrationSuccessresponse.user,
            error: null,
        };
        const received = authReducer(
            initialState,
            registrationSuccessAction(mockRegistrationSuccessresponse)
        );
        expect(received).toEqual(expected);
    });
    test("Action RESET_PASSWORD_SUCCESS", () => {
        const expected = {
            ...initialState,
            isAuthChecked: true,
            isAuthRequest: false,
            error: null,
        };
        const received = authReducer(initialState, resetPasswordSuccessAction());
        expect(received).toEqual(expected);
    });
    test("Action CODE_TO_RESET_SUCCESS", () => {
        const expected = {
            ...initialState,
            isAuthRequest: false,
            isAuthChecked: true,
            error: null,
        };
        const received = authReducer(initialState, postCodeToResetPasswordAction());
        expect(received).toEqual(expected);
    });
    test("Action GET_USER_SUCCESS", () => {
        const expected = {
            ...initialState,
            isAuthChecked: true,
            isAuthRequest: false,
            user: mockGetUserresponse.user,
            error: null,
        };
        const received = authReducer(
            initialState,
            getUserSuccessAction(mockGetUserresponse)
        );
        expect(received).toEqual(expected);
    });
    test("Action LOGIN_SUCCESS", () => {
        const expected = {
            ...initialState,
            isAuthChecked: true,
            isAuthRequest: false,
            user: mockLoginSuccessresponse.user,
            error: null,
        };
        const received = authReducer(
            initialState,
            loginSuccessAction(mockLoginSuccessresponse)
        );
        expect(received).toEqual(expected);
    });
    test("Action LOGOUT_SUCCESS", () => {
        const expected = {
            ...initialState,
            isAuthRequest: false,
            user: null,
            error: null,
        };
        const received = authReducer(initialState, logOutSuccessAction());
        expect(received).toEqual(expected);
    });
    test("Action CHANGE_USER_DATA_SUCCESS", () => {
        const expected = {
            ...initialState,
            isAuthRequest: false,
            user: mockChangeUserresponse.user,
            error: null,
        };
        const received = authReducer(
            initialState,
            changeUserAction(mockChangeUserresponse)
        );
        expect(received).toEqual(expected);
    });
    test("Action AUTH_FAILURE", () => {
        const expected = {
            ...initialState,
            isAuthRequest: false,
            error: mockErrorFailure.message,
        };
        const received = authReducer(
            initialState,
            authFailureAction(mockErrorFailure)
        );
        expect(received).toEqual(expected);
    });
});