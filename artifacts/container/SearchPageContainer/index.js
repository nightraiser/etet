import * as React from "react";
import SearchPage from "../../stories/screens/SearchPage";
import { connect } from "react-redux";
import { fetchList } from "./actions";
class SearchPageContainer extends React.Component {
    componentDidMount() {
        this.props.fetchList("");
    }
    render() {
        return React.createElement(SearchPage, { fetchList: this.props.fetchList, isLoading: this.props.isLoading, list: this.props.list, navigation: this.props.navigation });
    }
}
function bindAction(dispatch) {
    return {
        fetchList: (searchKey) => dispatch(fetchList(searchKey)),
    };
}
const mapStateToProps = state => ({
    list: state.searchReducer.list,
    isLoading: state.searchReducer.isListLoading,
});
export default connect(mapStateToProps, bindAction)(SearchPageContainer);
//# sourceMappingURL=index.js.map