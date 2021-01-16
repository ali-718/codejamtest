const initialState = {
  photos: [],
  users: [],
  albums: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_ALBUMS":
      return {
        ...state,
        albums: payload,
      };
    case "GET_PHOTOS":
      return {
        ...state,
        photos: payload,
      };
    case "GET_USERS":
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
}
