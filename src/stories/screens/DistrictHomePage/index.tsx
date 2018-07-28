import * as React from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body} from "native-base";
import GridNavigation from "../../../components/GridNavigation";
import FooterNavigation from "../../../components/FooterNavigation";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class DistrictHomePage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "District Home"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<GridNavigation navigation={this.props.navigation} />
				</Content>
				<FooterNavigation current="Home" navigation={this.props.navigation} />
			</Container>
		);
	}
}

export default DistrictHomePage;
