import React, {Component, PropTypes} from 'react';


export default class PersonSkillList extends Component {

  static propTypes = {
    person: PropTypes.object
  }

  render() {
    const person = this.props.person;
    console.log('person!', person);
    const skills = person.skillList;
    const listItems = skills.map(function buildSkillList(item) {
      return (
        <li>{item}</li>
      );
    });

    return (
      <ul className="skill-list">
        <li>skill list for {person.displayName}</li>
        {listItems}
      </ul>
    );
  }
}
