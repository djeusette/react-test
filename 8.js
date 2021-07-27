// In the example below,
// if we want to be able to move away from Redux easily
// (i.e. use another flux-like implementation or
// another mechanism/library like ApolloClient)
// or reuse our React components to create dynamic views,
// what distinction should we do and how can we implement this idea?

// You can use the Dashboard class to illustrate your ideas.

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
// fetches projects from a remote server using Redux actions
import { fetchProjects } from "../../ducks/projects";

export class Dashboard extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    projects: PropTypes.array.isRequired,
  };

  // Voluntarily obfuscated
  componentXXX() {
    this.fetchData();
  }

  fetchData() {
    const { dispatch, status } = this.props;
    dispatch(fetchProjects({ status }));
  }

  render() {
    const { isFetching, projects } = this.props;

    return <ProjectsPane projects={projects} isFetching={isFetching} />;
  }
}

function mapStateToProps(state) {
  const { isFetching, projects } = state;

  return {
    isFetching,
    projects,
  };
}

export default connect(mapStateToProps)(Dashboard);

export class ProjectsPane extends Component {
  // ...
}
