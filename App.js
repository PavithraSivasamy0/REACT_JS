import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import RestroContainer from "./src/components/RestroContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Contact from "./src/components/Contact";
import userContext from "./src/utils/userContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      loggedUser: "Pavithra",
    };
    setUserName(data.loggedUser);
  }, []);
  return (
    <userContext.Provider value={{ loggedUser: userName, setUserName }}>
      <div className="appLayout">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

const About = lazy(() => import("./src/components/About"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <RestroContainer />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading details..........</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
