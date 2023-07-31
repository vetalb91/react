export const DATA_URL_INGREDIENTS = "ingredients";
export const ORDER_POINT = "orders";
export const PASSWORD_RESET = "password-reset";
export const SEND_CODE_TO_RESET = "password-reset/reset";
export const REGISTER_POINT = "auth/register";
export const TOKEN_POINT = "auth/token";
export const USER_POINT = "auth/user";
export const LOGIN_POINT = "auth/login";
export const LOGOUT_POINT = "auth/logout";
export const BASE_URL = "https://norma.nomoreparties.space/api/";
export const GET_ALL_ORDERS = "wss://norma.nomoreparties.space/orders/all";
export const mockIngredients = {
    success: true,
    data: [
        {
            _id: "643d69a5c3f7b9001cfa093c",
            name: "Краторная булка N-200i",
            type: "bun",
            proteins: 80,
            fat: 24,
            carbohydrates: 53,
            calories: 420,
            price: 1255,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0941",
            name: "Биокотлета из марсианской Магнолии",
            type: "main",
            proteins: 420,
            fat: 142,
            carbohydrates: 242,
            calories: 4242,
            price: 424,
            image: "https://code.s3.yandex.net/react/code/meat-01.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa093e",
            name: "Филе Люминесцентного тетраодонтимформа",
            type: "main",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/meat-03.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0942",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0943",
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 22,
            carbohydrates: 11,
            calories: 14,
            price: 80,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa093f",
            name: "Мясо бессмертных моллюсков Protostomia",
            type: "main",
            proteins: 433,
            fat: 244,
            carbohydrates: 33,
            calories: 420,
            price: 1337,
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0940",
            name: "Говяжий метеорит (отбивная)",
            type: "main",
            proteins: 800,
            fat: 800,
            carbohydrates: 300,
            calories: 2674,
            price: 3000,
            image: "https://code.s3.yandex.net/react/code/meat-04.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa093d",
            name: "Флюоресцентная булка R2-D3",
            type: "bun",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0944",
            name: "Соус традиционный галактический",
            type: "sauce",
            proteins: 42,
            fat: 24,
            carbohydrates: 42,
            calories: 99,
            price: 15,
            image: "https://code.s3.yandex.net/react/code/sauce-03.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0945",
            name: "Соус с шипами Антарианского плоскоходца",
            type: "sauce",
            proteins: 101,
            fat: 99,
            carbohydrates: 100,
            calories: 100,
            price: 88,
            image: "https://code.s3.yandex.net/react/code/sauce-01.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0946",
            name: "Хрустящие минеральные кольца",
            type: "main",
            proteins: 808,
            fat: 689,
            carbohydrates: 609,
            calories: 986,
            price: 300,
            image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
            image_mobile:
                "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            image_large:
                "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0947",
            name: "Плоды Фалленианского дерева",
            type: "main",
            proteins: 20,
            fat: 5,
            carbohydrates: 55,
            calories: 77,
            price: 874,
            image: "https://code.s3.yandex.net/react/code/sp_1.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0948",
            name: "Кристаллы марсианских альфа-сахаридов",
            type: "main",
            proteins: 234,
            fat: 432,
            carbohydrates: 111,
            calories: 189,
            price: 762,
            image: "https://code.s3.yandex.net/react/code/core.png",
            image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/core-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa0949",
            name: "Мини-салат Экзо-Плантаго",
            type: "main",
            proteins: 1,
            fat: 2,
            carbohydrates: 3,
            calories: 6,
            price: 4400,
            image: "https://code.s3.yandex.net/react/code/salad.png",
            image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
            __v: 0,
        },
        {
            _id: "643d69a5c3f7b9001cfa094a",
            name: "Сыр с астероидной плесенью",
            type: "main",
            proteins: 84,
            fat: 48,
            carbohydrates: 420,
            calories: 3377,
            price: 4142,
            image: "https://code.s3.yandex.net/react/code/cheese.png",
            image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
            __v: 0,
        },
    ],
};
export const mockErrorFailure = { name: "string", message: "string" };
export const mockViewItemIngredient = {
    _id: "643d69a5c3f7b9001cfa093d",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
};
export const mockRegistrationSuccessresponse = {
    success: true,
    user: { email: "romanosov@mail.ru", name: "eee" },
    accessToken:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzRlNTZiODJlMjc3MDAxYmZhNTI0YiIsImlhdCI6MTY5MDYyNTM4NywiZXhwIjoxNjkwNjI2NTg3fQ.GpE9Ese5cEAVwVnNRo4fLx8l0BaIfBX24HVcf9QlzVg",
    refreshToken:
        "f77eaa9fc3d58c354769714aba82e28ee0cc9a98021d7c16ab2fcfc0e28e69ec7ba32790a7d1ebef",
};
export const mockGetUserresponse = {
    success: true,
    user: { email: "romanosov@mail.ru", name: "eee" },
};

