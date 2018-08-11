import * as React from "react";
import { Container, Header, View, Title, Content, Text, Button, Icon, Left, Right, Body, Card, CardItem, Thumbnail, Spinner, Row, Col,
	Item, Input } from "native-base";
import FooterNavigation from "../../../components/FooterNavigation";
import CardFooterDataButton from "../../../components/CardFooterDataButton";
import styles from "./styles";
import { TouchableHighlight } from "react-native";
export interface Props {
	navigation: any;
	isLoading: boolean;
	list: any;
	fetchList: Function;
}
export interface State {}
class TrusteesPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;

		let content: any = <Spinner />;
		if (this.props.isLoading === false) {
			content = this.props.list.map((item, index) => {
				let description: string = item.trusteeProfile ? item.trusteeProfile : "";
				if(description.length > 100) {
					description = description.substr(0, 100);
					description += "...";
				}
				return (
					<Card key={index} style={{ flex: 0 }}>
						<CardItem>
							<Left>
								<Thumbnail source={{ uri: item.ImagePath }} />
								<Body>
									<Text>{item.fullName}</Text>
									<Text note>{item.boardTrusteeTitle}</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem>
							<Body>
								<Text>
									{description}
								</Text>
							</Body>
						</CardItem>
						<CardItem footer>
							<Body>
							</Body>
							<Right>
								<Button primary onPress={() => this.props.navigation.navigate("TrusteeDetails", { trustee: item })} >
									<Text>Read More</Text>
								</Button>
							</Right>
						</CardItem>
					</Card>
				);
			});
		}
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>{"Trustees "}</Title>
					</Body>

				</Header>

				<Content padder>
					{content}
				</Content>
			</Container>
		);
	}
}

export default TrusteesPage;
