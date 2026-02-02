
export const userReducer = (state, action) => {
    // action => {type, payload}
    switch (action.type) {
        case "SET_USERS":
            return action.payload;
        case "ADD_USER":
            return [...state, action.payload];
        case "UPDATE_USER":
            return state.map((user) => user.id === action.payload.id ? action.payload : user)
        case "DELETE_USER":
            return state.filter((user) => user.id !== action.payload.id)

        default:
            return state;
    }
}
