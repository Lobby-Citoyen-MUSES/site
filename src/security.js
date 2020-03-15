export default {
    jwt: localStorage.getItem('jwt') || null,
    authenticate(jwt) {
        localStorage.jwt = jwt;
        this.jwt = jwt;
    }
}