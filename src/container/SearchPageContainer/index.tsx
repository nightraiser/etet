import * as React from "react";
import SearchPage from "../../stories/screens/SearchPage";
import { connect } from "react-redux";
import { fetchList } from "./actions";
export interface Props {
	navigation: any;
	list: any;
	fetchList: Function;
	isLoading: boolean;
}
export interface State {}
 class SearchPageContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList("");
	}
	render() {
		return <SearchPage fetchList={this.props.fetchList} isLoading={this.props.isLoading} list={this.props.list} navigation={this.props.navigation} />;
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
