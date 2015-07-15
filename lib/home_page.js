var PageHeader = React.createClass({
    render: function () {
        return (
            <h2 className="header">Welcome to Flallo</h2>
        );
    }
});

React.render(
    <PageHeader />,
    document.getElementById('content')
);
