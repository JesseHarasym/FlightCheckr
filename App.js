import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegistrationScreen from "./app/screens/RegistrationScreen";
import HomeLoggedIn from "./app/screens/HomeLoggedIn";
import ForgotPassword from "./app/screens/ForgotPassword";
import SearchFlights from "./app/screens/SearchFlight";
import CalenderScreen from "./app/screens/CalenderScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchFlight">
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Password"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeLogged"
          component={HomeLoggedIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchFlight"
          component={SearchFlights}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calender"
          component={CalenderScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
