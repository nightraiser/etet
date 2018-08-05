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

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
const logo = require("../../../../assets/logo.png");
class Home extends React.Component<Props, State> {
  render() {
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
                          <Text>San Felipe Del Rio</Text>
                        </Col>
                        <Col>
                          <Button onPress={() => { this.props.navigation.navigate("DistrictHomePage"); }}><Text>Go</Text></Button>
                        </Col>
                      </Row>
                    </View>
                  </View>
                </Tab>
                <Tab heading ={<TabHeading><Text>Schools</Text></TabHeading>}>
                  <View padder>
                    <View style={{ padding: 20 }}>
                      <Form>
                        <Item>
                          <Icon active name="search" />
                          <Input placeholder="Search By School Names" />
                        </Item>
                      </Form>
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
