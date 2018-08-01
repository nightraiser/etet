import * as React from "react";
import MapPage from "../../stories/screens/MapPage";
import MapView from 'react-native-maps';

export interface Props {
	navigation: any,
}
export interface State {}
export default class MapContainer extends React.Component<Props, State> {
	render() {
		return <MapPage navigation={this.props.navigation} />;
	}
}