export const mockLoginSuccessresponse = {
    success: true,
    accessToken:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2RhYWZhNDVjNmYyMDAxYmU2YWUzZCIsImlhdCI6MTY5MDYyNzI5MywiZXhwIjoxNjkwNjI4NDkzfQ.dMw0lMwcAnRxCjGYB2tWx2otzLFvTmc7L4c9gCb4nEk",
    refreshToken:
        "51329852a3df745ffa4e38ebd39825f92608edb6a40a8278c43e99aaba3fae73b51d5b3a554f22b2",
    user: {
        email: "romanosow@mail.ru",
        name: "ssssdcdcdcdcdcdcdcdллллллллллeded",
    },
};

export const mockChangeUserresponse = {
    success: true,
    user: { email: "romanosow@mail.ru", name: "ssss" },
};
export const mockNotBunError = "В бургере не может не быть булок";
export const mockOrderDataresponse = {
    success: true,
    name: "Флюоресцентный бургер",
    order: {
        ingredients: [
            {
                _id: "643d69a5c3f7b9001cfa093d",
                name: "Флюоресцентная булка R2-D3",
                type: "bun",
                proteins: 44,
                fat: 26,
                carbohydrates: 85,
                calories: 643,
                price: 988,
                image: "https://code.s3.yandex.net/react/code/bun-01.png",
                image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                __v: 0,
            },
        ],
        _id: "64c50dc982e277001bfa53a6",
        owner: {
            name: "ssss",
            email: "romanosow@mail.ru",
            createdAt: "2023-04-17T20:24:26.341Z",
            updatedAt: "2023-07-29T10:46:07.556Z",
        },
        status: "done",
        name: "Флюоресцентный бургер",
        createdAt: "2023-07-29T13:02:01.732Z",
        updatedAt: "2023-07-29T13:02:01.969Z",
        number: 14943,
        price: 988,
    },
};
export const mockSocketMiddlewareresponse = {
    success: true,
    orders: [
        {
            _id: "64c50ea882e277001bfa53b2",
            ingredients: [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093c",
            ],
            status: "done",
            name: "Space краторный бургер",
            createdAt: "2023-07-29T13:05:44.971Z",
            updatedAt: "2023-07-29T13:05:45.153Z",
            number: 14945,
        },
        {
            _id: "64c50e5882e277001bfa53af",
            ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093d"],
            status: "done",
            name: "Флюоресцентный бургер",
            createdAt: "2023-07-29T13:04:24.175Z",
            updatedAt: "2023-07-29T13:04:24.436Z",
            number: 14944,
        },
        {
            _id: "64c50dc982e277001bfa53a6",
            ingredients: ["643d69a5c3f7b9001cfa093d"],
            status: "done",
            name: "Флюоресцентный бургер",
            createdAt: "2023-07-29T13:02:01.732Z",
            updatedAt: "2023-07-29T13:02:01.969Z",
            number: 14943,
        },
    ],
    total: 14571,
    totalToday: 110,
};
export const mockOrderItem = {
    _id: "643dab1745c6f2001be6ae3f",
    ingredients: ["643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa093d"],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-04-17T20:24:55.860Z",
    updatedAt: "2023-04-17T20:24:55.950Z",
    number: 507,
};