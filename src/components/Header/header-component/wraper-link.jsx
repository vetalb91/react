import React from 'react';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './wraper-link.module.css';

export const HeaderLink = ({
                        active,
                        iconVariant,
                        children
                    }) => {

    const iconSelection = (iconVariant) => {
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
        active ?
            <a href="http://localhost:3002/" className={`${styles["header-list"]}`}>
                <div className={`${styles["item-icon"]} ml-5 mr-2`}>{iconSelection(iconVariant)}</div>
                <span className={`${styles["item-text"]} mr-5`}>{children}</span>
            </a>
            :
            <a href="http://localhost:3002/" className={`${styles["header-list-disabled"]}`}>
                <div className={`${styles["item-icon"]} ml-5 mr-2`}>{iconSelection(iconVariant)}</div>
                <span className={`${styles["item-text"]} mr-5`}>{children}</span>
            </a>
    )
}

