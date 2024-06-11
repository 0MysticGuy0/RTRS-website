import axios from "axios";

export default class APIService{
    static getAddressRoot(){
        return 'http://localhost:8080/api/v1/rtrs'
    }

    static async getAllTranslationObjects(){
            const responce = await axios.get(this.getAddressRoot()+'/translation-objects',)
        return responce;
    }

    static async getAllChannels(){
        const responce = await axios.get(this.getAddressRoot()+'/channels',)
    return responce;
    }

    static async getAllAppealStatuses(){
        const responce = await axios.get(this.getAddressRoot()+'/appeal-statuses',)
    return responce;
    }
    static async getAllAppeals(){
        const responce = await axios.get(this.getAddressRoot()+'/appeals',)
    return responce;
    }
    static async getAllAppealsByEmail(email){
        const responce = await axios.get(this.getAddressRoot()+'/appeals-by-mail',{params:{
            email: email
        }})
    return responce;
    }
    static async getAllAppealTypes(){
        const responce = await axios.get(this.getAddressRoot()+'/appeal-types',)
    return responce;
    }
    static async getAllQuestions(){
        const responce = await axios.get(this.getAddressRoot()+'/questions',)
    return responce;
    }

    static async getAllTVChannels(){
        const responce = await axios.get(this.getAddressRoot()+'/tv-channels',)
    return responce;
    }
    static async getAllTVProgramsByDate(date){
        const responce = await axios.get(this.getAddressRoot()+'/tv-programs-by-date', {params:{
            date: date
        }})
    return responce;
    }


    static async sendAppeal(appeal){
        const responce = await axios.post(this.getAddressRoot() + '/save-appeal', appeal)
    return responce;
    }


    static async login(email, password){
        const responce = await axios.get(this.getAddressRoot()+'/login',{params:{
            email, password
        }})
    return responce;
    }
    
    static async register(user){
        const responce = await axios.post(this.getAddressRoot()+'/save-user',user)
        return responce;
    }

    static async updateUser(user){
        const responce = await axios.post(this.getAddressRoot()+'/update-user',user)
        return responce;
    }
    static async resetPassword(email){
        const responce = await axios.get(this.getAddressRoot()+'/reset-password',{params:{
            email: String(email)
        }})
        return responce
    }
    
}