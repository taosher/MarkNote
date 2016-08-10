<template>
    <div class="cover" @click="closeCover" :class="{'show':coverStatus}">
    </div>
    <div class="window" :class="{'show':coverStatus}">
            <span>{{title}}</span>
            <input type="text" name="" v-model="content" placeholder="请输入内容...">
            <button type="button" @click="submit">确定</button>
        </div>
</template>

<style scoped>
    .cover {
        display:none;
        position:fixed;
        top:0;
        left:0;
        z-index:2;
        height:100%;
        width:100%;
        background-color:#999999;
        opacity:0.6;
    }
    .window {
        display:none;
        border-radius:3vw;
        height:40vw;
        width:70vw;
        font-size:4vw;
        text-align:center;
        position:fixed;
        z-index:3;
        top:50%;
        left:50%;
        margin-top:-20vw;
        margin-left:-35vw;
        background-color:#FFFFFF;
    }
    .window * {
        display:block;
        outline:none;
        text-decoration:none;
        margin:5vw auto;
    }
    .window input {
        border:1px solid #999999;
        border-radius:1vw;
        height:8vw;
        width:55vw;
        text-indent:1vw;
    }
    .window button {
        background-color:#009999;
        color:#FFFFFF;
        font-size:3.5vw;
        border:none;
        border-radius:1vw;
        height:7vw;
        width:20vw;
    }
    .show {
        display:block;
    }
</style>

<script>
    import store from '../vuex/store'
    import Actions from '../vuex/actions'
    export default {
        data() {
            return {
                content:''
            }
        },
        store:store,
        computed:{
            title() {
                switch (this.status) {
                    case 'add':
                        return '添加'
                    case 'edit':
                        return '编辑'
                }
            }
        },
        methods: {
            submit() {
                switch (this.status) {
                    case 'add':
                        this.addNote(this.content)
                        this.content = ''
                        break
                    case 'edit':
                        this.editNote(this.time,this.content)
                        this.content = ''
                        window.location.reload(true)
                        break;
                }
                this.setCoverStatus(false)
            },
            closeCover() {
                this.setCoverStatus(false)
            }
        },
        vuex: {
            getters: {
                coverStatus: state => state.coverShow,
                status: state => state.status,
                time: state => state.timeStamp
            },
            actions: {
                addNote:Actions.addNote,
                editNote:Actions.editNote,
                setCoverStatus:Actions.setCoverStatus
            }
        }
    }
</script>