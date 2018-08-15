import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
//import FooterNavigation from "../../../components/FooterNavigation";
import styles from "./styles";

// import MapView from 'expo';

export interface Props {
	navigation: any;
}
export interface State {}
class MapPage extends React.Component<Props, State> {
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
						<Title>{param ? param.name : "Map"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text>{"Map Page"}</Text>
	
				</Content>

		
			</Container>
		);
	}
}

export default MapPage;
