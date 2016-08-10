<template>
    <div class="header">
        <span>Mark Note</span>
        <i class="add" @click="callCover()">&#xe775</i>
    </div>
    <list></list>
    <cover></cover>
</template>

<style scoped> 
    @font-face {
        font-family: 'iconfont';
        src: url('../icon/iconfont.eot'); /* IE9*/
        src: url('../icon/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../icon/iconfont.woff') format('woff'), /* chrome、firefox */
        url('../icon/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url('../icon/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
    }
    .add{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .header {
        position:fixed;
        z-index:1;
        overflow:hidden;
        top:0;
        height:10vw;
        line-height:10vw;
        width:100%;
        background-color:rgba(0,153,153,1);
        color:#FFFFFF;
        text-align:center;
        vertical-align:center;
    }
    .header span {
        font-size:4vw;       
    }
    .header i {
        display:block;
        position:absolute;
        right:2vw;
        top:50%;
        height:10vw;
        margin-top:-5vw;
        overflow:hidden;
        font-size:6vw;
    }

</style>

<script>
    import Util from '../libs/util'
    import List from '../components/list.vue'
    import Cover from '../components/cover.vue'
    import Actions from '../vuex/actions'
    import store from '../vuex/store'

    export default {
        data(){
            return {
                
            }
        },
        store:store,
        components: {
            list:List,
            cover:Cover
        },
        methods:{
            callCover() {
                this.setStatus('add')
                this.setCoverStatus(true)
            }
        },
        vuex: {
            getters: {
                status: state => state.status
            },
            actions:{
                addNote:Actions.addNote,
                setCoverStatus:Actions.setCoverStatus,
                setStatus:Actions.setStatus
            }
        }
    };
</script>