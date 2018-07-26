import * as React from "react";
import { Image } from "react-native";
import { Container, Content, Header, Body, Title, View, Tab, Tabs, Text, Button, Row, Col } from "native-base";
// import styles from "./styles";
const logo =  require('../../../../assets/logo.png');
export interface Props {
	loginForm: any;
	onLogin: Function;
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 300 }}>
					<Body style={{ alignItems: "center" }}>
						<Image source={logo} style={{height: 90, marginTop: 10}}/>
						<Title>ESchoolz</Title>
					</Body>
				</Header>
				<Content>
					<View style={{backgroundColor:"#fff"}}>
						<Tabs>
							<Tab heading="Districts">
								<View padder>
								<Row>
									<Col>
											<Text>San Felipe Del Rio</Text>
									</Col>
									<Col>
											<Button><Text>Go</Text></Button>
									</Col>
								</Row>
								</View>
							</Tab>
							<Tab heading="Schools">
								<Text>Tab2</Text>
							</Tab>
						</Tabs>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Login;
