import { Container, makeStyles,Typography } from '@material-ui/core'
import React from 'react'
import Carrusel from "./Carrusel";


const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner2.jpg)",
      },
      bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
      },
      tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
}))
const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Plok",
            }}
          >
            Morlako
          </Typography>
          <Typography
            variant="subtitle1 "
            style={{
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            No somos una Empresa. Somos toda una Comunidad !!!
          </Typography>

                </div>
                <Carrusel/>
            </Container>
        </div>
    );
        
    
}

export default Banner
