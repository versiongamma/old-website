import { Typography, Container, Grid, Card, CardMedia, CardHeader, CardContent, Fade } from "@material-ui/core";
import Image from 'material-ui-image';
import { useEffect, useState } from "react";

import image from './../../img/DSCF4873.jpg';

function importAll(r) { return r.keys().map(); }
const images = importAll(require.context('./../../img/', false, /\.(png|jpe?g|svg)$/));

export default function Photos(props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        images.map(image => console.log(image));
        console.log(image)
    }, []);

    return (
        <Fade in={visible}>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    {images.map(img => (
                        <Grid item xl={4}>
                            <Card style={{ minWidth: 500, margin: 20 }}>
                                <CardMedia
                                    style={{ height: 0, paddingTop: '56.25%' }}
                                    image={img}
                                />
                            </Card>
                        
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Fade>
    );
}