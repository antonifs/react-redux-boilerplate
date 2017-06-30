/**
 * Created by antonifs on 5/22/17.
 */
import React, {Component} from 'react';

class App extends Component {

  render () {
    return(
      <div className="container">
          {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default App;
