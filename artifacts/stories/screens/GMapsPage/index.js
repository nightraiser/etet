import * as React from "react";
import { Container, Header, Title, Button, Icon, Left, Body, View } from "native-base";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";
/*
const marker1 = require("../../../../assets/BusIcons/P.png");
const marker2 = require("../../../../assets/BusIcons/P.png");
const marker3 = require("../../../../assets/BusIcons/P.png");
const marker4 = require("../../../../assets/BusIcons/P.png");
const marker5 = require("../../../../assets/BusIcons/P.png");
const marker6 = require("../../../../assets/BusIcons/P.png");
const marker7 = require("../../../../assets/BusIcons/P.png");*/
let interVal = undefined;
class GMapsPage extends React.Component {
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
            coordinatesList: [{ latitude: 37.78825, longitude: -122.4324 }, { latitude: 37.78825, longitude: -122.4324 }, { latitude: 37.78825, longitude: -122.4324 }],
        };
    }
    componentDidMount() {
        let currentState = Object.assign({}, this.state);
        let temp = {};
        temp.latitude = 29.370886;
        temp.longitude = -100.895867;
        currentState.coordinates = temp;
        currentState.coordinatesList = [{ latitude: 29.383694, longitude: -100.917048 },
            { latitude: 29.384577, longitude: -100.916402 },
            { latitude: 29.357775, longitude: -100.902462 },
            { latitude: 29.383694, longitude: -100.917048 },
            { latitude: 29.375327103000075, longitude: -100.876752263999947 },
            { latitude: 29.360457, longitude: -100.901831 },
            { latitude: 29.381204, longitude: -100.910964 },
        ];
        currentState.isLoading = false;
        this.setState(currentState);
    }
    render() {
        let map;
        if (this.state.isLoading == false) {
            let marker = this.state.coordinatesList.map((current, index) => {
                //	let image = this.state.imagesList[index];
                return React.createElement(Marker, { key: index, coordinate: current, title: "Marker" });
            });
            map = React.createElement(MapView, { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, initialRegion: {
                    latitude: this.state.coordinates.latitude,
                    longitude: this.state.coordinates.longitude,
                    latitudeDelta: 10,
                    longitudeDelta: 10,
                } }, marker);
        }
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, "Maps"))),
            React.createElement(View, { style: { flex: 1 } },
                React.createElement(View, { style: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#ececec" } }, map))));
    }
}
export default GMapsPage;
//# sourceMappingURL=index.js.map