import * as React from "react";
import { Image } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Grid, Row, Col, View } from "native-base";
import styles from "./styles";
export interface Props {
	navigation: any;
}
const barcode = require("../../../../assets/bar_code.png");
export interface State {}
class MembershipCardPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		const { data } = param;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{"Membership Card"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Image source={barcode} style={{ height: 100, marginTop: 10, marginBottom: 10 }} />
					<View style={{height: 30}} />
					<Grid>
						<Row style={{borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5}}>
							<Col>
								<Text style={{fontWeight: "bold"}}>Student Id</Text>
							</Col>
							<Col style={{alignItems: "flex-end"}}>
								<Text>103443345544</Text>
							</Col>
						</Row>
						<Row style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 }}>
							<Col>
								<Text style={{ fontWeight: "bold" }}>School Name</Text>
							</Col>
							<Col style={{ alignItems: "flex-end" }}>
								<Text>{data.sname}</Text>
							</Col>
						</Row>
						<Row style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 }}>
							<Col>
								<Text style={{ fontWeight: "bold" }}>Grade Level</Text>
							</Col>
							<Col style={{ alignItems: "flex-end" }}>
								<Text>12</Text>
							</Col>
						</Row>
					</Grid>
				</Content>
			</Container>
		);
	}
}

export default MembershipCardPage;
