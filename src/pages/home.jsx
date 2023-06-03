import React from "react";
import BurgerConstructor from "../components/main/constructor/burger-constructor";
import BurgerIngredients from "../components/main/ingredients/burger-ingredients";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import styles from "../components/App.module.css";
export const Main = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <main className={styles.main}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </DndProvider>
    );
};