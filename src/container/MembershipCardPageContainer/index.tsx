import * as React from "react";
import MembershipCardPage from "../../stories/screens/MembershipCardPage";
export interface Props {
	navigation: any;
}
export interface State { }
export default class MembershipCardPageContainer extends React.Component<Props, State> {
	render() {
		return <MembershipCardPage navigation={this.props.navigation} />;
	}
}
