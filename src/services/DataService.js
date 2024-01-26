import Axios from 'axios'

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=50'

export default {
  async getGalleryData() {
    try {
      const resp = await Axios.get()
      return resp.data
    } catch (err) {
      return await Promise.reject(err)
    }
  }
}
