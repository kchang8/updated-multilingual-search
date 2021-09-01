import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://Hapiiserver-env.eba-32y8hpri.us-west-1.elasticbeanstalk.com/`
    // baseURL: `http://54.193.20.125:8081/`
  })
}
