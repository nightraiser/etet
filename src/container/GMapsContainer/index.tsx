import * as React from "react";
import GMapsPage from "../../stories/screens/GMapsPage";
export interface Props {
	navigation: any;
}
export interface State {}
export default class GMapsContainer extends React.Component<Props, State> {
	render() {
		return <GMapsPage navigation={this.props.navigation} />;
	}
}
