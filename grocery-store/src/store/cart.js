// Constants

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const INCREMENT_ITEM = 'INCREMENT_ITEM';
const DECREMENT_ITEM = 'DECREMENT_ITEM';
const SET_ITEM_COUNT = 'SET_ITEM_COUNT';

// Action Creators

export const addItem = itemId => {
    return {
        type: ADD_ITEM,
        itemId
    }
}

export const removeItem = itemId => {
    return {
        type: REMOVE_ITEM,
        itemId
    }
}

export const incrementItem = itemId => {
    return {
        type: INCREMENT_ITEM,
        itemId
    }
}

export const decrementItem = itemId => {
    return {
        type: DECREMENT_ITEM,
        itemId
    }
}

export const setItemCount = (itemId, count) => {
    return {
        type: SET_ITEM_COUNT,
        payload: {itemId, count}
    }
}

// Reducers 

const cartReducer = (state = {}, action) => {    
    const nextState = { ...state };

    switch (action.type) {
        case ADD_ITEM:
            nextState[action.itemId] = { id: action.itemId, count: 1 };
            return nextState;
        case REMOVE_ITEM:
            delete nextState[action.itemId];
            return nextState;
        case INCREMENT_ITEM:
            nextState[action.itemId].count += 1;
            return nextState;
        case DECREMENT_ITEM:
            nextState[action.itemId].count -= 1;
            return nextState;
        case SET_ITEM_COUNT:
            const { itemId, count } = action.payload;
            nextState[action.itemId].count = count;
            return nextState;
        default:
            return state;
    }
}

export default cartReducer;