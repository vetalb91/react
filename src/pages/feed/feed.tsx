import { useEffect } from "react";
import { FeedList } from "../../components/feedList/feedList";
import { FeedOrders } from "../../components/feedOrders/feedOrders";
import { useDispatch, useSelector } from "../../hooks/redux-hooks";
import {
    disconnectWsAction,
    startWsAction,
} from "../../services/actions/wsAction";
import { getWs } from "../../services/reducers/stateFuncs";
import styles from "./feed.module.css";

export const Feed: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startWsAction());
        return () => {
            dispatch(disconnectWsAction());
        };
    }, [dispatch]);
    const dataOrders = useSelector(getWs);

    return (
        <div className={styles.content_container}>
            <FeedList dataOrders={dataOrders.orders}></FeedList>
            <FeedOrders {...dataOrders}></FeedOrders>
        </div>
    );
};