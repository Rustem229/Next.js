import { connect } from "react-redux";
import { Launch } from "../../pages/api/API";
import { AppStateType } from "../../Redux/redux-store";

import MyLaunches from "./MyLaunches";
import {
  returnTheLaunch,
  setMyLaunchesData,
} from "./../../Redux/launchesReducer";

let mapStateToProps = (state: AppStateType) => {
  return {
    myLaunches: state.Launches.MyLaunches,
  };
};

export default connect(mapStateToProps, { returnTheLaunch, setMyLaunchesData })(
  MyLaunches
);
