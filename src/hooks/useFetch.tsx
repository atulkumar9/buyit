import React, { useReducer, useEffect } from 'react'
import { ACTIONS, ApiDto, ReducerDto } from '../interfaces/api';

const initialState: ApiDto = {
  data: null,
  loading: true,
  error: null,
}

const reducer = (state: ApiDto, { type, payload }: ReducerDto) => {
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: {}, loading: true };
    case ACTIONS.FETCH_DATA:
      console.log("payload", payload);
      return { ...state, loading: false, data: payload };
    case ACTIONS.ERROR:
      return { ...state, data: {}, loading: false, error: payload };
    default:
      return { ...state };
  }
}

const useFetch = (...apiHandlers: Array<Promise<any>>) => {
  const [state, dispatch] = useReducer<React.Reducer<ApiDto, ReducerDto>>(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    Promise.all(apiHandlers).then((res: any) => {
      const filterData: any = {};
      res.forEach((r: any) => {
        filterData[r.collection] = r.data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      })
      dispatch({ type: ACTIONS.FETCH_DATA, payload: filterData })
    }).catch((e: any) => {
      dispatch({ type: ACTIONS.ERROR, payload: e.message })
    })
  }, []);
  return state;
};

export default useFetch;
