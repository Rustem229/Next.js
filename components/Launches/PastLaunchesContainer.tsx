import { connect } from "react-redux";
import { Launch } from "../../pages/api/API";
import { AppStateType } from "../../Redux/redux-store";
import { setPastLaunchesData } from "../../Redux/launchesReducer";
import PastLaunches from "./PastLaunches";

let mapStateToProps = (state: AppStateType) => {
  return {
    pastLaunches: state.Launches.PastLaunches,
  };
};

export default connect(mapStateToProps, { setPastLaunchesData })(PastLaunches);
