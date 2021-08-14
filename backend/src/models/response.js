module.exports = class response {
    constructor(response={}, status=400, errors=[], connected=false, success=false) {
        this.success = success;
        this.connected = connected;
        this.status = status;
        this.errors = errors;
        this.response = response;
    }
}