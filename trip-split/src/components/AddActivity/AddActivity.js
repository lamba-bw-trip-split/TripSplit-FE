import React from 'react';
import { connect } from 'react-redux';

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

class AddActivity extends React.Component {
  state = {
    item: {
      name: '',
      id: null,
      whoPaid: '',
      price: ''
    },
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  handleChanges = e => {
    this.setState({
      item: {
        [e.target.name]: e.target.value
      }
    });
  };

  addActivity = e => {
    e.preventDefault();
    const newItem = { ...this.state.item, id: Date.now() };
    this.props.addItem(newItem);
    this.setState({
      item: {
        name: '',
        id: null,
        whoPaid: '',
        price: ''
      }
    });
  };

  render() {
    console.log(this.props.people);
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          value={this.state.item.name}
          name="name"
          onChange={this.handleChanges}
        />
        <input
          type="text"
          placeholder="$Price"
          value={this.state.item.price}
          name="price"
          onChange={this.handleChanges}
        />

        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle color="primary" caret>
            Who Paid
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Select a name</DropdownItem>
            {this.props.people &&
              this.props.people.map(person => (
                <DropdownItem key={person.id}>{person.name}</DropdownItem>
              ))}
          </DropdownMenu>
        </ButtonDropdown>
        <Button onClick={this.addActivity} color="info">
          ADD
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(AddActivity);
