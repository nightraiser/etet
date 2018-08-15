import * as React from "react";
import { Footer, FooterTab, Text, Icon, Button } from "native-base";
import { View } from "react-native";
export interface Props {
    navigation: any;
    current: string;
}
export interface State { }
class FooterNavigation extends React.Component<Props, State> {
    render() {
        const param = this.props.navigation.state.params;
        return (
            <Footer>
                <FooterTab>
                    <Button active={(this.props.current === "Home") ? true : false}
                         onPress={() => this.props.navigation.navigate("DistrictHomePage", {name: "Home", ...param })} vertical>
                        <Icon active={(this.props.current === "Home") ? true : false} name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button
                        active={(this.props.current === "Events") ? true : false}
                     vertical onPress={() => this.props.navigation.navigate("Calendar", { name: "Events", ...param })}>
                        <Icon active={(this.props.current === "Events") ? true : false} name="calendar" />
                        <Text>Events</Text>
                    </Button>
                    <Button active={(this.props.current === "SearchPage") ? true : false}
                        vertical onPress={() => this.props.navigation.navigate("SearchPage", { name: "SearchPage", ...param })}>
                        <Icon active={(this.props.current === "SearchPage") ? true : false} name="search" />
                        <Text>Search</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default FooterNavigation;
