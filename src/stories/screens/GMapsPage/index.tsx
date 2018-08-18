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
	//imagesList: any;
	coordinatesList: any;
}
/*
const marker1 = require("../../../../assets/BusIcons/P.png");
const marker2 = require("../../../../assets/BusIcons/P.png");
const marker3 = require("../../../../assets/BusIcons/P.png");
const marker4 = require("../../../../assets/BusIcons/P.png");
const marker5 = require("../../../../assets/BusIcons/P.png");
const marker6 = require("../../../../assets/BusIcons/P.png");
const marker7 = require("../../../../assets/BusIcons/P.png");*/
let interVal = undefined;
class GMapsPage extends React.Component<Props, State> {
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
			//imagesList: [marker1, marker2, marker3, marker4, marker5, marker6, marker7],
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
		currentState.coordinatesList = [{ latitude: 29.383694, longitude: -100.917048 },
		{ latitude: 29.384577, longitude: -100.916402 },
		{ latitude: 29.357775, longitude: -100.902462 },
		{ latitude: 29.383694, longitude: -100.917048 },
		{ latitude:29.375327103000075, longitude: -100.876752263999947 },
		{ latitude: 29.360457, longitude: -100.901831 },
		{ latitude: 29.381204, longitude: -100.910964 },
	];
		currentState.isLoading = false;

		this.setState(currentState);
		
	}
	render() {
		let map;
		if (this.state.isLoading == false) {

			let marker = this.state.coordinatesList.map((current: any, index) => {

			//	let image = this.state.imagesList[index];
				return <Marker key={index}  coordinate={current} title="Marker" />
			});
			map = <MapView style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
				initialRegion={{
					latitude: this.state.coordinates.latitude,
					longitude: this.state.coordinates.longitude,
					latitudeDelta: 10,
					longitudeDelta: 10,
				}}>
				{marker}
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
						<Title>{"Maps"}</Title>
					</Body>
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

export default GMapsPage;