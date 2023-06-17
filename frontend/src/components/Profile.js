/** Die verschiedenen für Profile.js benötigten Imports*/
import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from "../theme";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import {Button} from "@mui/material";
import DatingSiteAPI from "../api/DatingSiteAPI";
import OptionsOtherProfile from "./OptionsOtherProfile";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BlockIcon from "@mui/icons-material/Block";


//** Dies soll ein Profil darstellen. Einerseits das eigene und andererseits ein anderes mögliches Profil, welches
// sich ein User anschaut. Hierbei werden nur die Profildaten dargestellt und keine weiteren Daten, welche ein User
// zum Bearbeiten oder zur Interaktion mit anderen Usern eventuell benötigt. Diese Funktionen sind bereits in
// anderen Komponenten integriert (OptionsOtherProfile.js bzw. OptionsOwnProfile.js).
// , dies sollte einem User später angezeigt werden, wenn er ein anderes */

class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            isCurrentUser: true,
        }
    }

    componentDidMount() {
        const currentUser = this.props.user.uid;
        let isCurrentUser = false;
        if (currentUser === this.props.user.uid) {
            isCurrentUser = true;
        }

        this.getSelectedProperties();
    }



    getSelectedProperties() {
      DatingSiteAPI.getAPI()
        .getInfoObjects(profile_id)
        .then((responseInfoObjects) => {
          const selectedProperties = {};

          for (const key in responseInfoObjects) {
            if (responseInfoObjects.hasOwnProperty(key)) {
              const infoObject = responseInfoObjects[key];
              const charId = infoObject.char_id;
              const charValue = infoObject.char_value;

              switch (charId) {
                  case 30:
                  selectedProperties.age = charValue;
                  break;
                case 10:
                  selectedProperties.firstName = charValue;
                  break;
                case 40:
                  selectedProperties.gender = charValue;
                  break;
                case 70:
                  selectedProperties.hair = charValue;
                  break;
                case 50:
                  selectedProperties.height = charValue;
                  break;
                case 20:
                  selectedProperties.lastName = charValue;
                  break;
                case 60:
                  selectedProperties.religion = charValue;
                  break;
                case 80:
                  selectedProperties.smoking = charValue;
                  break;

                default:
                  break;
              }
            }
          }

          this.setState(selectedProperties);
        });
    }


    render() {

        const {
            age,
            lastName,
            firstName,
            gender,
            hair,
            height,
            religion,
            smoking,
            currentUser,
        } = this.state

        return (
            <div>
             <p></p>
                <Box sx={{ width: {md: '50%', sm: '60%'} , margin: '0 auto'}}>
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={1} sx={{ alignItems: 'stretch' }}>
                        <Item>
                            <Grid container direction="row" justifyContent="center" alignItems="strech">
                                <Grid md={4} xs={7} spacing={3}>
                                    Vorname:
                                </Grid>
                                <Grid md={8} xs={7} spacing={3}>
                                    <p>{firstName}</p>
                                </Grid>
                            </Grid >
                        </Item>
                         <Item >
                            <Grid container direction="row" justifyContent="center" alignItems="strech" >
                                <Grid md={4} xs={7} spacing={2}>
                                    Nachname:
                                </Grid>
                                <Grid md={8} xs={7} spacing={2}>
                                    <p>{lastName}</p>
                                </Grid>
                            </Grid >
                        </Item>
                        <Item >
                            <Grid container direction="row" justifyContent="center" alignItems="strech" >
                                <Grid md={4} xs={7} spacing={2}>
                                    Alter:
                                </Grid>
                                <Grid md={8} xs={7} spacing={2}>
                                    <p>{age}</p>
                                </Grid>
                            </Grid >
                        </Item>
                        <Item >
                            <Grid container direction="row" justifyContent="center" alignItems="strech" >
                                <Grid md={4} xs={7} spacing={2}>
                                    Geschlecht:
                                </Grid>
                                <Grid md={8} xs={7} spacing={2}>
                                    <p>{gender}</p>
                                </Grid>
                            </Grid >
                        </Item>
                        <Item>
                            <Grid container direction="row" justifyContent="center" alignItems="strech" >
                                <Grid md={4} xs={7} spacing={2}>
                                    Körpergröße:
                                </Grid>
                                <Grid md={8} xs={7} spacing={2}>
                                    <p>{height}cm</p>
                                </Grid>
                            </Grid >
                        </Item>
                        <Item >
                            <Grid container direction="row" justifyContent="center" alignItems="strech" >
                                <Grid md={4} xs={7} spacing={2}>
                                    Religion:
                                </Grid>
                                <Grid md={8} xs={7} spacing={2}>
                                    <p>{religion}</p>
                                </Grid>
                            </Grid >
                        </Item>
                        <Item>
                            <Grid container direction="row" justifyContent="center" alignItems="strech" >
                                <Grid md={4} xs={7} spacing={2}>
                                    Haarfarbe:
                                </Grid>
                                <Grid md={8} xs={7} spacing={2}>
                                    <p>{hair}</p>
                                </Grid>
                            </Grid >
                        </Item>
                        <Item>
                            <Grid container direction="row" justifyContent="center" alignItems="strech" >
                                <Grid md={4} xs={7} spacing={2}>
                                    Raucher:
                                </Grid>
                                <Grid md={8} xs={7} spacing={2}>
                                    <p>{smoking}</p>
                                </Grid>
                            </Grid >
                        </Item>
                        {!currentUser && (
                        <Item>
                          <Box sx={{ flexGrow: 1 }}>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="strech"
                            >
                              <Grid item md={2} xs={4} spacing={2}>
                                <button
                                  onClick={this.PersonSaved}
                                  style={{
                                    height: "100%",
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#2ec43d",
                                    color: "#fff",
                                    cursor: "pointer",
                                    border: "solid",
                                    borderColor: "#BDC2BF",
                                  }}
                                >
                                  <BookmarkAddedIcon />
                                </button>
                              </Grid>
                              <Grid item md={2} xs={4} spacing={2}>
                                <button
                                  onClick={this.PersonBlocked}
                                  style={{
                                    height: "100%",
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#e63946",
                                    color: "#fff",
                                    cursor: "pointer",
                                    border: "solid",
                                    borderColor: "#BDC2BF",
                                  }}
                                >
                                  <BlockIcon />
                                </button>
                              </Grid>
                            </Grid>
                          </Box>
                        </Item>
                      )}
                    </Stack>
                </Box>
            </div>
        )
    }
}



export default Profile