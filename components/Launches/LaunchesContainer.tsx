import { connect } from "react-redux";
import { Launch } from "../../pages/api/API";
import { AppStateType } from "../../Redux/redux-store";
import { setPastLaunchesData } from "../../Redux/launchesReducer";
import Launches from "./Launches";
import {
  setLaunchesData,
  addMyLaunch,
  getDataForDetails,
} from "./../../Redux/launchesReducer";

let mapStateToProps = (state: AppStateType) => {
  return {
    launches: state.Launches.Launches,
  };
};

export default connect(mapStateToProps, {
  setLaunchesData,
  addMyLaunch,
  getDataForDetails,
})(Launches);
