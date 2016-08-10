<template>
    <ul>
        <li v-for="item in list">
            <div @click="callEditCover(item.time)">{{item.content}}</div>
            <i class="close" @click="deleteItem(item.time)">&#xe779;</i>
        </li>
    </ul>
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
    .close{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    ul {
        margin-top:10vw;
        overflow-x:hidden;
    }
    li {
        display:block;
        position:relative;
        width:100%;
        height:8vw;
        line-height:8vw;
        font-size:4vw;
        text-indent:5vw;
        color:#646464;
        border-width:1px;
        border-style:solid;
        border-color:#C0C0C0 transparent #C0C0C0 transparent;
    }
    li div {
        position:absolute;
        left:0;
        width:90vw;
        white-space: nowrap;
        overflow: hidden;   
        text-overflow:ellipsis;
    }
    li i {
        display:block;
        position:absolute;
        right:0;
        top:0;
        text-indent:0;
        text-align:center;
        width:10vw;
        height:8vw;
        line-height:8vw;
    }
</style>

<script>
    import Actions from '../vuex/actions'
    import store from '../vuex/store'
    export default {
        data(){
            return {
                // showList:list.slice(0,15)
            }
        },
        computed: {
            list() {
                return this.storeList
            }
        },
        store:store,
        methods:{
            loadMore() {
                var l = this.showList.length - 1;
                this.showList = this.showList.concat(this.list.slice(l,l+15));    
            },
            callEditCover(time){
                let t = String(time)
                this.setTime(t)
                this.setStatus('edit')
                this.setCoverStatus(true)
            },
            deleteItem(time) {
                let t = String(time)
                this.deleteNote(t)
            }
        },
        vuex: {
            getters:{
                storeList: state => state.list 
            },
            actions:{
                editNote:Actions.editNote,
                deleteNote:Actions.deleteNote,
                setTime:Actions.setTime,
                setStatus:Actions.setStatus,
                setCoverStatus:Actions.setCoverStatus
            }
        }
    };
</script>