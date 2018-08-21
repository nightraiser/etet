import * as React from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, View, Text, Thumbnail } from "native-base";
import { default as FaIcon } from "react-native-vector-icons/FontAwesome";
import GridNavigation from "../../../components/GridNavigation";
import FooterNavigation from "../../../components/FooterNavigation";
import styles from "./styles";
import { TouchableOpacity, TouchableHighlight } from "react-native";
class DistrictHomePage extends React.Component {
    constructor() {
        super(...arguments);
        this.goToAppDetailsPage = () => {
            const param = this.props.navigation.state.params;
            const { data } = param;
            if (data.schoolid === undefined) {
                // SDFR DETAILS
                this.props.navigation.navigate("SfdrDetailsPage");
            }
        };
    }
    render() {
        const param = this.props.navigation.state.params;
        const { data } = param;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, param ? param.data.sname : "Home")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(View, { style: { flexDirection: "row", flex: 1, marginBottom: 10, marginTop: 10, paddingBottom: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 } },
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(TouchableHighlight, { onPress: () => this.goToAppDetailsPage() },
                            React.createElement(Thumbnail, { source: { uri: data.imagepath } }))),
                    React.createElement(View, { style: { flex: 3, alignItems: "flex-end" } },
                        React.createElement(View, { style: { flexDirection: "row" } },
                            React.createElement(TouchableOpacity, { style: { padding: 5 }, onPress: () => this.props.navigation.navigate("BullyingPage") },
                                React.createElement(FaIcon, { size: 30, name: "frown-o" })),
                            React.createElement(TouchableOpacity, { style: { padding: 5 }, onPress: () => this.props.navigation.navigate("MembershipCardPage", { data }) },
                                React.createElement(FaIcon, { size: 30, name: "address-card" })),
                            React.createElement(TouchableOpacity, { style: { padding: 5 } },
                                React.createElement(FaIcon, { size: 30, name: "cogs" }))),
                        React.createElement(Text, { style: { fontWeight: "bold" } }, data.sname))),
                React.createElement(GridNavigation, { navigation: this.props.navigation })),
            React.createElement(FooterNavigation, { current: "Home", navigation: this.props.navigation })));
    }
}
export default DistrictHomePage;
//# sourceMappingURL=index.js.map