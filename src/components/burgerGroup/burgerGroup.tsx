import { BurgerIngredientsItem } from "../burgerIngredientsItem/burgerIngredientsItem";
import styles from "./burgerGroup.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Loader } from "../loader/loader";
import { BurgerGroupType } from "../../types/commonTypes";
import { ingredientsDataState } from "../../services/reducers/stateFuncs";
export const BurgerGroup: React.FC<BurgerGroupType> = ({ tabData, title }) => {
    //состояние для сохранения id булки
    const [bunId, setBunId] = useState<string>("");

    const { isDataIngredientsRequest } = useSelector(ingredientsDataState);

    return (
        <div className={styles.group_box}>
            <p className={`${styles.tab_title} text text_type_main-medium`}>
                {title}
            </p>
            <ul className={styles.ul_tab}>
                {tabData.map((ingredient) => {
                    if (isDataIngredientsRequest) {
                        return <Loader></Loader>;
                    }
                    return (
                        <BurgerIngredientsItem
                            key={ingredient._id}
                            setBunId={setBunId}
                            bunId={bunId}
                            ingredient={ingredient}
                        ></BurgerIngredientsItem>
                    );
                })}
            </ul>
        </div>
    );
};