import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import FooterNavigation from "../../../components/FooterNavigation";
import styles from "./styles";
import Calendar from "react-native-calendar";
export interface Props {
	navigation: any;
}
export interface State {}
class 	CalendarPage extends React.Component<Props, State> {
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
					<Title>{param ? param.name.item : "Calendar "}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
			
				
					<Calendar
  currentMonth={'2018-08-01'}       // Optional date to set the currently displayed month after initialization
  customStyle={{day: {fontSize: 15, textAlign: 'center'}}} // Customize any pre-defined styles
 // dayHeadings={Array}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  eventDates={['2018-08-01']}       // Optional array of moment() parseable dates that will show an event indicator
 //	monthNames={ Array}                // Defaults to english names of months
	//onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
  //onDateLongPress={(date) => this.onDateLongPress(date)} 
  nextButtonText={'>'}           // Text for next button. Default: 'Next'
 title press
  prevButtonText={'<'}           // Text for previous button. Default: 'Prev'
  removeClippedSubviews={false}     // Set to false for us within Modals. Default: true
  scrollEnabled={true}              // False disables swiping. Default: False
  selectedDate={'2018-08-01'}       // Day to be selected
  showControls={true}               // False hides prev/next buttons. Default: False
  showEventIndicators={true}        // False hides event indicators. Default:False
  startDate={'2018-01-01'}          // The first month that will display. Default: current month
  titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
  today={'2018-08-01'}              // Defaults to today
  weekStart={1} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
/>


				</Content>

				<FooterNavigation navigation={this.props.navigation} current={ "Events" } />
			</Container>
		);
	}
}

export default CalendarPage;
