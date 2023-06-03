import styles from "./home.module.css";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
    authState,
    getIngredientsDataFromState,
} from "../../services/reducers/stateFuncs";
import { BurgerIngredients } from "../../components/burgerIngredients/burgerIngredients";
import { BurgerConstructor } from "../../components/burgerConstructor/burgerConstructor";
import { ErrorMessage } from "../../components/errorMessage/errorMessage";

export const Home: React.FC = () => {
    const { error } = useSelector(authState);
    const errorIngredients = useSelector(getIngredientsDataFromState).error;
    if (error || errorIngredients) {
        return <ErrorMessage error={error || errorIngredients} />;
    }
    return (
        <div className={styles.AppHome}>
            <div className={styles.apphome_grid_container}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </DndProvider>
            </div>
        </div>
    );
};