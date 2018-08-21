import * as React from "react";
import TrusteeDetailsPage from "../../stories/screens/TrusteeDetailsPage";
class TrusteeDetailsPageContainer extends React.Component {
    render() {
        let { params } = this.props.navigation.state;
        return React.createElement(TrusteeDetailsPage, { trustee: params.trustee, navigation: this.props.navigation });
    }
}
export default TrusteeDetailsPageContainer;
//# sourceMappingURL=index.js.map