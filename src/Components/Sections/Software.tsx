import { Container, Fade, Grid } from '@material-ui/core'
import { useEffect, useState } from 'react';

import { RepoType } from './../../types';
import Repo from '../Elements/Repo';

const Software: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const [repos, setRepos] = useState<RepoType[]>();

  useEffect(() => {
    fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=versiongamma')
      .then(res => res.json())
      .then(json => { setRepos(json) });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Fade in={visible} mountOnEnter unmountOnExit timeout={700}>
        <Container maxWidth="md" style={{ paddingTop: 40 }}>
          <Grid container spacing={3}>
            {repos !== undefined ?
              repos.map((repo, i) => (
                <Repo {...repo} />
              )) : <></>}
          </Grid>
        </Container>
      </Fade>
    </>
  );
}

export default Software;