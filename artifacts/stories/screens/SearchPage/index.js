import * as React from "react";
import { Container, Header, Content, Text, Button, Icon, Left, Body, Card, CardItem, Spinner, Row, Col, Item, Input } from "native-base";
import { Image } from "react-native";
import FooterNavigation from "../../../components/FooterNavigation";
import CardFooterDataButton from "../../../components/CardFooterDataButton";
import styles from "./styles";
class SearchPage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        let content = React.createElement(Spinner, null);
        if (this.props.isLoading === false) {
            content = this.props.list.map((item, index) => {
                return (React.createElement(Card, { key: index, style: { flex: 0 } },
                    React.createElement(CardItem, null,
                        React.createElement(Left, null,
                            React.createElement(Image, { style: { height: 60, width: 60 }, source: { uri: item.imagepath } }),
                            React.createElement(Body, null,
                                React.createElement(Text, null, item.sname),
                                React.createElement(Text, { note: true }, item.city)))),
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, item.address),
                            React.createElement(Text, null, item.web),
                            React.createElement(Text, null, item.phone))),
                    React.createElement(CardItem, null,
                        React.createElement(Row, null,
                            React.createElement(Col, null,
                                React.createElement(CardFooterDataButton, { icon: "users", title: "Enrollments", value: item.enrollment })),
                            React.createElement(Col, { style: { justifyContent: 'center', alignItems: 'center' } },
                                React.createElement(CardFooterDataButton, { icon: "graduation-cap", title: "Grade", value: item.grades })),
                            React.createElement(Col, null,
                                React.createElement(CardFooterDataButton, { icon: "star", title: "Rating", value: item.rating }))))));
            });
        }
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, { searchBar: true, rounded: true },
                React.createElement(Item, null,
                    React.createElement(Icon, { name: "ios-search" }),
                    React.createElement(Input, { placeholder: "Search", onChangeText: (text) => this.props.fetchList(text) })),
                React.createElement(Button, { transparent: true },
                    React.createElement(Text, null, "Search"))),
            React.createElement(Content, { padder: true }, content),
            React.createElement(FooterNavigation, { navigation: this.props.navigation, current: "SearchPage" })));
    }
}
export default SearchPage;
//# sourceMappingURL=index.js.map