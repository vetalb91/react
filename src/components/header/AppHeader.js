import React from 'react';
import styles from './AppHeader.module.css';
import User from './user/user';
import {
    BurgerIcon,
    ProfileIcon,
    ListIcon,
    Logo,
} from '@ya.praktikum/react-developer-burger-ui-components';

function header(){

        return (
            <header className={styles.navbar}>
               <div className={styles.content}>
                   <div className={styles.unc1}>
                      <div className={styles.nav01}>
                          <ListIcon type={"primary"}/>
                          <p className="text text_type_main-default text_color_inactive">
                              Лента заказов
                          </p>
                      </div>
                       <div className={styles.nav02}>
                           <BurgerIcon type={"primary"}/>
                           <div className="text text_type_main-default">Конструктор</div>
                       </div>
                   </div>
                   <div className={styles.logo}>
                       <Logo/>
                   </div>
                   <div className={styles.account}>
                       <ProfileIcon type={styles.account}/>
                       <div className="text text_type_main-default text_color_inactive">
                           <User/>
                       </div>
                   </div>
               </div>
            </header>
        );

}

export default header;