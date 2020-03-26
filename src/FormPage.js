import React, { Component } from "react";
import axios from "axios";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import './App.css'

class Pincode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pincode: "",
      city: "",
      district: "",
      state: "",
      error: ""
    };
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.length === 6) {
      this.setState({
        error: ""
      });
      axios
        .get(`https://api.postalpincode.in/pincode/${e.target.value}`)
        .then(res =>
          this.setState({
            state: res.data[0].PostOffice[0].State,
            city: res.data[0].PostOffice[0].Block,
            district: res.data[0].PostOffice[0].District
          })
        )
        .then(() => {
          document.getElementById("pincode").classList.remove("error");
        })
        .catch(err => {
          // document.getElementById("pincode").className = "error";
          this.setState({
            error: "Invalid PIN Code"
          });
        });
    }
    if (e.target.value.length !== 6) {
      this.setState({
        city: "",
        district:"",
        state: "",
        error: "ZIP code must be of 6 digits"
      });
    }
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={this.props.Container}>
        <div style={this.props.pincodeContainer}>
        {this.state.error ? (
            <span className="error-display">{this.state.error}</span>
          ) : <div><br/></div>}
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Pin Code"
            autoFocus
            inputProps={{ maxLength: 6 }}
            onChange={e => this.onChange(e)}
            name="pincode"
            value={this.state.pincode}
            id="pincode"
            style={this.props.pincodeInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="city"
            label="City"
            id="city"
            type="String"
            disabled={true}
            placeholder="City"
            value={this.state.city}
            style={this.props.cityInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="district"
            label="District"
            id="district"
            type="String"
            disabled={true}
            placeholder="District"
            value={this.state.district}
            style={this.props.districtInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="State"
            label="State"
            id="State"
            type="String"
            placeholder="State"
            disabled={true}
            value={this.state.state}
            style={this.props.stateInput}
          />
        </form><br/>
        <div>
          <h3>Enter 6-digit pincode to see its details</h3>
        </div>
      </div>
      </div>
    </Container>
    );
  }
}
export default Pincode;
