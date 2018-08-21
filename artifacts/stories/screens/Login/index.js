import * as React from "react";
import { Container, Content, Title, View } from "native-base";
class Login extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Content, { style: { backgroundColor: "#fff" } },
                React.createElement(View, { style: { flex: 1, flexDirection: "column" } },
                    React.createElement(View, { style: { flex: 1, backgroundColor: "#fff", marginTop: 10 } },
                        React.createElement(View, { style: { alignItems: "center" } },
                            React.createElement(Title, null, "ESchoolz"))),
                    React.createElement(View, { style: { flex: 1 } })))));
    }
}
export default Login;
//# sourceMappingURL=index.js.map