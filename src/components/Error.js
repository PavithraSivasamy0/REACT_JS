import { useRouteError } from "react-router-dom";

const Error = () => {
  const routeError = useRouteError();
  routeError;
  return (
    <div>
      <h1>oops!!!Something happened</h1>
      <p>{routeError.status + " " + "Something went wrong"}</p>
    </div>
  );
};

export default Error;
