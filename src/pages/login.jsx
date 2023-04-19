import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginAction } from "../services/actions/user";
import { authState } from "../utils/funcs";

import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    EmailInput,
    PasswordInput,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function LoginPage() {
    const INITIALINPUT = { email: "", password: "" };
    const [inputData, setInputData] = useState(INITIALINPUT);
    const onChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    useSelector(authState);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(inputData));
    };

    return (
        <div className={styles.content}>
            <div className={styles.edit}>
                <h1>Вход</h1>
                <form onSubmit={onSubmit}>
                    <EmailInput
                        onChange={onChange}
                        value={inputData.email}
                        name={"email"}
                        isIcon={false}
                        extraClass={styles.input}
                        placeholder="E-mail"
                    />
                    <PasswordInput
                        onChange={onChange}
                        value={inputData.password}
                        name={"password"}
                        extraClass={styles.input}
                        placeholder="Пароль"
                    />
                    <Button
                        htmlType="submit"
                        type="primary"
                        size="medium"
                    >
                        Войти
                    </Button>
                </form>
            </div>
            <div className={styles.actions}>
                <div>
                    Вы - новый пользователь?
                    <Link to="/register"> Зарегистрироваться</Link>
                </div>
                <div>
                    Забыли пароль? <Link to="/forgot-password"> Восстановить пароль</Link>
                </div>
            </div>
        </div>
    );
}