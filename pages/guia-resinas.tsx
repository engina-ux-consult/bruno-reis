import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ArrowForward, Home, Instagram, LinkedIn, Output, YouTube, ArrowBack, Bolt } from '@mui/icons-material';
import { Button, Icon } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';
 function guiaResinas() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);


  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  const  [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {
        loading ? (
          <Grid style={{ width: '100%', height: '100vh', textAlign: 'center', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src="../imgs/logo-sembg.svg"/>
          </Grid>
        ) : (
          <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      {/*Toolbar Horizontal*/}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${'110'}px)`, ml: `${'110'}px` ,background: '#FFFFFF', boxShadow: 'none'}}
      >
        <Toolbar>
        <Link href="/dashboard" passHref>
            <Button style={{ color: "#000000", float: "left"}} startIcon={<ArrowBack />}/>
        </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000' }}
          >
            Guia completo de resinas compostas
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000' }}
          >
           Conteúdo exclusivo
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge>
                <Bolt style={{ color: "#382B57" }}/>
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/*Toolbar Vertical*/}
      <Drawer
        sx={{
          width: '110px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '88px',
            boxSizing: 'border-box',
            background: '#382B57',
            alignItems: 'center'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img src="../imgs/Vector.svg" style={{ width: '40px', height: '64px', marginBottom:'40px', marginTop:'16px'}}/>
        <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
        </IconButton>
        <Link href="/dashboard" passHref>
          <Button style={{ color: "#FFFFFF"}} startIcon={<Home />}/>
        </Link> 
        <Link href="/" passHref>
          <Button style={{ color: "#FFFFFF", position: 'absolute', bottom: '0'}} startIcon={<Output />}/>
        </Link>  
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <img src="../imgs/bg-resinas.jpg"  style={{width: "100%",height: "300px"}} alt="brand" /> 
      </Box>
    </Box>
        )}
    </>
  );
}
export default guiaResinas