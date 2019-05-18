import React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

class AddActivity extends React.Component {
  state = {
    name: '',
    id: null,
    whoPaid: '',
    price: null,
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addActivity = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          name="name"
          onChange={this.handleChanges}
        />
        <input
          type="text"
          placeholder="$Price"
          value={this.state.price}
          name="price"
          onChange={this.handleChanges}
        />

        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle color="primary" caret>
            Who Paid
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Select a name</DropdownItem>
            {this.props.people.map(person => (
              <DropdownItem>{person.name}</DropdownItem>
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

export default AddActivity;
