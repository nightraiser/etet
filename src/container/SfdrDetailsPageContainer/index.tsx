import * as React from "react";
import SfdrDetailsPage from "../../stories/screens/SfdrDetailsPage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class SfdrDetailsPageContainer extends React.Component<Props, State> {
	render() {
		return <SfdrDetailsPage navigation={this.props.navigation} />;
	}
}
