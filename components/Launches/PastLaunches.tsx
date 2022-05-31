import React, { FC } from "react";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { API } from "../../pages/api/API";
import { Launch } from "../../pages/api/API";

interface PropsType {
  pastLaunches: Array<Launch>;
  setPastLaunchesData: (body: Array<Launch>) => void;
}

const PastLaunches: FC<PropsType> = ({
  pastLaunches,
  setPastLaunchesData,
  ...props
}) => {
  useEffect(() => {
    API.getPastLaunches().then((data) => {
      setPastLaunchesData(data);
    });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {pastLaunches.length ? (
          pastLaunches.map((l: Launch) => (
            <div
              style={{
                margin: 10,
                padding: 10,
                border: "1px solid black",
              }}
            >
              <div>name: {l.name}</div>
              <div>flight number: {l.flight_number}</div>
            </div>
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

export default PastLaunches;
