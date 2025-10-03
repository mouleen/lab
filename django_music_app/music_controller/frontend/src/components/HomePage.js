import React, {Component} from 'react';
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router,Switch,Route,Link,Redirect,Routes } from "react-router-dom";
import Room from './Room';

import { Button, ButtonGroup , Grid, Typography, TextField } from '@mui/material';


export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.setState={
            roomCode:null,
        }
    }
    async componentDidMount(){
        fetch('/api/user-in-room')
        .then((response)=>response.json())
        .then((data)=> {
            this.setState({
                roomCode:data.code,
            });
        });
    }

    renderHomePage(){
        return (
            <Grid container spacing={1}>
                <Grid size={{ xs: 12 }} align="center">
                    <Typography variant='h3' component="h4">
                        House Party
                    </Typography>
                </Grid> 
                <Grid size={{ xs: 12 }} align="center">
                    <ButtonGroup disableElevation variant='contained' color='primary'>
                        <Button color="primary" to="/join" component={Link}>
                            Join a Room
                        </Button>
                        <Button color="secondary" to="/create" component={Link}>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid> 
            </Grid> 
        )
    }

    render(){
         return (
             <Router>
                  <Routes>
                    <Route path='/join' element={<RoomJoinPage />} />
                    <Route path='/create' element={<CreateRoomPage />} /> 
                    <Route path='/room/:roomCode' element={<Room />} /> 
                    {/* <Route exact path='/' element={<p>HomePage Route</p>} /> */}
                    <Route exact path='/' element={this.renderHomePage()} />
                    
                 </Routes> 
             </Router>
         );
    //     return (
    //         <>
    //             <p>Homepage Component Name={this.props.name}</p>
    //             <RoomJoinPage />
    //             <CreateRoomPage />
    //         </>
    // );
    }
}
