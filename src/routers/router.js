import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Detalle from "../screens/details";

const Stack = createNativeStackNavigator();

const opcionesScreenDefecto = {
  headerStyle: {
    backgroundColor: "rgb(25,26,93)",
  },
  headerTitleStyle: { color: "white", alignment: "center" },
  headerTitleAlign: "center",
};

export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={opcionesScreenDefecto}
        />
        <Stack.Screen
          name="Detalles"
          component={Detalle}
          options={opcionesScreenDefecto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
