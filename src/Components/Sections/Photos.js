import { Container, Grid, Card, CardMedia, Fade } from "@material-ui/core";
import { useEffect, useState } from "react";

import image from './../../img/DSCF4873.jpg';

export default function Photos(props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <Fade in={visible}>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xl={4}>
                        <Card style={{ minWidth: 500, margin: 20 }}>
                            <CardMedia
                                style={{ height: 0, paddingTop: '56.25%' }}
                                image={image}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Fade>
    );
}