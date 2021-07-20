import { SETSECTIONS, DELETESECTIONS } from '../actionCreators/SectionActions';

const initialState = {
  sections: undefined,
};

const SectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETSECTIONS:
      return action.payload;
    case DELETESECTIONS:
      return initialState;
    default:
      return state;
  }
};

export default SectionReducer;
