import { AnyAction } from "redux";
import { Launch } from "../pages/api/API";

const SET_PAST_LAUNCHES_DATA = "SET_PAST_LAUNCHES_DATA";
const SET_LAUNCHES_DATA = "SET_LAUNCHES_DATA";
const SET_MY_LAUNCHES_DATA = "SET_MY_LAUNCHES_DATA";

const ADD_MY_LAUNCH = "ADD_MY_LAUNCH";
const RETURN_THE_LAUNCH = "RETURN_THE_LAUNCH";

const GET_DATA_FOR_DETAILS = "GET_DATA_FOR_DETAILS";

type State = {
  PastLaunches: Launch[];
  Launches: Launch[];
  MyLaunches: Launch[];
  LaunchesForDetails: Launch | null;
};

let initialState: State = {
  PastLaunches: [],
  Launches: [],
  MyLaunches: [],
  LaunchesForDetails: null,
};

const launchesReducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case SET_PAST_LAUNCHES_DATA:
      return {
        ...state,
        PastLaunches: action.body,
      };

    case SET_LAUNCHES_DATA:
      return {
        ...state,
        Launches: action.body,
      };

    case SET_MY_LAUNCHES_DATA:
      return {
        ...state,
        MyLaunches: action.body,
      };

    case ADD_MY_LAUNCH:
      let newLaunch = action.launch;
      return {
        ...state,
        MyLaunches: [...state.MyLaunches, newLaunch],
      };
    case RETURN_THE_LAUNCH:
      let returnLaunch = action.launch;
      return {
        ...state,
        Launches: [...state.Launches, returnLaunch],
      };

    case GET_DATA_FOR_DETAILS:
      return {
        ...state,
        LaunchesForDetails: action.launch,
      };

    default:
      return state;
  }
};

type GetDataForDetailsActionType = {
  type: typeof GET_DATA_FOR_DETAILS;
  launch: Launch;
};

type AddMyLaunchActionType = {
  type: typeof ADD_MY_LAUNCH;
  launch: Launch;
};

type ReturnLaunchActionType = {
  type: typeof RETURN_THE_LAUNCH;
  launch: Launch;
};

type SetPastLaunchesDataActionType = {
  type: typeof SET_PAST_LAUNCHES_DATA;
  body: Array<Launch>;
};

type SetLaunchesDataActionType = {
  type: typeof SET_LAUNCHES_DATA;
  body: Array<Launch>;
};

type SetMyLaunchesActionType = {
  type: typeof SET_MY_LAUNCHES_DATA;
  body: Array<Launch>;
};

export const getDataForDetails = (launch: Launch) => ({
  type: GET_DATA_FOR_DETAILS,
  launch,
});

export const setLaunchesData = (
  body: Array<Launch>
): SetLaunchesDataActionType => ({
  type: SET_LAUNCHES_DATA,
  body,
});

export const setPastLaunchesData = (
  body: Array<Launch>
): SetPastLaunchesDataActionType => ({
  type: SET_PAST_LAUNCHES_DATA,
  body,
});

export const setMyLaunchesData = (
  body: Array<Launch>
): SetMyLaunchesActionType => ({
  type: SET_MY_LAUNCHES_DATA,
  body,
});

export const addMyLaunch = (launch: Launch): AddMyLaunchActionType => ({
  type: ADD_MY_LAUNCH,
  launch,
});

export const returnTheLaunch = (launch: Launch) => ({
  type: RETURN_THE_LAUNCH,
  launch,
});

export default launchesReducer;
