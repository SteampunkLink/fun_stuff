export const WEATHER_CC_LOAD = "WEATHER_CC_LOAD";
export const WEATHER_CC_SUCCESS = "WEATHER_CC_SUCCESS";
export const WEATHER_CC_FAIL = "WEATHER_CC_FAIL";
export const WEATHER_3D_LOAD = "WEATHER_3D_LOAD";
export const WEATHER_3D_SUCCESS = "WEATHER_3D_SUCCESS";
export const WEATHER_3D_FAIL = "WEATHER_3D_FAIL";

export default (state, action) => {
  switch (action.type) {
    case WEATHER_CC_LOAD:
      return {
        ...state,
        currentConditionsStatus: "loading",
      };
    case WEATHER_CC_SUCCESS:
      return {
        ...state,
        currentConditionsStatus: "success",
        currentConditions: action.payload,
      };
    case WEATHER_CC_FAIL:
      return {
        ...state,
        currentConditionsStatus: "fail",
        currentConditions: {},
      };
    case WEATHER_3D_LOAD:
      return {
        ...state,
        threeDayForecastStatus: "loading",
      };
    case WEATHER_3D_SUCCESS:
      return {
        ...state,
        threeDayForecastStatus: "success",
        threeDayForecast: action.payload,
      };
    case WEATHER_3D_FAIL:
      return {
        ...state,
        threeDayForecastStatus: "fail",
        threeDayForecast: [],
      };
    default:
      return { ...state };
  }
};
