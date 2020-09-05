import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import { getGenresDispatcher } from "../../redux/dispatchers/genreDispatchers";
import { getArtistsDispatcher, clearArtistsDispatcher } from "../../redux/dispatchers/artistDispatchers";

class Genres extends Component {
  state = {
    isModalShown: false,
    genreTitle: "",
  };

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

  handleShowArtists = (genreTitle, genreId) => {
    this.props.getArtists(genreId)();
    this.setState({ genreTitle, isModalShown: true });
  };

  handleCloseModal = () => {
    this.props.clearArtists();
    this.setState({ isModalShown: false });
  }

  renderCurrentState = () => {
    const { genres } = this.props;
    const { artists } = this.props;
    
    const { isModalShown } = this.state;

    if (genres.loading) return <div> loading </div>;
    if (genres.error) return <div> {genres.error} </div>;
 
    return (
      <>
        <Modal
          isOpen={isModalShown}
          onRequestClose={this.handleCloseModal}
          contentLabel={this.state.genreTitle}
        >
          {artists.loading && <p> Loading artists... </p>}
          {artists.error && <p> {artists.error} </p>}
          {artists.data.map(artist => (
            <h3 key={artist.id}> {artist.name} </h3>
          ))}
        </Modal>
        <div>
          {genres.data.map((genre) => (
            <div key={genre.id}>
              <h2> {genre.name} </h2>
              <button onClick={() => this.handleShowArtists(genre.name, genre.id)}> Show artists </button>
              <img alt="genre" src={genre.picture} />
            </div>
          ))}
        </div>
      </>
    );
  };
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    artists: state.artists,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: getGenresDispatcher(dispatch),
    getArtists: (genreId) => {
      return getArtistsDispatcher(dispatch, genreId);
    },
    clearArtists: clearArtistsDispatcher(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
