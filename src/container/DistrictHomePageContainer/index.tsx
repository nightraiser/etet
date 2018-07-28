import * as React from "react";
import DistrictHomePage from "../../stories/screens/DistrictHomePage";
export interface Props {
// tslint:disable-next-line:indent
    navigation: any;
}
export interface State { }
export default class DistrictHomePageContainer extends React.Component<Props, State> {
    render() {
        return <DistrictHomePage navigation={this.props.navigation} />;
    }
}
