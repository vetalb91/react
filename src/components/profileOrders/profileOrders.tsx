import { useMemo } from "react";
import { IprofileFeed } from "../../services/reducers/profile-feed";
import { OrderItem } from "../../types/commonTypes";
import { OrderNumberColumn } from "../orderNumberColumn/orderNumberColumn";
import styles from "./profileOrders.module.css";

export const ProfileOrders: React.FC<IprofileFeed> = ({
                                                          privatFeed,
                                                totalToday,
                                                total,
                                            }): JSX.Element => {
    const doneOrdersArray = useMemo(() => {
        return privatFeed.filter((item: OrderItem) => {
            return item.status === "done";
        });
    }, [privatFeed]);

    const getCountOfOrders = (arr: OrderItem[]) => {
        const tempArr = [...arr];
        const tempArrayTwoMeric = [];
        const spliceArr = (arrs: OrderItem[]) => {
            return arrs.splice(0, 9);
        };
        while (tempArr.length) {
            const tempArrayOfCuttedArr = spliceArr(tempArr);
            tempArrayTwoMeric.push(tempArrayOfCuttedArr);
        }
        return tempArrayTwoMeric;
    };

    const prepareOrdersArray = useMemo(() => {
        return privatFeed.filter((item: OrderItem) => {
            return item.status !== "done";
        });
    }, [privatFeed]);
    const columnDoneOrdersArray = getCountOfOrders(doneOrdersArray);
    const columnPrepareOrdersArray = getCountOfOrders(prepareOrdersArray);

    return (
        <section className={styles.feed_orders_box}>
        <div className={styles.wrap_content}>
        <div className={styles.orders}>
        <div className={styles.orders_done}>
        <p className="text text_type_main-large">Готовы:</p>
    <div className={`custom-scroll ${styles.column_wrap}`}>
    {columnDoneOrdersArray.map((item, index) => {
        return (
            <OrderNumberColumn
                key={index}
        array={item}
            ></OrderNumberColumn>
    );
    })}
    </div>
    </div>
    <div className={styles.orders_prepare}>
    <p className="text text_type_main-large">В работе:</p>
    <div className={`custom-scroll ${styles.column_wrap}`}>
    {columnPrepareOrdersArray.map((item, index) => {
        return (
            <OrderNumberColumn
                key={index}
        array={item}
            ></OrderNumberColumn>
    );
    })}
    </div>
    </div>
    </div>
    <div className={styles.total_orders_count_wrap}>
    <p className="text text_type_main-large">Выполнено за все время:</p>
    <p className="text text_type_digits-large">{total}</p>
        </div>
        <div className={styles.today_orders_count_wrap}>
    <p className="text text_type_main-large">Выполнено за сегодня:</p>
    <p className="text text_type_digits-large">{totalToday}</p>
        </div>
        </div>
        </section>
);
};