import Token from "./Token";
import AppStore from './AppStorage'

class User {
    login(form){
        axios.post('/api/auth/login',form)
          .then(res => this.responseAfterLogin(res))
          .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(res){
        const access_token = res.data.access_token
        const userName = res.data.user
        if(Token.isValid(access_token)){
            AppStore.store(userName, access_token)
        }
    }

    hasToken(){
        const storeToken = AppStore.getToken()
        if(storeToken){
            return Token.isValid(storeToken)
        }
        return false
    }

    loggedIn(){
        return this.hasToken()
    }

    logout(){
        AppStore.clear()
    }

    name(){
        if(this.loggedIn()){
            return AppStore.getUser()
        }
        return "Welcome"
    }

    id(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStore.getToken())
            return payload.sub
        }

        return -1;
    }
}

//Token.PayLoad(res.data.access_token)
export default User = new User();
