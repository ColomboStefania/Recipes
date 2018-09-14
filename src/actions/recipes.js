import request from 'superagent'
import { baseUrl } from '../constants'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'
// export const FETCHED_EVENT = 'FETCHED_EVENT'
export const ADD_RECIPE = 'ADD_RECIPE'
export const DELETE_RECIPE2 = 'DELETE_RECIPE2'



export const fetchRecipes = () => (dispatch, getState) => {
  const state = getState()

  request
    .get(`${baseUrl}/list`)

    .then(response => {
      console.log("hello this is from action")
      dispatch({
        type: FETCHED_RECIPES,
        payload: response.body
      })
    })
}

// export const fetchEvent = (id) => (dispatch, getState) => {
//   const state = getState()


//   request
//     .get(`${baseUrl}/events/${id}`)
  
//     .then(response => {
//       dispatch({
//         type: FETCHED_EVENT,
//         payload: response.body
//       })
//     })
// }

export const createRecipe = (recipe) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/newRecipe`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(recipe)
    .then(response => {
      dispatch({
        type: ADD_RECIPE,
        payload: response.body
      })
    })
}

export const deleteRecipe2 = recipe => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  request
    .delete(`${baseUrl}/list`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch({
        type: DELETE_RECIPE2,
        payload: response.body
      })
    })
}
