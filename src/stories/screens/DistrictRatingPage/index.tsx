import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body ,Card ,CardItem, View} from "native-base";
//import FooterNavigation from "../../../components/FooterNavigation";
import PureChart from 'react-native-pure-chart';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class DistrictRatingPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		const fill = 'rgb(134, 65, 244)'
		let sampleData = [
			{
			  seriesName: 'series1',
			  data: [
				{x: 'Elementary', y: 10},
				{x: 'Middle Schools', y: 200},
				{x: '2018-02-03', y: 170},
				{x: 'High Schools', y: 250},
				{x: '2018-02-05', y: 10},
				{ x: 'Elementary', y: 10 }
			  ],
			  color: '#27ae60'
			},
			{
			  seriesName: 'series2',
			  data: [
				{x: 'Elementary', y: 40},
				{x: 'Middle Schools', y: 100},
				{x: '2018-02-03', y: 140},
				{x: 'High Schools', y: 550},
				{x: '2018-02-05', y: 40},
				{ x: '2018-01-05', y: 40 }
			  ],
			  color: '#9b59b6'
			},
			{
				seriesName: 'series3',
				data: [
					{ x: 'Elementary', y: 40 },
					{ x: 'Middle Schools', y: 80 },
					{ x: '2018-02-03', y: 100 },
					{ x: 'High Schools', y: 420 },
					{ x: '2018-02-05', y: 90 },
					{ x: '2018-01-05', y: 40 }
				],
				color: '#f1c40e'
			}
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
						<Title>{param ? param.name : "Rating"}</Title>
					</Body>

					<Right />
				</Header>
				<Content padder>
				<PureChart data={sampleData} type='bar' height={250} />
				<View style={{marginTop:5}}>
				<Text style={{fontWeight: 'bold',color: 'green'}}> 2016-2017 Rating
				</Text>
				</View>
				<Card>
            <CardItem header>
              <Text>IMPORVEMENTS  REQUIRED(2)</Text>
            </CardItem>
            <CardItem>
			
              <Body>
                <Text>
                  Del Rio FreshMan School 
                </Text>
								<Text>Early College High School </Text>
              </Body>
            </CardItem>
			</Card>
			<Card>
				<CardItem header>
          <Text>NOT RATED(2)</Text>
      	</CardItem>
        <CardItem>
					<Body>
						<Text>
							San Felipe Memorial Middle School
						</Text>
					<Text>Laughlin Elementary Magnet</Text>
					</Body>
        </CardItem>
			</Card>
				<Card>
			 <CardItem header>
              <Text>EXPLEMNTARY (2)</Text>
            </CardItem>
            <CardItem>
			
              <Body>
                <Text>
                  Del Rio FreshMan School 
                </Text>
				<Text>Ruben Chavira Elementary  </Text>
              </Body>
            </CardItem>
			</Card>

			<Card>
			 <CardItem header>
              <Text>MET STANDARDS(2)</Text>
       </CardItem>
       <CardItem>
        <Body>
					<Text>Buena Vista Elementary</Text>
					<Text>Dr.Lonnie Green Elementary </Text>
        </Body>
        </CardItem>
			</Card>		
		</Content>

				
			</Container>
		);
	}
}

export default DistrictRatingPage ;
