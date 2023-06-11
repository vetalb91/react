import { useEffect, useMemo } from "react";
import { useSelector,useDispatch } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../../components/errorMessage/errorMessage";
import { Loader } from "../../components/loader/loader";
import { Order } from "../../components/order/order";
import { getOrderData } from "../../services/actions/getOrderData";
import { getDataOrders } from "../../services/reducers/stateFuncs";
import { GetOrderDataWithToggleModal } from "../../types/commonTypes";

export const OrderDetailes: React.FC<any> = ({ isNotModal }): JSX.Element => {
    const { number } = useParams();
    const dispatch = useDispatch();
    const { isLoadingOneData, error, orderData } = useSelector(getDataOrders);

    useEffect(() => {
        dispatch(getOrderData(number));
    }, [dispatch, number]);

    const arrOfIngredientsOrderWithToggleModal =
        useMemo((): GetOrderDataWithToggleModal => {
            return { ...orderData, isNotModal };
        }, [orderData]);

    if (error) {
        return <ErrorMessage error={error}></ErrorMessage>;
    }
    return isLoadingOneData ? (
        <Loader></Loader>
    ) : (
        <Order {...arrOfIngredientsOrderWithToggleModal}></Order>
    );
};