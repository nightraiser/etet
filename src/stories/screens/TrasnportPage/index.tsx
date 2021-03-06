import * as React from "react";
import { Image } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View } from "native-base";
import MapView, {Marker} from "react-native-maps";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {
	coordinates: any;
	isLoading: boolean;
	loggedInUserId: any;
	showImg: boolean;
	imgurl: string;
	map: any;
	index: number;
	imagesList: any;
	coordinatesList: any;
}
const bus1 = require("../../../../assets/BusIcons/1.png");
const bus3 = require("../../../../assets/BusIcons/3.png");
const bus2 = require("../../../../assets/BusIcons/2.png");
const bus4 = require("../../../../assets/BusIcons/4.png");
const bus5 = require("../../../../assets/BusIcons/5.png");
const bus6 = require("../../../../assets/BusIcons/6.png");
const bus7 = require("../../../../assets/BusIcons/7.png");
const bus8 = require("../../../../assets/BusIcons/8.png");
const bus9 = require("../../../../assets/BusIcons/9.png");
const bus10 = require("../../../../assets/BusIcons/10.png");
let interVal = undefined;
class TransportPage extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			coordinates: { latitude: 37.78825, longitude: -122.4324 },
			isLoading: true,
			loggedInUserId: undefined,
			showImg: false,
			imgurl: "",
			map: MapView,
			index: 0,
			imagesList: [bus1, bus2, bus3, bus4, bus5, bus6, bus6, bus7, bus8, bus9, bus10],
			coordinatesList:
				[{ latitude: 37.78825, longitude: -122.4324 }, { latitude: 37.78825, longitude: -122.4324 }, { latitude: 37.78825, longitude: -122.4324 }],
		};
	}
	componentDidMount() {

		let currentState: State = Object.assign({}, this.state );
		let temp: any = {};
		temp.latitude = 29.370886;
		temp.longitude = -100.895867;

		currentState.coordinates = temp;
		currentState.coordinatesList = [{ latitude: 29.355100, longitude: -100.914728 },
		{ latitude: 29.368271, longitude: -100.910794 },
		{ latitude: 29.363568, longitude: -100.896105 },
		{ latitude: 29.356020, longitude: -100.951724 },
		{ latitude: 29.495577, longitude: -100.995269 },
		{ latitude: 29.361816, longitude: -100.932874 },
		{ latitude: 29.404743, longitude: -100.901803 },
		{ latitude: 29.399107, longitude: -100.914201 },
		{ latitude: 29.383262, longitude: -100.914622 }];
		currentState.isLoading = false;

		this.setState(currentState);
		interVal = setInterval(() => {
			this.renderNewPoint();
		}, 2000);
	}
	componentWillUnmount() {
		clearInterval(interVal);
	}

	renderNewPoint() {
		let currentState = Object.assign({}, this.state);
		let currentIndex = this.state.index;
		let currentCoordinates = Object.assign([], currentState.coordinatesList);
		let newCoordinatesList = [];
		let velocity = [0.001, 0.001, 0.0001];
		for (let i = 0; i < currentCoordinates.length; i++) {
			let currentVelocity = velocity[i % 3];
			if (i % 2 === 0) {
				// add
				newCoordinatesList[i] = {
					latitude: currentCoordinates[i].latitude + currentVelocity, longitude: currentCoordinates[i].longitude + currentVelocity };
			} else {
				// subtract
				newCoordinatesList[i] = {
					 latitude: currentCoordinates[i].latitude - currentVelocity, longitude: currentCoordinates[i].longitude - currentVelocity };
			}
		}

		this.setState({ index: currentIndex + 1, coordinatesList: newCoordinatesList });
	}
	render() {
		let map = <Text>Fetching your location</Text>;
		if (this.state.isLoading === false) {

			let buses = this.state.coordinatesList.map((current: any, index) => {

				let image = this.state.imagesList[index];
				return <Marker key={index} image={image} coordinate={current} title="Bus" />
			});
			map = <MapView style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
				initialRegion={{
					latitude: this.state.coordinates.latitude,
					longitude: this.state.coordinates.longitude,
					latitudeDelta: 0.1,
					longitudeDelta: 0.1,
				}}
			>
				{buses}

			</MapView>;
		}

		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{"Transport"}</Title>
					</Body>

					<Right />
				</Header>
					<View style={{ flex: 1 }}>
						<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#ececec" }}>
							{map}
						</View>
					</View>
			</Container>
		);
	}
}

export default TransportPage;