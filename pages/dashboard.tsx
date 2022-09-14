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
import { ArrowForward, Home, Instagram, LinkedIn, Output, YouTube } from '@mui/icons-material';
import { Button, Icon } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';
import ST from './styles';
 function Dashboard() {
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
          <div>
            <ST/>
            <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      {/*Toolbar Horizontal*/}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${'110'}px)`, ml: `${'110'}px` ,background: '#FFFFFF', boxShadow: 'none'}}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000' }}
          >
            Olá, Fulano
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000' }}
          >
           Siga as redes sociais
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge>
                <Instagram style={{ color: "#382B57" }}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge >
                <YouTube style={{ color: "#382B57" }}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <LinkedIn style={{ color: "#382B57" }}/>
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
        <Grid item xs={12} sm={6} style={{borderRadius:'0.5rem', color:'white', backgroundColor: '#382B57',width: '100%', height: '18.50rem', objectFit: 'cover'}}>
          <Grid style={{position: "absolute",margin: '56px 32px'}}>
            <Typography  style={{width: '365px',height: '120px',fontStyle: 'normal',fontWeight: '600',fontSize: '32px',lineHeight: '40px'}}>
              Plataforma exclusiva para compartilhamento de conteúdos
            </Typography> 
            <Typography style={{width: '365px',height: '48px',fontStyle: 'normal',fontWeight: '400',fontSize: '16px',lineHeight: '30px'}} paragraph>
              Aqui você encontra os melhores conteúdos e conhecimentos do mundo da odontologia.
            </Typography>  
            </Grid>
              <img src="../imgs/logo-trans.png"  style={{float: "right" ,width: "319px",height: "288px",left: "969px",top: "96px", margin: '6px 120px'}} alt="brand" /> 
        </Grid>
        <Typography variant='subtitle1' style={{fontWeight: '600', fontSize: '24px'}} marginTop={'32px'} marginBottom={'32px'}>
          Conteúdos
        </Typography>
        <Card sx={{ maxWidth: 397 }}>
      <CardMedia
        component="img"
        alt="Guia Resinas"
        height="264"
        width="397"
        image="../imgs/guia-resinas.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Guia completo de resinas compostas
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Este conteúdo foi desenvolvido para auxiliar cirurgiões-dentistas no momento de escolha de uma resina composta.
        </Typography>
      </CardContent>
      <CardActions>
      <Link href="/guia-resinas" passHref>
        <Button variant="contained" className='Button' endIcon={<ArrowForward />}>Ler conteúdo</Button>
      </Link>
      </CardActions>
    </Card>
      </Box>
    </Box>
          </div>
          
        )}
    </>
  );
}
export default Dashboard