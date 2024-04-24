import { createStore } from 'redux';

const initialState = {
    activityData: null,
    colors: ['#999', '#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#f80', '#08f', '#8f0'],
    selectedColorIndex: 0
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ACTIVITY_DATA':
            return {
                ...state,
                activityData: action.payload
            };
        case 'SET_SELECTED_COLOR_INDEX':
            return {
                ...state,
                selectedColorIndex: action.payload
            };
        default:
            return state;
    }
}


const store = createStore(rootReducer);

export default store;
