import * as React from "react";
import { Container, Header, View, Title, Content, Text, Button, Icon, Left, Right, Body, Card, CardItem, Thumbnail, Spinner, Row, Col,
	Item, Input } from "native-base";
import FooterNavigation from "../../../components/FooterNavigation";
import CardFooterDataButton from "../../../components/CardFooterDataButton";
import styles from "./styles";
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
									{item.trusteeProfile}
								</Text>
							</Body>
						</CardItem>
						<CardItem>
							
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
				</Header>

				<Content padder>
					{content}
				</Content>
			</Container>
		);
	}
}

export default TrusteesPage;
