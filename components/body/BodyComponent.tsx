import React from "react";
import { Row, Col } from "antd";
import PastLaunchesContainer from "../Launches/PastLaunchesContainer";
import Launches from "../Launches/Launches";
import LaunchesContainer from "../Launches/LaunchesContainer";
import MyLaunchesContainer from "../Launches/MyLaunchesContainer";

const BodyComponent = () => {
  return (
    <div>
      <div>
        <h1> Explore the space </h1>
      </div>
      <Row justify="space-between">
        <Col
          style={{
            border: "1px solid black",
            minHeight: 1000,
          }}
          span={8}
        >
          <PastLaunchesContainer />
        </Col>
        <Col
          style={{
            border: "1px solid black",
            minHeight: 1000,
          }}
          span={8}
        >
          <LaunchesContainer />
        </Col>
        <Col
          style={{
            border: "1px solid black",
            minHeight: 1000,
          }}
          span={8}
        >
          <MyLaunchesContainer />
        </Col>
      </Row>
    </div>
  );
};

export default BodyComponent;
