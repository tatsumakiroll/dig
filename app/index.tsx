import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "@/screens/Home";
import Details from "@/screens/Details"

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterLight: require("../assets/fonts/Inter-Light.ttf")
  })
  if (!loaded) return null;

  return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
  );
}
