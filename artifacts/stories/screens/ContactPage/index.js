import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Grid, Row, Col, View, Thumbnail } from "native-base";
import styles from "./styles";
class ContactPage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        const { data } = param;
        console.log(data);
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, "Contact")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(View, { style: { flexDirection: "row", flex: 1, marginBottom: 10, marginTop: 10, paddingBottom: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 } },
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(Thumbnail, { source: { uri: data.imagepath } })),
                    React.createElement(View, { style: { flex: 3, alignItems: "flex-end" } },
                        React.createElement(Text, { style: { fontWeight: "bold" } }, data.sname),
                        React.createElement(Text, null, data.city))),
                React.createElement(View, null,
                    React.createElement(Grid, null,
                        React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                            React.createElement(Col, null,
                                React.createElement(Text, { style: { fontWeight: "bold" } }, "Category")),
                            React.createElement(Col, null,
                                React.createElement(Text, null, data.scategory))),
                        React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                            React.createElement(Col, null,
                                React.createElement(Text, { style: { fontWeight: "bold" } }, "Principal")),
                            React.createElement(Col, null,
                                React.createElement(Text, null, data.principal))),
                        React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                            React.createElement(Col, null,
                                React.createElement(Text, { style: { fontWeight: "bold" } }, "Phone")),
                            React.createElement(Col, null,
                                React.createElement(Text, null, data.phone))),
                        React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                            React.createElement(Col, null,
                                React.createElement(Text, { style: { fontWeight: "bold" } }, "Email")),
                            React.createElement(Col, null,
                                React.createElement(Text, null, data.email))),
                        React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                            React.createElement(Col, null,
                                React.createElement(Text, { style: { fontWeight: "bold" } }, "Fax")),
                            React.createElement(Col, null,
                                React.createElement(Text, null, data.fax))),
                        React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                            React.createElement(Col, null,
                                React.createElement(Text, { style: { fontWeight: "bold" } }, "Web")),
                            React.createElement(Col, null,
                                React.createElement(Text, null, data.web))),
                        React.createElement(Row, { style: { borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 } },
                            React.createElement(Col, null,
                                React.createElement(Text, { style: { fontWeight: "bold" } }, "Zip")),
                            React.createElement(Col, null,
                                React.createElement(Text, null, data.zip))))))));
    }
}
export default ContactPage;
//# sourceMappingURL=index.js.map