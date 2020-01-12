<template>
       <div class="flex flex-col items-center"  v-if="status.user === 'success' && user">
        <div class="relative mb-8">
            <div class="w-100 h-64 overflow-hidden z-10">
                <img src="https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg" alt="user background image" class="object-cover w-full">
            </div>

            <div class="absolute flex items-center bottom-0 left-0 -mb-8 ml-12 z-20">


                <p class="text-2xl text-black-800 ml-4">{{ user.data.attributes.name }}</p>
            </div>
        </div>
        <NewPost></NewPost>

       <div v-if="status.posts === 'loading'">Loading posts...</div>

       
        <div v-else-if="posts.length < 1">No posts found. Get started...</div>

        
        <Post v-else v-for="(post, postKey ) in posts.data" :key="postKey" :post="post"></Post>
    </div>

</template>

<script>
     import { mapGetters } from 'vuex';
    import NewPost from '../../components/NewPost';
    import Post from '../../components/Post';
    
    export default {
        name: "Show",

        components: {
            Post,
            NewPost
        },
       mounted() {
            this.$store.dispatch('fetchUser', this.$route.params.userId);
            this.$store.dispatch('fetchUserPosts', this.$route.params.userId);
        },

        computed: {
            ...mapGetters({
                user: 'user',
                posts: 'posts',
                status: 'status',
               
            }),
        }
    }
</script>



<style scoped>

</style>
