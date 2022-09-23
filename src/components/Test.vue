<template>
    <div  id="itemss">
        <div v-for="(item,index) in items" :key="index">
            <Item :propsItem="item" :type="type"/>
        </div>
    </div>
   
</template>

<script>
import Item from './Item.vue';


export default {
    name: "TestComp",
    data() {
        return {
            type: this.$route.params.type,
            items: []
        };
    },
    computed: {
        getUrl() {
            return this.$route.params.type;
        }
    },
    methods: {
        change() {
            this.type = this.$route.params.type;
            console.log("watch", this.type);
        },
        fetchItem() {
            this.items = [];
            this.type = this.$route.params.type;
            let initIds = [1, 5, 6];
            for (let i in initIds) {
                let id = initIds[i];
                fetch(`https://swapi.dev/api/${this.type}/${id}`, { method: "GET" })
                    .then(response => response.json())
                    .then(json => this.items.push(json));
            }
        }
    },
    watch: {
        "$route": "fetchItem"
    },
    created(){
        this.fetchItem();
    },
    components: { Item }
}
</script>

<style>
#itemss{
    
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}
</style>