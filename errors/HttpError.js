// HttpError class extends from Error
class HttpError extends Error {
    // Contains status property
    constructor(message, status) {
        super(message);
        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;
        this.status = status;
    }

    // Extracts status code to handler
    statusCode() {
        return this.status;
    }
}

module.exports = HttpError;
