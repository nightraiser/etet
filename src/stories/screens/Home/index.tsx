import * as React from "react";
import {
  Image,
} from "react-native";
import {
  Container,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Tabs,
  Tab,
  TabHeading,
  View,
  Form,
  Item,
  Input,
  Row,
  Col,
} from "native-base";
import AutoCompleteInput from "../../../components/AutoCompleteInput";
import apiConfigurations from "../../../constants/apiConfigurations";
import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
const logo = require("../../../../assets/logo.png");
class Home extends React.Component<Props, State> {
  render() {
    const searchUrl = `${apiConfigurations.baseUrl}/${apiConfigurations.apiPath}/school/getschools/1?schoolNumber=ALL&schoolName=`;
    const districtSchoolData = {
      sname:'SAN FELIPE DEL RIO CISD',
      // tslint:disable-next-line:max-line-length
      imagepath: "https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/11206113_781390008645817_5282013438360223026_n.png?_nc_cat=0&oh=62ddee5f2d8e38f4093d0b03b8a4b21a&oe=5C022F8C",
    }
    return (
      <Container>
        <Content style={{ backgroundColor: "#fff" }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 1, backgroundColor: "#fff", marginTop: 10 }}>
              <View style={{ alignItems: "center" }}>
                <Image source={logo} style={{ height: 178, marginTop: 10 }} />
                <Title>ESchoolz</Title>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Tabs>
                <Tab heading={<TabHeading><Text>District</Text></TabHeading>}>
                  <View padder>
                    <View style={{ padding: 20 }}>
                      <Row>
                       

                        <Col>
                          <Button block onPress={() => { this.props.navigation.navigate("DistrictHomePage", {data: districtSchoolData}); }}>
                          <Text>Go</Text>
                          </Button>
                        </Col>
                      </Row>
                    </View>
                  </View>
                </Tab>
                <Tab heading ={<TabHeading><Text>Schools</Text></TabHeading>}>
                  <View padder>
                    <View style={{ padding: 20 }}>
                      <AutoCompleteInput 
                      placeholder="Search for School Names"
                      url={searchUrl}
                      onSelect={(school) => this.props.navigation.navigate("DistrictHomePage", { data: school })}/>
                    </View>
                  </View>
                </Tab>
              </Tabs>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
