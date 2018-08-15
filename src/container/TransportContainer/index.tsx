import * as React from "react";
import TransportPage from "../../stories/screens/TrasnportPage";
export interface Props {
	navigation: any;
}
export interface State {}
export default class TrasnportContainer extends React.Component<Props, State> {
	render() {
		return <TransportPage navigation={this.props.navigation} />;
	}
}
