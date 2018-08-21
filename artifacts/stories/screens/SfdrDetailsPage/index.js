import * as React from "react";
import { View, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Card, CardItem } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
const logo = require("../../../../assets/logo.png");
class SfdrDetailsPage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, param ? param.name : "SAN FELIPE DEL RIO CISD")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(View, { style: { alignItems: "center" } },
                    React.createElement(Image, { source: logo, style: { height: 178, marginTop: 10 } })),
                React.createElement(Text, null, "SAN FELIPE DEL RIO CISD "),
                React.createElement(View, { style: { alignItems: 'center' } },
                    React.createElement(Text, null, " ADDRESS ")),
                React.createElement(Card, null,
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, "315 Griner St.Del Rio, Texas - 78840\t"),
                            React.createElement(Text, null, "Phone : (830) 778-4000"),
                            React.createElement(View, { style: { flexDirection: "row" } },
                                React.createElement(Text, null, "Superintendent: "),
                                React.createElement(TouchableHighlight, { onPress: () => this.props.navigation.navigate("SuperintendentPage") },
                                    React.createElement(Text, { style: { color: "#27ae60", fontWeight: "bold", } }, "Carlos H. Rios")))))),
                React.createElement(View, { style: { alignItems: 'center' } },
                    React.createElement(Text, null, "VISION")),
                React.createElement(Card, null,
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, "The San Felipe Del Rio CISD provides a safe and nurturing environment where all sudents become contributring citizens prepared to compete and excel in an ever-changing world")))),
                React.createElement(View, { style: { alignItems: 'center' } },
                    React.createElement(Text, null, "QUICK Facts ")),
                React.createElement(Card, null,
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, "1)44 years since the consolidation of San Felipe ISD and Del Rio ISD"),
                            React.createElement(Text, null, " 2)Over 10,655 students"),
                            React.createElement(Text, null, " 3)Overall student-teacher ratio: 15.8 to 1"),
                            React.createElement(Text, null, "4)20.4% Faculty hold master's degrees or higher"),
                            React.createElement(Text, null, "5)One 5A High School"),
                            React.createElement(Text, null, "6)One Freshman Campus"),
                            React.createElement(Text, null, "7)One 7th and 8th Grade Middle School"),
                            React.createElement(Text, null, "8)One 6th Grade Middle School"),
                            React.createElement(Text, null, "9)Seven elementary K-5 Schools"),
                            React.createElement(Text, null, "10)One Head Start / Early Childhood Campus"),
                            React.createElement(Text, null, "11)Comprehensive, college-prep, dual credit curriculum"),
                            React.createElement(Text, null, "12)Career and Technology dual credit education")))))));
    }
}
export default SfdrDetailsPage;
//# sourceMappingURL=index.js.map