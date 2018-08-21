import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Card, CardItem, View } from "native-base";
//import FooterNavigation from "../../../components/FooterNavigation";
import PureChart from 'react-native-pure-chart';
import styles from "./styles";
class DistrictRatingPage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        const fill = 'rgb(134, 65, 244)';
        let sampleData = [
            {
                seriesName: 'series1',
                data: [
                    { x: 'Elementary', y: 10 },
                    { x: 'Middle Schools', y: 200 },
                    { x: '2018-02-03', y: 170 },
                    { x: 'High Schools', y: 250 },
                    { x: '2018-02-05', y: 10 },
                    { x: 'Elementary', y: 10 }
                ],
                color: '#27ae60'
            },
            {
                seriesName: 'series2',
                data: [
                    { x: 'Elementary', y: 40 },
                    { x: 'Middle Schools', y: 100 },
                    { x: '2018-02-03', y: 140 },
                    { x: 'High Schools', y: 550 },
                    { x: '2018-02-05', y: 40 },
                    { x: '2018-01-05', y: 40 }
                ],
                color: '#9b59b6'
            },
            {
                seriesName: 'series3',
                data: [
                    { x: 'Elementary', y: 40 },
                    { x: 'Middle Schools', y: 80 },
                    { x: '2018-02-03', y: 100 },
                    { x: 'High Schools', y: 420 },
                    { x: '2018-02-05', y: 90 },
                    { x: '2018-01-05', y: 40 }
                ],
                color: '#f1c40e'
            }
        ];
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, param ? param.name : "Rating")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(PureChart, { data: sampleData, type: 'bar', height: 250 }),
                React.createElement(View, { style: { marginTop: 5 } },
                    React.createElement(Text, { style: { fontWeight: 'bold', color: 'green' } }, " 2016-2017 Rating")),
                React.createElement(Card, null,
                    React.createElement(CardItem, { header: true },
                        React.createElement(Text, null, "IMPORVEMENTS  REQUIRED(2)")),
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, "Del Rio FreshMan School"),
                            React.createElement(Text, null, "Early College High School ")))),
                React.createElement(Card, null,
                    React.createElement(CardItem, { header: true },
                        React.createElement(Text, null, "NOT RATED(2)")),
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, "San Felipe Memorial Middle School"),
                            React.createElement(Text, null, "Laughlin Elementary Magnet")))),
                React.createElement(Card, null,
                    React.createElement(CardItem, { header: true },
                        React.createElement(Text, null, "EXPLEMNTARY (2)")),
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, "Del Rio FreshMan School"),
                            React.createElement(Text, null, "Ruben Chavira Elementary  ")))),
                React.createElement(Card, null,
                    React.createElement(CardItem, { header: true },
                        React.createElement(Text, null, "MET STANDARDS(2)")),
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, "Buena Vista Elementary"),
                            React.createElement(Text, null, "Dr.Lonnie Green Elementary ")))))));
    }
}
export default DistrictRatingPage;
//# sourceMappingURL=index.js.map