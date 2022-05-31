import { useRouter } from "next/router";
import store from "../../Redux/redux-store";
import { Launch } from "../api/API";
import { Table } from "antd";

const id = () => {
  const router = useRouter();

  let state = store.getState().Launches;
  let stateCopy = { ...state };

  let l1: Launch[] = stateCopy.Launches;
  let l2: Launch[] = stateCopy.MyLaunches;

  let Launch = l1.concat(l2);

  const arrayLaunch = Launch.filter((l) => l.id === router.query.id);
  const l = arrayLaunch[0];

  const dataSource = [
    {
      key: "1",
      name: "Date local",
      value: l.date_local,
    },
    {
      key: "2",
      name: "date precision",
      value: l.date_precision,
    },
    {
      key: "3",
      name: "date unix",
      value: l.date_unix,
    },
    {
      key: "4",
      name: "date utc",
      value: l.date_utc,
    },
    {
      key: "5",
      name: "flight number",
      value: l.flight_number,
    },
    {
      key: "6",
      name: "launch_library_id",
      value: l.id,
    },
    {
      key: "7",
      name: "name",
      value: l.name,
    },
    {
      key: "8",
      name: "rocket",
      value: l.rocket,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <div>
      {/* <div>
        <p>Date local: {l.date_local}</p>
        <p>date precision: {l.date_precision}</p>
        <p>date unix: {l.date_unix}</p>
        <p>date utc: {l.date_utc}</p>
        <p>flight number: {l.flight_number}</p>
        <p>launch_library_id: {l.launch_library_id}</p>
        <p>name: {l.name}</p>
        <p>rocket: {l.rocket}</p>
      </div> */}
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default id;
