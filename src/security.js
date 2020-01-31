export default {
    jwt: null,
    authenticate(jwt) {
        localStorage.jwt = jwt;
        this.jwt = jwt;
    }
}