import * as React from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body } from "native-base";
import FooterNavigation from "../../../components/FooterNavigation";
import styles from "./styles";
import Calendar from "react-native-calendar";
class CalendarPage extends React.Component {
    render() {
        const today = new Date();
        const date = today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`;
        const month = (today.getMonth() + 1) > 9 ? (today.getMonth() + 1) : `0${today.getMonth() + 1}`;
        const formatedDate = `${today.getFullYear()}-${month}-${date}`;
        const param = this.props.navigation.state.params;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, "Calendar ")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(Calendar, { currentMonth: '2018-08-01', customStyle: { day: { fontSize: 15, textAlign: 'center' } }, 
                    // dayHeadings={Array}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
                    eventDates: ['2018-08-01', '2018-08-23', '2018-08-24', '2018-08-25'], 
                    //	monthNames={ Array}                // Defaults to english names of months
                    //onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
                    //onDateLongPress={(date) => this.onDateLongPress(date)} 
                    nextButtonText: '>', title: true, press: true, prevButtonText: '<', removeClippedSubviews: false, scrollEnabled: true, selectedDate: '2018-08-25', showControls: true, showEventIndicators: true, startDate: formatedDate, titleFormat: 'MMMM YYYY', today: formatedDate, weekStart: 1, markedDates: {
                        '2018-08-16': { selected: true, marked: true, selectedColor: 'blue' },
                        '2018-08-17': { marked: true },
                        '2018-08-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                        '2018-08-19': { disabled: true, disableTouchEvent: true }
                    } })),
            React.createElement(FooterNavigation, { navigation: this.props.navigation, current: "Events" })));
    }
}
export default CalendarPage;
//# sourceMappingURL=index.js.map