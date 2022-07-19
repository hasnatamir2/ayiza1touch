import Http from './HttpService'

export default class CompanyCodeService {
  static async getCompany() {
    try {
      const { data } = await Http.get('/api/company')
      return data
    } catch (err) {
      throw err
    }
  }
}