import React from "react";

export class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: [ "lime", "mango" ] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`"${this.state.value}" submitted`);
  }

  handleChange(event) {

    const selectedOptions = [...event.currentTarget.children]
      .filter(opt => opt.selected)
      .map(opt => opt.value);

    console.dir(selectedOptions)

    this.setState({ value: selectedOptions });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange} multiple={true}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
