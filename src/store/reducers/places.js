import {ADD_PLACE, DELETE_PLACE} from "../actions/actionTypes";

const initialState = {

    places: []

};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(), 
                    name: action.placeName,
                    image: {
                      uri: "https://npca.s3.amazonaws.com/images/6432/ed264bb4-fb55-4b8a-acac-bfaaf0c09d11-banner.jpg?1445968870"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                    
                  }),
                  selectedPlace: null
            };
        default:
            return state;
    }

};

export default reducer;