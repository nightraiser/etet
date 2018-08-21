import * as React from "react";
import TrusteesListPage from "../../stories/screens/TrusteesListPage";
import { connect } from "react-redux";
import { fetchList } from "./actions";
class TrusteesListPageContainer extends React.Component {
    componentDidMount() {
        this.props.fetchList("");
    }
    render() {
        return React.createElement(TrusteesListPage, { fetchList: this.props.fetchList, isLoading: this.props.isLoading, list: this.props.list, navigation: this.props.navigation });
    }
}
function bindAction(dispatch) {
    return {
        fetchList: (searchKey) => dispatch(fetchList(searchKey)),
    };
}
const mapStateToProps = state => ({
    list: state.trusteesListReducer.list,
    isLoading: state.trusteesListReducer.isListLoading,
});
export default connect(mapStateToProps, bindAction)(TrusteesListPageContainer);
//# sourceMappingURL=index.js.map