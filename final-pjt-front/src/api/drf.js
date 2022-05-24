const HOST = 'http://127.0.0.1:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const REVIEWS = 'reviews/'
const COMMENTS = 'comments/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    mypage: username => HOST + ACCOUNTS + `${username}/` + 'mypage/',
  },
  reviews: {
    reviews: () => HOST + REVIEWS,
    review: review_pk => HOST + REVIEWS + `${review_pk}/`,
    likeReview: review_pk => HOST + REVIEWS + `${review_pk}/` + 'like/',
    comments: review_pk => HOST + REVIEWS + `${review_pk}/` + COMMENTS,
    comment: (review_pk, comment_pk) =>
      HOST +REVIEWS + `${review_pk}/` + COMMENTS + `${comment_pk}/`,
  },
}