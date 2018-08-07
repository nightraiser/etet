import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
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
    	const series = [40, 60, 80, 120, 150]
    	const sliceColor = ['#b71540','#e84118','#fbc531', '#44bd32', '#cd6133']
		console.log(this.props);
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name : "KPIPage"}</Title>
					</Body>

					<Right />
				</Header>
				

				<Content padder>
					<ScrollView style={{flex: 1}}>
					<View style={styles.Center}>
         		 	<StatusBar
         					   hidden={true}
        			  />
					  
          <Text style={styles.Title}>Graduate Data </Text>
					<PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
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
				<FooterNavigation navigation={this.props.navigation} current={ "KpiPage" } />
			</Container>
		);
	}
}

export default KpiPage;
