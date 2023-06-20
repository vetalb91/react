import { useEffect } from "react";
import { useSelector,useDispatch } from "../../hooks/redux-hooks";
import { UserOrdersList } from "../../components/userOrdersList/userOrdersList";

import {
    startWsProtectedWsAction,
    disconnectWsAction,
} from "../../services/actions/profile-feed";
import { getProfileFeed } from "../../services/reducers/stateFuncs";

export const OrderPage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startWsProtectedWsAction());
        return () => {
            dispatch(disconnectWsAction());
        };
    }, [dispatch]);

    const dataOrders = useSelector(getProfileFeed);
    return <UserOrdersList {...dataOrders}></UserOrdersList>;
};