const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Frame from "./screens/Frame";
import IPhone1313Pro25 from "./screens/IPhone1313Pro25";
import IPhone1313Pro24 from "./screens/IPhone1313Pro24";
import IPhone1313ProCodeInpu from "./screens/IPhone1313ProCodeInpu";
import IPhone1313ProCodeInpu1 from "./screens/IPhone1313ProCodeInpu1";
import IPhone1313ProCodeInpu2 from "./screens/IPhone1313ProCodeInpu2";
import IPhone1313ProCodeInpu3 from "./screens/IPhone1313ProCodeInpu3";
import IPhone1313ProCodeInpu4 from "./screens/IPhone1313ProCodeInpu4";
import IPhone1313ProCodeInpu5 from "./screens/IPhone1313ProCodeInpu5";
import IPhone1313ProCodeInpu6 from "./screens/IPhone1313ProCodeInpu6";
import IPhone1313ProCodeInpu7 from "./screens/IPhone1313ProCodeInpu7";
import IPhone1313ProCodeInpu8 from "./screens/IPhone1313ProCodeInpu8";
import IPhone1313ProCodeInpu9 from "./screens/IPhone1313ProCodeInpu9";
import IPhone1313ProCodeInpu10 from "./screens/IPhone1313ProCodeInpu10";
import IPhone1313ProCodeInpu11 from "./screens/IPhone1313ProCodeInpu11";
import IPhone1313ProCodeInpu12 from "./screens/IPhone1313ProCodeInpu12";
import IPhone1313ProCodeInpu13 from "./screens/IPhone1313ProCodeInpu13";
import IPhone1313ProCodeInpu14 from "./screens/IPhone1313ProCodeInpu14";
import IPhone1313ProCodeInpu15 from "./screens/IPhone1313ProCodeInpu15";
import IPhone1313ProCodeInpu16 from "./screens/IPhone1313ProCodeInpu16";
import IPhone1313ProCodeInpu17 from "./screens/IPhone1313ProCodeInpu17";
import IPhone1313ProCodeInpu18 from "./screens/IPhone1313ProCodeInpu18";
import IPhone1313ProCodeInpu19 from "./screens/IPhone1313ProCodeInpu19";
import IPhone1313ProCodeInpu20 from "./screens/IPhone1313ProCodeInpu20";
import IPhone1313ProCodeInpu21 from "./screens/IPhone1313ProCodeInpu21";
import IPhone1313ProCodeInpu22 from "./screens/IPhone1313ProCodeInpu22";
import Frame1 from "./screens/Frame1";
import IPhone1313ProLoading from "./screens/IPhone1313ProLoading";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro25"
              component={IPhone1313Pro25}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro24"
              component={IPhone1313Pro24}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu"
              component={IPhone1313ProCodeInpu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu1"
              component={IPhone1313ProCodeInpu1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu2"
              component={IPhone1313ProCodeInpu2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu3"
              component={IPhone1313ProCodeInpu3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu4"
              component={IPhone1313ProCodeInpu4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu5"
              component={IPhone1313ProCodeInpu5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu6"
              component={IPhone1313ProCodeInpu6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu7"
              component={IPhone1313ProCodeInpu7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu8"
              component={IPhone1313ProCodeInpu8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu9"
              component={IPhone1313ProCodeInpu9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu10"
              component={IPhone1313ProCodeInpu10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu11"
              component={IPhone1313ProCodeInpu11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu12"
              component={IPhone1313ProCodeInpu12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu13"
              component={IPhone1313ProCodeInpu13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu14"
              component={IPhone1313ProCodeInpu14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu15"
              component={IPhone1313ProCodeInpu15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu16"
              component={IPhone1313ProCodeInpu16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu17"
              component={IPhone1313ProCodeInpu17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu18"
              component={IPhone1313ProCodeInpu18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu19"
              component={IPhone1313ProCodeInpu19}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu20"
              component={IPhone1313ProCodeInpu20}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu21"
              component={IPhone1313ProCodeInpu21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProCodeInpu22"
              component={IPhone1313ProCodeInpu22}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313ProLoading"
              component={IPhone1313ProLoading}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
