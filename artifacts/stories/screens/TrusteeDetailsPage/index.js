import * as React from "react";
import { Container, Header, View, Title, Content, Text, Button, Icon, Left, Body, Card, CardItem } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
class TrusteeDetailsPage extends React.Component {
    navigateToDetails(item) {
        this.props.navigation.navigate("TrusteeDetails", { trustee: item });
    }
    render() {
        const param = this.props.navigation.state.params;
        const item = this.props.trustee;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, item.fullName))),
            React.createElement(Content, { padder: true },
                React.createElement(Card, { style: { flexDirection: 'column' } },
                    React.createElement(CardItem, null,
                        React.createElement(View, null,
                            React.createElement(Image, { style: { height: 60, width: 60 }, source: { uri: item.ImagePath } })),
                        React.createElement(View, { style: { marginLeft: 5 } },
                            React.createElement(Text, null, item.fullName),
                            React.createElement(Text, { note: true }, item.boardTrusteeTitle))),
                    React.createElement(CardItem, null,
                        React.createElement(View, null,
                            React.createElement(Text, null, item.trusteeProfile)))))));
    }
}
export default TrusteeDetailsPage;
//# sourceMappingURL=index.js.map