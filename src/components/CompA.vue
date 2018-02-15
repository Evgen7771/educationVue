<template>
    <div>
        <label class="form-group">Search name: <input type="text" v-model="name" /></label>
        <p class="cls-total">Total currancy: {{ total }}</p>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <td>
                        <a href="#">
                        Name
                        </a>
                    </td>
                    <td>
                        <a href="#">
                        Location
                        </a>
                    </td>
                    <td>
                        <a href="#">
                        Currency
                        </a>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="elem in list">
                    <td>{{ elem.name }}</td>
                    <td>{{ elem.location }}</td>
                    <td>{{ elem.currency }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
import { store } from '../store/store';

export default {
    name: 'result',
    data: () => {
        return {
            results : [],
            name: '',
            total: 0
        }
    },
    created(){
       store.dispatch('getData');
       setTimeout(() => {
           this.init();
       },0);
    },
    computed: {
        list(){
            var name = this.name.toLowerCase();
            var totalSearch = 0;
            var res = this.results.filter(function (elem) {
                if(elem.name.toLowerCase().indexOf(name) > -1){
                    totalSearch += parseInt(elem.currency); 
                    return true;
                }else
                    return false;
            });
            this.total = totalSearch;
            return res;
        }
    },
    methods: {
        init(){
            this.results = store.getters.todo;
        }
    }
}
</script>
 
<style>
    #hello {
        font-family: Verdana;
        color: navy;
    }
</style>