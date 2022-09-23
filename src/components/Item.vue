<template>
    <div class="char-card p-3" @click="switchItem">
        <h6>Name: {{item.name}}</h6>
        <div v-for="(value,key,index) in item" :key="index">
            <div v-if="index<5">
                <span class="card-text">{{key}}</span> 
                <span class="card-text">:{{value}}</span> 

            </div>
           
        </div>
     </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Item',
    data(){
        return {
            item:this.propsItem
        }
    },
    props:['propsItem','type'],
    methods:{
        switchItem(){
            const randomId=Math.floor(Math.random()*20)+1;
            fetch(`https://swapi.dev/api/${this.type}/${randomId}`, { method: "GET" })
                    .then(response => response.json())
                    .then(json => this.item=json);
        }
    }
}
</script>

<style>
    .char-card{
        width:360px;
        border: 1px solid #02835a;
        border-radius: 4px;
        cursor: pointer;
    }
</style>