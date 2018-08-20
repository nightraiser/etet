import * as React from "react";
import { Row, Col, Text, Spinner } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableHighlight } from "react-native";

export interface Props {
	navigation: any;
}
export interface State {}
class GridNavigation extends React.Component<Props, State> {
	render() {
		const styles = {
			gridIcon: {
				fontSize: 28,
				color: "#27ae60",
			},
		};
		const param = this.props.navigation.state.params;
		return (
			<View>
				<Row style={{marginBottom:10,marginTop:10}}>
					<Col>
						<TouchableHighlight onPress={() => { this.props.navigation.navigate("RatingPage")}} >
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon  size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color} name="star"></Icon>
							<Text style={{marginTop:5}}>Ratings</Text>
						</View>
						</TouchableHighlight>
					</Col>
					<Col>
						<TouchableHighlight onPress={() => { this.props.navigation.navigate("Kpi")}} >
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="bar-chart"></Icon>
							<Text style={{marginTop:5}}>KPI</Text>
						</View>
						</TouchableHighlight>
					</Col>
					<Col>
					<TouchableHighlight onPress={() => this.props.navigation.navigate("SearchPage", { name: "SearchPage", ...param })}>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="university"></Icon>
							<Text style={{marginTop:5}}>Schools</Text>
						</View>
						</TouchableHighlight>
					</Col>
				</Row>
				<Row style={{marginBottom:10,marginTop:10}}>
					<Col>
						<TouchableHighlight onPress={() => { this.props.navigation.navigate("TrusteesListPage") }} >
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="user-circle"></Icon>
							<Text style={{marginTop:5}}>Trustee</Text>
						</View>
						</TouchableHighlight>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="cogs"></Icon>
							<Text style={{marginTop:5}}>Admin</Text>
						</View>
					</Col>
					<Col>
						<TouchableHighlight onPress={() => { this.props.navigation.navigate("GMaps")}} >
							<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="map"></Icon>
							<Text style={{marginTop:5}}>Maps</Text>
						</View>
					</TouchableHighlight>
					</Col>
				</Row>
				<Row style={{marginBottom:10,marginTop:10}}>
					<Col>
					<TouchableHighlight onPress={() => { this.props.navigation.navigate("NewsPage")}} >
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="rss"></Icon>
							<Text style={{marginTop:5}}>News</Text>
						</View>
						</TouchableHighlight>
					</Col>
					<Col>
						<TouchableHighlight onPress={() => { this.props.navigation.navigate("Calendar", { ...param})}} >
							<View style={{ alignItems: "center", padding: 5 }}>
								<Icon size={styles.gridIcon.fontSize} color={styles.gridIcon.color} name="calendar"></Icon>
								<Text style={{marginTop:5}}>Calendar</Text>
							</View>
						</TouchableHighlight>
					</Col>
					<Col>
						<TouchableHighlight onPress={() => { this.props.navigation.navigate("ContactPage", {...param})}} >
							<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="phone"></Icon>
							<Text style={{marginTop:5}}>Contact</Text>
							</View>
						</TouchableHighlight>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="user"></Icon>
							<Text style={{marginTop:5}}>Student</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="users"></Icon>
							<Text style={{marginTop:5}}>Parent</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="home"></Icon>
							<Text style={{marginTop:5}}>Employee</Text>
						</View>
					</Col>
				</Row>
				<Row style={{marginBottom:10,marginTop:10}}>
					<Col>
						<TouchableHighlight onPress={() => { this.props.navigation.navigate("TrasnportPage", { ...param }) }} >
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size={styles.gridIcon.fontSize} color={styles.gridIcon.color} name="bus"></Icon>
							<Text style={{marginTop:5}}>Bus Tracking</Text>
						</View>
						</TouchableHighlight>
					</Col>
					<Col></Col>
					<Col></Col>
				</Row>
			</View>
		);
	}
}

export default GridNavigation;
