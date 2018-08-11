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
import MapPage from "./container/MapContainer";
import CalendarPage from "./container/CalendarContainer";
import SearchPage from "./container/SearchPageContainer";
import KpiPage from "./container/KpiContainer";
import DistrictRatingPage from "./container/DistrictRatingPageContainer";

import CalendarContainer from "./container/CalendarContainer";
import MapContainer from "./container/MapContainer";
import TrusteesListPageContaier from "./container/TrusteesListPageContainer";
import TrusteeDetailsPageContainer from "./container/TrusteeDetailsPageContainer";
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
		RatingPage: {screen :DistrictRatingPage},
		Kpi: {screen :KpiPage},
		Calendar :{screen:CalendarPage},
		Map :{screen:MapPage},
		Home: { screen: Home },
		DistrictHomePage: { screen: DistrictHomePage },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
		SearchPage:{screen:SearchPage},
		TrusteesListPage: { screen: TrusteesListPageContaier },
		TrusteeDetails: { screen: TrusteeDetailsPageContainer },
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
	},
);

export default () => (
	<Root>
		<App />
	</Root>
);
