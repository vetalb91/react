import PropTypes from 'prop-types';

export const ingredientType = PropTypes.shape({
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

export type TCardElement = {
    data: IData[];
};

export interface Idetails {
    calories: number,
        carbohydrates: number,
        fat: number,
        proteins: number,
        image_large: string,
        name: string
};
export interface IElement {
    calories: number,
    carbohydrates: number,
    fat: number,
    proteins: number,
    image_large: string,
    name: string
};


export interface IData {
    _id?: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string
    image_mobile: string,
    image_large: string,
    v?: number
};


