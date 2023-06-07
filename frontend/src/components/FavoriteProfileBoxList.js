import Item from "../theme";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FavoriteProfileBox from "./FavoriteProfileBox";
import React from "react";

/**
 * Dies ist eine  Seite, zum darstellen mehrerer FavoriteProfileBoxen innerhalb eines weiteren Grids.
 * Damit dies dann nicht mehr innerhalb der App.js geschehen muss und die App.js dadurch übersichtlicher bleibt.
 */

class FavoriteProfileBoxList extends React.Component{

    render() {

        // const für die Anzahl der anzuzeigenden Profile innerhalb der Merkliste
        const count = 3;

        // Methode zur Darstellung einer FavoriteProfileBox
        const Listing = Array(count).fill(null).map((item, index) => (
            <Grid item xs={12} key={index}>
                <Item>
                    <FavoriteProfileBox/>
                </Item >
            </Grid >
        ));


        return(
            <div>
                <h2> Hier ist dein Merkzettel: </h2>

                <Box sx={{ width: {lg: '50%', md: '70%', sm: '80%'},  margin: '0 auto'}} >
                  <Grid item container spacing={2}
                    justifyContent="center">
                      {Listing}
                  </Grid >
                </Box >

            </div>
        )
    }

}

export default FavoriteProfileBoxList