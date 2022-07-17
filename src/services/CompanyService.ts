import Http from './HttpService';

export default class CompanyService {
    static async getCompany() {
        try {
            const { data } = await Http.get('/api/company');
            return data;

        } catch (err) {
            throw err;
        }
    }
    
}