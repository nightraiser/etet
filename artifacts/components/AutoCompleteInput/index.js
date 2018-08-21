import React, { Component } from "react";
import { View } from "react-native";
import { Input, Icon, Text, List, ListItem, Item, Spinner } from "native-base";
class AutoCompleteInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = (key) => {
            if (key.length >= 3) {
                let newData = this.state.fullData.filter((item) => {
                    let term = item.sname.substr(0, key.length);
                    if (key.toLowerCase() === term.toLowerCase()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                this.setState({ data: newData, showList: true });
            }
            else {
                this.setState({ data: [], showList: false });
            }
        };
        this.state = { data: new Array(), fullData: new Array(), showList: false, isLoading: true };
    }
    componentWillMount() {
        fetch(`${this.props.url}`)
            .then((response) => response.json())
            .then((responseJson) => {
            this.setState({ data: responseJson, fullData: responseJson, isLoading: false });
        });
    }
    render() {
        const { data } = this.state;
        let results = [];
        if (this.state.showList === true) {
            results = data.map((item) => {
                return (React.createElement(ListItem, { key: item.schoolid, onPress: () => this.props.onSelect(item) },
                    React.createElement(Text, null, item.sname)));
            });
        }
        if (this.state.isLoading === true) {
            return (React.createElement(Spinner, null));
        }
        else {
            return (React.createElement(View, null,
                React.createElement(Item, null,
                    React.createElement(Icon, { active: true, name: "search" }),
                    React.createElement(Input, { onChangeText: this.handleChange, placeholder: this.props.placeholder })),
                React.createElement(View, null,
                    React.createElement(List, null, results))));
        }
    }
}
export default AutoCompleteInput;
//# sourceMappingURL=index.js.map