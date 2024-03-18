import React, { useReducer, useEffect } from 'react'
import { ACTIONS, ApiDataDto, ApiDto, ReducerDto } from '../interfaces/api';

const initialPostData: ApiDataDto = {
  success: false,
  message: ''
}

const initialState: ApiDto = {
  data: null,
  loading: false,
  error: null,
}

const reducer = (state: ApiDto, { type, payload }: ReducerDto) => {
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: {}, loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, loading: false, data: payload };
    case ACTIONS.ERROR:
      return { ...state, data: {}, loading: false, error: payload };
    default:
      return { ...state };
  }
}

export const useFetch = (...apiHandlers: Array<Promise<any>>) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return state;
};

export const usePost = (apiCaller: Function) => {
  const initialPostState = {
    ...initialState,
    data: initialPostData
  }
  const [state, dispatch] = useReducer<React.Reducer<ApiDto, ReducerDto>>(reducer, initialPostState);

  const postData = async (data: any) => {
    dispatch({ type: ACTIONS.API_REQUEST });
    try {
      const response = await apiCaller(data);
      if (!response.success) {
        throw new Error(response.message);
      }
      dispatch({ type: ACTIONS.FETCH_DATA, payload: response })
    } catch (e: any) {
      dispatch({ type: ACTIONS.ERROR, payload: e.message })
    }
  };

  return { ...state, postData };
}
