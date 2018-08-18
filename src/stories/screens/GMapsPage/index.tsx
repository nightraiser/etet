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
const marker1 = require("../../../../assets/BusIcons/P.png");
const marker2 = require("../../../../assets/BusIcons/P.png");
const marker3 = require("../../../../assets/BusIcons/P.png");
const marker4 = require("../../../../assets/BusIcons/P.png");
const marker5 = require("../../../../assets/BusIcons/P.png");
const marker6 = require("../../../../assets/BusIcons/P.png");
const marker7 = require("../../../../assets/BusIcons/P.png");
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
			imagesList: [marker1, marker2, marker3, marker4, marker5, marker6, marker7],
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
		{ latitude: 29.615028, longitude: -101.155243 },
		{ latitude: 29.312297, longitude: -103.016052 },
		{ latitude: 29.222673, longitude: -99.781952 },
		{ latitude: 28.898565, longitude: -100.636139 },
		{ latitude: 29.472182, longitude: -98.629761  },
		{ latitude: 28.066224, longitude: -102.321167 }];
		currentState.isLoading = false;

		this.setState(currentState);
		
	}
	render() {
		let map;
		if (this.state.isLoading == false) {

			let marker = this.state.coordinatesList.map((current: any, index) => {

				let image = this.state.imagesList[index];
				return <Marker key={index} image={image} coordinate={current} title="Marker" />
			});
			map = <MapView style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
				initialRegion={{
					latitude: this.state.coordinates.latitude,
					longitude: this.state.coordinates.longitude,
					latitudeDelta: 0.1,
					longitudeDelta: 0.1,
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