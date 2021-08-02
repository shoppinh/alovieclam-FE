import React, { Suspense } from "react";
const Header = React.lazy(() => import("../common/Header"));
const Footer = React.lazy(() => import("../common/Footer"));
const Dashboard = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="Dashboard">
        <Header />
        <div className="Dashboard__container"></div>
        {/* <Footer /> */}
      </div>
    </Suspense>
  );
};

export default Dashboard;
