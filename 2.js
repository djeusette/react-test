// What do you think of this component? Could you improve it?

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  };

  render() {
    const { projects } = this.props;

    return (
      <div className="projects container">
        <Link to="/projects/new" className="btn">
          New project
        </Link>

        {projects.map((project) =>
          <div key={project.id}>
            <span className="language origin">{project.languageFrom}</span>
            <span className="language destination">{project.languageTo}</span>
          </div>
        )}
      </div>
    );
  }
};
