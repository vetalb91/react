import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burgerIngredients";
import { constructorModal } from "./constructorModal";
import { constructorReducer } from "./burgerConstructor";
import { totalPriceReducer } from "./totalPrice";
import { authReducer } from "./auth";
import { orderReducer } from "./order";
import { orderDataRed } from "./orderDataReducer";
import { wsReducer } from "./wsReducer";
import { feedReducer } from "./feed";
import { profileFeedReducer } from "./profile-feed";

export const rootReducer = combineReducers({
    ingredientsData: burgerIngredientsReducer,
    constructorData: constructorReducer,
    constructorModal: constructorModal,
    totalPrice: totalPriceReducer,
    auth: authReducer,
    order: orderReducer,
    orderData: orderDataRed,
    feed: feedReducer,
    profileFeed: profileFeedReducer,
    ws: wsReducer,
});