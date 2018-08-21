import * as React from "react";
import ContactPage from "../../stories/screens/ContactPage";
export default class ContactPageContainer extends React.Component {
    render() {
        return React.createElement(ContactPage, { navigation: this.props.navigation });
    }
}
//# sourceMappingURL=index.js.map