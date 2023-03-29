import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from "./burger-ingredients.module.css";
import Item from "./item";
import { getItems } from "../../../services/actions/cart";
import { useSelector, useDispatch } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const type_bun = "bun";
const type_sauce = "sauce";
const type_main = "main";

export default function BurgerIngredients() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    const { items, isLoading, hasError } = useSelector((state) => ({
        items: state.cart.items,
        isLoading: state.cart.isLoading,
        hasError: state.cart.hasError,
    }));

    const bunsRef = useRef(null);
    const sausRef = useRef(null);
    const mainRef = useRef(null);
    const divIngredients = useRef(null);

    const bun = useMemo(() => items.filter((item) => item.type === type_bun), [items]);
    const saus = useMemo(() => items.filter((item) => item.type === type_sauce), [items]);
    const main = useMemo(() => items.filter((item) => item.type === type_main), [items]);


    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex, ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(tabIndex);
    }

    useEffect(() => {

        const scrollHandler = () => {

            const bunRect = bunsRef.current.getBoundingClientRect();
            const sausRect = sausRef.current.getBoundingClientRect();
            const mainRect = mainRef.current.getBoundingClientRect();

            const headerPositions = [bunRect.top, sausRect.top, mainRect.top];

            let activeHeaderIndex = 0;

            for (let i = 1; i < headerPositions.length; i++) {
                if (Math.abs(headerPositions[i]) < Math.abs(headerPositions[activeHeaderIndex])) {
                    activeHeaderIndex = i;
                }
            }

            setActiveTab(activeHeaderIndex);
        };

        divIngredients.current.addEventListener("scroll", scrollHandler);

        return () => {
            // eslint-disable-next-line
            divIngredients.current.removeEventListener("scroll", scrollHandler);
        };
    }, [bunsRef, sausRef, mainRef]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Соберите бургер</h2>
            </div>
            <div  className={styles.tabFlex}>
                {/* eslint-disable-next-line */}
                <Tab value="0" active={activeTab === 0} onClick={() =>  handleTabClick(0, bunsRef)}>
                    Булки
                </Tab>
                {/* eslint-disable-next-line */}
                <Tab value="1" active={activeTab === 1} onClick={() => handleTabClick(1, sausRef)}>
                    Соусы
                </Tab>
                {/* eslint-disable-next-line */}
                <Tab value="2" active={activeTab === 2} onClick={() => handleTabClick(2, mainRef)}>
                    Начинки
                </Tab>
            </div>
            <div ref={divIngredients} className={styles.ingridients}>
                {isLoading && "Загрузка..."}
                {hasError && "что-то пошло не так"}
                {!isLoading && !hasError && items && (
                    <>
                        <div className={styles.headline} ref={bunsRef}>
                            <h2>Булки</h2>
                        </div>
                        <div className={styles.columns}>
                            {bun.map((item) => (
                                <Item key={item._id} data={item} />
                            ))}
                        </div>
                        <div className={styles.headline} ref={sausRef}>
                            <h2>Соусы</h2>
                        </div>
                        <div className={styles.columns}>
                            {saus.map((item) => (
                                <Item key={item._id} data={item} />
                            ))}
                        </div>
                        <div className={styles.headline} ref={mainRef}>
                            <h2>Начинка</h2>
                        </div>
                        <div className={styles.columns}>
                            {main.map((item) => (
                                <Item key={item._id} data={item} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}