import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchApiData, fetchApiDataSuccess, fetchApiDataFailure, IApiResponse } from "../store/Movies/actions";


const useRequest = (url: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchApiData());

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData: IApiResponse = await response.json();

        dispatch(fetchApiDataSuccess(jsonData));
      } catch (error) {
        dispatch(fetchApiDataFailure(`Failed to fetch data from following reason: ${error}`));
      }
    };

    fetchData();
  }, [url, dispatch]);

};

export default useRequest;
