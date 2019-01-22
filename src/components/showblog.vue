<template>
    <div class="show-blogs" v-theme="'wide'">
        <div class="blog-title"><h1>HELLO PEOPLE</h1></div>
        <input type="text" id="search" v-model="search" placeholder="search for articles">
        <h1>All Articles</h1>
        <div class="single" v-for="blog in filteredBlogs">
                <router-link v-bind:to="'/blog/'+ blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
                <div>
                    <p>{{blog.content | snippet}}</p>
                </div>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/search-mixin'

export default {
   data() {
       return{
           blogs:[],
           search: "",
       }
   },
   methods: {
       
   },
   created(){
       this.$http.get('https://vue-blog-01.firebaseio.com/posts.json').then(function(data){
          return data.json();
       }).then(function(data){
           let blogsArray = [];
           for(let key in data){
               data[key].id = key
               blogsArray.push(data[key]);
           }
           this.blogs = blogsArray;
           console.log(this.blogs);
       })
   },
    mixins:[searchMixin]
}
</script>

<style>
.show-blogs{
    margin: 0 auto;
}
.single{
    padding: 10px;
    border-bottom: 2px solid pink;
}
.single h2{
    color: slategray;
    text-transform: uppercase;
}
.single p{
    padding: 5px;
}
.blog-title{
    width: 100%;
    height: 100px;
    background-color:#c4add1;
    color: rgb(44, 44, 44);
}
.blog-title h1{
    margin: auto;
    padding:25px 0;
    width: fit-content;
}
input[type="text"]{
    padding: 10px;
    width: 50%;
    margin: 10px auto;
}
</style>
