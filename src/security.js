export default {
    jwt: localStorage.getItem('jwt') || null,
    authenticate(jwt) {
        localStorage.jwt = jwt;
        this.jwt = jwt;
    },
    empty() {
        localStorage.jwt = null;
        localStorage.removeItem("jwt");
        this.jwt = null;
    }
}