export enum ACTIONS {
  API_REQUEST = "api-request",
  FETCH_DATA = "fetch-data",
  ERROR = "error",
}

export interface ApiDto {
  data?: any;
  loading: Boolean;
  error?: any;
}

export interface ReducerDto {
  type: ACTIONS;
  payload?: Array<any>;
}
