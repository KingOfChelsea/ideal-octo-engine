<template>
    <div class="header">
    
    
    
        <div style="flex: 0 1 35%;">
            <dv-decoration-8 :color="['#5470C6','#5470C6']" style="width:100%;height:90%;" />
            <!-- <dv-decoration-3 style="width:100%;height:10%;" /> -->
        </div>
    
    
    
        <div style="flex: 0 1 30%; ">
    
    
    
            <dv-decoration-5 :color="['#5470C6','#5470C6']" style="width:100%;height:80% ;" />
    
    
    
        </div>
    
    
    
        <div style="flex: 0 1 35%; ">
    
    
    
            <dv-decoration-8 :color="['#5470C6','#5470C6']" :reverse="true" style="width:100%;height:100%;" />
        </div>
    
    
    
    </div>
</template>

<script>
export default {
    name: 'Container',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.header {
    display: flex;
    flex: 0 1 10%;
}
</style>