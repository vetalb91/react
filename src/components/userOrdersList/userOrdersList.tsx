import { IprofileFeed } from "../../services/reducers/profile-feed";
import { OrderItem } from "../../types/commonTypes";
import { FeedItem } from "../feedItem/feedItem";
import styles from "./userOrdersList.module.css";

export const UserOrdersList: React.FC<IprofileFeed> = ({ orders }): JSX.Element => {
    return (
        <div className={`custom-scroll ${styles.orders_list_wrap}`}>
            {orders.map((item: OrderItem, index: number) => {
                return (
                    <FeedItem
                        isUserOrderItem={true}
                        orderItem={item}
                        key={index}
                    ></FeedItem>
                );
            })}
        </div>
    );
};