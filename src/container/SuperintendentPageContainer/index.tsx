import * as React from "react";
import SuperintendentPage from "../../stories/screens/SuperintendentPage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class SuperintendentPageContainer extends React.Component<Props, State> {
	render() {
		return <SuperintendentPage navigation={this.props.navigation} />;
	}
}
