import axios from "../../utils/axios";

export const getReservation = () => {
  return {
    type: "GET_RESERVATION",
    payload: axios.get("/reservation"),
  };
};

export const getReservationById = (reservationId) => {
  return {
    type: "GET_RESERVATION_BY_ID",
    payload: axios.get(`/reservation/${reservationId}`),
  };
};
