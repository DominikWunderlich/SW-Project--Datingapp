import Item from "../../theme";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import ProfileBox from "../Profile/ProfileBox";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import {Link} from "react-router-dom";
import ChatWindow from "../../pages/ChatWindow";

class ChatProfileBox extends React.Component{

    newChat = () => {
        // Ausgabe zum Testen, ob das eigene Profil sowie das der anderen Person richtig übergeben und erkannt wird.
        console.log("Neues Chat-Fenster von eigenem Profil", this.props.current_profile, "mit dem Profil", this.props.other_profile,".")
    };

    render() {

        return(
            // Darstellung einer Profilbox beim Chat
            <Box sx={{ flexGrow: 1 }}>
              <Grid container
                direction="row" justifyContent="center" alignItems="stretch" container>
                <Grid item xs={10} spacing={2} >
                  <Item>
                      {/*Profilbox der anderen Person*/}
                      <ProfileBox other_profile={this.props.other_profile} ownprofile_id={this.props.current_profile}/>
                  </Item >
                </Grid >
                    <Grid item item xs={2} >
                    {/*Verlinkung zum ChatWindow mit der anderen Person    */}
                    <Link to={`/ChatWindow/${this.props.current_profile}/${this.props.other_profile}`}>
                        <button onClick={this.newChat} style={{ height: "100%", width: "100%" ,display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#6A7285", color:"#fff", cursor: "pointer", border: "solid", borderColor: '#BDC2BF'}}>
                            <ChatBubbleIcon/>
                        </button>
                    </Link>
                    </Grid>
              </Grid >
            </Box >
            )
    }
}

export default ChatProfileBox