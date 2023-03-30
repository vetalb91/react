import React, { useMemo, useState, useCallback } from "react";
import { v1 as uuid } from "uuid";
import styles from "./burger-constructor.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { postItems } from "../../../services/actions/checkout";
import Modal from "../../modal/modal";
import { totalPriceSelector } from "../../../common/total-price";
import image from "../../../images/done.png";
import {
    ADD_BUN,
    ADD_INGREDIENTS,
    REPLACE,
} from "../../../services/actions/create-burger";
import { Bun } from "./buns";
import { Ingredients } from "./ingredients";

import {
    CloseIcon,
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const type_bun = "bun";

const BurgerConstructor = () => {
    const dispatch = useDispatch();

    const total = useSelector(totalPriceSelector);

    const handleDrag = (bun) => {
        dispatch({ type: ADD_BUN, item: { ...bun, uuid: uuid() } });
    };

    const ingredientDrag = useCallback(
        (ingredient) => {
            dispatch({
                type: ADD_INGREDIENTS,
                item: { ...ingredient, uuid: uuid() },
            });
        },
        [dispatch]
    );

    const { bun, ingredients, order, isLoading, hasError } = useSelector(
        (state) => ({
            bun: state.create.bun,
            ingredients: state.create.ingredients,
            order: state.checkout.order,
            isLoading: state.checkout.isLoading,
            hasError: state.checkout.hasError,
        })
    );

    const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
            const dragCard = ingredients[dragIndex];
            const newCards = [...ingredients];
            newCards.splice(dragIndex, 1);
            newCards.splice(hoverIndex, 0, dragCard);

            dispatch({ type: REPLACE, item: newCards });
        },
        [ingredients, dispatch]
    );

    const [openModal, setOpenModal] = useState(false);

    const modal = useCallback(() => {
        if (!!total.ingredients) {
            dispatch(postItems({ ingredients: total.ingredients }));
            setOpenModal(true);
        }
    }, [dispatch, total.ingredients]);

    const [, drop] = useDrop({
        accept: "items",
        drop(items) {
            items.type !== type_bun && ingredientDrag(items);
        },
    });

    const disableOrderButton = useMemo(() => {
        return ingredients.length === 0 || bun === null;
    }, [ingredients, bun]);

    return (
        <section className={styles.container}>
            <div className={styles.burgerComponents} ref={drop}>
                <Bun bun={bun} handleDrag={handleDrag} pos={"(верх)"} type={"top"} />

                {ingredients.length ? (
                    ingredients.map((item, index) => (
                        <Ingredients
                            key={item.uuid}
                            moveCard={moveCard}
                            index={index}
                            data={item}
                        />
                    ))

                ) : (
                    <div className={styles.modalm} >
                        Выберите начинку
                    </div>
                )}

                <Bun bun={bun} handleDrag={handleDrag} pos={"(низ)"} type={"bottom"} />
                <div className={styles.info}>
                    <p className="text text_type_main-medium">{total.totalPrice}</p>
                    <CurrencyIcon type="primary" />
                    <Button
                        htmlType="button"
                        type="primary"
                        size="large"
                        onClick={modal}
                        disabled={disableOrderButton}
                    >
                        Оформить заказ
                    </Button>
                </div>
            </div>


            {openModal && isLoading && "Загрузка..."}
            {openModal && hasError && "что-то пошло не так"}
            {openModal && !isLoading && !hasError && order && (
                <Modal closeModal={setOpenModal}>
                    <>
                        <div className={styles.title}>
                            <p className="text text_type_digits-large">{order.number}</p>
                            <div className={styles.close}>
                                <CloseIcon onClick={() => setOpenModal(false)} />
                            </div>
                        </div>
                        <div className={styles.text}>
                            <p className="text text_type_main-large">идинтификатор заказа</p>
                        </div>
                        <img src={image} alt="OK" className={styles.image} />
                        <div className={styles.text}>
                            <p className="text text_type_main-default">
                                ваш заказ начали готовить
                            </p>
                            <p className="text text_type_main-default text_color_inactive">
                                дождитесь готовности на орбитальной станции
                            </p>
                        </div>
                    </>
                </Modal>
            )}
        </section>
    );
};

export default BurgerConstructor;