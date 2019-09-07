<template>
    <div>

     <section class='container'>
        <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand text-light" href="#"> TO-DO APP</a>
        <ul class="navbar-nav mr-auto"> 
           
            <li class="nav-item active">
             <router-link class="nav-link text-light float-left" :to="'/todo'">Home <span class="sr-only">(current)</span></router-link>
             </li>
            
        </ul>
        </nav>
     </section>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .navbar{
        background-color: black !important;
    }
    .float-left{
        position: relative;
        left: 16rem;
    }
</style>