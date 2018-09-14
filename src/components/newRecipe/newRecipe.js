import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../../actions/recipes'
import TextField from 'material-ui/TextField'
import { Redirect } from 'react-router-dom'
import './newRecipe.css'
import Button from '@material-ui/core/Button';



class CreateRecipe extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      ingredients: '',
      duration: 0,
      picture: '',
    }
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  handleChange1 = event => {
    this.setState({ ingredients: event.target.value })
  }
  handleChange2 = event => {
    this.setState({ duration: parseInt(event.target.value,10) })
  }

  handleChange3 = event => {
    this.setState({ picture: event.target.value })
  }


  handleSubmit = event => {
    event.preventDefault()
    this.props.createRecipe({
      name: this.state.name,
      ingredients: this.state.ingredients,
      duration:this.state.duration,
      picture: this.state.picture,
    })
  }

  render() {


    return (
      <div>
        {this.state.redirect && <Redirect to="/" />}
        <form className = "formCreateEvent" onSubmit={this.handleSubmit}>
          <h1>Recipe Name:</h1>
          <TextField
            id="x"
            placeholder="Recipe"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <h2>Ingredients:</h2>
          <TextField
            id="x"
            placeholder=" Ingredients "
            type="text"
            value={this.state.ingredients}
            onChange={this.handleChange1}
            required
          />
          <h2>Duration:</h2>
          <TextField
            id="x"
            placeholder="Duration"
            type="number"
            value={this.state.duration}
            onChange={this.handleChange2}
            required
          />
            <h2>Picture:</h2>
          <TextField
            id="x"
            placeholder="picture url"
            type="text"
            value={this.state.picture}
            onChange={this.handleChange3}
            required
          />
          <br/>
          <br/>
          <br/>
          <Button className="buttonSubmit" id="cheese" type="submit" onSubmit={this.handleSubmit}>
            Submit
          </Button>
     
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {return { currentUser }}

export default connect( mapStateToProps, { createRecipe })(CreateRecipe)


