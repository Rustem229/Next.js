import store from "../../Redux/redux-store";

export default (l: any) => {
  return (
    <div>
      <p>Date local: {l.date_local}</p>
      <p>date precision: {l.date_precision}</p>
      <p>date unix: {l.date_unix}</p>
      <p>date utc: {l.date_utc}</p>
      <p>flight number: {l.flight_number}</p>
      <p>launch_library_id: {l.launch_library_id}</p>
      <p>name: {l.name}</p>
      <p>rocket: {l.rocket}</p>
    </div>
  );
};
