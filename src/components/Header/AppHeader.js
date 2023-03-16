import React from 'react';
import styles from './AppHeader.module.css';
import { NavLink } from './components/NavLink';
import {
    Logo,
} from '@ya.praktikum/react-developer-burger-ui-components';

function header(){

    return (
        <header className={`${styles["header"]} text_type_main-default`}>
            <nav className={`${styles["header-nav"]}`}>
                <ul className={`${styles["header-list"]}`}>
                    <li className={`${styles["item-left"]} mb-4 mt-4`}>
                        <NavLink iconVariant={"constructor"} children="Конструктор" active/>
                        <NavLink iconVariant={"orderFeed"} children="Лента заказов"/>
                    </li>
                    <li className={`${styles["header-logo"]}`}><Logo /></li>
                    <li className={`${styles["item-right"]} mb-4 mt-4`}><NavLink iconVariant={"personalAccount"} children="Личный кабинет"/></li>
                </ul>
            </nav>
        </header>
    )

}

export default header;