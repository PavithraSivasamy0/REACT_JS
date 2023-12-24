import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import RestroContainer from "./RestroContainer";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <RestroContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
