import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,Badge } from "native-base";
import {ScrollView ,View,StatusBar ,} from "react-native";
import FooterNavigation from "../../../components/FooterNavigation";
import styles from "./styles";
import PieChart from 'react-native-pie-chart'; 
export interface Props {
	navigation: any;
}
export interface State {}
class KpiPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		const chart_wh = 200
    	const series = [40, 6, 80, 120, 150]
		const sliceColor = ['#b71540','#e84118','#fbc531', '#44bd32', '#cd6133']
		/*const data = [
		{ name: 'Graduate', population: 40 },
		{ name: 'Continuer', population: 60 },
		{ name: 'DropOut', population: 80 },
		{ name: 'Mover', population: 120 },
		{ name: 'WithDrawn', population: 150 }
		]}
		const data = {
			labels:['Graduate','Continuer','DropOut','Mover','WithDrawn'] ,
			datasets:[
				{
					label: 'pie',
					backgroundColour :['#b71540','#e84118','#fbc531', '#44bd32', '#cd6133'],
					data: [40, 60, 80, 120, 150],
				}
			]} */
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name : "KPI"}</Title>
					</Body>

					<Right />
				</Header>
				

				<Content padder>
					<ScrollView style={{flex: 1}}>
					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         		 	<StatusBar
         					   hidden={true}
        			  />
				
					

          <Text style={styles.Title}>Graduate Data </Text>
		  			<PieChart
			chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
			doughnut={true}
			//data= {true}
            coverRadius={0.46}
			coverFill={'#FFF'}
			 />
			
		  
		  <Text style={styles.title}>Enrollment Data </Text>
					<PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
		  <Text style={styles.title}>Special Education Data (SPED) </Text>
					<PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
		  <Text style={styles.title}>limited English Proficient (LEP) </Text>
					<PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
			   </View>
     			 </ScrollView>
				</Content>
			</Container>
		);
	}
}
export default KpiPage;
