var PageHeader = React.createClass({displayName: "PageHeader",
    render: function () {
        return (
            React.createElement("h2", {id: "header"}, "Welcome to Flallo")
        );
    }
});

React.render(
    React.createElement(PageHeader, null),
    document.getElementById('content')
);
