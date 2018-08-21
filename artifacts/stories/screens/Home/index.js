import * as React from "react";
import { Image, } from "react-native";
import { Container, Title, Content, Text, Button, Tabs, Tab, TabHeading, View, Row, Col, } from "native-base";
import AutoCompleteInput from "../../../components/AutoCompleteInput";
import apiConfigurations from "../../../constants/apiConfigurations";
const logo = require("../../../../assets/logo.png");
class Home extends React.Component {
    render() {
        const searchUrl = `${apiConfigurations.baseUrl}/${apiConfigurations.apiPath}/school/getschools/1?schoolNumber=ALL&schoolName=`;
        const districtSchoolData = {
            sname: 'SAN FELIPE DEL RIO CISD',
            // tslint:disable-next-line:max-line-length
            imagepath: "https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/11206113_781390008645817_5282013438360223026_n.png?_nc_cat=0&oh=62ddee5f2d8e38f4093d0b03b8a4b21a&oe=5C022F8C",
        };
        return (React.createElement(Container, null,
            React.createElement(Content, { style: { backgroundColor: "#fff" } },
                React.createElement(View, { style: { flex: 1, flexDirection: "column" } },
                    React.createElement(View, { style: { flex: 1, backgroundColor: "#fff", marginTop: 10 } },
                        React.createElement(View, { style: { alignItems: "center" } },
                            React.createElement(Image, { source: logo, style: { height: 178, marginTop: 10 } }),
                            React.createElement(Title, null, "ESchoolz"))),
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(Tabs, null,
                            React.createElement(Tab, { heading: React.createElement(TabHeading, null,
                                    React.createElement(Text, null, "District")) },
                                React.createElement(View, { padder: true },
                                    React.createElement(View, { style: { padding: 20 } },
                                        React.createElement(Row, null,
                                            React.createElement(Col, null,
                                                React.createElement(Button, { block: true, onPress: () => { this.props.navigation.navigate("DistrictHomePage", { data: districtSchoolData }); } },
                                                    React.createElement(Text, null, "Go"))))))),
                            React.createElement(Tab, { heading: React.createElement(TabHeading, null,
                                    React.createElement(Text, null, "Schools")) },
                                React.createElement(View, { padder: true },
                                    React.createElement(View, { style: { padding: 20 } },
                                        React.createElement(AutoCompleteInput, { placeholder: "Search for School Names", url: searchUrl, onSelect: (school) => this.props.navigation.navigate("DistrictHomePage", { data: school }) }))))))))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map