import React from 'react';
import styles from './BurgerConstructor.module.css';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';
import { DrugAndDrop } from './components/DragAndDropElement/DrugAndDrop';
import { InfoAmount } from './components/InfoAmount/InfoAmount';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";


export const BurgerConstructor = ({data}) => {
    const [isOpenModal,setIsOpenModal] = React.useState(false)
    const bun = data.filter((item) => item.type === "bun");
    const ingredients = data.filter((item) => item.type !== "bun");

    const openModal = () => {
        setIsOpenModal(true);
    }
    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (

        <section className={`${styles["constructor-wrapper"]}`}>
            {isOpenModal && <Modal onClose={closeModal}>
                <OrderDetails />
            </Modal>}
            <div className={`${styles["constructor-wrapper"]} mt-25`}>
                   <div className={`mr-2`}> <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun[0].name} (верх)`}
                        price={bun[0].price}
                        thumbnail={bun[0].image}/>
                   </div>
                <div className={`${styles["ingredients-wrapper"]} custom-scroll`}>
                {ingredients.map(item => (

                    <div className={`${styles["item-wrapper"]}`}  key={item._id}>
                        <DrugAndDrop />
                        <ConstructorElement
                            type={item.type}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </div>
                    ))}
                </div>
                <div className={`mr-3`}>
                <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun[0].name} (низ)`}
                        price={bun[0].price}
                        thumbnail={bun[0].image}
                    />
                </div>
            <InfoAmount onClick={openModal}/>
        </div>
        </section>
    );
};

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired
};