<div class="movie">
    <h2><u>Recommendations:</u></h2>
    <p>Showing results for: {{ search_name }}</p>
    <div id="movie-card-list">
      <div class="movie-card" id="poster">
        <div class="movie-card__overlay"></div>
        <div class="movie-card__share">
          <button class="movie-card__icon"><i class="material-icons">&#xe87d</i></button>
          <button class="movie-card__icon"><i class="material-icons">&#xe253</i></button>
          <button class="movie-card__icon"><i class="material-icons">&#xe80d</i></button>
        </div>
        <div class="movie-card__content">
          <div class="movie-card__header">
            <h1 class="movie-card__title">{{ movie_names[0]}}</h1>
            <h4 class="movie-card__info">{{ movie_date[0] }} {{movie_type[0]}}</h4>
          </div>
          <p class="movie-card__desc">{{ movie_overview[0] }}</p>
          <button class="btn btn-outline movie-card__button" type="button">Watch Trailer</button>
        </div>

        </div>
      </div>
      <div class="movie-card" data-movie="Blade Runner">
        <div class="movie-card__overlay"></div>
        <div class="movie-card__share">
          <button class="movie-card__icon"><i class="material-icons">&#xe87d</i></button>
          <button class="movie-card__icon"><i class="material-icons">&#xe253</i></button>
          <button class="movie-card__icon"><i class="material-icons">&#xe80d</i></button>
        </div>
        <div class="movie-card__content">
          <div class="movie-card__header">
            <h1 class="movie-card__title">{{ movie_names[1]}}</h1>
            <h4 class="movie-card__info">{{ movie_date[1] }} {{movie_type[1]}}</h4>
          </div>
          <p class="movie-card__desc">{{ movie_overview[1] }}</p>
          <button class="btn btn-outline movie-card__button" type="button">Watch Trailer</button>
        </div>

        </div>
      </div>



</div>
