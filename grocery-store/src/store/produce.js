import produceData from '../mockData/produce.json'

// Constants

const POPULATE = 'POPULATE';

// Action Creators

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    };
};

// Reducers
        
export default function produceReducer(state = {}, action) {
    const nextState = { ...state };

    switch (action.type) {
        case POPULATE:
            action.produce.forEach((produceItem) => {
                nextState[produceItem.id] = produceItem;
            })
            return nextState;
        default:
            return state;
    }
}

// dispatch()