import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Card, CardItem, Thumbnail } from "native-base";
import FooterNavigation from "../../../components/FooterNavigation";
import Mockdata from "./Mockdata";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class SearchPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;

		let listItems = Mockdata.map((item) => {
			return (
				<Card style={{ flex: 0 }} key={item.schoolid}>
					<CardItem>
						<Left>
							<Thumbnail source={{ uri:  item.imagepath }} />
							<Body>
								<Text>{item.sname}</Text>
								<Text note>{item.city}</Text>
							</Body>
						</Left>
					</CardItem>
					<CardItem>
						<Body>
							<Text>
							{item.address}
							</Text>
							<Text>
								{item.web}
							</Text>
							<Text>
								{item.phone}
							</Text>	
						</Body>
					</CardItem>
					<CardItem>
						<Left>
							<Button transparent textStyle={{ color: '#87838B' }}>
								<Icon name="logo-github" />
								<Text>{item.enrollment} Enrollments</Text>
							</Button>
							<Button transparent textStyle={{ color: '#87838B' }}>
								<Icon name="logo-github" />
								<Text>{item.grades} Grades</Text>
							</Button>
							<Button transparent textStyle={{ color: '#87838B' }}>
								<Icon name="logo-github" />
								<Text>{item.rating} Rating</Text>
							</Button>
						</Left>
					</CardItem>
				</Card>
			)
		})
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name : "Blank Page"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					{listItems}
				</Content>

				<FooterNavigation navigation={this.props.navigation} current={param.name} />
			</Container>
		);
	}
}

export default SearchPage;
