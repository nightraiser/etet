import * as React from "react";
import { Image } from "react-native";
import { Container, Content, Title, View } from "native-base";
// import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
	navigation: any;
}
export interface State {}
class BullyingReport extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content style={{backgroundColor: "#fff"}}>
					<View style = {{flex: 1, flexDirection: "column"}}>
						<View style={{flex: 1, backgroundColor: "#fff", marginTop: 10}}>
							<View style={{alignItems: "center"}}>
								<Title>ESchoolz</Title>
							</View>
						</View>
						<View style={{ flex: 1 }}>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

export default BullyingReport;
