const state = {
    user: null,
    userStatus: null,
};

const getters = {
    authUser: state => {
        return state.user;
    }

};

const actions = {
    fetchAuthUser({commit, state}){
        axios.get('/api/auth-user')
        .then(res => {
            commit('setAuthUser', res.data);
        })
        .catch(error => {
            console.log('Unable to fetch user');
        });
    },
    clearAuthUsers: ({commit}) => {
        commit('CLEAR_AUTH_USER');
    }
};

const mutations = {
    setAuthUser(state, user){
        state.user = user;
    },
    CLEAR_AUTH_USER(state){
        state.user = null;
    }
};

export default {
    state,getters,actions,mutations,
}

