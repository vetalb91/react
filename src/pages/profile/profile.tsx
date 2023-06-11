import styles from "./profile.module.css";
import { useLocation, Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks/redux-hooks";
import { authState } from "../../services/reducers/stateFuncs";
import { logOutAction } from "../../services/actions/auth";
import { ErrorMessage } from "../../components/errorMessage/errorMessage";

export const Profile: React.FC = () => {
    const location = useLocation();
    const state = useSelector(authState);
    const { error } = state;
    const dispatch = useDispatch();

    const logOut = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(logOutAction());
    };

    if (error) {
        return <ErrorMessage error={error}></ErrorMessage>;
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.box_container}>
                <div className={styles.flex_container}>
                    <div className={styles.link_box}>
                        <div className={styles.wrap_link}>
                            <Link
                                className={`${styles.a_link} text text_type_main-medium ${
                                    location.pathname === "/profile"
                                        ? styles.a_link_active
                                        : "text_color_inactive"
                                }`}
                                to={""}
                            >
                                Профиль{" "}
                            </Link>
                            <Link
                                to={"orders "}
                                className={`${
                                    styles.a_link
                                } text text_type_main-medium text_color_inactive ${
                                    location.pathname === "/profile/orders"
                                        ? styles.a_link_active
                                        : null
                                }`}
                            >
                                История заказов
                            </Link>

                            <Link
                                to={"/"}
                                onClick={logOut}
                                className={`${styles.a_link} text text_type_main-medium text_color_inactive`}
                            >
                                Выход
                            </Link>
                        </div>
                        <p
                            className={`${styles.footer_link_box} text text_type_main_small text_color_inactive `}
                        >
                            {location.pathname === "/profile/orders"
                                ? " В этом разделе вы можете просмотреть свою историю заказов"
                                : "В этом разделе вы можете изменить свои персональные данные"}
                        </p>
                    </div>
                    <div className={styles.wrap_content_form}>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};