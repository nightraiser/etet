import * as React from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, View, Text, Thumbnail} from "native-base";
import {default as FaIcon} from "react-native-vector-icons/FontAwesome";

import GridNavigation from "../../../components/GridNavigation";
import FooterNavigation from "../../../components/FooterNavigation";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
export interface Props {
	navigation: any;
}
export interface State {}
class DistrictHomePage extends React.Component<Props, State> {
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
						<Title>{param ? param.data.sname : "Home"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<View
					style={{flexDirection: "row",flex:1,marginBottom:10,marginTop:10,paddingBottom:10, borderBottomColor:'#ccc',borderBottomWidth:1}}>
						<View style={{flex:1}}>
							<Thumbnail source={{ uri: data.imagepath}} />
						</View>
						<View style={{flex:3, alignItems:"flex-end"}}>
							<View style={{flexDirection: "row"}}>
								<TouchableOpacity style={{ padding: 5 }} onPress={() => this.props.navigation.navigate("BullyingPage")}>
									<FaIcon size={30} name="frown-o"/>
								</TouchableOpacity>
								<TouchableOpacity style={{ padding: 5 }} onPress={() => this.props.navigation.navigate("MembershipCardPage", {data})}>
									<FaIcon size={30} name="address-card" />
								</TouchableOpacity>
								<TouchableOpacity style={{ padding: 5 }}>
									<FaIcon size={30} name="cogs" />
								</TouchableOpacity>
							</View>
							<Text style={{fontWeight: "bold"}}>{data.sname}</Text>
						</View>
					</View>
					<GridNavigation navigation={this.props.navigation} />
				</Content>
				<FooterNavigation current="Home" navigation={this.props.navigation} />
			</Container>
		);
	}
}

export default DistrictHomePage;
