import { Reducer } from 'redux';
import { FETCH_API_DATA, FETCH_API_DATA_SUCCESS, FETCH_API_DATA_FAILURE, IMovieDetails } from "./actions";



export interface IMovieDefaultState {
  data: IMovieDetails[];
  loading: boolean;
  error: string;
};

const initialState: IMovieDefaultState = {
  data: [],
  loading: false,
  error: "",
};

const reducer: Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_API_DATA:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_API_DATA_SUCCESS:
      const transformedData: IMovieDetails = action.payload.feed.entry.map((entry: any) => {
        return {
          id: entry.id.attributes["im:id"],
          title: entry["im:name"]?.label,
          description: entry.summary?.label,
          poster: entry["im:image"][2]?.label,
        };
      });
      return {
        ...state,
        data: transformedData,
        loading: false,
        error: "",
      };
    case FETCH_API_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
