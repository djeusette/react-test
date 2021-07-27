// Here is an ES5 component.
// Translate it to TypeScript and use the Functional component approach.
// Then render it in the target container with id 'app'.

// <!DOCTYPE html>
// <html>
//   <body>
//     <div id="app"></div>
//   </body>
// </html>

var React = require("react");

var SearchFilter = React.createClass({
  getInitialState: function () {
    return { visible: false };
  },
  handleClick: function () {
    this.setState({ visible: true });
  },
  render: function () {
    return (
      <div className="search">
        <i className="icon icon-search" onClick={this.handleClick}></i>
        <p>Is the filter visible? {this.state.visible}</p>
      </div>
    );
  },
});
