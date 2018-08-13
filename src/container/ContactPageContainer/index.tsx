import * as React from "react";
import ContactPage from "../../stories/screens/ContactPage";
export interface Props {
	navigation: any;
}
export interface State { }
export default class ContactPageContainer extends React.Component<Props, State> {
	render() {
		return <ContactPage navigation={this.props.navigation} />;
	}
}
