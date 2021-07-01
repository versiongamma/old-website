import { Grid, Paper, Typography, Hidden } from '@material-ui/core'

import LinkIcon from '@material-ui/icons/Link';
import useWindowSize from './../../hooks/useWindowSize';

import { RepoType } from './../../types';


const Repo: React.FunctionComponent<RepoType> = (props) => {
  const windowSize = useWindowSize();
  const langs: { [key: string]: string } = { 'C#': 'csharp' }

  return (
    <Grid item xs={windowSize.width >= 960 ? 6 : 12} justify="center" alignItems="center">
      <Paper
        style={{
          height: 100,
          maxWidth: 444,
          paddingRight: 10
        }}
        onClick={() => window.open(props.link)}
      >
        <img
          alt={props.language}
          src={`https://cdn.jsdelivr.net/npm/programming-languages-logos/src/` +
            `${langs[props.language] !== undefined ? langs[props.language] : props.language.toLowerCase()}/` +
            `${langs[props.language] !== undefined ? langs[props.language] : props.language.toLowerCase()}.png`}
          style={{ height: 100, float: 'left', paddingRight: 10 }} />
        <Typography variant='h5'>{props.repo}<LinkIcon style={{ float: 'right' }} /></Typography>

        {/** Desktop Descriptions */}
        <Hidden smDown>
          <Typography>{props.description.length < 90 ? props.description : props.description.substring(0, 87) + '...'}</Typography>
        </Hidden>

        {/** Mobile Descriptions */}
        <Hidden mdUp>
          <Typography>{props.description.length < 65 ? props.description : props.description.substring(0, 62) + '...'}</Typography>
        </Hidden>
      </Paper>
    </Grid>
  )
}

export default Repo;