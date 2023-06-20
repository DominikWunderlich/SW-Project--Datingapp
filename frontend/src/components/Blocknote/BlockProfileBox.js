import Item from "../../theme";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import ProfileBox from "../Profile/ProfileBox";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DatingSiteAPI from "../../api/DatingSiteAPI";
import PropTypes from 'prop-types';


/**
 * Da in der konzeption die Profilbox nicht immer gleich aussieht, ist hier eine Anpassung.
 * Diese ist explizit für die Kontaktsperre ausgelegt und zeigt zusätzlich nochmal einen entfernen Knopf an.
 * Dies soll später ermöglichen andere Personen, wieder von der Kontaktsperre zu nehmen.
 */

class BlockProfileBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            blocking_id: this.props.current_profile,
            blocked_id: this.props.other_profile
        }
        this.BlockDelClicked = this.BlockDelClicked.bind(this);
    }

    static propTypes = {
        onRemoveProfile: PropTypes.func.isRequired,
    };

    /** Funktion welche ausgeführt wird, wenn der Button "Von Kontaktsperre Entfernen" gedrückt wird.
         * Bisher zu Testzwecken noch nicht weiter ausgeführt */
    BlockDelClicked(){
        DatingSiteAPI.getAPI()
            // Löschen des BlockNote-Eintrags
            .removeBlocknoteProfile(this.state.blocking_id, this.state.blocked_id)
            .then(() => {
                //console.log("Von Merkzettel entfernt");
            })
            .catch((e) =>
                this.setState({
                    error: e,
                })
            );
        //console.log("Von Kontaktsperre entfernt")
    }



    render() {


        /** Die Profilbox an sich, extra angepasst auf die gegebenheiten zur Darstellung der mit einer
         * Kontaktsperre belegten Profile */

        return(
            <Box sx={{ flexGrow: 1 }}>
              <Grid container direction="row" justifyContent="center" alignItems="stretch" container>
                <Grid item xs={10} spacing={2} >
                  <Item>
                      <ProfileBox other_profile={this.props.other_profile} ownprofile_id={this.state.blocking_id}/>
                  </Item >
                </Grid >
                <Grid item item xs={2} >
                    <button onClick={() => {
                        this.BlockDelClicked();
                        this.props.onRemoveProfile(this.props.other_profile);
                    }} style={{ height: "100%", width: "100%" ,display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#EE6457", color:"#fff", cursor: "pointer", border: "solid", borderColor: '#BDC2BF'}}
                    >
                        <PersonRemoveIcon/>
                    </button>
                </Grid>
              </Grid>
            </Box>
            )
    }
}

export default BlockProfileBox