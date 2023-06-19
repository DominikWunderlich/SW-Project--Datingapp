import Item from "../theme";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import ProfileBox from "./ProfileBox";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import {Link} from "react-router-dom";
import ChatWindow from "./ChatWindow";
import DatingSiteAPI from "../api/DatingSiteAPI";

class SearchProfileBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            percentage: null,
        }
    }

    componentDidMount() {
        this.getMMpercentage();
    }

    getMMpercentage() {
        DatingSiteAPI.getAPI()
            .getSearchMMpercentage(this.props.current_profile)
            .then((responsePercentage) => {
                this.setState({ percentage: responsePercentage.get_percentage()})
            })
    }

    render() {

        const {
            percentage,
        } = this.state;

        return(
            // Darstellung einer Profilbox
            <Box sx={{ flexGrow: 1 }}>
              <Grid container
                direction="row" justifyContent="center" alignItems="stretch" container>
                  <Grid item xs={10} spacing={2} >
                  <Item>
                      {/*Profilbox des anderen Profils*/}
                      <ProfileBox other_profile={this.props.other_profile} ownprofile_id={this.props.current_profile} />
                  </Item >
                  </Grid >

                  <Grid item item xs={2} >
                    {/*  Ähnlichkeitsmaß  */}
                    <div style={{ height: "100%", width: "100%" ,display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#30638E", color:"#fff"}}>
                        {percentage}%
                    </div>
                  </Grid>
              </Grid >
            </Box >
            )
    }
}

export default SearchProfileBox