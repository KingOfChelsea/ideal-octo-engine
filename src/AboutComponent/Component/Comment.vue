<template>
    <div class="card1">
        <div class="tools">
            <div class="circle">
                <span class="red box"></span>
            </div>
            <div class="circle">
                <span class="yellow box"></span>
            </div>
            <div class="circle">
                <span class="green box"></span>
            </div>
        </div>
        <div class="card__content">
            {{ this.infor }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    props: ['infor'],
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

<style lang="less" >
.card1 {
    margin-top:50px;
    width: 80%;
    height: 55%;
    margin: 0 auto;
    background-color:#a89dac;
    border-radius: 8px;
    z-index: 1;
    opacity: 0.6;
}
.card1:hover{
    opacity: 1;
    transform: translate(-3%) scaleX();
    border-radius: 30px;
    box-shadow: #a89dac;
}
.tools {
    display: flex;
    align-items: center;
    padding: 9px;
}

.circle {
    padding: 0 4px;
}

.box {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 50%;
}

.red {
    background-color: #ff605c;
}

.yellow {
    background-color: #ffbd44;
}

.green {
    background-color: #00ca4e;
}
.card__content{
    padding-left: 10px;
    padding-right:10px ;
    width: 95%;
    height:90%;
    font-size: 20px;
    letter-spacing: 3px;
    overflow-y: scroll; 
    padding-left:10px ;
    list-style: 7px;
    text-align: center;
    text-indent: 2em    ;
}
.card__content::-webkit-scrollbar {
  display: none;
}

</style>