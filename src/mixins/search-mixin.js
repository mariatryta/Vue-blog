export default {
    computed: {
        filteredBlogs:function(){
            return this.blogs.filter((blog) => {
              return blog.content.match(this.search)
              });
        } 
    },
}