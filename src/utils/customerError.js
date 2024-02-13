export class CustomerError{
    static createError({name = 'Error', cause, message, codeE=1 }){
        const error = new Error(message);
        error.name = name;
        error.cause = cause;
        error.code = codeE;
        throw error;
    }
}