import * as React from "react";
import { Container, Header, View, Title, Content, Text, Button, Icon, Left, Right, Body, Card, CardItem, Thumbnail, Spinner, Row, Col,
	Item, Input } from "native-base";
import { Image } from "react-native";
import FooterNavigation from "../../../components/FooterNavigation";
import CardFooterDataButton from "../../../components/CardFooterDataButton";
import styles from "./styles";
export interface Props {
	navigation: any;
	trustee: any;
}
export interface State {}
class TrusteeDetailsPage extends React.Component<Props, State> {
	navigateToDetails(item){
		this.props.navigation.navigate("TrusteeDetails", {trustee: item});
	}
	render() {
		const param = this.props.navigation.state.params;
		const item = this.props.trustee;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>{item.fullName}</Title>
					</Body>

				</Header>

				<Content padder>
					<Card  style={{ flex: 0 }}>
						<CardItem>
							<Left>
								<Image style={{height:60,width:60}} source={{ uri: item.ImagePath }} />
							</Left>
							<Body>
									<Text>{item.fullName}</Text>
									<Text note>{item.boardTrusteeTitle}</Text>
								</Body>

						</CardItem>
						<CardItem>
							<Body>
								<Text>
									{item.trusteeProfile}
								</Text>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default TrusteeDetailsPage;
