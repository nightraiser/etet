import * as React from "react";
import {Text, } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
export interface Props {
    icon:string;
    title: string;
    value: string;
}
export interface State { }
class CardFooterDataButton extends React.Component<Props, State> {
    render() {

        return (
            <View style={{ flexDirection: 'row', }}>
                <Icon name={this.props.icon} size={20} />
                <View style={{marginLeft: 3,}}>
                    <Text style={{ fontSize: 14, }}>{this.props.title}</Text>
                    <Text style={{ fontSize: 14, }}>{this.props.value}</Text>
                </View>
            </View>
        );
    }
}

export default CardFooterDataButton;
