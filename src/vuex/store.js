import Vue from 'vue'
import Vuex from 'vuex'
import Util from '../libs/util'
Vue.use(Vuex)

let state = {
    list:[],
    coverShow:false,
    status:'add',
    timeStamp:String((new Date()).getTime())
}

function initState() {
    let storage = Util.getAllStorage();
    console.log('state',state)
    if (Util.getStorage('app-name') === 'marknote') {
        for (let k in storage) {
            if (k === 'app-name') continue;
            state.list.push({
                time:k,
                content:storage[k]
            })
        }
    } else {
        Util.setStorage('app-name','marknote')
    }
}
initState()

const mutations = {
    ADD_NOTE(state,content) {
        const timeStamp = String((new Date()).getTime())
        state.list.push({
            time:String(timeStamp),
            content:content
        })
        Util.setStorage(timeStamp,content)
    },
    EDIT_NOTE(state,time,content) {
        state.list.forEach(function(item,index,arr) {
            if (item.time === String(time)) {
                arr[index] = content
            }
        })
        Util.setStorage(time,content);
    },
    DELETE_NOTE(state,time) {
        state.list.forEach(function(item,index,arr) {
            if (item.time === String(time)) {
                arr.splice(index,1)
            }
        })
        Util.removeStorage(String(time))
    },
    DELETE_ALL_NOTES(state) {
        state.list = []
        Util.cleanStorage()
    },
    SET_COVER_STATUS(state,bool) {
        state.coverShow = bool;
    },
    SET_STATUS(state,str) {
        state.status = str
    },
    SET_TIME(state,time) {
        state.timeStamp = time
    }
}

export default new Vuex.Store({
    state,
    mutations,
    strict: true
})