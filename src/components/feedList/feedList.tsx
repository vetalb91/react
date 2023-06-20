import { OrderItem } from "../../types/commonTypes";
import { FeedItem } from "../feedItem/feedItem";
import styles from "./feedList.module.css";


interface FeedListProps {
    dataOrders: OrderItem[];
}

export const FeedList: React.FC<FeedListProps> = ({ dataOrders }): JSX.Element => {
    return (
        <section className={styles.feed_list_box}>
            <header className={`text text_type_main-large ${styles.feed_header}`}>
                Лента Заказов
            </header>
            <div className={`custom-scroll ${styles.feed_list}`}>
                {dataOrders.map((item: OrderItem, index: number) => {
                    return (
                        <FeedItem
                            orderItem={item}
                            key={index}
                            isUserOrderItem={false}
                        ></FeedItem>
                    );
                })}
            </div>
        </section>
    );
};
