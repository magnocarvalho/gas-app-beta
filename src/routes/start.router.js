import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";

const AuthStack = createStackNavigator();

const Routes = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};

export default Routes;
