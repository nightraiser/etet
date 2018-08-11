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
		}
		return (
			<View>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon  size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color} name="star"></Icon>
							<Text>Ratings</Text>
						</View>
					</Col>
					<Col>
						<TouchableHighlight onPress={() => { this.props.navigation.navigate("Kpi")}} >
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="bar-chart"></Icon>
							<Text>KPI</Text>
						</View>
						</TouchableHighlight>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="university"></Icon>
							<Text>Schools</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="user-circle"></Icon>
							<Text>Trustee</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="cogs"></Icon>
							<Text>Administrator</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="map"></Icon>
							<Text>Maps</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="rss"></Icon>
							<Text>News</Text>
						</View>
					</Col>
					<Col>
						<TouchableHighlight onPress={() => { this.props.navigation.navigate("Calendar")}} >
							<View style={{ alignItems: "center", padding: 5 }}>
								<Icon size={styles.gridIcon.fontSize} color={styles.gridIcon.color} name="calendar"></Icon>
								<Text>Calendar</Text>
							</View>
						</TouchableHighlight>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="phone"></Icon>
							<Text>Contact</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="user"></Icon>
							<Text>Student</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="users"></Icon>
							<Text>Parent</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon size = {styles.gridIcon.fontSize} color = {styles.gridIcon.color}   name="home"></Icon>
							<Text>Employee</Text>
						</View>
					</Col>
				</Row>
			</View>
		);
	}
}

export default GridNavigation;
