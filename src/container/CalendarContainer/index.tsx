import * as React from "react";
import CalendarPage from "../../stories/screens/CalendarPage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class CalendarContainer extends React.Component<Props, State> {
	render() {
		
		return <CalendarPage navigation={this.props.navigation} />;
	}
}
