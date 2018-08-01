import * as React from "react";
import { Row, Col, Text, Icon } from "native-base";
import { View } from "react-native";
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
						<View style={{alignItems: "center", padding: 5}}>
							<Icon name="home"></Icon>
							<Text>Ratings</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>KPI</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>Schools</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>Trustee</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>Administrator</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>Maps</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>News</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>Calendar</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>Contact</Text>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>Student</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>Parent</Text>
						</View>
					</Col>
					<Col>
						<View style={{ alignItems: "center", padding: 5 }}>
							<Icon name="home"></Icon>
							<Text>Employee</Text>
						</View>
					</Col>
				</Row>
			</View>
		);
	}
}

export default GridNavigation;
