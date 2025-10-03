import React, {Component} from 'react';
import { Link, useNavigate } from "react-router-dom";
// Material UI Imports
import { Button, Grid, Typography, TextField } from '@mui/material';

// HOC para pasar navigate a un class component
function withRouter(Component) {
  return function Wrapper(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class RoomJoinPage extends Component{
    constructor(props){
        super(props);
        this.state={
            roomCode:"",
            error:""
        };
        this.handleTextFieldChange=this.handleTextFieldChange.bind(this);
        this.roomButtonPressed=this.roomButtonPressed.bind(this);
    }
    render(){
        // return <p>RoomJoinPage Component</p>;
        return (
            <Grid container spacing={1}>
                <Grid size={{ xs: 12 }} align="center">
                    <Typography variant='h4' component="h4">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12 }} align="center">
                    <TextField 
                    error={this.state.error}
                    placeholder='Code'
                    value={this.state.roomCode}
                    helperText={this.state.error}
                    variant='outlined'
                    onChange={this.handleTextFieldChange}
                    />
                       
                </Grid>
                 <Grid size={{ xs: 12 }} align="center">
                    <Button variant='contained' color='primary' onClick={this.roomButtonPressed}>Enter Room
                    </Button>
                 </Grid>
                 <Grid size={{ xs: 12 }} align="center">
                    <Button variant='contained' color='secondary' to='/' component= {Link}>Back
                    </Button>
                 </Grid>
            </Grid>
        );
    }
    handleTextFieldChange(e){
        this.setState({
            roomCode:e.target.value,
        });
    }
    roomButtonPressed() {
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            code: this.state.roomCode,
        }),
        };
        fetch("/api/join-room", requestOptions)
        .then((response) => {
            if (response.ok) {
                this.props.navigate(`/room/${this.state.roomCode}`);
            } else {
                this.setState({ error: "Room not found." });
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
export default withRouter(RoomJoinPage);