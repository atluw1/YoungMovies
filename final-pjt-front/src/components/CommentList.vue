<template>
  <div class="comment-list"><br>
    <comment-list-form></comment-list-form><hr>
    <comment-list-item 
      v-for="comment in comments" 
      :comment="comment" 
      :key="comment.pk">
    </comment-list-item>
    <v-pagination
    dark
      v-model='page'
      :length="pageCount"
      :total-visible="totalVisible"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left">
    </v-pagination>
  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem.vue'
import CommentListForm from '@/components/CommentListForm.vue'
// import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'CommentList',
  data () {
    return {
      page: 1,
      pageCount: 3,
      totalVisible: 5,
    }
  },
  components: { CommentListForm, CommentListItem },
  props: { comments: Array },
}
</script>

<style>

</style>