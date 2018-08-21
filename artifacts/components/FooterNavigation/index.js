import * as React from "react";
import { Footer, FooterTab, Text, Icon, Button } from "native-base";
class FooterNavigation extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        return (React.createElement(Footer, null,
            React.createElement(FooterTab, null,
                React.createElement(Button, { active: (this.props.current === "Home") ? true : false, onPress: () => this.props.navigation.navigate("DistrictHomePage", Object.assign({ name: "Home" }, param)), vertical: true },
                    React.createElement(Icon, { active: (this.props.current === "Home") ? true : false, name: "home" }),
                    React.createElement(Text, null, "Home")),
                React.createElement(Button, { active: (this.props.current === "Events") ? true : false, vertical: true, onPress: () => this.props.navigation.navigate("Calendar", Object.assign({ name: "Events" }, param)) },
                    React.createElement(Icon, { active: (this.props.current === "Events") ? true : false, name: "calendar" }),
                    React.createElement(Text, null, "Events")),
                React.createElement(Button, { active: (this.props.current === "SearchPage") ? true : false, vertical: true, onPress: () => this.props.navigation.navigate("SearchPage", Object.assign({ name: "SearchPage" }, param)) },
                    React.createElement(Icon, { active: (this.props.current === "SearchPage") ? true : false, name: "search" }),
                    React.createElement(Text, null, "Search")))));
    }
}
export default FooterNavigation;
//# sourceMappingURL=index.js.map