import React from 'react';
import styles from './OrderDetails.module.css';
import imageDone from '../../images/done.png';

export const OrderDetails = ()=> {
    return (
        <div className={`${styles["modal-order"]} mt-30 mb-30`}>
            <span className={`text_type_digits-large mb-8`}>034536</span>
            <span className={`text_type_main-medium mb-15`}>идентификатор заказа</span>
            <img className={`mb-15`} src={imageDone} alt={"checked"}/>
            <span className={`text_type_main-default mb-2`}>Ваш заказ начали готовить</span>
            <span className={`${styles["text-bottom"]} text_type_main-default`}>Дождитесь готовности на орбитальной станции</span>
    </div>
)
}