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
	constructor(props){
		super(props);
		this.state = {formValues:{}};
	}
	handleChange = (key,value) => {
		let formValues = Object.assign({},this.state.formValues);
		formValues[key] = value;
	}
	SchoolSiteNameSection(){
		return (
			<Form>
				 <Item floatingLabel>
              		<Label>School Name</Label>
              		<Input onChangeText={(text)=> this.handleChange("schoolName",text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Site Name</Label>
              		<Input onChangeText={(text)=> this.handleChange("siteName",text)} />
            	</Item>
			</Form>
		);
		
	}
	Incident(){
		return (
			<Form>
				<Item>
					<Label> Were did the incident Occur?</Label>
              		<Picker
						  mode ="dropdown"
						  iosIcon={<Icon name="ios-arrow-down-outline" />}	
						  style={{ width: undefined }}
               			  placeholder="Please Select"
               			  placeholderStyle={{ color: "#bfc6ea" }}
               			  placeholderIconColor="#007aff"
							selectedValue={"After School Activity"}
							onValueChange={(text)=> this.handleChange("incidentPlace",text)}	>
                			<Picker.Item label="After School Activity" value="After School Activity" />
                			<Picker.Item label="Bus Stop" value="Bus Stop" />
               				 <Picker.Item label="Recess" value="Recess" />
               				 <Picker.Item label="Text Message" value="Text Message" />
							 <Picker.Item label="E-Mail" value="E-Mail" />
							 <Picker.Item label="Class Room" value="Class Room" />
             					 </Picker>
           				 </Item>				
							<Label> When did it Happend 
								Calander picker</Label>	
									<Item>
              		<Picker
						  mode ="dropdown"
						  iosIcon={<Icon name="ios-arrow-down-outline" />}	
						  style={{ width: undefined }}
               			  placeholder="Please Select"
               			  placeholderStyle={{ color: "#bfc6ea" }}
               			  placeholderIconColor="#007aff"
							selectedValue={"After School Activity"}
							onValueChange={(text)=> this.handleChange("incidentPlace",text)}	>
                			<Picker.Item label="After School Activity" value="After School Activity" />
                			<Picker.Item label="Bus Stop" value="Bus Stop" />
               				 <Picker.Item label="Recess" value="Recess" />
               				 <Picker.Item label="Text Message" value="Text Message" />
							 <Picker.Item label="E-Mail" value="E-Mail" />
							 <Picker.Item label="Class Room" value="Class Room" />
             					 </Picker>
           				 </Item>	

								<Label> what time did it  happen??</Label>	
								<Item>
              		<Picker
						  mode ="dropdown"
						  iosIcon={<Icon name="ios-arrow-down-outline" />}	
						  style={{ width: undefined }}
               			  placeholder="Please Select"
               			  placeholderStyle={{ color: "#bfc6ea" }}
               			  placeholderIconColor="#007aff"
							selectedValue={"After School Activity"}
							onValueChange={(text)=> this.handleChange("incidentPlace",text)}	>
                			<Picker.Item label="After School Activity" value="After School Activity" />
                			<Picker.Item label="Bus Stop" value="Bus Stop" />
               				 <Picker.Item label="Recess" value="Recess" />
               				 <Picker.Item label="Text Message" value="Text Message" />
							 <Picker.Item label="E-Mail" value="E-Mail" />
							 <Picker.Item label="Class Room" value="Class Room" />
             					 </Picker>
           				 </Item>	
								<Label> How many times has this situation Happened</Label>
								<Item>
              		<Picker
						  mode ="dropdown"
						  iosIcon={<Icon name="ios-arrow-down-outline" />}	
						  style={{ width: undefined }}
               			  placeholder="Please Select"
               			  placeholderStyle={{ color: "#bfc6ea" }}
               			  placeholderIconColor="#007aff"
							selectedValue={"After School Activity"}
							onValueChange={(text)=> this.handleChange("incidentPlace",text)}	>
                			<Picker.Item label="After School Activity" value="After School Activity" />
                			<Picker.Item label="Bus Stop" value="Bus Stop" />
               				 <Picker.Item label="Recess" value="Recess" />
               				 <Picker.Item label="Text Message" value="Text Message" />
							 <Picker.Item label="E-Mail" value="E-Mail" />
							 <Picker.Item label="Class Room" value="Class Room" />
             					 </Picker>
           				 </Item>	
							<Label> Describe what Happened .Give as many information as you can .
									let us know if there were any Witnesses</Label>
								<Item floatingLabel>
								
              		<Input onChangeText={(text)=> this.handleChange("Describe what Happened .Give as many information as you can .let us know if there were any Witnesses",text)} />
            	</Item>		 	
				</Form>
		);	
	}
	Reporter(){
		return (
			<Form>
				<Item>
					<Label> Who are u ? // Picker</Label>
              		<Picker
						  mode ="dropdown"
						  iosIcon={<Icon name="ios-arrow-down-outline" />}	
						  style={{ width: undefined }}
               			  placeholder="Please Select"
               			  placeholderStyle={{ color: "#bfc6ea" }}
               			  placeholderIconColor="#007aff"
							selectedValue={"After School Activity"}
							onValueChange={(text)=> this.handleChange("incidentPlace",text)}	>
                			<Picker.Item label="After School Activity" value="After School Activity" />
                			<Picker.Item label="Bus Stop" value="Bus Stop" />
               				 <Picker.Item label="Recess" value="Recess" />
               				 <Picker.Item label="Text Message" value="Text Message" />
							 <Picker.Item label="E-Mail" value="E-Mail" />
							 <Picker.Item label="Class Room" value="Class Room" />
             					 </Picker>
           				 </Item>				
							<Label> What is your Name</Label>	
							<Item>
								<Label>Reporter Name</Label>
							<Input onChangeText={(text)=> this.handleChange("ReporterName",text)} />
           				 </Item>	

								<Label> what is your Student ID? </Label>	
								<Item>
								<Label>Student ID</Label>
							<Input onChangeText={(text)=> this.handleChange("Student ID",text)} />
              		
           				 </Item>	
								<Label> Have you reported this incident to an adult? //Picker</Label>
								<Item>
              		<Picker
						  mode ="dropdown"
						  iosIcon={<Icon name="ios-arrow-down-outline" />}	
						  style={{ width: undefined }}
               			  placeholder="Please Select"
               			  placeholderStyle={{ color: "#bfc6ea" }}
               			  placeholderIconColor="#007aff"
							selectedValue={"After School Activity"}
							onValueChange={(text)=> this.handleChange("incidentPlace",text)}	>
                			<Picker.Item label="After School Activity" value="After School Activity" />
                			<Picker.Item label="Bus Stop" value="Bus Stop" />
               				 <Picker.Item label="Recess" value="Recess" />
               				 <Picker.Item label="Text Message" value="Text Message" />
							 <Picker.Item label="E-Mail" value="E-Mail" />
							 <Picker.Item label="Class Room" value="Class Room" />
             					 </Picker>
           				 </Item>	

							<Label> If you would like someone to contact you ,please give youe contact details</Label>
								<Item floatingLabel>
								<Label>Email</Label>
								<Input onChangeText={(text)=> this.handleChange("Email",text)} />
								</Item>
								<Item floatingLabel>
								<Label>Phone Number</Label>
								<Input onChangeText={(text)=> this.handleChange("Phone Number",text)} />
            				</Item>	 	
				</Form>
		);	
	}


	Intimidated(){
		return (
			<Form>
				 <Item floatingLabel>
              		<Label>First Name</Label>
              		<Input onChangeText={(text)=> this.handleChange("FirstName",text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Last Name</Label>
              		<Input onChangeText={(text)=> this.handleChange("LastName",text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Student Id</Label>
              		<Input onChangeText={(text)=> this.handleChange("StudentId",text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Grade Level</Label>
              		<Input onChangeText={(text)=> this.handleChange("GradeLevel",text)} />
            	</Item>
			</Form>
		);
	}

	PersonIntimidated(){
		return (
			<Form>
				 <Item floatingLabel>
              		<Label>First Name</Label>
              		<Input onChangeText={(text)=> this.handleChange("FirstName",text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Last Name</Label>
              		<Input onChangeText={(text)=> this.handleChange("LastName",text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Student Id</Label>
              		<Input onChangeText={(text)=> this.handleChange("StudentId",text)} />
            	</Item>
				<Item floatingLabel>
              		<Label>Grade Level</Label>
              		<Input onChangeText={(text)=> this.handleChange("GradeLevel",text)} />
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
	render() {
		const dataArray = [
			{ title: "School or Site Name", content: this.SchoolSiteNameSection() },
			{ title: "Incident", content: this.Incident() },
			{ title: "Report", content: this.Reporter() },
			{ title: "Who was bullying,harassing,intimidating or causing harm?", content: this.Intimidated() },
			{ title: "Who was the person behind harmed,bullies,harassed or intimidated?", content: this.PersonIntimidated() },

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
					(Facebook ,Instagram,Youtube,TextMessage,Instant Messaging etc.) or intimidation inside or outside of school,Flights,drugs,alcohol or weapons at school .
					Friends who talk about hurting themselves.
					National Suicide Prevention Lifeline : 1-800-273-8255.
				</Text>
				</View>
				<Accordion renderContent={this._renderContent} dataArray={dataArray}/>
				</Content>
			
			</Container>
		);
	}
}

export default BullyingReport;
