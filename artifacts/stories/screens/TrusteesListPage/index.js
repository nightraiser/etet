import * as React from "react";
import { Container, Header, View, Title, Content, Text, Button, Icon, Left, Right, Body, Card, CardItem, Spinner } from "native-base";
import { Image } from "react-native";
import styles from "./styles";
class TrusteesPage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        let content = React.createElement(Spinner, null);
        if (this.props.isLoading === false) {
            content = this.props.list.map((item, index) => {
                let description = item.trusteeProfile ? item.trusteeProfile : "";
                if (description.length > 100) {
                    description = description.substr(0, 100);
                    description += "...";
                }
                return (React.createElement(Card, { key: index, style: { flex: 0 } },
                    React.createElement(CardItem, null,
                        React.createElement(View, null,
                            React.createElement(Image, { style: { width: 60, height: 60 }, source: { uri: item.ImagePath } })),
                        React.createElement(View, { style: { paddingLeft: 5 } },
                            React.createElement(Text, null, item.fullName),
                            React.createElement(Text, { note: true }, item.boardTrusteeTitle))),
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, description))),
                    React.createElement(CardItem, { footer: true },
                        React.createElement(Body, null),
                        React.createElement(Right, null,
                            React.createElement(Button, { primary: true, onPress: () => this.props.navigation.navigate("TrusteeDetails", { trustee: item }) },
                                React.createElement(Text, null, "Read More"))))));
            });
        }
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, "Trustees "))),
            React.createElement(Content, { padder: true }, content)));
    }
}
export default TrusteesPage;
//# sourceMappingURL=index.js.map