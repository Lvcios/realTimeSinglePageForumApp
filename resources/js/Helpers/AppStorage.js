//private methods starts with __ double low hyphen


class AppStorage{

    __storeToken(token){
        localStorage.setItem('token', token)
    }

    __storeUser(user){
        localStorage.setItem('user', user)
    }

    store(user, token){
        this.__storeToken(token)
        this.__storeUser(user)
    }

    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    getToken(){
        return localStorage.getItem('token')
    }

    getUser(){
        return localStorage.getItem('user')
    }
}

export default AppStorage = new AppStorage()
