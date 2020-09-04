import "./App.css";
import React from "react";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {" "}
        {this.props.genres.map((genre) => {
          return <div> {genre.name} </div>;
        })}{" "}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
