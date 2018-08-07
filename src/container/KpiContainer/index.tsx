import * as React from "react";
import KpiPage from "../../stories/screens/KpiPage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class KpiContainer extends React.Component<Props, State> {
	render() {
		return <KpiPage navigation={this.props.navigation} />;
	}
}
