<template>
    <div class="show-blogs">
        <h1> List All Articles</h1>
            <input type="text" id="search" v-model="search" placeholder="search for articles">
        <div class="single" v-for="blog in filteredBlogs">
            <ul>
                <li>{{blog.title}}</li>
            </ul>
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
       this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
           this.blogs = data.body.slice(0,10);
       });   
   },
   mixins:[searchMixin]
}
</script>

<style scoped>
.show-blogs{
    margin: 0 auto;
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
