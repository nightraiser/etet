import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import FooterNavigation from "../../../components/FooterNavigation";
import styles from "./styles";
class BlankPage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        console.log(this.props);
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, param ? param.name : "Blank Page")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(Text, null, "Coming Soon")),
            React.createElement(FooterNavigation, { navigation: this.props.navigation, current: param.name })));
    }
}
export default BlankPage;
//# sourceMappingURL=index.js.map