import React, { Component } from "react";
import { connect } from "react-redux";

import { getGenresDispatcher } from "../../dispatchers/genres";

class Genres extends Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    return (
      <React.Fragment>
        <h1> Genres </h1>
        {this.renderCurrentState()}
      </React.Fragment>
    );
  }

  renderCurrentState = () => {
    const { loading, error, genres } = this.props;

    if (loading) return <div> loading </div>;
    if (error) return <div> {error} </div>;

    return (
      <div>
        {genres.data.map((genre) => (
          <div>
            <h2> {genre.name} </h2>
            <img src={genre.picture} />
          </div>
        ))}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    error: state.error,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: getGenresDispatcher(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
