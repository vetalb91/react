import React from 'react';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './NavLink.module.css';

type THeaderLink = {
    active?: boolean;
    iconVariant: string,
    children: string
}

export const NavLink = ({
    active,
    iconVariant,
    children
}:THeaderLink):JSX.Element  => {

    const iconSelection = (iconVariant: string) => {
        switch (iconVariant) {
            case "constructor":
                return (<BurgerIcon type={ active ? 'primary' : 'secondary'} />)
            case "orderFeed":
                return (<ListIcon type={ active ? 'primary' : 'secondary'} />)
            case "personalAccount":
                return (<ProfileIcon type={ active ? 'primary' : 'secondary'} />)
            default: return <></>
        }
    }


    return (
        <div className={`${styles["header-list"]}`}>
            <div className={`${styles["item-icon"]} ml-5 mr-2`}>{iconSelection(iconVariant)}</div>
            <span className={`${styles["item-text"]} mr-5`}>{children}</span>
        </div>
    )
}