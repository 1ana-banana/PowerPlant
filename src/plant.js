export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const feed = changeState("food");
export const hydrate = changeState("water");
export const giveLight = changeState("light");

export const yuckyFood = feed(-3);
export const goodFood = feed(+2);

export const water = hydrate(+2);

export const light = giveLight(+2);

const initialValues = {food : 0, water: 0, light : 0};

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const plant = storeState(initialValues);
  
