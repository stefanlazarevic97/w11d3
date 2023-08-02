// Constants

const ADD_ITEM = 'ADD_ITEM';

// Action Creators

export const addItem = itemId => {
    return {
        type: ADD_ITEM,
        itemId
    }
}

// Reducers 

const cartReducer = (state = {}, action) => {    
    const nextState = { ...state };

    switch (action.type) {
        case ADD_ITEM:
            nextState[action.itemId] = { id: action.itemId, count: 1 }
            return nextState;
        default:
            return state;
    }
}

export default cartReducer;