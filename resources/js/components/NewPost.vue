<template>
    <div class="bg-white rounded shadow w-2/3 p-4 ">
        <div class="flex-1 flex mx-4">
            <input v-model="postMessage" type="text" name="body" class="w-full pl-4 h-8 bg-gray-200 rounded-full focus:outline-none focus:shadow-outline text-sm" placeholder="Add a post">
             <transition name="fade">
                    <button v-if="postMessage"
                            @click="$store.dispatch('postMessage')"
                            class="bg-gray-200 ml-2 px-3 py-1 rounded-full">Post
                    </button>
                </transition>
        </div>
    </div>

</template>

<script>
    import _ from 'lodash';

    export default {
        name: "NewPost",

        computed: {
            postMessage: {
                get(){
                return this.$store.getters.postMessage;
                },
                set: _.debounce(function(postMessage){
                     this.$store.commit('updateMessage', postMessage);
                }, 1000),


            }
        }
    }
</script>

<style scoped>
     .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
