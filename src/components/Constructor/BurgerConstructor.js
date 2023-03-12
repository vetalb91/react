import React from 'react';
import styles from './BurgerConstructor.module.css';
import PropTypes from 'prop-types';
import ModalSuccess from '../modal/ModalSuccess';
import {
    CurrencyIcon,
    Button,
    ConstructorElement,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const burgerPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
}).isRequired;

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(burgerPropTypes).isRequired
};

function BurgerConstructor({data}) {
    const [openModal,setOpenModal] = React.useState(false)
    const bun = data.filter((item) => item.type === "bun");
    const ingredients = data.filter((item) => item.type !== "bun");

    function modal() {
        setOpenModal(true);
    }
    return (
        <div className={styles.container}>
            <div style={{paddingRight:'30px'}}  className={styles.burgerComponents}>
                <div style={{marginLeft:'22px'}} className={styles.ingredients} >
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun[0].name} (верх)`}
                        price={bun[0].price}
                        thumbnail={bun[0].image}/>
                </div>
                {ingredients.map(item => (
                    <div  className={styles.ingredients} key={item._id}>
                        <div className={styles.wrap}>
                            <DragIcon type="primary"/>
                        </div>
                        <ConstructorElement
                            type={item.type}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </div>
                    ))}
                <div style={{marginLeft:'22px'}} className={styles.ingredients} >
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun[0].name} (низ)`}
                        price={bun[0].price}
                        thumbnail={bun[0].image}
                    />
                </div>
            </div>
            <div className={styles.info}>
                <p className="text text_type_main-medium">610</p>
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="large" onClick={modal}>
                    Оформить заказ
                </Button>
            </div>
            {openModal && <ModalSuccess closeModal={setOpenModal}/>}
        </div>
    );
}
export default BurgerConstructor