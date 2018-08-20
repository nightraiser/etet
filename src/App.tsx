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
import SfdrDetailsPageContainer from "./container/SfdrDetailsPageContainer";

import TrusteesListPageContaier from "./container/TrusteesListPageContainer";
import TrusteeDetailsPageContainer from "./container/TrusteeDetailsPageContainer";
import BullyingReportContainer from "./container/BullyingReportContainer";
import MembershipCardPageContainer from "./container/MembershipCardPageContainer";
import ContactPageContainer from "./container/ContactPageContainer";
import NewsPage from "./container/NewsPageContainer";
import TrasnportContainer from "./container/TransportContainer";
import GMapsContainer from "./container/GMapsContainer";
import SuperintendentPageContainer from "./container/SuperintendentPageContainer";
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
		SuperintendentPage:{screen:SuperintendentPageContainer},
		SfdrDetailsPage:{screen:SfdrDetailsPageContainer},
		GMaps:{screen:GMapsContainer},
		BullyingPage : {screen: BullyingReportContainer},
		RatingPage: {screen : DistrictRatingPage},
		Kpi: {screen : KpiPage},
		Calendar : {screen: CalendarPage},
		Map : {screen: MapPage},
		NewsPage : {screen : NewsPage},
		Home: { screen: Home },
		DistrictHomePage: { screen: DistrictHomePage },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
		SearchPage: {screen: SearchPage},
		TrusteesListPage: { screen: TrusteesListPageContaier },
		TrusteeDetails: { screen: TrusteeDetailsPageContainer },
		MembershipCardPage: { screen: MembershipCardPageContainer},
		ContactPage: { screen: ContactPageContainer},
		TrasnportPage: { screen: TrasnportContainer},
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
