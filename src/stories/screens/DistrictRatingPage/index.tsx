import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body   } from "native-base";
//import Accordion  from "native-base";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class DistrictRatingPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		console.log(this.props);
		const dataArray = [
			{ title: "Improvements Required(2)", content: "Del Rio FreshMan School ,Early College High School" },
			{ title: "Not Rated(3) ", content: "San Felipe Memoraial Middle School,Laughlin Elementry Magnet,Student Guidenace & Learning Center(SGCL)" },
			{ title: "Explementary(2)", content: "Ruben Chavira Elementry , Del Rio High School" },
			{ title: "Met Standard(4)", content: "Buena Vista Elementary ,Dr.Lonnie Green Elementary , Del Rio High School, Blended Academy " }
		  ];
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{"Rating"}</Title>
					</Body>

					<Right />
				</Header>
				// Bar chart need to be updates
				<Content padder>
					<Text>{ DistrictRatingPage}</Text>
			
					<Container>
        <Header />
        
      </Container>

				</Content>
			</Container>
		);
	}
}

export default DistrictRatingPage;
