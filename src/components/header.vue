<template>
    <nav>
        <ul>
            <li><router-link to='/' exact>Your blog</router-link></li>
             <li><router-link to='/add' exact>Add Article</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        text-align: center;
        margin:0;
        padding:10px 0;
    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
    a{
        color:rgb(32, 32, 32);
        text-decoration: none;
        padding: 5px;
    }
    .router-link-active{
        color:rgb(177, 72, 163);
    }
</style>
