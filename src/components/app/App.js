import React from 'react';
import Header from '../header/AppHeader';
import BurgerConstructor from '../constructor/BurgerConstructor';
import BurgerIngredients  from '../ingridients/BurgerIngredients';
import styles from './App.module.css';

function App() {
    const url = "https://norma.nomoreparties.space/api/ingredients";
    const [state, setState] = React.useState({
        isLoading: false,
        hasError: false,
        data: [],
    });

    React.useEffect(() => {
        setState({ ...state, isLoading: true, hasError: false });
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`);
            })
            .then((json) =>
                setState({
                    ...state,
                    isLoading: false,
                    hasError: false,
                    data: json.data,
                })
            )
            .catch((err) => setState({ ...state, isLoading: false, hasError: true }));
    }, []);

    const { data, isLoading, hasError } = state;
      return (
          <div className={styles.app}>
            <Header/>
              {isLoading && "Loading..."}
              {hasError && "error"}
              {!isLoading && !hasError && data.length && (
                <div className={styles.wrap}>
                    <BurgerConstructor data={state.data}/>
                    <BurgerIngredients data={state.data}/>
                </div>
              )}
          </div>
      );
}

export default App;
