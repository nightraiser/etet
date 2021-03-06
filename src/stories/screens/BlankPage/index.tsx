import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import FooterNavigation from "../../../components/FooterNavigation";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		console.log(this.props);
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
					<Text>{"Coming Soon"}</Text>
				</Content>

				<FooterNavigation navigation={this.props.navigation} current={param.name} />
			</Container>
		);
	}
}

export default BlankPage;
