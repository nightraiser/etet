import * as React from "react";
import { Container, Content, Title, View, Text, Body, Header, Button, Icon, Left, Accordion, Form, Input, Item, Label, Picker } from "native-base";
class BullyingReport extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (key, value) => {
            let formValues = Object.assign({}, this.state.formValues);
            formValues[key] = value;
        };
        this.state = { formValues: {} };
    }
    SchoolSiteNameSection() {
        return (React.createElement(Form, null,
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "School Name"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("schoolName", text) })),
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "Site Name"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("siteName", text) }))));
    }
    Incident() {
        let startTime = new Date("1 JAN 2017 05:00 AM");
        let minutesPicker = [];
        for (let i = 0; i < 24; i++) {
            let current = `${startTime.getHours()} : ${startTime.getMinutes() === 0 ? "00" : startTime.getMinutes()}`;
            minutesPicker.push(React.createElement(Picker.Item, { key: i, label: current, value: current }));
            startTime.setMinutes(startTime.getMinutes() + 30);
        }
        return (React.createElement(View, { padder: true },
            React.createElement(View, null,
                React.createElement(Text, null, "Where did the incident occur ?"),
                React.createElement(Picker, { mode: "dropdown", iosIcon: React.createElement(Icon, { name: "ios-arrow-down-outline" }), style: { width: undefined }, placeholder: "Please Select", placeholderStyle: { color: "#bfc6ea" }, placeholderIconColor: "#007aff", selectedValue: "After School Activity", onValueChange: (text) => this.handleChange("incidentPlace", text) },
                    React.createElement(Picker.Item, { label: "After School Activity", value: "After School Activity" }),
                    React.createElement(Picker.Item, { label: "Bus Stop", value: "Bus Stop" }),
                    React.createElement(Picker.Item, { label: "Recess", value: "Recess" }),
                    React.createElement(Picker.Item, { label: "Text Message", value: "Text Message" }),
                    React.createElement(Picker.Item, { label: "E-Mail", value: "E-Mail" }),
                    React.createElement(Picker.Item, { label: "Class Room", value: "Class Room" }))),
            React.createElement(View, null,
                React.createElement(Text, null, "When did it Happend ?"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("incidentDate", text) })),
            React.createElement(View, null,
                React.createElement(Text, null, "What time did it happen??"),
                React.createElement(Picker, { mode: "dropdown", iosIcon: React.createElement(Icon, { name: "ios-arrow-down-outline" }), style: { width: undefined }, placeholder: "Please Select", placeholderStyle: { color: "#bfc6ea" }, placeholderIconColor: "#007aff", selectedValue: "05:30 AM", onValueChange: (text) => this.handleChange("incidentTime", text) }, minutesPicker)),
            React.createElement(View, null,
                React.createElement(Text, null, "How many times has this situation Happened"),
                React.createElement(Picker, { mode: "dropdown", iosIcon: React.createElement(Icon, { name: "ios-arrow-down-outline" }), style: { width: undefined }, placeholder: "Please Select", placeholderStyle: { color: "#bfc6ea" }, placeholderIconColor: "#007aff", selectedValue: "First Time", onValueChange: (text) => this.handleChange("incidentRepeat", text) },
                    React.createElement(Picker.Item, { label: "First Time", value: "First Time" }),
                    React.createElement(Picker.Item, { label: "Every Day", value: "Every Day" }),
                    React.createElement(Picker.Item, { label: "Multiple Times", value: "Multiple Times" }),
                    React.createElement(Picker.Item, { label: "Once a Month", value: "Once a Month" }),
                    React.createElement(Picker.Item, { label: "Once a Year", value: "Once a Year" }))),
            React.createElement(View, null,
                React.createElement(Text, null, "Describe what Happened .Give as many information as you can . let us know if there were any Witnesses"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("whatHappened", text) }))));
    }
    Reporter() {
        return (React.createElement(View, { padder: true },
            React.createElement(View, null,
                React.createElement(Text, null, "Who are u ?"),
                React.createElement(Picker, { mode: "dropdown", iosIcon: React.createElement(Icon, { name: "ios-arrow-down-outline" }), style: { width: undefined }, placeholder: "Please Select", placeholderStyle: { color: "#bfc6ea" }, placeholderIconColor: "#007aff", selectedValue: "Student", onValueChange: (text) => this.handleChange("whoRU", text) },
                    React.createElement(Picker.Item, { label: "Student", value: "Student" }),
                    React.createElement(Picker.Item, { label: "Teacher", value: "Teacher" }),
                    React.createElement(Picker.Item, { label: "Parent", value: "Parent" }),
                    React.createElement(Picker.Item, { label: "Other", value: "Other" }))),
            React.createElement(View, null,
                React.createElement(Label, null, " "),
                React.createElement(Item, null,
                    React.createElement(Label, null, "What is your Name ? (Reporter)"),
                    React.createElement(Input, { onChangeText: (text) => this.handleChange("ReporterName", text) }))),
            React.createElement(View, null,
                React.createElement(Item, null,
                    React.createElement(Label, null, "What is your Student ID?"),
                    React.createElement(Input, { onChangeText: (text) => this.handleChange("Student ID", text) }))),
            React.createElement(View, null,
                React.createElement(Text, null, "Have you reported this incident to an adult ?"),
                React.createElement(Picker, { mode: "dropdown", iosIcon: React.createElement(Icon, { name: "ios-arrow-down-outline" }), style: { width: undefined }, placeholder: "Please Select", placeholderStyle: { color: "#bfc6ea" }, placeholderIconColor: "#007aff", selectedValue: "No", onValueChange: (text) => this.handleChange("incidentPlace", text) },
                    React.createElement(Picker.Item, { label: "Yes", value: "Yes" }),
                    React.createElement(Picker.Item, { label: "No", value: "No" }))),
            React.createElement(View, null,
                React.createElement(Text, null, "If you would like someone to contact you, please give your contact details"),
                React.createElement(Item, { floatingLabel: true },
                    React.createElement(Label, null, "Email"),
                    React.createElement(Input, { onChangeText: (text) => this.handleChange("Email", text) })),
                React.createElement(Item, { floatingLabel: true },
                    React.createElement(Label, null, "Phone Number"),
                    React.createElement(Input, { onChangeText: (text) => this.handleChange("Phone Number", text) })))));
    }
    Intimidated() {
        return (React.createElement(Form, null,
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "First Name"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("FirstName", text) })),
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "Last Name"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("LastName", text) })),
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "Student Id"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("StudentId", text) })),
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "Grade Level"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("GradeLevel", text) }))));
    }
    PersonIntimidated() {
        return (React.createElement(Form, null,
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "First Name"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("FirstName", text) })),
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "Last Name"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("LastName", text) })),
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "Student Id"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("StudentId", text) })),
            React.createElement(Item, { floatingLabel: true },
                React.createElement(Label, null, "Grade Level"),
                React.createElement(Input, { onChangeText: (text) => this.handleChange("GradeLevel", text) }))));
    }
    _renderContent(dataArray) {
        return (React.createElement(View, null, dataArray.content));
    }
    _renderHeader(dataArray, expanded) {
        return (React.createElement(View, { style: { flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#ccc" } },
            React.createElement(Text, { style: { fontWeight: "600" } },
                " ",
                dataArray.title),
            expanded
                ? React.createElement(Icon, { style: { fontSize: 18 }, name: "remove-circle" })
                : React.createElement(Icon, { style: { fontSize: 18 }, name: "add-circle" })));
    }
    render() {
        const dataArray = [
            { title: "School or Site Name", content: this.SchoolSiteNameSection() },
            { title: "Incident", content: this.Incident() },
            { title: "Report", content: this.Reporter() },
            { title: "Who was bullying?", content: this.Intimidated() },
            { title: "Who was the person?", content: this.PersonIntimidated() },
        ];
        return (React.createElement(Container, null,
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "Bullying Report"))),
            React.createElement(Content, null,
                React.createElement(View, { padder: true },
                    React.createElement(Text, null, "If you Feel unsafe or know someone who feels unsafe ,you can report it here.Safety threats,bullying,harassment ,cyberbullying (Facebook ,Instagram,Youtube,TextMessage,Instant Messaging etc.) or intimidation inside or outside of school,Flights,drugs,alcohol or weapons at school."),
                    React.createElement(Text, null, "Friends who talk about hurting themselves."),
                    React.createElement(Text, null, "National Suicide Prevention Lifeline : 1-800-273-8255.")),
                React.createElement(Accordion, { renderContent: this._renderContent, dataArray: dataArray })),
            React.createElement(Button, { block: true },
                React.createElement(Text, null, "Report The Issue"))));
    }
}
export default BullyingReport;
//# sourceMappingURL=index.js.map