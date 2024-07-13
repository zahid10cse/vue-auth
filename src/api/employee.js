import request from '@/utils/request'
import { config } from '../utils/config'

const url = config.api_url

export function profile () {
  return request({
    url: `${url}employees/profile/`,
    method: 'get'
  })
}
