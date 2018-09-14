import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import {connect} from 'react-redux'
import {Button, Icon} from 'react-materialize'

class HomePage extends PureComponent {
  render() {

    const { currentUser } = this.props
    return (
        <div class="title">
           <div>
           <div class="title">Explore our Recipes</div>
<div class="gallery">
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
  </ul>
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
  </ul>
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
  </ul>
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
  </ul>
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
  </ul>
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
  </ul>
</div>
              </div>


      <div class="container"> <Link to="/login" class="btn">Explore</Link></div>

     
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {return { currentUser }}

export default connect( mapStateToProps,{  })(HomePage)
