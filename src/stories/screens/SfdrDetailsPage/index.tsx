import * as React from "react";
import {View, TouchableHighlight} from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body ,Card,CardItem} from "native-base";
import {Image  } from "react-native";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
const logo = require("../../../../assets/logo.png");

class SfdrDetailsPage extends React.Component<Props, State> {
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
						<Title>{param ? param.name : "SAN FELIPE DEL RIO CISD"}</Title>
					</Body>
					

					<Right />
				</Header>

				<Content padder>
				<View style={{ alignItems: "center" }}>
                <Image source={logo} style={{ height: 178, marginTop: 10 }} />
				</View>
				<Text>SAN FELIPE DEL RIO CISD </Text>
					  <View style={{alignItems:'center'}}>
				<Text> ADDRESS </Text>
					</View>
					<Card>
           					<CardItem>
              						<Body>
               						 	<Text>315 Griner St.Del Rio, Texas - 78840	</Text>
											<Text>Phone : (830) 778-4000</Text>
											<View style={{flexDirection: "row"}}>
											<Text>Superintendent: </Text>
											<TouchableHighlight onPress={() => this.props.navigation.navigate("SuperintendentPage")}>
												<Text style={{ color: "#27ae60", fontWeight: "bold", }}>Carlos H. Rios</Text>
											</TouchableHighlight>
											</View>
             					 	</Body>
           					</CardItem>
         			 </Card>
					  <View style={{alignItems:'center'}}>
					  <Text>VISION</Text>
					  </View>
					<Card>
           					<CardItem>
              						<Body>
               						 	<Text>The San Felipe Del Rio CISD provides a safe and nurturing environment where
											all sudents become contributring citizens prepared to compete and excel in an ever-changing world	
										</Text>
             					 	</Body>
           					</CardItem>
         			 </Card>

					  <View style={{alignItems:'center'}}>
					  <Text>QUICK Facts </Text>
					  </View>
					  					<Card>
           					<CardItem>
              						<Body>
               						 	<Text>1)44 years since the consolidation of San Felipe ISD and Del Rio ISD</Text>
											<Text> 2)Over 10,655 students</Text>
											<Text> 3)Overall student-teacher ratio: 15.8 to 1</Text>
											 <Text>4)20.4% Faculty hold master's degrees or higher</Text>
											 <Text>5)One 5A High School</Text>
											 <Text>6)One Freshman Campus</Text>
											 <Text>7)One 7th and 8th Grade Middle School</Text>
											 <Text>8)One 6th Grade Middle School</Text>
											 <Text>9)Seven elementary K-5 Schools</Text>
											 <Text>10)One Head Start / Early Childhood Campus</Text>
											 <Text>11)Comprehensive, college-prep, dual credit curriculum</Text>
											 <Text>12)Career and Technology dual credit education	
										</Text>
											
											
             					 	</Body>
           					</CardItem>
         			 </Card>

				</Content>

				
			</Container>
		);
	}
}

export default SfdrDetailsPage;
