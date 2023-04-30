import { baseResult } from "@/common/types"

const loginService = () => {

    function authenticate(username : string, password : string) : baseResult{
        if(username.length == 0){
            return {
                isValid: false,
                internalCode: 400,
                message: "Username are invalid"
            }
        }
        else if(password.length == 0){
            return {
                isValid: false,
                internalCode: 400,
                message: "Password are invalid"
            }
        }
        else{
            //TODO YOUR API CALL 
            return {
                isValid: true,
                internalCode: 200,
                message: null
            }
        }
    }

    function forgotPasswordCall(username: string, email: string) : baseResult{
        if(username.length > 0){
            //TODO - Call API to Send Email for change password
            return {
                isValid: true,
                internalCode: 200,
                message: null
            }
        }
        else if(email.length > 0){
            //TODO - Call API to Send Email for change password
            return {
                isValid: true,
                internalCode: 200,
                message: null
            }
        }
        else{
            return{
                isValid: false,
                internalCode: 400,
                message: "Invalid data for change password"
            };
        }
    }

    function createNewUser(username: string, email: string, password: string) : baseResult {
        if(username.length == 0){
            return {
                isValid: false,
                internalCode: 400,
                message: "Username are invalid"
            }
        }
        else if(email.length == 0)
            return {
                isValid: false,
                internalCode: 400,
                message: "Email are invalid"
            }
        else if(password.length == 0)
            return {
                isValid: false,
                internalCode: 400,
                message: "Password are invalid"
            }
        else{
            //TODO -> Call API to create new User
            return {
                isValid: true,
                internalCode: 200,
                message: null
            }
        }
    }

    return Object.freeze({
        login: authenticate,
        forgotPassword: forgotPasswordCall,
        signIn: createNewUser
    });
}

export default loginService;