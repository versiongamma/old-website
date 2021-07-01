import { Container, Fade, Grid } from '@material-ui/core'
import { useEffect, useState } from 'react';

import { RepoType } from './../../types';
import Repo from '../Elements/Repo';

const Software: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const [repos, setRepos] = useState<RepoType[]>();

  useEffect(() => {
    setVisible(true);

    fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=versiongamma')
      .then(res => res.json())
      .then(json => { setRepos(json) });
  }, []);

  return (
    <Fade in={visible}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {repos !== undefined ?
            repos.map((repo, i) => (
              <Repo {...repo}/>
            )) : <></>}
        </Grid>
      </Container>
    </Fade>
  );
}

export default Software;