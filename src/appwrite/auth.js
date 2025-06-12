import { Client, Account, ID } from "appwrite";
import conf from "../config/conf";

export class AuthServices {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.ProjectId);
    this.account = new Account(this.client);
  }

  createAccount = async ({ email, password, name }) => {
    try {
      return await this.account.create(ID.unique(), email, password, name);
    } catch (error) {
      console.log("createAccount error:", error.message);
      throw error.message
    }
  };

login = async ({ email, password }) => {
  try {
    return await this.account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.log("login error:", error.message);
    throw error; // ✅ throw the whole error object
  }
};


getCurrentUser = async () => {
  try {
    const user = await this.account.get();
    return user;
  } catch (error) {
    if (error.code === 401) {
      // No active session
      return null;
    }
    throw error; // re-throw other errors
  }
};


  logout = async () => {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("logout error:", error.message);
      throw error.message
    }
  };
}

export const authServices = new AuthServices();
export default authServices;
