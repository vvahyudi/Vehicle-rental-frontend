const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const reservation = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESERVATION_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "GET_RESERVATION_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "GET_RESERVATION_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "GET_RESERVATION_BY_ID_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "Loading...",
      };

    case "GET_RESERVATION_BY_ID_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "GET_RESERVATION_BY_ID_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data[0],
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    default: {
      return state;
    }
  }
};

export default reservation;
