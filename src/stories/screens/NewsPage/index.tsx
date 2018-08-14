import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body ,List, ListItem,Thumbnail} from "native-base";
//import FooterNavigation from "../../../components/FooterNavigation";
import {  FlatList ,TouchableOpacity ,View, TouchableHighlight} from "react-native";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class NewsPage extends React.Component<Props, State> {
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
						<Title>{param ? param.name : "News Page"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
				
			  <List>
            <ListItem avatar>
              <Left>
                <Thumbnail square  source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"}} />
              </Left>
              <Body>
                <Text>DRFS</Text>
                <Text note>Addressing a rally in Jalandhar Modi sought support fro Pakistan Sing Badal of the running SAD,
urging people to vot him in for a third state firm</Text>
              </Body>
			  </ListItem>
			
            <ListItem avatar>
              <Left>
			  <Thumbnail square  source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"}} />
              </Left>
              <Body>
                <Text>SFDR-CISD</Text>
                <Text note>The 2014 Poll manifesto of the BJP promised to provide non-adversarial pentagon ,the US President said .and consuctive tac environment and rationalization and simplification of tax</Text>
              </Body>
			  </ListItem>
			  
			
            <ListItem avatar>
              <Left>
			  <Thumbnail square  source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"}} />
              </Left>
              <Body>
                <Text>DRHS</Text>
                <Text note>We will never forget the lessons of 9/11 nor the Heros who lost at the</Text>
              </Body>
			  </ListItem>
			  
			
            <ListItem avatar>
              <Left>
			  <Thumbnail square  source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"}} />
              </Left>
              <Body>
                <Text>Gae-Building</Text>
                <Text note>Very soon ,Donald Trump us expexted to sign an executive order regarding refuces and entry to the US for a whole swathe of people.</Text>
              </Body>
			  </ListItem>
			  
            <ListItem avatar>
              <Left>
			  <Thumbnail square  source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"}} />
              </Left>
              <Body>
                <Text>Lamar</Text>
                <Text note>Apple has released the public betea if its lastest IOS update , giving us a glimse of the new features coming to its iphone ,ipads and ipods</Text>
              </Body>
			  </ListItem>
			  
            <ListItem avatar>
              <Left>
			  <Thumbnail square  source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"}} />
              </Left>
              <Body>
                <Text>NHES</Text>
                <Text note>Addressing a rally in Jalandhar Modi sought support fro Pakistan Sing Badal of the running SAD,
							urging people to vot him in for a third state firm</Text>
              </Body>
			  </ListItem>
			  
            <ListItem avatar>
              <Left>
			  <Thumbnail square  source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"}} />
              </Left>
              <Body>
                <Text>DRFS</Text>
                <Text note>The 2014 Poll manifesto of the BJP promised to provide non-adversarial pentagon ,the US President said .and consuctive tac environment and rationalization and simplification of tax</Text>
              </Body>
			  </ListItem>
			  
            <ListItem avatar>
              <Left>
   						<Thumbnail square  source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png"}} />
              </Left>
              <Body>
                <Text>SFDR-Poll CISD</Text>
                <Text note >The 2014 Poll manifesto of the BJP promised to provide non-adversarial pentagon ,the US President said .and consuctive tac environment and rationalization and simplification of tax"</Text>
              </Body>
			  </ListItem>
			  </List>

				</Content>

				
			</Container>
		);
	}
}

export default NewsPage;
