import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndpointUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    //signup
    async createAccount({email, password, name}) {
        try{
            const userAccount = await this.account.create(ID.unique(),
            email, password, name);
            //console.log("User Account Created", userAccount);
            if(userAccount){
                //call another method(login)
                return this.login({email, password});

            } else {
                return userAccount;
            }
        } catch (error){
            throw error;
        }
    }

    //signin
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
    }

    // when we reach directly home page then we have to check whether we are logged in or not
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Logout Error", error)
        }
    }


}

const authService = new AuthService();

export default authService
