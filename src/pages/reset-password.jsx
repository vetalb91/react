import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPasswordRequest } from "../services/burger-api";
import styles from "./reset-password.module.css";
import {
    Input,
    PasswordInput,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function ResetPassword() {
    const navigate = useNavigate();

    if (!localStorage.getItem("reset-password")) {
        navigate("/");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        resetPasswordRequest(form)
            .then(() => {
                localStorage.removeItem("reset-password");
                navigate("/login");
            })
            .catch(() => {
                setError(true);
            });
    };
    const { error, setError } = useState(false);
    const [form, setValue] = useState({ password: "", token: "" });

    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.content}>
            <div className={styles.edit}>
                <h1>Восстановление пароля</h1>
                <form onSubmit={onSubmit}>
                <PasswordInput
                    onChange={onChange}
                    value={form.password}
                    name={"password"}
                    extraClass={styles.input}
                    placeholder="Введите новый пароль"
                />
                <Input
                    onChange={onChange}
                    value={form.token}
                    name={"token"}
                    extraClass={styles.input}
                    placeholder="Введите код из письма"
                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="medium"
                >
                    Сохранить
                </Button>
                </form>
            </div>
            <div className={styles.actions}>
                <p>
                    Вспомнили пароль? <Link to="/login">Войти</Link>
                </p>
                {error && <p>что-то пошло не так</p>}
            </div>
        </div>
    );
}