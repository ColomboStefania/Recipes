import request from 'superagent'
import { baseUrl } from '../constants'
export const DELETE_RECIPE = 'DELETE_RECIPE'

export function deleteRecipee(currency) {
    return {
      type: DELETE_RECIPE,
      payload: currency,
    };
  }
  

