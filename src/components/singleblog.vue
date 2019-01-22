<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <span v-for='category in blog.categories'><b>Categories: </b>{{category}}</span>
        <article>
            {{blog.content}}
        </article>
        <p>{{blog.author}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            blog:{

            }
        }
    },
    created(){
        this.$http.get('https://vue-blog-01.firebaseio.com/posts/'+ this.id + '.json').then(function(data) {
            return data.json();
        }).then(function(data){
            this.blog = data;
        })
    }
}
</script>
<style scoped>
    #single-blog{
        max-width:950px;
        margin: 0 auto;
        border-left: 1px solid grey;
        border-right: 1px solid grey;
        padding: 15px;
    }
    span{
        display: inline-block;
        padding: 10px 0;
    }
    h1{
        color: tomato;
    }
</style>