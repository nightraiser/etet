import * as React from "react";
import { TouchableOpacity } from "react-native";
import { default as FaIcon } from "react-native-vector-icons/FontAwesome";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Grid, Row, Col, View, Thumbnail } from "native-base";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class ContactPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		const { data } = param;
		console.log(data);
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{"Contact"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<View
						style={{ flexDirection: "row", flex: 1, marginBottom: 10, marginTop: 10, paddingBottom: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
						<View style={{ flex: 1 }}>
							<Thumbnail source={{ uri: data.imagepath }} />
						</View>
						<View style={{ flex: 3, alignItems: "flex-end" }}>
							<Text style={{ fontWeight: "bold" }}>{data.sname}</Text>
							<Text>{data.city}</Text>
						</View>
					</View>
					<View>
						<Grid>
							<Row style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 }}>
								<Col>
									<Text style={{ fontWeight: "bold" }}>
										Category
									</Text>
								</Col>
								<Col>
									<Text>{data.scategory}</Text>
								</Col>
							</Row>

							<Row style={{borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5}}>
								<Col>
									<Text style={{fontWeight: "bold"}}>
										Principal
									</Text>
								</Col>
								<Col>
									<Text>{data.principal}</Text>
								</Col>
							</Row>

							<Row style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 }}>
								<Col>
									<Text style={{ fontWeight: "bold" }}>
										Phone
									</Text>
								</Col>
								<Col>
									<Text>{data.phone}</Text>
								</Col>
							</Row>

							<Row style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 }}>
								<Col>
									<Text style={{ fontWeight: "bold" }}>
										Email
									</Text>
								</Col>
								<Col>
									<Text>{data.email}</Text>
								</Col>
							</Row>

							<Row style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 }}>
								<Col>
									<Text style={{ fontWeight: "bold" }}>
										Fax
									</Text>
								</Col>
								<Col>
									<Text>{data.fax}</Text>
								</Col>
							</Row>

							<Row style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 }}>
								<Col>
									<Text style={{ fontWeight: "bold" }}>
										Web
									</Text>
								</Col>
								<Col>
									<Text>{data.web}</Text>
								</Col>
							</Row>

							<Row style={{ borderBottomColor: "#ccc", borderBottomWidth: 1, marginBottom: 5 }}>
								<Col>
									<Text style={{ fontWeight: "bold" }}>
										Zip
									</Text>
								</Col>
								<Col>
									<Text>{data.zip}</Text>
								</Col>
							</Row>
						</Grid>
					</View>
				</Content>
			</Container>
		);
	}
}

export default ContactPage;
