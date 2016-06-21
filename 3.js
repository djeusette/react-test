// We want to update the title present in the Header everytime we navigate to a new page.
// Is passing the _setTitle method with the props the way to go?

import React, { Component, PropTypes } from 'react';

export class App extends Component {
  constructor() {
    super();
    this.state = { pageTitle: "My app" };
    this._setTitle = this._setTitle.bind(this);
  }

  _setTitle(title) {
    this.setState({ pageTitle: title });
  }

  render() {
    const { pageTitle } = this.state.pageTitle;

    return (
      <div>
        <Header title={pageTitle} />
        { React.cloneElement(children, { this._setTitle }) }
        <Footer />
      </div>
    );
  }
};

export class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  // ...

  render() {
    const { title } = this.props;

    return (
      <h2>{title}</h2>
    );
  }
}

export class Footer extends Component {
  // ...
}

export class Profile extends Component {
  static propTypes = {
    setTitle: PropTypes.func.isRequired,
  };
}

export class Projects extends Component {
  static propTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.setTitle('Projects');
  }

  // ...
}

export class ProjectForm extends Component {
  static propTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.setTitle('New Project');
  }

  // ...
}

export class Translators extends Component {
  static propTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.setTitle('Translators');
  }

  // ...
}

// ...
