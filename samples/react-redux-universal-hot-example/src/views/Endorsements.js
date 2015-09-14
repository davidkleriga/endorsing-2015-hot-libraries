import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import FriendList from '../components/FriendList';
import EndorsementList from '../components/EndorsementList';

export default class Home extends Component {
  static propTypes = {
    currentUser: PropTypes.object
  }

  render() {
    const { currentUser } = this.props;
    const styles = require('./Endorsements.scss');
    return (
      <div className={styles.endorsementDashboard}>

        <h3>react endorsement</h3>

        <FriendList className={styles.friendList} person={currentUser} />
        <EndorsementList className={styles.endorsementList} person={currentUser} />

        <Link to="/test">test</Link>

      </div>
    );
  }
}

