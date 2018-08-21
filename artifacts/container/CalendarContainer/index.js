import * as React from "react";
import CalendarPage from "../../stories/screens/CalendarPage";
export default class CalendarContainer extends React.Component {
    render() {
        return React.createElement(CalendarPage, { navigation: this.props.navigation });
    }
}
//# sourceMappingURL=index.js.map