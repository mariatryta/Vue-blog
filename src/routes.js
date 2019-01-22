import showBlogs from './components/showblog';
import addBlog from './components/addblog'
import singleBlog from './components/singleblog'

export default [
    {path:'/',component:showBlogs},
    {path:'/add',component:addBlog},
    {path:'/blog/:id',component:singleBlog},

]