<template>

    <div class="bg-white h-12 px-4 flex items-center">
        <div class="w-1/3">
            <div class="flex">

                <router-link to="/">

                <a class="navbar-brand">
                     DR SOCIAL SPOT
                </a>

                </router-link>
            </div>
        </div>

        <div class="w-1/3 flex justify-center items-center h-full">
            <router-link to="/" class="px-6 border-b-2 border-blue-400 h-full flex items-center ">
                NewsFeed

            </router-link>
            <router-link :to="'/users/' + authUser.data.user_id" class="px-6 border-b-2 border-white h-full flex items-center ">

                My Profile



            </router-link>

        </div>
        <div class="w-1/3 flex justify-end">
           <a href="#" @click.prevent="logout">
                 <span>Logout</span>
             </a>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Nav",

        methods: {
            logout(evt) {
                if(confirm("Are you sure you want to log out?")) {
                    axios.get('api/logout').then(response => {
                    localStorage.removeItem('auth_token');

                   
                    delete axios.defaults.headers.common['Authorization'];

      
                    this.$router.go('/logout');
                    console.log('test');
                    
                    })
                    .catch(error => {
                   
                    localStorage.removeItem('auth_token');
                    delete axios.defaults.headers.common['Authorization'];
                    this.$router.go('/logout');
                    });       
                }
            }
        },

        computed: {
            ...mapGetters({
                authUser: 'authUser'
            })
        }

    }
</script>

<style scoped>

</style>

