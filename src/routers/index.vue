<style scoped>
    div.entry {
        width:100%;
        height:100%;
    }

    .entry h1 {
        display: block;
        position:absolute;
        top:40%;
        left:50%;
        width:80vw;
        margin-left:-40vw;
        text-align:center;
        font-size: 10vw;
        font-family: "Microsoft YaHei"; 
    }

    .entry span {
        display: block;
        position:absolute;
        top:50%;
        left:50%;
        width:40vw;
        margin-left:-20vw;
        text-align:center;
        font-size: 3vw;
        font-family: "Microsoft YaHei"; 
        color:#999999;
    }
</style>
<template>
    <div class="entry">
        <h1>Mark Note</h1>
        <span>一个易用的笔记应用</span>
    </div>
</template>
<script>
    let fn =  {
        data: function() {
            return {

            }
        },
        ready: function() {
            setTimeout(() => {
                this.$router.go('/content');
            },3000)            
        },
        beforeDestroy: function(transition) {

        },
        methods: {
            
        }
    }
    export default fn;
</script>
