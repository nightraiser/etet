import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { ScrollView, View, StatusBar, } from "react-native";
import styles from "./styles";
import PieChart from 'react-native-pie-chart';
class KpiPage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        const chart_wh = 200;
        const series = [40, 6, 80, 120, 150];
        const sliceColor = ['#b71540', '#e84118', '#fbc531', '#44bd32', '#cd6133'];
        /*const data = [
        { name: 'Graduate', population: 40 },
        { name: 'Continuer', population: 60 },
        { name: 'DropOut', population: 80 },
        { name: 'Mover', population: 120 },
        { name: 'WithDrawn', population: 150 }
        ]}
        const data = {
            labels:['Graduate','Continuer','DropOut','Mover','WithDrawn'] ,
            datasets:[
                {
                    label: 'pie',
                    backgroundColour :['#b71540','#e84118','#fbc531', '#44bd32', '#cd6133'],
                    data: [40, 60, 80, 120, 150],
                }
            ]} */
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, param ? param.name : "KPI")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(ScrollView, { style: { flex: 1 } },
                    React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(StatusBar, { hidden: true }),
                        React.createElement(Text, { style: styles.Title }, "Graduate Data "),
                        React.createElement(PieChart, { chart_wh: chart_wh, series: series, sliceColor: sliceColor, doughnut: true, 
                            //data= {true}
                            coverRadius: 0.46, coverFill: '#FFF' }),
                        React.createElement(Text, { style: styles.title }, "Enrollment Data "),
                        React.createElement(PieChart, { chart_wh: chart_wh, series: series, sliceColor: sliceColor, doughnut: true, coverRadius: 0.45, coverFill: '#FFF' }),
                        React.createElement(Text, { style: styles.title }, "Special Education Data (SPED) "),
                        React.createElement(PieChart, { chart_wh: chart_wh, series: series, sliceColor: sliceColor, doughnut: true, coverRadius: 0.45, coverFill: '#FFF' }),
                        React.createElement(Text, { style: styles.title }, "limited English Proficient (LEP) "),
                        React.createElement(PieChart, { chart_wh: chart_wh, series: series, sliceColor: sliceColor, doughnut: true, coverRadius: 0.45, coverFill: '#FFF' }))))));
    }
}
export default KpiPage;
//# sourceMappingURL=index.js.map