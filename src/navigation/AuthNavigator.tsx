import { createSwitchNavigator } from "react-navigation";

import AppNavigator from "./AppNavigator";
import { Screen } from "./navigation";
import LogInScreen from "../authentication/LogInScreen";

export default createSwitchNavigator(
  {
    [Screen.LogIn]: LogInScreen,
    [Screen.App]: AppNavigator
  },
  {
    initialRouteName: Screen.LogIn
  }
);
