import Link from "next/link";
import { notification, Modal } from "antd";
import React, { FC } from "react";
import Skeleton from "@mui/material/Skeleton";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { API } from "../../pages/api/API";
import { Launch } from "../../pages/api/API";

interface PropsType {
  launches: Array<Launch>;
  setLaunchesData: (body: Array<Launch>) => void;
  addMyLaunch: (launch: Launch) => void;
  getDataForDetals: (launch: Launch) => void;
}

const Launches: FC<PropsType> = ({
  launches,
  setLaunchesData,
  addMyLaunch,
  getDataForDetals,
  ...props
}) => {
  useEffect(() => {
    API.getLaunches().then((data) => {
      setLaunchesData(data);
    });
  }, []);

  const dragEndHandler = (currentLaunch: Launch) => {
    let newData = launches.filter((launch) => launch.id !== currentLaunch.id);
    let newDataForMyLaunches = launches.filter(
      (launch) => launch.id === currentLaunch.id
    );

    setLaunchesData(newData);
    addMyLaunch(newDataForMyLaunches[0]);

    notification.open({
      message: "Билет забронирован",
    });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className={styles.container}>
        {launches.length ? (
          launches.map((l) => (
            <Link
              onClick={() => {
                console.log(l);
              }}
              href={`details/${l.id}`}
            >
              <div
                onDragEnd={() => {
                  dragEndHandler(l);
                }}
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
          <div className="">
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

export default Launches;
