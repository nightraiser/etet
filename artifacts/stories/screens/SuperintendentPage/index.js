import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Card, CardItem } from "native-base";
import styles from "./styles";
import { View, Image } from "react-native";
const img = require("../../../../assets/BusIcons/carlosrios.jpg");
class SuperintendentPage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, param ? param.name : "Superintendent Info")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(View, { style: { alignItems: "center" } },
                    React.createElement(Image, { source: img, style: { height: 300, marginTop: 10 } })),
                React.createElement(View, { style: { alignItems: 'center' } },
                    React.createElement(Text, null, " Carlos H. Rios, Ed.D. "),
                    React.createElement(Text, null, " Superintendent ")),
                React.createElement(Card, null,
                    React.createElement(CardItem, null,
                        React.createElement(Body, null,
                            React.createElement(Text, null, "Dr. Carlos Rios was born to Virginia Esperanza Rios on December 13, 1966 in Del Rio, TX. Upon graduation from Del Rio High School in 1985 he enrolled at Angelo State University. Two years later upon the insistence of his lifelong friends, Juan Jose Aguirre and Robert Luna, he transferred to Texas A&M University in College Station where he earned a baccalaureate degree in Political Science and History. After graduating from Texas A&M he reported to the Navy Education and Training Center in New Port Rhode Island where he earned and accepted a commission in the United States Navy. While in the United States Navy Ensign Rios was stationed and trained at the Navy Education and Training Center in San Diego, California. After completing his Surface Warfare Officer training he served on the USS Nitro as an Engineering Officer and later a Deck Officer. Among his many port calls, he recalls Scotland, Spain, and Cuba as the most memorable."),
                            React.createElement(Text, null, "After an honorable discharge from the United States Navy, Carlos Rios returned to his hometown of Del Rio, Texas where he entered the field of education and soon after met and married Ana Maria Arredondo. Carlos and Ana now have four children; Corina Leah, Carlos Orlando, Victoria Iliana and Emma Irene. In 1995, Carlos returned to College Station, TX, with his wife Ana to teach high school students, coach basketball, and attend Texas A&M University where he earned a Master\u2019s of Science in Educational Administration and eventually a Doctorate in Educational Administration. Dr. Rios has served as the principal of Saegert Middle School in Seguin, TX, Travis High School in Austin, TX, and Del Rio Middle School in Del Rio, TX. Thereafter he served as the Executive Director of Academic Compliance & Accountability in the Laredo Independent School District and then Assistant Superintendent for Curriculum and Instruction with the Seguin I.S.D. He became the ninth San Felipe Del Rio CISD Superintendent on May 6, 2013.")))))));
    }
}
export default SuperintendentPage;
//# sourceMappingURL=index.js.map