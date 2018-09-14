import _ from 'lodash'
import { FETCHED_RECIPES, ADD_RECIPE, DELETE_RECIPE2 } from '../actions/recipes'
import {  DELETE_RECIPE } from '../actions/deleteRecipe'


export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCHED_RECIPES:
      return payload.recipes
    case ADD_RECIPE:
      return payload;
    case DELETE_RECIPE:
      return payload;
      case DELETE_RECIPE2:
      return payload;
    default:
      return state
  }
}
