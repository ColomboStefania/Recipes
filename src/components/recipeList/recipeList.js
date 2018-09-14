import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './recipeList.css'
import { fetchRecipes, deleteRecipe2 } from '../../actions/recipes'
// import { deleteRecipe } from '../../actions/deleteRecipe'
import _ from 'lodash'
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom'


class RecipesList extends PureComponent {
  componentDidMount() {
    this.props.fetchRecipes()
    console.log('hello')
  }

  fakeArray =  this.props.recipes
  

  render() {
 
    if (!this.props.currentUser) {
      return <Redirect to="/login" />
    }

    const { recipes } = this.props

    return (
    
      <div>
        
        {!recipes && <div>Loading...</div>}
        {recipes  &&
        (
          <div>
            <div className= "containertitle">
            <div class="title">All Recipes</div>
            <Link to={`/newRecipe`}>
                <figure>
                    <div>
                        <span>Add</span>
                        <span>New Recipe</span>
                    </div>
                </figure>
            </Link> 
            </div>
            <div>
              {_.map(recipes, recipe => {
                 return <div key={recipe.id} className = "containerEvent">

                 
                  <div className="deleteButton"><Button onClick={() => { this.props.deleteRecipe2(this.props.recipes.filter(obj => obj.name === recipe.name)) }}
                  >X</Button></div>
                 <Link to={`/recipe/${recipe.id}`}>
                  <div class="titleRecipe">{recipe.name}</div>
                  <div class="littleTitleRecipe">({recipe.duration} minutes)</div>
                 </Link> 
                 
                 <div className= "paragraphContainer">
                 <h1 className="paragraph">Ingredients</h1>
                 <p className="paragraph">{recipe.ingredients}</p></div>
                 <div>
                 <img className = "picture" src={recipe.picture} alt={recipe.name} height="420" width="420"/>
                 </div>
              </div> 
              })}
            </div>
           
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = function(state) {
  return {
    recipes: state.recipes,
    currentUser: state.currentUser,
  };
};

// const mapStateToProps = ({ recipes, currentUser }) => {return { recipes, currentUser }}

export default connect( mapStateToProps,{ fetchRecipes, deleteRecipe2 })(RecipesList)
