<template>
    <div>
        <navbar />
        <section class='container '>
        <div class=' mt-5 pt-5'>
            <h2> {{details.title}} </h2>
            <h6> <small> <strong>Posted by: {{details.userId}}</strong> </small> </h6>
        </div>
        </section>    
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'
export default {
    components: {
      'navbar': Navbar  
    },
    data(){
        return{
            details: {}
        }
    },
    methods: {
         getTodo(id) {
            axios.get(`https://jsonplaceholder.typicode.com/todos/`+id)
            .then(response => {
                this.details = response.data;
                console.log(this.details)
            }).catch(err=> {
                console.log(err)
            })
        }
    },
    created () {
        this.getTodo(this.$route.params.id)
    }
}
</script>