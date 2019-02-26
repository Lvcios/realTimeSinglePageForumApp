<template>
  <v-toolbar>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Lvcios</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
        <router-link v-for="item in items.filter(item => item.show)" :key="item.title" :to="item.to">
            <v-btn flat>{{item.title}} </v-btn>
        </router-link>
    </div>
  </v-toolbar>
</template>

<script>
export default {
    data(){
        return {
            items:[
                {title:'Forum', to:'/forum', show:true},
                {title:'Login', to:'/login', show:!User.loggedIn()},
                {title:'Logout', to:'/logout', show:User.loggedIn()},
                {title:'Ask Question', to:'/ask', show:User.loggedIn()},
                {title:'Category', to:'/category', show:User.loggedIn()},
            ]
        }
    },
    created(){
        EventBus.$on('logout',()=>{
            User.logout()
        })
    }
}
</script>

<style>

</style>
