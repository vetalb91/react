import React, { useState, useEffect } from "react";

import { logOutAction, changeUserDataAction } from "../services/actions/user";
import styles from "./profile.module.css";
import { useDispatch,useSelector } from "react-redux";
import { authState } from "../utils/funcs";
import { useLocation, Link } from "react-router-dom";
import {
    Button,
    Input,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";


export function ProfilePage() {
    const location = useLocation();
    const state = useSelector(authState);
    const { user } = state;

    const INITIALINPUT = {
        email: user?.email,
        name: user?.name,
        password: '',
        isShowButon: false,
    };
    const [prevInput, setPrevInput] = useState(INITIALINPUT);
    const [inputData, setInputData] = useState(INITIALINPUT);
    const dispatch = useDispatch();


    const logOut = (e) => {
        e.preventDefault();
        dispatch(logOutAction());
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(changeUserDataAction(inputData));
        setInputData({
            ...inputData,
            isShowButon: false,
        });
    };

    useEffect(() => {
        setPrevInput({
            ...INITIALINPUT,
            email: user?.email,
            name: user?.name,
        });
        // eslint-disable-next-line
    }, [user]);

    const onCancel = (e) => {
        e.preventDefault();
        setInputData({
            ...prevInput,
            isShowButon: false,
        });
    };

    const onChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
            isShowButon: true,
        });
    };

    return (
        <>
            <div className={styles.parent}>
                <div className={styles.content}>
                    <div className={styles.child1}>
                        <Link
                            className={`${styles.a_link} text text_type_main-medium ${
                                location.pathname === "/profile" ? styles.a_link_active : null
                            }`}
                        >
                            Профиль{" "}
                        </Link>
                        <Link
                            to={"orders "}
                            className={`${styles.a_link} text text_type_main-medium text_color_inactive`}
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
                    <div className={styles.caption}>
                        <p>Здесь вы можете изменять свои персональные данные</p>
                    </div>
                </div>
                <div className={styles.child2}>
                    <form onSubmit={onSubmit}>
                    <Input
                        type={"text"}
                        placeholder={"Имя"}
                        onChange={onChange}
                        icon="EditIcon"
                        value={inputData.name }
                        name={"name"}
                        error={false}
                        errorText={"Ошибка"}
                        size={"default"}
                        extraClass={styles.input}
                    />
                    <Input
                        type={"text"}
                        placeholder={"Логин"}
                        onChange={onChange}
                        icon="EditIcon"
                        value={inputData.email}
                        name={"email"}
                        error={false}
                        errorText={"Ошибка"}
                        size={"default"}
                        extraClass={styles.input}
                    />
                    <PasswordInput
                        onChange={onChange}
                        value={inputData.password}
                        name={"password"}
                        icon="EditIcon"
                    />
                        {inputData.isShowButon ? (
                            <>
                                <div className={styles.divsave}>
                                    <Button
                                        htmlType="button"
                                        type="secondary"
                                        size="small"
                                        onClick={onCancel}
                                    >
                                        Отмена
                                    </Button>
                                <Button htmlType="submit" type="primary" size="small">
                                    Сохранить
                                </Button>

                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </form>
                    </div>
                </div>

        </>
    );
}