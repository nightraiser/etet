import * as React from "react";
import { Image } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Grid, Row, Col, View } from "native-base";
import styles from "./styles";
const barcode = require("../../../../assets/bar_code.png");
class MembershipCardPage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        const { data } = param;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, "Membership Card")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(Image, { source: barcode, style: { height: 100, marginTop: 10, marginBottom: 10 } }),
                React.createElement(View, { style: { height: 30 } }),
                React.createElement(Grid, null,
                    React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                        React.createElement(Col, null,
                            React.createElement(Text, { style: { fontWeight: "bold" } }, "Student Id")),
                        React.createElement(Col, { style: { alignItems: "flex-end" } },
                            React.createElement(Text, null, "103443345544"))),
                    React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                        React.createElement(Col, null,
                            React.createElement(Text, { style: { fontWeight: "bold" } }, "School Name")),
                        React.createElement(Col, { style: { alignItems: "flex-end" } },
                            React.createElement(Text, null, data.sname))),
                    React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                        React.createElement(Col, null,
                            React.createElement(Text, { style: { fontWeight: "bold" } }, "Grade Level")),
                        React.createElement(Col, { style: { alignItems: "flex-end" } },
                            React.createElement(Text, null, "12")))))));
    }
}
export default MembershipCardPage;
//# sourceMappingURL=index.js.map