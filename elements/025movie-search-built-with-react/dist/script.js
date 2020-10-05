function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class MoviesList extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      moviesList: ['tt2294629'],
      searchTerm: '' });_defineProperty(this, "search",


    event => {
      event.preventDefault();
      axios.
      get(
      `https://www.omdbapi.com/?apikey=756abb2f&s=${
      this.state.searchTerm
      }&plot=full`).

      then(res => res.data).
      then(res => {
        if (!res.Search) {
          this.setState({ moviesList: [] });
          return;
        }

        const moviesList = res.Search.map(movie => movie.imdbID);
        this.setState({
          moviesList });

      });
    });_defineProperty(this, "handleChange",

    event => {
      this.setState({
        searchTerm: event.target.value });

    });}

  render() {
    const { moviesList } = this.state;

    return (
      React.createElement("div", null,
      React.createElement("form", { onSubmit: this.search },
      React.createElement("input", {
        placeholder: "Search for a movie",
        onChange: this.handleChange }),

      React.createElement("button", { type: "submit" },
      React.createElement("i", { className: "fa fa-search" }))),


      moviesList.length > 0 ?
      moviesList.map((movie) =>
      React.createElement(MovieCard, { movieID: movie, key: movie })) :


      React.createElement("p", null, "Couldn't find any movie. Please search again using another search criteria.")));






  }}


class MovieCard extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      movieData: {} });}


  componentDidMount() {
    axios.
    get(
    `https://www.omdbapi.com/?apikey=756abb2f&i=${
    this.props.movieID
    }&plot=full`).

    then(res => res.data).
    then(res => {
      this.setState({ movieData: res });
    });
  }

  render() {
    const {
      Title,
      Released,
      Genre,
      Plot,
      Poster,
      imdbRating } =
    this.state.movieData;

    if (!Poster || Poster === 'N/A') {
      return null;
    }

    return (
      React.createElement("div", { className: "movie-card-container" },
      React.createElement("div", { className: "image-container" },
      React.createElement("div", {
        className: "bg-image",
        style: { backgroundImage: `url(${Poster})` } })),


      React.createElement("div", { className: "movie-info" },
      React.createElement("h2", null, "Movie Details"),
      React.createElement("div", null,
      React.createElement("h1", null, Title),
      React.createElement("small", null, "Released Date: ", Released)),

      React.createElement("h4", null, "Rating: ", imdbRating, " / 10"),
      React.createElement("p", null, Plot && Plot.substr(0, 350)),
      React.createElement("div", { className: "tags-container" },
      Genre && Genre.split(', ').map(g => React.createElement("span", null, g))))));




  }}


ReactDOM.render(React.createElement(MoviesList, null), document.getElementById('app'));
