import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { Error404 } from "../../pages/error404/error404";
import { ForgotPassword } from "../../pages/forgotPassword/forgotPassword";
import { Home } from "../../pages/home/home";
import { Ingredient } from "../../pages/ingredient/ingredient";
import { Login } from "../../pages/login/login";
// @ts-ignore
import { OrderPage } from "../../pages/orderPage/orderPage";
import { Profile } from "../../pages/profile/profile";
import { RegisterPage } from "../../pages/registration/registerPage";
import { ResetPassword } from "../../pages/resetPassword/resetPassword";
import { checkUserAuth } from "../../services/actions/auth";
import { getIngredientsData } from "../../services/actions/burgerIngredients";
import { AppHeader } from "../appHeader/appHeader";
import { RequiredAuth } from "../requiredAuth/requiredAuth";

function App() {
    const dispatch = useDispatch<any>();
    const location = useLocation();
    const background = location.state && location.state.background;

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
                    <Route path="orders" element={<OrderPage />}></Route>
                </Route>

                <Route path="/ingredients/:id" element={<Ingredient />}></Route>
            </Routes>
            {background && (
                <Routes>
                    (<Route path="/ingredients/:id" element={<Ingredient />}></Route>)
                </Routes>
            )}
        </>
    );
}

export default App;