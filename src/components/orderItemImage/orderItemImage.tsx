import { ItemImage } from "../../types/commonTypes";
import styles from "./orderItemImage.module.css";
export const OrderItemImage: React.FC<ItemImage> = ({
                                                        ingredient,
                                                        index,
                                                        zIndex,
                                                        ingredientCount,
                                                    }): JSX.Element => {
    return (
        <div style={{ zIndex: `${zIndex}` }}>
            <div className={styles.white_grad} style={{ zIndex: `${zIndex}` }}>
                <img
                    className={styles.img_icon}
                    src={`${ingredient.image}`}
                    width="112"
                    height="56"
                    alt=" ingredient"
                />
                {index === 5 && (
                    <div className={styles.icon_count}>
                        <p className={`${styles.text_style} text text_type_digits-default`}>
                            +{ingredientCount}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};