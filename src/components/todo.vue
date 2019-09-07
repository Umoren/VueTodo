<template>
    <div>
        <section> 
            <navbar />
            <div class="container">
                
            <div class="row">
                <div class="card col-md-3 mt-2 pt-2 mb-2 ml-5 " style="height: auto" v-for='todo in todos'>
                    <div class="card-body mb-5 pb-5">
                        <div class="card-title"><h4> {{todo.title | title}} </h4> </div>
                        <h6 class='card-subtitle'> <em>  Posted by {{todo.userId}} </em></h6>
                        <router-link :to="'/todoDetails/'+todo.id" class="btn btn-primary ml-5 mt-3 mb-3">View More </router-link>
                    <button class="btn btn-danger mt-3  ml-5 mb-3"  >Delete title</button>
                    </div>
                   
                </div>
                
            </div>                
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
            todos: []
        };
    },
    methods: {
         getTodo(id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/1/todos`)
            .then(response => {
                this.todos = response.data.splice(0, 21);
                console.log(this.todos)
            }).catch(err=> {
                console.log(err)
            })
        }

        // deleteTodo(id) {
        //     // const index = this.todos.indexOf(id)
        //     axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
        //     .then(response => {
        //         this.todos.splice(0,1)
        //         console.log(response)
        //     })
        //     .catch(err => console.log(err))

        
    },
    filters: {
         title(value) {
            if (value.length > 20) {
            value = value.substring(0, 10) + '...';
        }
        return value
    }
    },
    created () {
        this.getTodo()
    }
}
</script>

<style scoped>
   
</style>
