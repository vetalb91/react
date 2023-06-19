import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { AuthActions } from "../services/actions/auth";
import { burgerConstructorActions } from "../services/actions/burgerConstructor";
import { BurgerIngredientsActions } from "../services/actions/burgerIngredients";
import { constructorModalActions } from "../services/actions/constructorModal";
import { orderDataActions } from "../services/actions/getOrderData";
import { IgetOrderItem } from "../services/actions/order";
import { TotalPriceActions } from "../services/actions/totalPrice";
import { wsActionsType } from "../services/actions/wsAction";
import { feedActionsType } from "../services/actions/feed";
import { profileFeedActionsType } from "../services/actions/profile-feed";
import { authInitialState } from "../services/reducers/auth";
import { InitStateBurgerConstructor } from "../services/reducers/burgerConstructor";
import { InitialIngredientsState } from "../services/reducers/burgerIngredients";
import { InitStateConstructorModal } from "../services/reducers/constructorModal";
import { InitStateOrder } from "../services/reducers/order";
import { InitStateOrderData } from "../services/reducers/orderDataReducer";
import { InitStateTotalPrice } from "../services/reducers/totalPrice";
import { InitWs } from "../services/reducers/wsReducer";
import { Ifeed } from "../services/reducers/feed";
import { IprofileFeed } from "../services/reducers/profile-feed";
import store from "../services/store";
export type TApplicationActions =
    | AuthActions
    | burgerConstructorActions
    | BurgerIngredientsActions
    | constructorModalActions
    | TotalPriceActions
    | orderDataActions
    | IgetOrderItem
    | wsActionsType
    | feedActionsType
    | profileFeedActionsType;

export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, RootState, unknown, TApplicationActions>
    >;
export type AppDispatch = typeof store.dispatch | AppThunk;
export type RootState = {
    ingredientsData: InitialIngredientsState;
    constructorData: InitStateBurgerConstructor;
    constructorModal: InitStateConstructorModal;
    totalPrice: InitStateTotalPrice;
    auth: authInitialState;
    order: InitStateOrder;
    orderData: InitStateOrderData;
    feed:Ifeed;
    profileFeed:IprofileFeed;
    ws: InitWs;
};