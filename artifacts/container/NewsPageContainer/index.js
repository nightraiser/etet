import * as React from "react";
import NewsPage from "../../stories/screens/NewsPage";
export default class NewsPageContainer extends React.Component {
    render() {
        return React.createElement(NewsPage, { navigation: this.props.navigation });
    }
}
//# sourceMappingURL=index.js.map