import * as React from "react";
import TrusteeDetailsPage from "../../stories/screens/TrusteeDetailsPage";

export interface Props {
	navigation: any;
}
export interface State {}
class TrusteeDetailsPageContainer extends React.Component<Props, State> {
	render() {
		let { params } = this.props.navigation.state;
		return <TrusteeDetailsPage
			trustee={params.trustee}  navigation={this.props.navigation} />;
	}
}

export default TrusteeDetailsPageContainer;
