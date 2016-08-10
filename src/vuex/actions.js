export default {

    addNote({dispatch},content) {
        dispatch('ADD_NOTE',content)
    },

    editNote({dispatch},time,content) {
        dispatch('EDIT_NOTE',time,content)
    },

    deleteNote({dispatch},time) {
        dispatch('DELETE_NOTE',time)
    },

    setCoverStatus({dispatch},bool){
        dispatch('SET_COVER_STATUS',bool)
    },

    setStatus({dispatch},str) {
        dispatch('SET_STATUS',str)
    },

    setTime({dispatch},time) {
        dispatch('SET_TIME',time)
    }

}