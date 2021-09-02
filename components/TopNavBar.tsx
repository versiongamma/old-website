import { BottomNavigation, BottomNavigationAction, Box, Grid, Button } from "@material-ui/core";
import { useContext } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import PhotoIcon from '@material-ui/icons/Photo';
import VideocamIcon from '@material-ui/icons/Videocam';
import GamesIcon from '@material-ui/icons/Games';
import InfoIcon from '@material-ui/icons/Info';
import ComputerIcon from '@material-ui/icons/Computer';

import DarkModeToggle from "./DarkModeToggle";
import { DarkMode } from './../pages/_app';


type Props = {
  section: number
}

const TopNavBar: React.FunctionComponent<Props> = (props) => {
  // @ts-ignore
  const [darkMode] = useContext(DarkMode);

  return (
    <>
      <Box style={{ margin: 30 }}>
        <Grid container>

          <Grid item xs={6}>
            <Image src={darkMode ? 'https://i.imgur.com/K1uwmfH.png' : 'https://i.imgur.com/mlsob0a.png' } width={330} height={104} />
          </Grid>


          <Grid item xs={6}>
            <Grid container justifyContent='flex-end' alignItems='center' spacing={2}>
              {[['About', '/'], ['Software', '/software'], ['Game Design', '/game'], ['Photos', '/photo'], ['Videos', '/video']].map((section, i) => (
                <Grid item key={i}>
                  <Link href={section[1]} passHref>
                    <Button color={i === props.section ? 'primary' : 'inherit'} style={{ fontSize: 20 }}>{section[0]}</Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <DarkModeToggle />
    </>
  )
}

export default TopNavBar;