import React, { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "./components/topbar";
import SideMenu from "./components/sidebar";
import HomePage from "./homepage";
import ProductCreation from "./productCreate";
import AddToLocation from "./addtoLocation";
import CurrentStorage from "./currentStorage";

const Dashboard = () => {
  const [isMenuOpen, setMenuOStatus] = useState<boolean>(false);
  const [currentIndex, setIndex] = useState<number>();

  const onPressMenu = () => {
    setMenuOStatus(!isMenuOpen);
  };

  const onCloseMenu = () => {
    setMenuOStatus(false);
  };
  const contentPage = () => {
    switch (currentIndex) {
      case 0:
        return <HomePage />;
      case 1:
        return <ProductCreation />;
      case 2:
        return <AddToLocation />;
      case 3:
        return <CurrentStorage />;
      default:
        return <HomePage />;
    }
  };

  const goToHomePage = () => {
    setIndex(0);
  };
  const goToProductCreation = () => {
    setIndex(1);
  };
  const goToLocation = () => {
    setIndex(2);
  };

  const goToStorage = () => {
    setIndex(3);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Topbar username="test" onPressMenu={onPressMenu} />
      <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <SideMenu
          isMenuOpen={isMenuOpen}
          onCloseMenu={onCloseMenu}
          goToHomePage={goToHomePage}
          goToProductCreation={goToProductCreation}
          goToLocation={goToLocation}
          goToStorage={goToStorage}
        />
        {contentPage()}
      </div>
    </div>
  );
};

export default Dashboard;
