<template>
  <div class="container top-margin">
    <div class="d-flex wrap">
      <div class="poster">
        <img class="poster_size" :src="posterUrl" alt="poster">
      </div>
      <div class="detail">
        <span id="title">{{ movieDetail.title }}</span> <span id="year"> ({{ year }})</span>
        <!-- <div v-for="(genre, idx) in genres" :key="{idx}">
          <span class="d-flex flex-wrap">{{ genre }}</span>
        </div> -->
        <br>
        <h4 id="original">{{ movieDetail.original_title }}</h4>
        <span class="genres">{{ movieDetail.release_date }} /</span>
        <span class="genres"> {{ genres }} /</span>
        <span class="genres"> {{ movieDetail.runtime }}분</span>
        <br><br>
        <div class="d-flex justify-content-start">
        <div class="d-flex align-items-center">
          <i class="fa fa-star fa-3x"></i><br>
          <h6 class="rating pe-1" style="color:white">{{ movieDetail.vote_average }}</h6>
        </div>
        <div class="ms-5 pt-2">
          <StarRating :movieId="movieId" />
        </div>
        </div><br>
        <!-- tagline이 있을 때만 보여주기 -->
        <span v-if="movieDetail.tagline" class="tagline fw-bold">"{{ movieDetail.tagline }}"</span>
        <div>
          <h3>개요</h3>
          <p id="overview">{{ movieDetail.overview }}</p>
        </div>
      </div>
    </div>
    <div>
      <h3></h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import StarRating from '@/components/StarRating.vue'

export default {
  name: 'DetailView',
  components: {
    StarRating
  },
  props: {
    movieId: {
      type: [Number, String]
    }
  },
  data: function () {
    return {
      movieDetail: {},
      reviews: [],
      movieTitle: '',
      posterUrl: '',
      year: '',
      genres: ''
      }
  },
  computed: {
    apiKey: function () { return this.$store.state.apiKey },
    url: function () { return `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.apiKey}&language=ko-KR` },
    ...mapGetters(['getToken', 'authHeader'])
  },
  methods: {
    // 리뷰작성으로 넘어가기
    MoveToCreate: function () {
      this.$router.push({ name: 'ReviewCreate', params: { movieId: this.movieId, } })
    },
    // created가 computed나 data보다 나중에 실행되어서, 위의 정보들을 가지고 created에 넣어서 axios 신호를 보내려 하면 뻑이 난다.
    getMovieDetail: function () {
      axios.get(this.url)
      .then((res) => {
        this.movieDetail = res.data
      }).then((res) => {
      this.movieTitle = this.movieDetail.title
      this.posterUrl = `https://image.tmdb.org/t/p/original${this.movieDetail.poster_path}`
      this.year = this.movieDetail.release_date.slice(0, 4)
      let movieGenres = ''
      for (const i in this.movieDetail.genres) {
        movieGenres += `${this.movieDetail.genres[i]['name']} ` 
      }
      this.genres = movieGenres})
      .then((res) =>{
      axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/create/',
      headers: this.authHeader,
      data: {
        title: this.movieTitle,
        poster_path: this.posterUrl,
        tmdb_id: this.movieId
      }})

      })
    },
  },
  created() {
    this.getMovieDetail()
  }
  }
</script>

<style scoped>

.top-margin {
  margin-top: 3vh;
}

.poster {
  margin: 2rem;
}


.poster_size {
  width: 300px;
  height: auto;
}

#original, .tagline {
  color: lightslategray;
  font-style: italic;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.tagline {
  font-size: larger;
}

.detail {
  /* color: white; */
  margin: 2rem;
}

.detail > p {
  color: white;
}

.genres {
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#title {
  font-size: 42px;
  color: white;
}

#year {
  color: lightslategray;
  font-size: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h3 {
  color: white;
}

#overview {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: larger;
}

.fa {
  position: relative;
  background: linear-gradient(gold, tomato);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.rating {
  position: absolute;
  margin-top: 13px;
  margin-left: 14px;
  font-weight: bold;
  /* color: ; */
}

</style>