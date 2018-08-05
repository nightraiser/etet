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
class SearchPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;

		let content: any = <Spinner />;
		if (this.props.isLoading === false) {
			content = this.props.list.map((item, index) => {
				return (
					<Card key={index} style={{ flex: 0 }}>
						<CardItem>
							<Left>
								<Thumbnail source={{ uri: item.imagepath }} />
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
								<Row>
									<Col>
										<CardFooterDataButton icon="users" title="Enrollments" value={item.enrollment}/>
									</Col>
									<Col>
									<CardFooterDataButton icon="graduation-cap" title="Grade" value={item.grades} />
									</Col>
									<Col>
										<CardFooterDataButton icon="star" title="Rating" value={item.rating} />
									</Col>
								</Row>
						</CardItem>
					</Card>
				);
			});
		}
		return (
			<Container style={styles.container}>
				<Header searchBar rounded>
						<Item>
							<Icon name="ios-search" />
							<Input placeholder="Search" onChangeText={(text) => this.props.fetchList(text)} />
						</Item>
						<Button transparent>
							<Text>Search</Text>
						</Button>
				</Header>

				<Content padder>
					{content}
				</Content>

				<FooterNavigation navigation={this.props.navigation} current={param.name} />
			</Container>
		);
	}
}

export default SearchPage;
