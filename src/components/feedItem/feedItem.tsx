import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks/redux-hooks";
import { getOrderItem } from "../../services/actions/order";
import { getIngredientsDataFromState } from "../../services/reducers/stateFuncs";
import { TypeFeedItem } from "../../types/commonTypes";
import {
    getIngredientsArrayFromOrder,
    getOrderParams,
} from "../../utils/funcs";
import { OrderItemImage } from "../orderItemImage/orderItemImage";
import styles from "./feedItem.module.css";

export const FeedItem: React.FC<TypeFeedItem> = ({
                                                     orderItem,
                                                     isUserOrderItem,
                                                 }): JSX.Element => {
    const { ingredients, number, createdAt, status, name } = orderItem;
    const { dataIngredients } = useSelector(getIngredientsDataFromState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const reducerArr = getIngredientsArrayFromOrder(ingredients, dataIngredients);
    const totalPrice = useMemo(() => {
        return reducerArr.reduce((summ, item) => {
            return (summ = item.price + summ);
        }, 0);
    }, [reducerArr]);
    const getOrderObject = () => {
        dispatch(getOrderItem(orderItem));
    };
    const ingredientCount = reducerArr.length - 6;
    const mapIconsList = reducerArr.slice(0, 6);
    const { dateString, currentStatus } = getOrderParams(createdAt, status);

    return (
        <div
            onClick={() => {
                navigate(`${location.pathname}/${number}`, {
                    state: { background: location },
                });
                getOrderObject();
            }}
            key={Math.random()}
            className={styles.wrap_feed_item}
            style={{ width: `${isUserOrderItem ? "796px" : "584px"}` }}
        >
            <div className={styles.content_box}>
                <div className={styles.item_header}>
                    <p className={`text text_type_digits-medium ${styles.number}`}>
                        {number}
                    </p>
                    <div className={styles.time}>{dateString}</div>
                </div>
                <div className="text text_type_main-medium">{name}</div>
                {isUserOrderItem ? <p>{currentStatus}</p> : null}
                <div className={styles.order_components}>
                    <div className={styles.list_component_icons}>
                        {mapIconsList.map((ingredient, index) => {
                            const zIndex = ingredients.length - index;

                            return (
                                <OrderItemImage
                                    ingredientCount={ingredientCount}
                                    ingredient={ingredient}
                                    index={index}
                                    zIndex={zIndex}
                                    key={index}
                                ></OrderItemImage>
                            );
                        })}
                    </div>
                    <div className={`p-1 ${styles.price_box}`}>
                        <CurrencyIcon type="primary" />
                        <span className="text text_type_digits-default">{totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};