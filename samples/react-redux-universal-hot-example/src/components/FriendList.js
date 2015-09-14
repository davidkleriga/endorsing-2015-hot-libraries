import React, {Component, PropTypes} from 'react';
import PersonSkillList from '../components/PersonSkillList';

const DEFAULT_FRIEND_LIST = [
  { displayName: 'dk', skillList: [ 'html', 'css' ] },
  { displayName: 'john', skillList: ['js', 'html', 'boss']}
];

export default class FriendList extends Component {
  static propTypes = {
    person: PropTypes.object,
    selectedFriend: PropTypes.object,
    friends: PropTypes.array
  }

  componentWillMount() {
  // Invoked once on the client&server, immediately before initial rendering
    this.state = this.props;
    this.state.friends = DEFAULT_FRIEND_LIST;
    this.state.person = DEFAULT_FRIEND_LIST[0];
    this.state.selectedFriend = DEFAULT_FRIEND_LIST[1];
  }

  componentDidMount() {
  // Invoked once only on the client, immediately after initial rendering.

  }

  componentWillReceiveProps() {
  // Invoked when a component is receiving new props. This method is not called for the initial render.

  }

  shouldComponentUpdate(nextProps, nextState) {
  // Possible veto for state update rendering
    console.log('should component update', nextProps, nextState);
    return true;

  }

  componentWillUpdate(nextProps, nextState) {
  // Invoked immediately before rendering when new props or state are being received. This method is not called for initial render.
    console.log('component will update', this, nextProps, nextState);
  }

  componentDidUpdate() {
    // Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.
  }

  componentWillUnmount() {
    // Invoked immediately before a component is unmounted from the DOM.
  }

  render() {
    const styles = require('./FriendList.scss');
    const {friends, selectedFriend} = this.state; // eslint-disable-line no-shadow
    // const {person, friends, selectedFriend} = this.props; // eslint-disable-line no-shadow
    const friendListItems = friends.map((item) => {
      const selectFriend = () => {
        console.log('selecting friend', item, selectedFriend, this);
        this.setState({selectedFriend: item});
      };
      const listItem = (
        <li onClick={selectFriend}>
          <h5>{item.displayName}</h5>

        </li>
      );
      return listItem;
    });
    return (
      <ul className={styles.friendListWrapper}>
        <li>
          <ul className={styles.friendList}>
            {friendListItems}
          </ul>
        </li>
        <li>
          <PersonSkillList person={selectedFriend}/>
        </li>
      </ul>
    );
  }
}
