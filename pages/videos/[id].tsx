import { useRouter } from "next/router";

const id = () => {
  let router = useRouter();
  console.log(router);
  return <div>page bumber {router.query.id}</div>;
};

export default id;
