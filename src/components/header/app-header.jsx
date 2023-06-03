import React from "react";
import styles from "./app-header.module.css";
import Person from "./header-component/person";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import Create from "./header-component/create";
import Order from "./header-component/order-feed";
import { Link } from "react-router-dom";
export const AppHeader = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.dblbl}>
                    <Create />
                    <Order />
                </div>
                <div className={styles.logo}>
                    <Link to={"/"}>
                        <Logo />
                    </Link>
                </div>
                <div className={styles.account}>
                    <Person />
                </div>
            </div>
        </header>
    );
};