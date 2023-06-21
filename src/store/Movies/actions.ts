export const FETCH_API_DATA = "FETCH_API_DATA";
export const FETCH_API_DATA_SUCCESS = "FETCH_API_DATA_SUCCESS";
export const FETCH_API_DATA_FAILURE = "FETCH_API_DATA_FAILURE";

export interface IApiResponse {
  data: {
    feed: {
      entry: {
        id: {
          attributes: {
            "im:id": string
          }
        }
        "im:name": {
          label: string
        },
        summary: {
          label: string
        }
      }[]
    }
  }
}

export interface IMovieDetails {
  id: string;
  title: string;
  description: string;
  poster: string;
}

export const fetchApiData = () => ({
  type: FETCH_API_DATA,
});

export const fetchApiDataSuccess = (data: any) => ({
  type: FETCH_API_DATA_SUCCESS,
  payload: data,
});

export const fetchApiDataFailure = (error: string) => ({
  type: FETCH_API_DATA_FAILURE,
  payload: error,
});