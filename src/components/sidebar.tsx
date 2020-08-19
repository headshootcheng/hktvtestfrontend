import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import StorageIcon from "@material-ui/icons/Storage";
const SideMenu: React.FC<{
  isMenuOpen: boolean;
  onCloseMenu: () => void;
  goToHomePage: () => void;
  goToProductCreation: () => void;
  goToAddNewLocation: () => void;
  goToAddToLocation: () => void;
  goToProductTransit: () => void;
  goToStorage: () => void;
}> = ({
  isMenuOpen,
  onCloseMenu,
  goToHomePage,
  goToProductCreation,
  goToAddNewLocation,
  goToAddToLocation,
  goToProductTransit,
  goToStorage,
}) => {
  const list = (onCloseMenu: () => void) => {
    return (
      <div onKeyDown={onCloseMenu} style={{ width: 200 }}>
        <ListItem button style={{ marginTop: 4 }} onClick={goToHomePage}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button style={{ marginTop: 4 }} onClick={goToProductCreation}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Create Product" />
        </ListItem>

        <ListItem button style={{ marginTop: 4 }} onClick={goToAddNewLocation}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add New Location" />
        </ListItem>

        <ListItem button style={{ marginTop: 4 }} onClick={goToAddToLocation}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Product to Location" />
        </ListItem>

        <ListItem button style={{ marginTop: 4 }} onClick={goToProductTransit}>
          <ListItemIcon>
            <TransferWithinAStationIcon />
          </ListItemIcon>
          <ListItemText primary="Product Transit" />
        </ListItem>

        <ListItem button style={{ marginTop: 4 }} onClick={goToStorage}>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText primary="Current Storage" />
        </ListItem>
      </div>
    );
  };

  return (
    <Drawer anchor="left" open={isMenuOpen} onClose={onCloseMenu}>
      {list(onCloseMenu)}
    </Drawer>
  );
};

export default SideMenu;
