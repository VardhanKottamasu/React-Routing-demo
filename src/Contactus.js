import React, { Component } from 'react'

export class Contactus extends Component {
  
  render() {
    return (
      <form class="form-group">
        <p>For us, as a company to grow, your feedback matters the most</p>
      <label>
        Name:<divider></divider>
        <input type="text" name="name" />
      </label>
      <br/>
      <label>
        Email Address:
        <input type="text" name="name" />
      </label>
      <br/>
      
      <label>
        Email Address:  
        <input type="text" name="name" />
      </label>
      <br/>
      <input class="btn btn-success" type="submit" value="Submit" />
    </form>
    );
  }
}

export default Contactus