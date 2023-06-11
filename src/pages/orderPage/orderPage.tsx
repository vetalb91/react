import { useEffect } from "react";
import { useSelector,useDispatch } from "../../hooks/redux-hooks";
import { UserOrdersList } from "../../components/userOrdersList/userOrdersList";

import {
    disconnectWsAction,
    startWsProtectedWsAction,
} from "../../services/actions/wsAction";
import { getWs } from "../../services/reducers/stateFuncs";

export const OrderPage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startWsProtectedWsAction());
        return () => {
            dispatch(disconnectWsAction());
        };
    }, [dispatch]);

    const dataOrders = useSelector(getWs);
    return <UserOrdersList {...dataOrders}></UserOrdersList>;
};