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
        return (
            <Footer>
                <FooterTab>
                    <Button active={(this.props.current === "Home") ? true : false}
                         onPress={() => this.props.navigation.navigate("DistrictHomePage", {name: "Home"})} vertical>
                        <Icon active={(this.props.current === "Home") ? true : false} name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button
                        active={(this.props.current === "Events") ? true : false}
                     vertical onPress={() => this.props.navigation.navigate("BlankPage", { name: "Events" })}>
                        <Icon active={(this.props.current === "Events") ? true : false} name="calendar" />
                        <Text>Events</Text>
                    </Button>
                    <Button active={(this.props.current === "Search") ? true : false}
                     vertical onPress={() => this.props.navigation.navigate("BlankPage", { name: "Search" })}>
                        <Icon active={(this.props.current === "Search") ? true : false} name="search" />
                        <Text>Search</Text>
                    </Button>
                    <Button 
                        active={(this.props.current === "More") ? true : false}
                    vertical onPress={() => this.props.navigation.navigate("BlankPage", { name: "More" })}>
                        <Icon active={(this.props.current === "More") ? true : false} name="person" />
                        <Text>More</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default FooterNavigation;
