import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Stacks
import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";

import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import UserNavigator from "./UserNavigator";

//import AdminNavigator from "./AdminNavigator";

//import AuthGlobal from "../Context/store/AuthGlobal";

import CartIcon from "../Shared/CartIcon";

const Tab = createBottomTabNavigator();

const Main = () => {

  const context = useContext(AuthGlobal)

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              style={{ position: "relative"}}
              color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon 
               name="shopping-cart"
               color={color}
               size={30}              
              />
              <CartIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon
                name="cog"
                color={color}
                size={30} />
              <CartIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon
                name="user"
                color={color}
                size={30} />
              <CartIcon />
            </View>
          ),
        }}
      />
      

    </Tab.Navigator>
  );
};

export default Main;
