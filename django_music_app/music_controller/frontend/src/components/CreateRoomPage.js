import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Material UI Imports
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function withRouter(Component) {
  return function Wrapper(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class CreateRoomPage extends Component {
  defaultVotes = 2;
  constructor(props) {
    super(props);
    this.state={
        guestCanPause:true,
        votesToSkip:this.defaultVotes,
    };
    this.handleRoomCreateButton = this.handleRoomCreateButton.bind(this);
    this.handleVotesChange = this.handleVotesChange.bind(this);
    this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
  }
  handleVotesChange(e){
    this.setState({
        votesToSkip: e.target.value,
    });
  }
  handleGuestCanPauseChange(e){
    this.setState({
        guestCanPause: e.target.value == "true" ? true : false,
    });
  }
  handleRoomCreateButton(){
    //console.log('Creacion de Sala',this.state)
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            votes_to_skip:this.state.votesToSkip,
            guest_can_pause:this.state.guestCanPause,
        }),
    };
    fetch("/api/create-room",requestOptions).then((response) =>
        response.json()
    ).then((data)=>this.props.navigate(`/room/${data.code}`));
  }

  render() {
    // return <p>CreateRoomPage Component</p>;
    return (
      <Grid container spacing={1}>
        <Grid size={{ xs: 12 }} align="center">
          <Typography component="h4" variant="h4">
            Create a Room
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <span align="center">Guest Control of Playback State</span>
            </FormHelperText>
            <RadioGroup 
                row 
                defaultValue="true" 
                onChange={this.handleGuestCanPauseChange}
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12 }} align="center">
            <FormControl>
                <TextField 
                    required={true} 
                    type="number"
                    onChange={this.handleVotesChange}
                    defaultValue={this.defaultVotes}
                    slotProps={{
                        input:{ 
                            min:1,
                            style: {textAlign:"center"},
                        }

                    }}
                />
                <FormHelperText>
                <span align="center">Votes required to skip song</span>
                </FormHelperText>
            </FormControl>
        </Grid>
        <Grid size={{ xs: 12 }} align="center">
            <Button color="primary" variant="contained" onClick={this.handleRoomCreateButton}>
                    Create a Room
            </Button>
        </Grid>
        <Grid size={{ xs: 12 }} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>
                    Back
            </Button>
        </Grid>
      </Grid>
    );
  }
}
export default withRouter(CreateRoomPage);