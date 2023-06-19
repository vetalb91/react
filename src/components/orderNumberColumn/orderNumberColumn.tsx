import { OrderItem ,OrderNumberColumnProps } from "../../types/commonTypes";
import styles from "./orderNumberColumn.module.css";


export const OrderNumberColumn: React.FC<OrderNumberColumnProps> = ({ array }) => {
    return (
        <div className={styles.column_done_wrap}>
            {array.map((item: OrderItem, index: number) => {
                return (
                    <p
                        key={index}
                        className={`text text_type_digits-medium ${styles.number_done_orders_p}`}
                    >
                        {item.number}
                    </p>
                );
            })}
        </div>
    );
};
