import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPasswordRequest } from "../services/burger-api";
import styles from "./forgot-password.module.css";
import {
    EmailInput,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function ForgotPass() {
    const navigate = useNavigate();
    const onClick = (e) => {
        e.preventDefault();
        forgotPasswordRequest(form)
            .then(() => {
                localStorage.setItem("reset-password", true);
                navigate("/reset-password");
            })
            .catch(() => {
                setError(true);
            });
    };
    const { hasError, setError } = useState(false);
    const [form, setValue] = useState({ email: "" });

    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.content}>
            <div className={styles.edit}>
                <h1>Восстановление пароля</h1>
                <EmailInput
                    onChange={onChange}
                    value={form.email}
                    name={"email"}
                    isIcon={false}
                    placeholder="Укажите E-mail"
                    extraClass={styles.input}
                />
                <Button
                    htmlType="button"
                    type="primary"
                    size="medium"
                    onClick={onClick}
                >
                    Восстановить
                </Button>
            </div>
            <div className={styles.actions}>
                <p>
                    Вспомнили пароль? <Link to="/login">Войти</Link>
                </p>
                {hasError && <p>что-то пошло не так</p>}
            </div>
        </div>
    );
}