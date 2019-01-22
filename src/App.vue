<template>
  <div>
    <app-header></app-header>
     <router-view></router-view>
  </div>
</template> 

<script>
import  addBlog  from "./components/addblog";
import showBlog from './components/showblog';
import listBlogs from './components/listblogs';
import header from './components/header'
export default {
  components:{
    'add-blog':addBlog,
    'show-blogs':showBlog,
    'list-blogs':listBlogs,
    'app-header':header,
  },
   data() {
     return {
       
     }
   },
   methods: {
     
   },
}
</script>

<style>
body{
  margin:0;
  font-family: 'Roboto', sans-serif;

}
</style>
