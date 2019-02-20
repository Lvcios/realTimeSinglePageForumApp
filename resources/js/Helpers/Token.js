class Token{

    isValid(token){

        const payload = this.payload(token)
        if(payload){
            return payload.iss == 'http://127.0.0.1:8000/api/auth/login'
        }

        return false
    }

    payload(token){
        return this.decode(token.split('.')[1])
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }
}

export default Token = new Token()
