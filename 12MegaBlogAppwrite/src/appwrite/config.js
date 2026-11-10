import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
    client = new Client();
    databases;
    storage; //bucket = storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndpointUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
    
    //In place of featuredImage we'll give fileId
    async createPost({title, slug, content, featuredImage,
    status, userId}){
        console.log("postInfo", {title, slug, content, featuredImage,
    status, userId})
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //this is document id and we can also write ID.unique() here
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("createPost Error", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.databases.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("updatePost Error", error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("deletePost Error", error)
            return false
        }
    }

    async getSinglePost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

        } catch (error) {
            console.log("getSinglePost Error", error)
            return false
        }
    }

    async getAllPosts(queries = [Query.equal("status", 
    "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("getAllPosts Error", error)
            return false
        }
    }

    //upload image file service

    async uploadImageFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            ) // here in return we get fileId
        } catch (error) {
            console.log("uploadImageFile Error", error)
            return false
        }
    }

    //delete image file service
    async deleteImageFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("DeleteImageFile Error", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const databaseService = new DatabaseService

export default databaseService