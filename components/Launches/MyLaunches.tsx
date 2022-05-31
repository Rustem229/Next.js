import React, { FC } from "react";
import Skeleton from "@mui/material/Skeleton";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { Launch } from "../../pages/api/API";
import { Button, Modal } from "antd";
import Link from "next/link";

interface PropsType {
  myLaunches: Array<Launch>;
  returnTheLaunch: (launch: Launch) => void;
  setMyLaunchesData: (body: Array<Launch>) => void;
}

const MyLaunches: FC<PropsType> = ({
  myLaunches,
  returnTheLaunch,
  setMyLaunchesData,
  ...props
}) => {
  let [newData, setNewData] = useState<Array<Launch> | null>(null);
  let [newDataForLaunches, setNewDataForLaunches] =
    useState<Array<Launch> | null>(null);

  const dragEndHandler = (currentLaunch: Launch) => {
    let NewData = myLaunches.filter((launch) => launch.id !== currentLaunch.id);
    let NewDataForLaunches = myLaunches.filter(
      (launch) => launch.id === currentLaunch.id
    );

    setNewData(NewData);
    setNewDataForLaunches(NewDataForLaunches);

    showModal();
  };

  const Confirmation = (event: any) => {
    switch (event.target.id) {
      case "yes":
        console.log(newData, newDataForLaunches);
        setMyLaunchesData(newData);
        returnTheLaunch(newDataForLaunches[0]);
        setNewData(null);
        setNewDataForLaunches(null);
        setIsModalVisible(false);
      case "no":
        setNewData(null);
        setNewDataForLaunches(null);
        setIsModalVisible(false);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key={"yes"} id="yes" onClick={Confirmation}>
            Yes
          </Button>,
          <Button key={"no"} id="no" onClick={Confirmation}>
            No
          </Button>,
        ]}
      >
        <p>Return the ticket?</p>
      </Modal>

      <div className={styles.container}>
        {myLaunches.length ? (
          myLaunches.map((l) => (
            <Link href={`details/${l.id}`}>
              <div
                onDragStart={() => {
                  console.log(l);
                }}
                onDragLeave={() => {}}
                onDragEnd={() => {
                  dragEndHandler(l);
                }}
                onDragOver={() => {}}
                onDrop={() => {}}
                draggable={true}
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
              >
                <div>name: {l.name}</div>
                <div>flight number: {l.flight_number}</div>
              </div>
            </Link>
          ))
        ) : (
          <div>
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>{" "}
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>{" "}
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>{" "}
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>{" "}
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>{" "}
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>{" "}
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>{" "}
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>{" "}
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>{" "}
            <div className="skeleton">
              <Skeleton
                style={{
                  margin: 10,
                  padding: 10,
                  border: "1px solid black",
                  cursor: "grab",
                }}
                variant="rectangular"
                width={550}
                height={65}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLaunches;
