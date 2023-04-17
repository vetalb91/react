import { useSelector } from "react-redux";
import { burgerPropTypes } from "../../../utils/prop-types";
import { totalPriceSelector } from "../../../common/total-price";
import { useDrag } from "react-dnd";
import styles from "./item.module.css";
import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function Item({ data }) {
    const { image, name, price, _id } = data;
    const total = useSelector(totalPriceSelector);
    const currentCount = total[_id] || 0;

    const [{ opacity }, ref] = useDrag(
        {
            type: "items",
            item: data,
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.1 : 1,
            }),
        },
        [data]
    );

    return (
        <section className={styles.block} style={{ opacity }} ref={ref}>
            {currentCount > 0 && <Counter count={currentCount} size="default" />}
            <div className={styles.sectionWrap}>
                <div className={styles.imgd}><img src={image} alt={name} /></div>
                <div className={styles.price}>
                    <p className="text text_type_digits-default mr-4">{price}</p>{" "}
                    <CurrencyIcon type="primary" />
                </div>
                <div className={styles.wrapName} >
                    <p className={styles.nameCenter}>{name}</p>
                </div>
            </div>
        </section>
    );
}

Item.propTypes = {
    data: burgerPropTypes.isRequired,
};