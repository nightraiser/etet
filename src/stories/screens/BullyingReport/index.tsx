import * as React from "react";
import { Image } from "react-native";
import { Container, Content, Title, View, Text,Body,Header,Button, Icon,Left, Accordion, Form,Input, Item, Label,Picker } from "native-base";
// import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {
	formValues : any;
}
class BullyingReport extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {formValues: {}};
	}
	handleChange = (key,value) => {
		let formValues = Object.assign({}, this.state.formValues);
		formValues[key] = value;
	}
	SchoolSiteNameSection() {
		return (
			<Form>
				 <Item floatingLabel>
              		<Label>School Name</Label>
              		<Input onChangeText={(text) => this.handleChange("schoolName", text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Site Name</Label>
              		<Input onChangeText={(text) => this.handleChange("siteName", text)} />
            	</Item>
			</Form>
		);
	}
	Incident() {
		let startTime = new Date("1 JAN 2017 05:00 AM");
		let minutesPicker = [];
		for(let i = 0 ; i < 24; i++) {
			let current = `${startTime.getHours()} : ${startTime.getMinutes() === 0 ? "00" : startTime.getMinutes()}`;
			minutesPicker.push(<Picker.Item key={i} label={current} value={current} />);
			startTime.setMinutes(startTime.getMinutes() + 30);
		}
		return (
			<View padder>
				<View>
				<Text>Where did the incident occur ?</Text>
				<Picker
					mode="dropdown"
					iosIcon={<Icon name="ios-arrow-down-outline" />}
					style={{ width: undefined }}
					placeholder="Please Select"
					placeholderStyle={{ color: "#bfc6ea" }}
					placeholderIconColor="#007aff"
					selectedValue={"After School Activity"}
					onValueChange={(text) => this.handleChange("incidentPlace", text)}	>
						<Picker.Item label="After School Activity" value="After School Activity" />
					<Picker.Item label="Bus Stop" value="Bus Stop" />
					<Picker.Item label="Recess" value="Recess" />
					<Picker.Item label="Text Message" value="Text Message" />
					<Picker.Item label="E-Mail" value="E-Mail" />
					<Picker.Item label="Class Room" value="Class Room" />
				</Picker>
				</View>
				<View>
					<Text>When did it Happend ?</Text>
					<Input onChangeText={(text) => this.handleChange("incidentDate", text)} />
				</View>
				<View>
					<Text>What time did it happen??</Text>
					<Picker
						mode="dropdown"
						iosIcon={<Icon name="ios-arrow-down-outline" />}
						style={{ width: undefined }}
						placeholder="Please Select"
						placeholderStyle={{ color: "#bfc6ea" }}
						placeholderIconColor="#007aff"
						selectedValue={"05:30 AM"}
						onValueChange={(text) => this.handleChange("incidentTime", text)}	>
						{minutesPicker}
					</Picker>
				</View>
				<View>
					<Text>How many times has this situation Happened</Text>
					<Picker
						mode="dropdown"
						iosIcon={<Icon name="ios-arrow-down-outline" />}
						style={{ width: undefined }}
						placeholder="Please Select"
						placeholderStyle={{ color: "#bfc6ea" }}
						placeholderIconColor="#007aff"
						selectedValue={"First Time"}
						onValueChange={(text) => this.handleChange("incidentRepeat", text)}	>
						<Picker.Item label="First Time" value="First Time" />
						<Picker.Item label="Every Day" value="Every Day" />
						<Picker.Item label="Multiple Times" value="Multiple Times" />
						<Picker.Item label="Once a Month" value="Once a Month" />
						<Picker.Item label="Once a Year" value="Once a Year" />
					</Picker>
				</View>
				<View>
					<Text>Describe what Happened .Give as many information as you can .
									let us know if there were any Witnesses</Text>
					<Input
						onChangeText={(text) => this.handleChange("whatHappened", text)} />
				</View>
				</View>
		);
	}
	Reporter() {
		return (
			<View padder>
				<View>
					<Text>Who are u ?</Text>
					<Picker
						mode="dropdown"
						iosIcon={<Icon name="ios-arrow-down-outline" />}
						style={{ width: undefined }}
						placeholder="Please Select"
						placeholderStyle={{ color: "#bfc6ea" }}
						placeholderIconColor="#007aff"
						selectedValue={"Student"}
						onValueChange={(text) => this.handleChange("whoRU", text)}	>
						<Picker.Item label="Student" value="Student" />
						<Picker.Item label="Teacher" value="Teacher" />
						<Picker.Item label="Parent" value="Parent" />
						<Picker.Item label="Other" value="Other" />
					</Picker>
				</View>
				<View>
					<Label> </Label>
					<Item>
						<Label>What is your Name ? (Reporter)</Label>
						<Input onChangeText={(text) => this.handleChange("ReporterName", text)} />
					</Item>
				</View>
				<View>
					<Item>
						<Label>What is your Student ID?</Label>
						<Input onChangeText={(text) => this.handleChange("Student ID", text)} />
					</Item>
				</View>
				<View>
					<Text>Have you reported this incident to an adult ?</Text>
					<Picker
						mode="dropdown"
						iosIcon={<Icon name="ios-arrow-down-outline" />}
						style={{ width: undefined }}
						placeholder="Please Select"
						placeholderStyle={{ color: "#bfc6ea" }}
						placeholderIconColor="#007aff"
						selectedValue={"No"}
						onValueChange={(text) => this.handleChange("incidentPlace", text)}	>
						<Picker.Item label="Yes" value="Yes" />
						<Picker.Item label="No" value="No" />
					</Picker>
				</View>
				<View>
					<Text>If you would like someone to contact you, please give your contact details</Text>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input onChangeText={(text) => this.handleChange("Email", text)} />
					</Item>
					<Item floatingLabel>
						<Label>Phone Number</Label>
						<Input onChangeText={(text) => this.handleChange("Phone Number", text)} />
					</Item>
				</View>
				</View>
		);
	}

	Intimidated() {
		return (
			<Form>
				 <Item floatingLabel>
              		<Label>First Name</Label>
              		<Input onChangeText={(text) => this.handleChange("FirstName", text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Last Name</Label>
              		<Input onChangeText={(text) => this.handleChange("LastName", text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Student Id</Label>
              		<Input onChangeText={(text) => this.handleChange("StudentId", text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Grade Level</Label>
              		<Input onChangeText={(text) => this.handleChange("GradeLevel", text)} />
            	</Item>
			</Form>
		);
	}

	PersonIntimidated() {
		return (
			<Form>
				 <Item floatingLabel>
              		<Label>First Name</Label>
              		<Input onChangeText={(text) => this.handleChange("FirstName",text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Last Name</Label>
              		<Input onChangeText={(text) => this.handleChange("LastName",text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Student Id</Label>
              		<Input onChangeText={(text) => this.handleChange("StudentId", text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Grade Level</Label>
              		<Input onChangeText={(text) => this.handleChange("GradeLevel", text)} />
            	</Item>
			</Form>
		);
	}
	_renderContent(dataArray){
		return (
			<View>
				{dataArray.content}
			</View>
		);
	}
	_renderHeader(dataArray, expanded) {
		return (
			<View
				style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#ccc" }}
			>
				<Text style={{ fontWeight: "600" }}>
					{" "}{dataArray.title}
				</Text>
				{expanded
					? <Icon style={{ fontSize: 18 }} name="remove-circle" />
					: <Icon style={{ fontSize: 18 }} name="add-circle" />}
			</View>
		);
	}
	render() {
		const dataArray = [
			{ title: "School or Site Name", content: this.SchoolSiteNameSection() },
			{ title: "Incident", content: this.Incident() },
			{ title: "Report", content: this.Reporter() },
			{ title: "Who was bullying?", content: this.Intimidated() },
			{ title: "Who was the person?", content: this.PersonIntimidated() },

		  ];

		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body>
					<Title>{"Bullying Report"}</Title>
					</Body>
				</Header>
				<Content>
				<View padder>
					<Text>
						If you Feel unsafe or know someone who feels unsafe ,you can report it here.Safety threats,bullying,harassment ,cyberbullying
						(Facebook ,Instagram,Youtube,TextMessage,Instant Messaging etc.)
						or intimidation inside or outside of school,Flights,drugs,alcohol or weapons at school.
					</Text>
					<Text>
						Friends who talk about hurting themselves.
					</Text>
					<Text>
						National Suicide Prevention Lifeline : 1-800-273-8255.
					</Text>
				</View>
					<Accordion renderContent={this._renderContent} dataArray={dataArray}/>
				</Content>
				<Button block><Text>Report The Issue</Text></Button>
			</Container>
		);
	}
}

export default BullyingReport;
