var PageHeader = React.createClass({displayName: "PageHeader",
    render: function () {
        return (
            React.createElement("h2", null, "Welcome to Flallo")
        );
    }
});

React.render(
    React.createElement("h2", null, "Welcome to Flallo"),
    document.getElementById('content')
);
