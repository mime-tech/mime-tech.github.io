import { Link, Typography, Grid } from '@mui/material';

function Copyright() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='space-evenly'
      alignItems='center'
      spacing={0}
      sx={{ minHeight: '50vh' }}
    >
      <Grid item>
        <Typography variant='body' color='text.secondary'>
          {'Copyright © '}
          <Link color='inherit' href='https://mime-tech.github.io/'>
            Mime
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Copyright;
