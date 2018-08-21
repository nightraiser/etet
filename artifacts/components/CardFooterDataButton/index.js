import * as React from "react";
import { Text, } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
class CardFooterDataButton extends React.Component {
    render() {
        return (React.createElement(View, { style: { flexDirection: 'row', } },
            React.createElement(Icon, { name: this.props.icon, size: 20 }),
            React.createElement(View, { style: { marginLeft: 3, } },
                React.createElement(Text, { style: { fontSize: 14, } }, this.props.title),
                React.createElement(Text, { style: { fontSize: 14, } }, this.props.value))));
    }
}
export default CardFooterDataButton;
//# sourceMappingURL=index.js.map