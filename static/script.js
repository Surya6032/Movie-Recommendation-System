// components/Movie.js

// import React from 'react';
// import PropTypes from 'prop-types';

const Movie = (props) =>
React.createElement("div", { className: "movie" },
React.createElement("figure", { className: "movie__figure" },
React.createElement("img", { src: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`, className: "movie__poster" }),
React.createElement("figcaption", null,
React.createElement("span", { className: "movie__vote" }, props.vote_average)),

React.createElement("h2", { className: "movie__title" }, props.title)));




Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number };


// export default Movie;



// components/Movies.js

// import React from 'react';
// import PropTypes from 'prop-types';

// import Movie from './Movie';

const Movies = (props) =>
React.createElement("ul", { className: "movies" },
props.movies.map((movie) =>
React.createElement("li", { key: movie.id },
React.createElement(Movie, movie))));





Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object) };


// export default Movie;



// components/Search.js
// import React from 'react';
// import PropTypes from 'prop-types';

const Search = (props) =>
React.createElement("form", { className: "search", onInput: event => props.onInput(event.target.value) },
React.createElement("input", { type: "search", value: props.query, placeholder: props.placeholder }));



Search.propTypes = {
  query: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string };


// export default Search;



// components/App.js
// import React from 'react';

// import Movies from './Movies';
// import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: '' };


    this.onInput = this.onInput.bind(this);
  }

  onInput(query) {
    this.setState({
      query });


    this.searchMovie(query);
  }

  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;

    fetch(url).
    then(response => response.json()).
    then(data => {
      this.setState({
        movies: data.results });

    });
  }

  searchMovie(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;

    fetch(url).
    then(response => response.json()).
    then(data => {
      this.setState({
        movies: data.results });

    });
  }

  componentDidMount() {
    this.getPopularMovies();
  }

  render() {
    const { movies, query } = this.state;
    const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());

    return (
      React.createElement("div", { className: "app" },
      React.createElement(Movies, { movies: movies.filter(isSearched(query)) })));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
