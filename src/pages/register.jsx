import React from "react";
import { registerNewUserAction } from "../services/actions/user";
import styles from "./register.module.css";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {
    EmailInput,
    PasswordInput,
    Input,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { authState } from "../utils/funcs";
export const RegisterPage = () => {
    const INITIALINPUT = { email: "", password: "", name: "" };
    useSelector(authState);
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState(INITIALINPUT);
    const onChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(registerNewUserAction(inputData));
        setInputData(INITIALINPUT);
    };
    return (
        <div className={styles.content}>
            <div className={styles.edit}>
                <h1>Регистрация</h1>
                <form onSubmit={onSubmit}>
                <Input
                    type={"text"}
                    placeholder="Имя"
                    onChange={onChange}
                    value={inputData.name}
                    name={"name"}
                    error={false}
                    errorText={"Ошибка"}
                    size={"default"}
                    extraClass={styles.input}
                />
                <EmailInput
                    onChange={onChange}
                    value={inputData.email}
                    name={"email"}
                    isIcon={false}
                    placeholder="E-mail"
                    extraClass={styles.input}
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
                    Зарегистрироваться
                </Button>
                </form>
            </div>
            <div className={styles.actions}>
                <p>
                    Уже зарегестрированы? <Link to="/login">Войти</Link>
                </p>
            </div>
        </div>
    );
};