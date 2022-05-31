import Head from "next/head";
import React from "react";
import { Row, Col } from "antd";
import BodyComponent from "../components/body/BodyComponent";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "../Redux/redux-store";

const Home = () => {
  return (
    <>
      <Provider store={store}>
        <Head>Launches</Head>

        <BodyComponent />
      </Provider>
    </>
  );
};

export default Home;
