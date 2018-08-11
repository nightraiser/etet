import * as React from "react";
import DistrictRatingPage from "../../stories/screens/DistrictRatingPage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class DistrictRatingPageContainer extends React.Component<Props, State> {
	render() {
		return <DistrictRatingPage navigation={this.props.navigation} />;
	}
}
