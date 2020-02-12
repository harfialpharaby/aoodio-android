import {
  FETCH_VIDEO_START,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_FAIL
} from "../actionTypes";

const initialState = {
  isLoading: true,
  err: null,
  data: []
};

export default function video(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEO_START:
      return {
        ...state,
        isLoading: true,
        data: []
      };
    case FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.videos
      };
    case FETCH_VIDEO_FAIL:
      return {
        ...state,
        isLoading: false,
        err: action.err
      };

    default:
      return state;
  }
}
