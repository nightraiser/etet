import * as React from "react";
import SearchPage from "../../stories/screens/SearchPage";
export interface Props {
	navigation: any;
}
export interface State {}
export default class SearchPageContainer extends React.Component<Props, State> {
	render() {
		return <SearchPage navigation={this.props.navigation} />;
	}
}
