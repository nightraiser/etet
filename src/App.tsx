import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import DistrictHomePage from "./container/DistrictHomePageContainer";
import CalendarContainer from "./container/CalendarContainer";
import MapContainer from "./container/MapContainer";
const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		contentComponent: (props: any) => <Sidebar {...props} />,
	},
);

const App = StackNavigator(
	{
		Map:{screen:MapContainer},
		Calendar:{screen:CalendarContainer},
		Home: { screen: Home },
		DistrictHomePage: { screen: DistrictHomePage },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Map",
		headerMode: "none",
	},
);

export default () => (
	<Root>
		<App />
	</Root>
);
