import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import LoginPage from "./loginPage";
import Dashboard from "./dashboard";
import authProvider from "./authProvider";

import { defaultTheme } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import StarIcon from "@material-ui/icons/Star";
import CategoryIcon from "@material-ui/icons/Category";
import FavoriteIcon from "@material-ui/icons/Favorite";

import {
  UserConnectionDetailsList,
  UserConnectionDetailsShow,
} from "./resources/user-connection-details";
import { RestaurantList, RestaurantShow } from "./resources/restaurant";
import {
  RestaurantDetailsList,
  RestaurantDetailsShow,
} from "./resources/restaurant-details";
import {
  RestaurantDetailsReviewList,
  RestaurantDetailsReviewShow,
} from "./resources/restaurant-details-review";
import { CategoryList, CategoryShow } from "./resources/category";
import { FavouritesList, FavouritesShow } from "./resources/favourites";

const customTheme = createMuiTheme({
  ...defaultTheme,
  ...{
    palette: {
      primary: {
        main: "#2b76f0",
      },
      secondary: {
        main: "#ed1f30",
      },
    },
  },
});

function App() {
  return (
    <Admin
      theme={customTheme}
      loginPage={LoginPage}
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={jsonServerProvider(
        "https://www.lunch-picker-api.com/react-admin"
      )}
    >
      <Resource
        name="user-connection-details"
        icon={SettingsInputAntennaIcon}
        list={UserConnectionDetailsList}
        show={UserConnectionDetailsShow}
      />
      <Resource
        name="restaurant"
        icon={RestaurantIcon}
        list={RestaurantList}
        show={RestaurantShow}
      />
      <Resource
        name="restaurant-details"
        icon={RestaurantMenuIcon}
        list={RestaurantDetailsList}
        show={RestaurantDetailsShow}
      />
      <Resource
        name="restaurant-details-review"
        icon={StarIcon}
        list={RestaurantDetailsReviewList}
        show={RestaurantDetailsReviewShow}
      />
      <Resource
        name="category"
        icon={CategoryIcon}
        list={CategoryList}
        show={CategoryShow}
      />
      <Resource
        name="favourites"
        icon={FavoriteIcon}
        list={FavouritesList}
        show={FavouritesShow}
      />
    </Admin>
  );
}

export default App;
