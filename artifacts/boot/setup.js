var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as Expo from "expo";
import * as React from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";
export default class Setup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({ isLoading: false })),
            isReady: false
        };
    }
    componentWillMount() {
        this.loadFonts();
    }
    loadFonts() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Expo.Font.loadAsync({
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
                Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
            });
            this.setState({ isReady: true });
        });
    }
    render() {
        if (!this.state.isReady || this.state.isLoading) {
            return React.createElement(Expo.AppLoading, null);
        }
        return (React.createElement(StyleProvider, { style: getTheme(variables) },
            React.createElement(Provider, { store: this.state.store },
                React.createElement(App, null))));
    }
}
//# sourceMappingURL=setup.js.map