import { useEffect } from "react";
import { useDispatch } from "../../hooks/redux-hooks";
import { Routes, Route, useLocation,useNavigate } from "react-router-dom";
import { Error404 } from "../../pages/error404/error404";
import { ForgotPassword } from "../../pages/forgotPassword/forgotPassword";
import { Home } from "../../pages/home/home";
import { Feed } from "../../pages/feed/feed";
import { Ingredient } from "../../pages/ingredient/ingredient";
import { Login } from "../../pages/login/login";
import { OrderPage } from "../../pages/orderPage/orderPage";
import { OrderDetailes } from "../../pages/ordersDetailes/orderDetailes";
import { Profile } from "../../pages/profile/profile";
import { RegisterPage } from "../../pages/registration/registerPage";
import { ResetPassword } from "../../pages/resetPassword/resetPassword";
import { checkUserAuth } from "../../services/actions/auth";
import { getIngredientsData } from "../../services/actions/burgerIngredients";
import { AppHeader } from "../appHeader/appHeader";
import { RequiredAuth } from "../requiredAuth/requiredAuth";
import { Modal } from "../modal/modal";
import { UserProfileForm } from "../userProfileForm/userProfileForm";
function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const background = location.state && location.state.background;
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getIngredientsData());
        dispatch(checkUserAuth());
    }, [dispatch]);

    return (
        <>
            <AppHeader></AppHeader>
            <Routes location={background || location}>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Error404 />}></Route>
                <Route path="/feed" element={<Feed />}></Route>
                <Route
                    path="/login"
                    element={
                        <RequiredAuth onlyUnAuth={true} redirectTo={""}>
                            <Login />
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="/register"
                    element={
                        <RequiredAuth onlyUnAuth={true} redirectTo={""}>
                            <RegisterPage />
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="/forgot-password"
                    element={
                        <RequiredAuth onlyUnAuth={true} redirectTo={""}>
                            <ForgotPassword />
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="/reset-password"
                    element={
                        <RequiredAuth onlyUnAuth={true} redirectTo={""}>
                            <ResetPassword />
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="profile"
                    element={
                        <RequiredAuth redirectTo={"/login"}>
                            <Profile />
                        </RequiredAuth>
                    }
                >
                    <Route index element={<UserProfileForm />}></Route>
                    <Route path="orders" element={<OrderPage />}></Route>
                </Route>

                <Route
                    path="/ingredients/:id"
                    element={<Ingredient isNotModal={true}></Ingredient>}
                ></Route>
                <Route
                    path="/profile/orders/:number"
                    element={
                        <RequiredAuth redirectTo={"/login"}>
                            <OrderDetailes isNotModal={true}></OrderDetailes>
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="/feed/:number"
                    element={<OrderDetailes isNotModal={true}></OrderDetailes>}
                ></Route>
            </Routes>
            {background && (
                <Routes>
                    (
                    <Route
                        path="/ingredients/:id"
                        element={
                            <Modal
                                closeModal={() => {
                                    navigate("/");
                                }}
                            >
                                <Ingredient isNotModal={false}></Ingredient>
                            </Modal>
                        }
                    ></Route>
                    <Route
                        path="/feed/:number"
                        element={
                            <Modal
                                closeModal={() => {
                                    navigate(background.pathname);
                                }}
                            >
                                <OrderDetailes isNotModal={false}></OrderDetailes>
                            </Modal>
                        }
                    ></Route>
                    <Route
                        path="/profile/orders/:number"
                        element={
                            <Modal
                                closeModal={() => {
                                    navigate(background.pathname);
                                }}
                            >
                                <OrderDetailes isNotModal={false}></OrderDetailes>
                            </Modal>
                        }
                    ></Route>
                    )
                </Routes>
            )}
        </>
    );
}

export default App;