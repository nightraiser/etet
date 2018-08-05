import * as React from "react";
import { Row, Col, Text, Spinner } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class GridNavigation extends React.Component<Props, State> {
	render() {

		return (
			<View>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon} name="star"></Icon>
							<Text>Ratings</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="bar-chart"></Icon>
							<Text>KPI</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="university"></Icon>
							<Text>Schools</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="user-circle"></Icon>
							<Text>Trustee</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="cogs"></Icon>
							<Text>Administrator</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="map"></Icon>
							<Text>Maps</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="rss"></Icon>
							<Text>News</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="calendar"></Icon>
							<Text>Calendar</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="phone"></Icon>
							<Text>Contact</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="user"></Icon>
							<Text>Student</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="users"></Icon>
							<Text>Parent</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon style = {styles.gridIcon}  name="home"></Icon>
							<Text>Employee</Text>
						</View>
					</Col>
				</Row>
			</View>
		);
	}
}

export default GridNavigation;
