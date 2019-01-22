<template>
  <div>
    <div id="add-blog">
        <form v-if="!submitted">
            <label for="title">Blog Title</label>
            <input type="text" name="title" id="title-blog" v-model.lazy="blog.title" >

            <label for="content">Blog Content</label>
            <textarea cols="30" rows="10" v-model.lazy='blog.content'></textarea>
            <div id="checkboxes">
                <label for="ninjas">ninjas</label>
                <input type="checkbox" name="ninjas" id="ninjas" value="ninjas" v-model="blog.categories">
                <label for="wizards">wizards</label>
                  <input type="checkbox" name="wizards" id="wizards" value="wizards" v-model="blog.categories">
                <label for="cuties">cuties</label>
                  <input type="checkbox" name="cuties" id="cuties" value="cuties" v-model="blog.categories">
            </div>
            <label>Author/s:</label>
            <select name="authors" id="authors" value="pick one" v-model="blog.author">
                <option v-for='author in authors'>{{author}}</option>
            </select>
        </form>
        <div v-if="submitted">
            <p class="alert">Done!</p>
        </div>
    </div>
    <div id="preview">
        <h3>Preview Blog</h3> 
        <p>Blog title:{{blog.title}}</p>
        <p>Blog content:</p>
        <p>{{blog.content}}</p>
        <p>Blog categories:</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <p>Authors:</p>
        <li>{{blog.author}}</li>
    </div>
    <button v-on:click.prevent="post">Add Article</button>
  </div>
</template>

<script>
export default {
   data() {
     return {
        blog:{
            title:"",
            content:"",
            categories:[],
            author:"",
        },
        authors:["Basia	Wignall",'Isobel Gatchel','Anita	Leather'],
        submitted: false,
     }
   },
   methods: {
       post:function() {
           this.$http.post('https://jsonplaceholder.typicode.com/posts',{
               title:this.blog.title,
               body: this.blog.content,
           }).then(function(data){
               console.log(data)
               this.submitted=true;
           });
       }
   },
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
    padding: 0 10px;
}
label{
    display: block;
    margin: 20px 0 10px;
    font-weight: bold;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 10px;
}
h3{
    margin-top: 10px;
}
.alert{
    background-color: #80ff80;
    padding: 2px;
    margin:1px;
}
</style>
