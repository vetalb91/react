import React, {useState, useCallback } from "react";
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
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "./order-details";
import { useNavigate,useLocation} from "react-router-dom";

const type_bun = "bun";

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
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

    const { bun, ingredients, order, isLoading, hasError, user } = useSelector(
        (state) => ({
            bun: state.create.bun,
            user: state.user.user,
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
    const closeModal = () => {
        setOpenModal(false);
    };

    function modal(location) {

        const isAuthenticated = !!localStorage.getItem('accessToken');

        if (!isAuthenticated) {
            navigate('/login');
        } else if (total.ingredients && user) {
            dispatch(postItems({ ingredients: total.ingredients }));
            setOpenModal(true);
        }
    }
    const [, drop] = useDrop({
        accept: "items",
        drop(items) {
            items.type !== type_bun && ingredientDrag(items);
        },
    });

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
                    <div className={styles.modalm}>
                        Выберите начинку
                    </div>
                )}

                <Bun bun={bun} handleDrag={handleDrag} pos={"(низ)"} type={"bottom"} />
            </div>

            <div className={styles.info}>
                <p className="text text_type_main-medium">{total.totalPrice}</p>
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="large" onClick={() => modal(location)}>
                    Оформить заказ
                </Button>
            </div>
            {openModal && isLoading && "Загрузка..."}
            {openModal && hasError && "что-то пошло не так"}
            {openModal && !isLoading && !hasError && order && (
                <Modal onClose={closeModal}>
                    <OrderDetails image={image} number={order.number} />
                </Modal>
            )}
        </section>
    );
};

export default BurgerConstructor;