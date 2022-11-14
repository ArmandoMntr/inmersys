export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case "add todo":
            return [...initialState, action.payload];

        default:
            return initialState;
    }
};
