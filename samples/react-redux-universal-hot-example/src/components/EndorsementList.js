import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
  render() {
    const styles = require('./EndorsementList.scss');
    return (
      <ul className={styles.endorsementList}>
        <li>endorsement list</li>
        <li>
          <Link to="/endorsement-test">test</Link>
        </li>
      </ul>
    );
  }
}

