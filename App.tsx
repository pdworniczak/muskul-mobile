import { createAppContainer } from "react-navigation";

import AuthNavigator from "./src/navigation/AuthNavigator";
import "./src/firebase/init";

export default createAppContainer(AuthNavigator);
