const container = React.createElement("div",{class:"parent"},
[React.createElement("div",{class:"child"},
[React.createElement("h1",{class:"heading"},"Hello Everyone"),React.createElement("h1",{class:"heading"},"Hello All")]),React.createElement("div",{class:"child"},
[React.createElement("h1",{class:"heading"},"Hello Everyone"),React.createElement("h1",{class:"heading"},"Hello All")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);