import React, { Component } from "react";
import { View } from "react-native";
import { Input, Icon, Text, List, ListItem, Item, Spinner } from "native-base";
interface Props {
    placeholder: string;
    url:string;
    onSelect: any;
}
interface State {
    data: Array<any>;
    fullData: Array<any>;
    showList: boolean;
    isLoading:boolean;
}
class AutoCompleteInput extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {data: new Array(), fullData: new Array(), showList: false, isLoading: true};
    }
    componentWillMount(){
        fetch(`${this.props.url}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson, fullData: responseJson, isLoading: false });
            });
    }
    handleChange = (key) => {
        if(key.length >= 3){
           let newData = this.state.fullData.filter((item) => {
                let term = item.sname.substr(0, key.length);
                if(key.toLowerCase() === term.toLowerCase()) {
                    return true;
                }
                else{
                    return false;
                }
           });
           this.setState({data: newData, showList: true});
        }
        else{
            this.setState({data: [], showList: false});
        }

    }
    render() {
        const { data } = this.state;
        let results = [];
        if (this.state.showList === true) {
           results = data.map((item) => {
                return (
                    <ListItem key={item.schoolid} onPress={() => this.props.onSelect(item)}>
                        <Text>{item.sname}</Text>
                    </ListItem>
                );
            });
        }
        if(this.state.isLoading === true){
            return (
                <Spinner/>
            );
        } else {
            return (
                <View>
                    <Item>
                        <Icon active name="search" />
                        <Input onChangeText={this.handleChange} placeholder={this.props.placeholder} />
                    </Item>
                    <View>
                        <List>
                            {results}
                        </List>
                    </View>
                </View>
            );
        }
    }
}

export default AutoCompleteInput;
