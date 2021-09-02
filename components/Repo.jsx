import { Paper, Typography, Box } from "@material-ui/core";
import colours from '../data/colours.json';

console.log(colours)

const Repo = (props) => {
  return (
    <Paper style={{ textAlign: 'center', paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10, maxWidth: 400 }}>
      <Typography variant='h6'>{props.repo}</Typography>
      <br />
      <Typography>{props.description.length < 100 ? props.description : props.description.substring(0, 100) + '...'}</Typography>
      <br />

      <Box style={{ textAlign: 'left' }}>
        <div style={{
          height: 10,
          width: 10,
          margin: 8,
          backgroundColor: colours[props.language],
          borderRadius: 20,
          float: 'left'
        }} />
        <Typography>{props.language}</Typography>
      </Box>
    </Paper>
  );
}

export default Repo;