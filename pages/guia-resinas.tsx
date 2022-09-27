{/* IMPORT */}
import Head from 'next/head';
import React, {useState, useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ArrowForward, Home, Instagram, LinkedIn, Output, YouTube, ArrowBack, Bolt, } from '@mui/icons-material';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Button, Icon } from '@mui/material';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import ST from './styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import Lottie from 'react-lottie';
import * as location from "../assets/splash.json";
import Axios from 'axios';
import { useRouter } from 'next/router';

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#topo');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}



interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}




 function GuiaResinas() {

const router = useRouter()

// onCopy
const copyHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
  event.preventDefault();
  return false;
};
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
const [data, setData] = useState([]);
const [loading, setloading] = useState(false);
const [completed, setcompleted] = useState(undefined);

useEffect(() => {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        setloading(true);
      });
  }, 2000);
}, []);

useEffect(() => {
  Axios.get("http://localhost:3001/userAuth", {
    headers: {
      "x-access-token": localStorage.getItem("token") as string,
    }
  }).then((response) => {
    if(!localStorage.getItem("token")){
      console.log({msg: "Erro de Auth"});
      router.push('/');
    } else{
        console.log({msg: response});
    }
  })
}, []);

{/*CSS*/}
const purple = {
  color: "white",
  backgroundColor: "#382B57",
  padding: "1.5rem",
  borderRadius: "0.5rem",
  marginBottom: '4rem'

};
const gray = {
  backgroundColor: "#F1F1F1",
  padding: "1rem",
  borderRadius: "0.5rem"
};

const indice = ['3M','BIODINÂMICA','DENTSPLY','FGM','GC','ORALTECH','IVOCLAR','KERR','KULZER','SDI','SHOFU','SMARTDENT','TOKUYAMA','ULTRADENT','VOCO'];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

return (
  <>
  {!loading ? (
    <Lottie options={defaultOptions1} style={{width: '10rem',height: '10rem',marginTop:'20%'}} />
) : (
    <div>
      <ST/>
      <Head>
          <title>Iknow - Conteúdo</title>  
      </Head>
          <Box onCopy={copyHandler} sx={{ display: 'flex'}} >
      <CssBaseline />

      <div className='inv'>
        {/*Toolbar Horizontal*/}
          <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${'85'}px)`, ml: `${'110'}px` ,background: '#FFFFFF', boxShadow: 'none'}}
          >
            <Toolbar>
            <Link href="/dashboard" >
                <Button style={{ color: "#000000", float: "left"}} startIcon={<ArrowBack />}/>
            </Link>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, color: '#000000', fontFamily: 'Open Sans, sans-serif' }}
              >
                Guia completo de resinas compostas [Conteúdo exclusivo]
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"

                  aria-haspopup="true"

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
              width: '5.5rem',
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: '5.5rem',
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
    
                  aria-haspopup="true"

                  color="inherit"
                >
            </IconButton>
            <Link href="/dashboard" >
              <Button style={{ color: "#FFFFFF"}} startIcon={<Home />}/>
            </Link> 
            <Link href="/" >
              <Button style={{ color: "#FFFFFF", position: 'absolute', bottom: '0', marginLeft: '-1.5rem' , marginBottom: '3rem'}} startIcon={<Output />}/>
            </Link>  
          </Drawer>
      </div>

      <div className='mob'>
        <AppBar position="fixed" open={open} style={{background: '#382B57'}}>
          <Toolbar>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
             <img src="../imgs/Vector.svg" style={{ width: '40px', height: '64px'}}/>
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '16.125rem',
              padding: '1rem',
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader style={{}}>
            <IconButton onClick={handleDrawerClose} style={{color:'#382B57'}}>
              {theme.direction === 'rtl' ? <CloseOutlinedIcon /> : <CloseOutlinedIcon />}
            </IconButton>
          </DrawerHeader>
          
            <IconButton
                  size="small"
                  aria-label="show more"

                  aria-haspopup="true"

                  color="inherit"
                >
            </IconButton>
            <List style={{flexDirection: 'column', alignItems: 'center'}}>
              <Link underline="none" href="/dashboard" >
                <Button  style={{ color: "#382B57",textTransform: 'none', fontFamily: 'Open Sans, sans-serif'}} startIcon={<HomeOutlinedIcon />}> Dashboard</Button>
              </Link>  
            </List>
            <List style={{flexDirection: 'column', alignItems: 'center'}}>
              <Link underline="none" href="/" >
                <Button style={{ color: "#382B57",textTransform: 'none', fontFamily: 'Open Sans, sans-serif'}} startIcon={<Output />}> Sair</Button>
              </Link>      
            </List>
        </Drawer>
        <AppBar
            sx={{background: '#FFFFFF', boxShadow: 'none', color: '#000000', marginTop:'70px'}}
          >
            <Toolbar>
            <Link href="/dashboard" >
                <Button style={{ color: "#000000", float: "left"}} startIcon={<ArrowBack />}/>
            </Link>
              <Typography
                variant="h6"
                noWrap
                component="div"  
                style={{fontFamily: 'Open Sans, sans-serif'}}
              >
                Guia completo de resinas compostas [Conteúdo exclusivo]
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
          </AppBar>
      </div>

      <Box component="main" sx={{bgcolor: 'background.default'}}>
        <Toolbar />
        <img id='topo' src="../imgs/guia-resinas/bgresina.jpg"  style={{width: "100%"}} alt="brand" /> 
        { /* ÍNDICE */ }
          <>
            <Card className='inv' style={{float:'left', borderRadius:'0.5rem', gap:'1rem', padding:'1rem', top: '6rem',position: 'sticky', width: '14.063rem', color: '#A09E9E', marginLeft:'2rem'}}>
              <CardContent >
                <Typography className='indice' style = {{fontFamily: 'Open Sans, sans-serif'}}>
                  ÍNDICE    
                  <ol>
                    <a href='#3M'><li>3M</li></a>
                    <a href='#BIODINÂMICA'><li>BIODINÂMICA</li></a>
                    <a href='#DENTSPLY'><li>DENTSPLY</li></a>
                    <a href='#FGM'><li>FGM</li></a>
                    <a href='#GC'><li>GC</li></a>
                    <a href='#ORALTECH'><li>ORALTECH</li></a>
                    <a href='#IVOCLAR'><li>IVOCLAR</li></a>
                    <a href='#KERR'><li>KERR</li></a>
                    <a href='#KULZER'><li>KULZER</li></a>
                    <a href='#SDI'><li>SDI</li></a>
                    <a href='#SHOFU'><li>SHOFU</li></a>
                    <a href='#SMARTDENT'><li>SMARTDENT</li></a>
                    <a href='#TOKUYAMA'><li>TOKUYAMA</li></a>
                    <a href='#ULTRADENT'><li>ULTRADENT</li></a>
                    <a href='#VOCO'><li>VOCO</li></a>
                  </ol>
                </Typography>
              </CardContent>
            </Card>
          </>
        { /* UP BUTTON */ }
          <>
          <ScrollTop>
        <Fab size="small" aria-label="scroll back to top" style={{ color: '#FFFFFF', backgroundColor: '#382B57' }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
          </>

        { /* CONTEUDO */ }
          <>
            <Grid id='pl' className='content' style={{ maxWidth: '1088px',gap: '2rem', marginLeft: 'auto', marginRight: 'auto',color: "#535353",fontFamily: "Open Sans, sans-serif"}}>
            { /* Introdução */ }
              <> 
                <h1>Guia completo de resinas compostas</h1>
                <p style={gray}>Este conteúdo foi desenvolvido para auxiliar cirurgiões-dentistas no momento de escolha de uma resina composta. Para que funcione como um guia, iremos relembrar a seguir, alguns conceitos importantes (composição, cores e opacidades) das resinas compostas:</p>
                <h2>Entendendo a composição</h2>
                <p>As resinas compostas são formadas por três componentes principais:matriz orgânica altamente cruzada reforçada pela dispersão de partículas de carga de vidro, sílica, cristalina, óxidos metálicos ou mesmo resina ou combinações entre estas ou ainda de fibras curtas, que são aderidas à matriz resinosa por um agente silânico de união.Os esquemas a seguir, resumem a função de cada componente principal:</p>
                <img src="../imgs/guia-resinas/legenda.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Matriz orgânica:</h2>
                <p>É baseada em uma mistura de monômeros dimetacrilato aromáticos e/ou alifáticos:<br/>
                  Os principais monômeros utilizados nas resinas compostas e suas respectivas características:</p>
                <img src="../imgs/guia-resinas/udma.jpg"  style={{width: "100%"}} alt="brand" />
                <p>Monômeros que são adicionados para melhorar a manipulação e suas respesctivas características:</p>
                <img src="../imgs/guia-resinas/tegdma.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Carga inorgânica:</h2>
                <p>Vários tipos de carga mineral transparentes são usados para fortalecer e reforçar compósitos, assim como diminuir a contração de polimerização e a expansão térmica (geralmente em torno de 30 a 70% em volume ou 50 a 80% em peso de um compósito).<br/>
                  Entre eles estão os chamados de “vidros moles” e “vidros duros” de borossilicato, quartzo fundido, silicato de alumínio, silicato de lítio-alumínio (beta eucriptita, que tem coeficiente de expansão térmica linear negativo), fluoreto de itérbio e vidros de bário (Ba), estrôncio (Sr), zircônio (Zr) e zinco (Zn). Os últimos 5 tipos também conferem radiopacidade em virtude de seus átomos de metais pesados.<br/>
                  O alto conteúdo de carga reduz a contração de polimerização proporcionalmente ao volume de carga. Embora a contração varie de uma marca comercial para outra, os valores tipicamente ficam em torno de 1% até 4% em volume.</p>
                <p style={gray}>Partículas maiores, como nas resinas macroparticuladas, o volume de carga é menor, pois é difícil que as partículas se encaixem e preencham todos os espaços. Quando passamos para resinas que contém partículas menores, sendo elas híbridas ou não, todos os espaços passam a ser melhores preenchidos, garantindo um excelente volume de carga e, consequentemente, uma maior resistência.</p>
                <h2>Ou seja:</h2>
                <img src="../imgs/guia-resinas/ouseja.jpg"  style={{width: "100%"}} alt="brand" />
                <p>A carga é a principal responsável por diversas características principais das resinas. Por isso, as resinas são classificadas de acordo com o tamanho das suas partículas:</p>
                <img src="../imgs/guia-resinas/resinasparticulas.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Agente de união:</h2>
                <p>É essencial que as partículas de carga sejam aderidas à matriz resinosa. Isso permite que a matriz polimérica, mais flexível, transfira tensões para as partículas de carga, que são mais rígidas. A união química entre essas duas fases é dada pelo agente de união silânico que é uma molécula bifuncional com atividade de superfície que se liga ás partículas de carga e também copolimeriza com os monômeros que formam a matriz resinosa.<br/>
                  Um agente de união corretamente aplicado também pode contribuir para melhores propriedades físicas e químicas e inibir a lixiviação através da prevenção da penetração de água ao longo da interface partícula-resina. Apesar de titanatos e zirconatos poderem ser usados como agentes de união, organo-silanos (como γ-metacriloxipropiltrimetoxi silano) são mais comumente usados.</p>
                <p style={gray}>Além desses componentes principais, as resinas compostas contêm vários outros componentes, incluindo sistemas ativador-iniciador, necessários para converter a resina de uma pasta maleável em uma restauração rígida e durável. Pigmentos são adicionados para conferir cor próxima do dente. Absorventes ultravioleta (UV) e outros aditivos são incorporados para melhorar a estabilidade de cor, inibidores de polimerização estendem o período de validade e aumentam o tempo de trabalho, especialmente para resinas quimicamente ativadas. Outros componentes podem ser incluídos para melhorar o desempenho, a aparência e a durabilidade.</p>
                <img src="../imgs/guia-resinas/agenteuniao.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Indicações das resinas:</h2>
                <p>As resinas encontradas hoje no mercado possuem indicação universal, podendo ser utilizadas em todos os tipos de restauração em áreas de estética ou de demanda por resistência (dentes anteriores ou posteriores).
                <br/><br/>
                As exceções para essa regra são as resinas híbridas e microparticuladas:
                <br/><br/>
                Híbridas: é interessante evitar o uso em áreas estéticas, principalmente como última camada de facetas de resina, porque são resinas mais difíceis de polir e de manter o polimento.
                <br/><br/>
                Microparticuladas: por não possuírem grande quantidade de carga, não devem ser utilizadas em áreas de concentração de forças, como em dentes posteriores ou na face palatina de dentes anteriores.
                <br/><br/>
                As demais resinas, seja micro-híbrida, nano-híbrida ou nanoparticulada, podem ser usadas em todas as situações.
                <br/><br/>
                Dessa forma, fica claro que a categoria da maior parte das resinas não interfere na sua indicação, mas podem interferir em outras características, como na técnica de polimento e manutenção.
                <br/><br/>
                REFERÊNCIA: Wobido AR, periódico científico Iknow Journal.</p>
                <img src="../imgs/guia-resinas/indicacoesresinas.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Entendendo as cores:</h2>
                <img src="../imgs/guia-resinas/matriz.jpg"  style={{width: "100%"}} alt="brand" />
                <img src="../imgs/guia-resinas/croma.jpg"  style={{width: "100%"}} alt="brand" />
                <img src="../imgs/guia-resinas/valor.jpg"  style={{width: "100%"}} alt="brand" />
                <img src="../imgs/guia-resinas/a2d.jpg"  style={{width: "100%"}} alt="brand" />
                <p style={gray}>Observação: Há variações na nomenclatura. Nem todos os fabricantes seguem essa regra do exemplo acima. O valor costuma ser descrito em primeiro ou último lugar (A2D ou DA2, por exemplo).</p>
                <h2>Entendendo as opacidades:</h2>
                <img src="../imgs/guia-resinas/opacidades.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Substratos e opacidades:</h2>
                <img src="../imgs/guia-resinas/subopatb.jpg"  style={{width: "100%"}} alt="brand" />
                <img src="../imgs/guia-resinas/subopapass.jpg"  style={{width: "100%"}} alt="brand" />
                <img src="../imgs/guia-resinas/subopaobs.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Observações:</h2>
                <p style={gray}>1: Este conteúdo apresenta a média dos preços atuais de resinas compostas de diferentes marcas comerciais. Essa média foi calculada a partir dos valores disponíveis nos sites da Dental Surya, Dental Cremer e Dental Speed.</p>
                <p style={gray}>2: Os dados sobre cada resina composta foram obtidos a partir das informações comerciais que os fabricantes oferecem em seus sites oficiais por meio de bulas, catálogos e outros materiais disponíveis.</p>        
              </>
            { /* Z1003M */ }
              <>
                <img id='3M' src="../imgs/guia-resinas/z1003m.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Classificação da partícula:</h2>
                <p>Microhíbrida</p>
                <h2>Composição:</h2>
                <p>Matriz orgânica: Bis-GMA e TEGDMA.<br/>
                  Parte inorgânica: Zircônia/Sílica com 84,5% em peso e 66% em volume.<br/>
                  Tamanho médio das partículas: 0,6 micrometros.
                </p>
                <h2>Indicação:</h2>
                <ul>
                  <li>Restaurações em dentes anteriores e posteriores (Classes I,II, III, IV e V);</li>
                  <li>Fechamento de diastemas;</li>
                  <li>Esplintagem de dentes com mobilidade.</li>
                </ul>
                <h2>Apresentação de cores e opacidades:</h2>
                <img src="../imgs/guia-resinas/apresentcores.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Aplicação clínica das opacidades:</h2>
                <img src="../imgs/guia-resinas/aplicli.jpg"  style={{width: "100%"}} alt="brand" />
                <p style={purple}>
                  <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                  Tubete com 4g: R$50,00 <br/>
                  Preço por grama: R$12,50
                </p>
              </>
            { /* Z2503M */ }
              <>
                <img src="../imgs/guia-resinas/z2503m.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Classificação da partícula:</h2>
                <p>Nanohíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: Bis-GMA, UDMA, Bis-EMA, PEGDMA e TEGDMA.<br/>
                  Matriz inorgânica (carga): Zircônia/Sílica com 81,8% em peso e 67,8% em volume.<br/>
                  Tamanho médio das partículas é de 20nm.
                </p>
                <h2>Indicação:</h2>
                <ul>
                  <li>Restaurações diretas e indiretas em dentes anteriores e posteriores (Classes I, II, III, IV e V) incluindo superfícies oclusais;</li>
                  <li>Fechamento de diastemas; confecção de núcleos de preenchimento;</li>
                  <li>Ancoragem de dentes com mobilidade (esplintagem);</li>
                  <li>Restaurações diretas e indiretas (inlays e onlays) e facetas diretas e indiretas (veneers);</li>
                  <li>Fechamento de diastemas.</li>
                </ul>
                <h2>Apresentação de cores e opacidades:</h2>
                <img src="../imgs/guia-resinas/250apre.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Aplicação clínica das opacidades:</h2>
                <img src="../imgs/guia-resinas/250apli.jpg"  style={{width: "100%"}} alt="brand" />
                <p style={purple}>
                  <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                  Tubete com 4g: R$105,00 <br/>
                  Preço por grama: R$27,00
                </p>
              </>
            { /* Z3503M */ }
              <>
                <img src="../imgs/guia-resinas/z3503m.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Classificação da partícula:</h2>
                <p>Nanoparticulada</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: Bis-GMA; UDMA; Teg-DMA; Peg-DMA e Bis-EMA.<br/>
                  Parte inorgânica (carga): Sílica e zircônia em 72,5% do peso e 55,5% em volume.<br/>
                  Tamanho médio das partículas: 0,6µm a 20µm
                </p>
                <h2>Indicação:</h2>
                <p>Aplicabilidade universal: restaurações diretas (incluindo superfícies oclusais) e indiretas (inlay, onlay e overlay), confecçãode núcleos de preenchimento e até mesmo em esplintagens, desde que, o protocolo operacional seja aplicado corretamente.</p>
                <h2>Apresentação de cores e opacidades:</h2>
                <img src="../imgs/guia-resinas/350apre.jpg"  style={{width: "100%"}} alt="brand" />
                <h2>Aplicação clínica das opacidades:</h2>
                <img src="../imgs/guia-resinas/350apli.jpg"  style={{width: "100%"}} alt="brand" />
                <p style={purple}>
                <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                  Tubete com 4g: R$250,00 <br/>
                  Preço por grama: R$63,00
                </p>
              </>
            { /* FILTEK UNIVERSAL 3M*/ }
              <>
                <img src="../imgs/guia-resinas/filtek.jpg"  style={{width: "100%"}} alt="brand" />
                  <h2>Classificação da partícula:</h2>
                  <p>Nanoparticulada</p>
                  <h2>Composição:</h2>
                  <p>
                    Matriz orgânica: AUDMA, AFM, diuretano-DMA e 1,12-dodecanoDMA. Parte inorgânica (carga): sílica não-aglomerada/não-agregada, zircônia não-aglomerada/não-agregada, aglomerados de zircônia e sílica e aglomerados de partículas nanométricas de itérbio com aproximadamente 76,5% em peso e 58,4% em volume tamanho das partículas: 100% de nanopartículas de até 100 nm
                  </p>
                  <h2>Indicação:</h2>
                  <ul>
                    <li>Restaurações diretas em dentes anteriores e posteriores (incluindo superfícies oclusais).</li>
                    <li>Confecção de núcleos de preenchimento.</li>
                    <li>Esplintagem.</li>
                    <li>Restaurações indiretas, incluindo inlays, onlays e facetas.</li>
                  </ul>
                  <h2>Apresentação de cores e opacidades:</h2>
                  <img src="../imgs/guia-resinas/filtekapre.jpg"  style={{width: "100%"}} alt="brand" />
                  <h2>Aplicação clínica das opacidades:</h2>
                  <img src="../imgs/guia-resinas/filtekapli.jpg"  style={{width: "100%"}} alt="brand" />
                  <p style={purple}>
                  <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                    Tubete com 4g: R$260,00 <br/>
                    Preço por grama: R$65,00
                  </p>
              </>
            { /* EPIC BIODINÂMICA */ }
              <>
                <img id='BIODINÂMICA' src="../imgs/guia-resinas/epic.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nanohíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz Orgânica: BisGMA ; BisEMA ; UDMA ; TEGDMA ; <br/>
                      Carga inorgânica: Vidro de borosilicato de alumínio e bário; <br/>
                      Dióxido de silício ; Silicato de Zircônio. 79% em peso e 60% em volume
                    </p>
                    <h2>Indicação:</h2>
                    <ul>
                      <li>Restaurações dentárias estéticas definitivas anteriores e posteriores;</li>
                      <li>Fixação de dentes com mobilidade</li>
                      <li>Reparos de próteses e restaurações indiretas.</li>
                    </ul>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/epicapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/epicapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$43,00 <br/>
                      Preço por grama: R$10,77
                    </p>
              </>
            { /* NEO SPECTRA DENTSPLY */ }
              <>
                <img id='DENTSPLY' src="../imgs/guia-resinas/neo.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Micro-hibrída</p>
                    <h2>Composição:</h2>
                    <p>
                      A nova tecnologia Sphere TEC® possibilita que ambas as estruturas, orgânica e inorgânica, trabalhem em harmonia, oferecendo mais força e resistência à manchas.
                    </p>
                    <h2>Indicação:</h2>
                    <ul>
                      <li>Restaurações Diretas Classe I; II; III; IV e V</li>
                      <li>Restaurações Indiretas</li>
                      <li>Facetas Diretas</li>
                      <li>Attachments Estéticos em Ortodontia</li>
                    </ul>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/neoapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/neoapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 3g: R$ 173,90 <br/>
                      Preço por grama: R$ 57,96
                    </p>
              </>
            { /* OPALLIS FGM */ }
              <>
                <img id='FGM' src="../imgs/guia-resinas/opallis.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nanohíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz orgânica: Bis-GMA (Bis-Fenol A di-Glicidil Metacrilato), BisEMA (Bis-Fenol A di-Glicidil Metacrilato etoxilado), TEGDMA (Trietileno glicol dimetacrilato), UDMA (Uretano dimetacrilato), canforquinona, co-iniciador e silano. Matriz inorgânica: vidro de bário-alumino silicato silanizado, pigmentos e sílicas. <br/>
                      O conteúdo total de carga em peso é de 78,5 a 79,8% e volume 57,0 a 58,0% de carga inorgânica.<br/>
                      Tamanho médio de partículas: 0,5 microns.
                    </p>
                    <h2>Indicação:</h2>
                    <p>Restauração direta de dentes anteriores e posteriores.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/opallisapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/opallisapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$72,32 <br/>
                      Preço por grama: R$18,08
                    </p>
              </>
            { /* VITTRA FGM */ }
              <>
                <img src="../imgs/guia-resinas/vittra.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Submicrométrica ????</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz orgânica: UDMA (Uretano Dimetacrilato) e TEGDMA (Trietileno Glicol Dimetacrilato). Matriz inorgânica: carga de zircônia, sílica. <br/>
                      Tamanho médio das partículas: 200nm <br/>
                      Conteúdo total de carga inorgânica em peso de 72% a 82% (52% a 60% em volume).
                    </p>
                    <h2>Indicação:</h2>
                    <p>Restaurações de todas as classes em dentes anteriores e posteriores</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/vittraapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/vittraapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$126,66 <br/>
                      Preço por grama: R$31,66                   
                    </p>
              </>
            { /* ESSENTIA GC */ }
              <>
                <img id='GC' src="../imgs/guia-resinas/essentia.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Na</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz
                    </p>
                    <h2>Indicação:</h2>
                    <ul>
                      <li>Indicado para restaurações anteriores e posteriores, fechamento de diastemas;</li>
                      <li>Extremamente estético;</li>
                      <li>Indicado também para facetas diretas e lentes de contato.</li>
                    </ul>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/essentiaapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/essentiaapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 2g: R$430 <br/>
                      Preço por grama: R$215
                    </p>
              </>
            { /* MICERIUM ENAMEL PLUS HRI ORALTECH*/ }
              <>
                <img id='ORALTECH' src="../imgs/guia-resinas/micerium.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nanohíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Composição CARGA (80% DE PESO - 63% VOLUME) - Óxido de Zircónio Nano tratamento superfície com alto índice de refracção (12% de peso) - Novo tipo de vidro com carga com alto índice de refracção (68% de peso)
                    </p>
                    <h2>Indicação:</h2>
                    <p>Restauração de dentes anteriores e posteriores.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/miceriumapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/miceriumapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$492 <br/>
                      Preço por grama: R$123
                    </p>
              </>
            { /* EMPRESS DIRECT IVOCLAR */ }
              <>
                <img id='IVOCLAR' src="../imgs/guia-resinas/empress.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nanohíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz orgânica: composta de dimetacrilatos <br/>
                      Matriz inorgânica: vidro de bário, trifluoreto de itérbio, óxido misto, dióxido de silício e copolímero.<br/>
                      Sendo, 75-79% em peso ou 52-59% em volume (opalescente 60,5% em peso ou 45% em volume).<br/>
                      O tamanho médio de partícula é de 550 nm.
                    </p>
                    <h2>Indicação:</h2>
                    <ul>
                      <li>Restaurações anteriores e posteriores</li>
                      <li>Restaurações do colo do dente</li>
                      <li>Correções das posições dos dentes e da forma dos dentes (por exemplo, fechamento de diastemas, fechamento de “triângulos pretos” interdentais, alongamento da borda incisal)</li>
                      <li>Facetas diretas</li>
                    </ul>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/empressapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/empressapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 3g: R$328,90 <br/>
                      Preço por grama: R$109,63
                    </p>
              </>
            { /* TETRIC IVOCLAR*/ }
              <>
                <img src="../imgs/guia-resinas/tetric.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nanohíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz orgânica: dimetacrilatos (19-20% em peso). <br/>
                      Matriz inorgânica: vidro de bário, trifluoreto de itérbio, óxido misto e copolímeros (80-81% em peso).<br/>
                      O conteúdo total de cargas inorgânicas é de 55–57 vol.%.<br/>
                      O tamanho de partícula de cargas inorgânicas está entre 40 nm e 3000 nm
                    </p>
                    <h2>Indicação:</h2>
                    <p>Todas as classes de restaurações;</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/tetricapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/tetricapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$136 <br/>
                      Preço por grama: R$39,14      
                    </p>
              </>
            { /* HARMONIZE KERR */ }
              <>
                <img id='KERR' src="../imgs/guia-resinas/harmonize.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nanohíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz orgânica: <br/>
                      Matriz inorgânica: Sílica e zircônia (81% de carga e 64,5% de volume) associadas a componentes orgânicos, iniciadores e agentes de união.<br/>
                      Carga em peso: 81%<br/>
                      Carga em volume: 64,5%<br/>
                      Tamanho das partículas: 5nm - 400nm)
                    </p>
                    <h2>Indicação:</h2>
                    <p>Dentes anteriores e posteriores.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/harmonizeapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/harmonizeapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$247,00 <br/>
                      Preço por grama: R$82,30
                    </p>
              </>
            { /* HERCULITE CLASSIC KERR */ }
              <>
                <img src="../imgs/guia-resinas/hercc.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Microhíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz orgânica: BIS-GMA, tri-etilenoglicol-dimetacrilato (resina diluente-solvente)<br/>
                      Canforoquinona (fotoiniciador), amina (ativador), pigmentos de óxido de ferro<br/>
                      Matriz inorgânica: vidro de borossilicato de alumínio, sílica Coloidal (SiO2).<br/>
                      Carga em peso: 79%.<br/>
                      Carga em volume: 59%<br/>
                      Tamanho médio das partículas: 0,6µm
                    </p>
                    <h2>Indicação:</h2>
                    <p>Restauração de dentes anteriores e posteriores. Uso direto e indireto.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/herccapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/herccapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$57,90 <br/>
                      Preço por grama: R$11,58
                    </p>
              </>
            { /* HERCULITE PRÉCIS KERR */ }
              <>
                <img src="../imgs/guia-resinas/hercp.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nanohíbrida</p>
                    <h2>Composição:</h2>
                    <p>

                    </p>
                    <h2>Indicação:</h2>
                    <p>Indicada para todas as classes de cavidade em dentes anteriores e posteriores.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/hercpapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/hercpapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$115,90 <br/>
                      Preço por grama: R$28,97
                    </p>
              </>
            { /* point 4 KERR */ }
              <>
                <img src="../imgs/guia-resinas/point.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Microhíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz orgânica: BIS-GMA, tri-etilenoglicol-dimetacrilato e EBADM<br/>
                      Carga inorgânica: dióxido de sílico, alumínio borosilicato de bário e outros.<br/>
                      Carga em peso: 77%<br/>
                      Carga em volume: 57%<br/>
                      Tamanho médio das partículas: 0,4μm
                    </p>
                    <h2>Indicação:</h2>
                    <p>Restauração de dentes anteriores e de uso direto e indireto.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/pointapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/pointapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$48,23 <br/>
                      Preço por grama: R$12,08
                    </p>
              </>
            { /* CHARISMA CLASSIC KULZER */ }
              <>
                <img id='KULZER' src="../imgs/guia-resinas/charismac.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Microhíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz orgânica: Bis-GMA<br/>
                      Carga inorgânica: vidro de bário alumínio fluoretado e partículas pré-polimerizadas.<br/>
                      Tamanhos que variam de 0,005µm a 10µm. Porcentagem de carga em volume: 61%.
                    </p>
                    <h2>Indicação:</h2>
                    <p>Restaurações anteriores e posteriores.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/charismacapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/charismacapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$62,90 <br/>
                      Preço por grama: R$15,72
                    </p>
              </>
            { /* CHARISMA DIAMOND KULZER */ }
              <>
                <img src="../imgs/guia-resinas/charismad.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nano-híbrida universal</p>
                    <h2>Composição:</h2>
                    <p>
                      Fórmula baseada no monômero TCD-DI-HEA, desenvolvido e patenteado pela Kulzer, Charisma® Diamond apresenta um sistema de carga otimizado que inclui nanopartículas especiais de sílica.
                    </p>
                    <h2>Indicação:</h2>
                    <p>Dentes anteriores e posteriores utilizando as técnicas de camada única ou de estratificação e contar com um sistema de cores que abrange todos os casos.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/charismadapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/charismadapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$149,90 <br/>
                      Preço por grama: R$37,47
                    </p>
              </>
            { /* AURA SDI */ }
              <>
                <img id='SDI' src="../imgs/guia-resinas/aura.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Microparticulada</p>
                    <h2>Composição:</h2>
                    <p>
                      <h3>Resinas de dentina: </h3>
                      Matriz orgânica: UDMA ; BisGMA ; BisEMA.<br/>
                      Matriz inorgânica: aluminossilicato de bário pré-polimerizado, dióxido de silício amorfo. <br/>
                      81% em peso, 65% em volume<br/>
                      Tamanho das partículas: 0,02 - 0,4 mícron<br/>
                      <br/>
                      <h3>Resinas de esmalte:</h3>
                      Matriz orgânica: UDMA; TEGDMA<br/>
                      Matriz inorgânica: Silica<br/>
                      51% em peso<br/>
                      Tamanho das partículas: 0,02 - 0,4 mícron
                    </p>
                    <h2>Indicação:</h2>
                    <p>Restaurações anteriores; Restaurações posteriores; Restaurações indiretas inlays, onlays e facetas; Construção de núcleo; Ferulização; Técnica sanduíche com ionômero de vidro;</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/auraapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/auraapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$134,40 <br/>
                      Preço por grama: R$33,60
                    </p>
              </>
            { /* BEAUTIFILL SHOFU */ }
              <>
                <img id='SHOFU' src="../imgs/guia-resinas/beautifill.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nanohíbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      <h3>Matriz orgânica:</h3>
                      <h3>Matriz inorgânica:</h3>
                    </p>
                    <h2>Indicação:</h2>
                    <ul>
                      <li>Restaurações diretas que requerem níveis ótimos de estética e biocompatibilidade;</li>
                      <li>Ajustes estéticos diretos;</li>
                      <li>Restaurações em Cavidades Classes I a V;</li>
                      <li>Restaurações de cáries radiculares e lesões cervicais por erosão; - Reparo de bordas incisais fraturadas;</li>
                      <li>Facetas laminadas e reconstruções de núcleos.</li>
                    </ul>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/beautifillapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/beautifillapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$243 <br/>
                      Preço por grama: R$54
                    </p>
              </>
            { /* ATOS SMARTDENT */ }
              <>
                <img id='SMARTDENT' src="../imgs/guia-resinas/atos.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nano-híbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      <h3>Matriz orgânica:</h3> BisGMA, UDMA, TEGDMA, DDDMA e BisEMA<br/>
                      <h3>Matriz inorgânica:</h3> Bário-Alumino e nanopartículas de Sílica principalmente Nano Silicato de Zircônio
                    </p>
                    <h2>Indicação:</h2>
                    <ul>
                      <li>Restaurações de dentes permanentes e deciduos, anteriores e<br/>
                          posteriores de classes I, II, III, IV e V [todas as classes]</li>
                      <li>Facetas diretas em resina composta</li>
                      <li>Colagem de fragmentos de dentes</li>
                      <li>Ancoragem de dentes (esplinta gem)</li>
                      <li>Correção da forma de dentes [Ex: conoides]</li>
                      <li>Redução ou fechamento de diastemas</li>
                      <li>Confecção de núcleos de preenchimento</li>
                      <li>Lesões cervicais não cariosas</li>
                      <li>Reparos em porcelana e/ou compósito</li>
                      <li>Restaurações indiretas, como inlays, onlays e facetas</li>
                      <li>Cimentação de peças protéticas (conforme técnica da resina termo-modificada)</li>
                    </ul>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/atosapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/atosapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$82,00 <br/>
                      Preço por grama: R$20,50
                    </p>
              </>
            { /* ESTELITE OMEGA TOKUYAMA */ }
              <>
                <img id='TOKUYAMA' src="../imgs/guia-resinas/estelite.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Supra- nanométrica</p>
                    <h2>Composição:</h2>
                    <p>
                      Matriz orgânica: 2-hydroxy propoxy, Bis-GMA, TEGDMA<br/>
                      Matriz inorgânica: silica-zirconia 82% peso, sendo 71% de volume<br/>
                      Tamanho médio das partículas de 200nm
                    </p>
                    <h2>Indicação:</h2>
                    <p>
                      Restaurações diretas anteriores e posteriores incluindo superfícies oclusais.<br/>
                      Fechamento de diastemas.<br/>
                      Reparo de porcelanas/resinas.
                    </p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/esteliteapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/esteliteapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$ 536,33 <br/>
                      Preço por grama: R$134,08
                    </p>
              </>
            { /* PALFIQUE LX5 TOKUYAMA */ }
              <>
                <img src="../imgs/guia-resinas/palfique.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Supra Nano-híbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      <h3>Matriz orgânica:</h3> Bis-GMA e TEGDMA
                      <h3>Matriz inorgânica:</h3> Silica-zirconia
                      <h3>Tamanho médio:</h3> 0,2 micrometros.
                      <h3>Concentração em peso:</h3> 82%.
                      <h3>Concentração em volume:</h3> 72%.
                    </p>
                    <h2>Indicação:</h2>
                    <p>Indicado para restauração de dentes anteriores e posteriores, todas as classes.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/palfiqueapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/palfiqueapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$302,21 <br/>
                      Preço por grama: 79,52
                    </p>
              </>
            { /* OMNICHROMA TOKUYAMA */ }
              <>
                <img src="../imgs/guia-resinas/omnichroma.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Supra Nano-híbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      <h3>Matriz inorgânica:</h3> SiO2-ZrO2 esférico 260nm
                    </p>
                    <h2>Indicação:</h2>
                    <p>
                      Restaurações diretas anteriores e posteriores incluindo superfícies oclusais.<br/>
                      Fechamento de diastemas.<br/>
                      Reparo de porcelanas/resinas.
                    </p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/omnichromaapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/omnichromaapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$295,00 <br/>
                      Preço por grama: 73,75
                    </p>
              </>
            { /* FORMA ULTRADENT */ }
              <>
                <img id='ULTRADENT' src="../imgs/guia-resinas/forma.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nano-híbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      <h3>Carga orgânica:</h3> bisfenol-A Diglicidil Dimetacrilato (Bis-GMA), Trietileno Glicol Dimetacrilato (TEGDMA), Bisfenol-A Diglicidil Dimetacrilato Etoxilado (Bis-EMA) e Uretano Dimetacrilato (UDMA).<br/>
                      <h3>Carga inorgânica:</h3> Sílica/zircônia e vidro de Bário.<br/>
                      67% de peso e 54% de volume
                    </p>
                    <h2>Indicação:</h2>
                    <p>
                      Indicada para quaisquer tipos de restaurações, sejam elas realizadas tanto em dentes anteriores quanto posteriores. Apresenta também indicação para realização de restaurações indiretas de facetas, inlays e onlays.
                    </p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/formaapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/formaapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$111,06 <br/>
                      Preço por grama: R$27,76
                    </p>
              </>
            { /* VITALESCENCE ULTRADENT */ }
              <>
                <img src="../imgs/guia-resinas/vitalescence.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Micro-híbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      Resina à base de Bis-GMA. Apresenta 75% do peso de carga e 52% do volume de carga, com tamanho médio de partícula de 0.7μm.
                    </p>
                    <h2>Indicação:</h2>
                    <p>Restaurações anteriores artísticas em resina composta, incluindo facetas diretas. Sua resistência mecânica também permite que seja indicada para o uso em dentes posteriores.</p>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/vitalescenceapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/vitalescenceapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 2,5g: R$236 <br/>
                      Preço por grama: R$94,40
                    </p>
              </>
            { /* AMARIS VOCO */ }
              <>
                <img id='VOCO' src="../imgs/guia-resinas/amaris.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Classificação da partícula:</h2>
                    <p>Nano-híbrida</p>
                    <h2>Composição:</h2>
                    <p>
                      <h3>Matriz orgânica:</h3> matriz de metacrilato (Bis-GMA, UDMA, TEGDMA)<br/>
                      <h3>Matriz inorgânica:</h3> contem 80% de carga na radiopaca e 64% nas cores HT e HO
                    </p>
                    <h2>Indicação:</h2>
                    <ul>
                      <li>Restaurações estéticas de cavidades de classes III, IV e V em dentes anteriores</li>
                      <li>Restaurações estéticas de cavidades de classes I, II e V em dentes posteriores</li>
                      <li>Reconstrução de dentes anteriores fraturados</li>
                      <li>Construção de facetas diretas e indiretas em compósito e revestimento de dentes anteriores com alteração de cor</li>
                      <li>Correcção de forma e cor para melhorar a estética</li>
                      <li>Reparação de restaurações em cerâmica de alta estética e facetas</li>
                      <li>Ferulização de dentes anteriores</li>
                    </ul>
                    <h2>Apresentação de cores e opacidades:</h2>
                    <img src="../imgs/guia-resinas/amarisapre.jpg"  style={{width: "100%"}} alt="brand" />
                    <h2>Aplicação clínica das opacidades:</h2>
                    <img src="../imgs/guia-resinas/amarisapli.jpg"  style={{width: "100%"}} alt="brand" />
                    <p style={purple}>
                    <Chip style={{ color: "#FFFFFF", background: '#382B57',marginLeft: '-1rem'}} icon={<MonetizationOnOutlinedIcon style={{ color: "#FFFFFF"}} />} label={<h3>Preço médio atual:</h3>} /><br/>
                      Tubete com 4g: R$265,68 <br/>
                      Preço por grama: R$66,42
                    </p>
              </>
            { /* REFERÊNCIAS */ }
              <>
                <h1>Referências:</h1>
                <p>
                  ANUSAVICE, Kenneth J. Phillips materiais dentários. Elsevier Brasil, 2013.
                  <br/><br/>
                  ikj
                  <br/><br/>
                  Livro Método One
                  <br/><br/>
                  Manuais dos fabricantes: exemplo: AMERICAN PSYCHOLOGICAL ASSOCIATION. Manual de publicação da American Psychological Association. Tradução de Daniel Bueno. Porto Alegre: ARTMED, 2002. 329 p.
                  <br/><br/>
                  Perfil técnico do produto Filtek - Z350 XT Resina Composta Universal - 3M ESPE
                  <br/><br/>
                  EPIC Resina composta nano-híbrida fotopolimerizável. Manual da Biodinâmica. M 003582 Rev. 02 19/10/2020
                  <br/><br/>
                  Efficient esthetics with Neo Spectra™ ST composites
                  <br/><br/>
                  Perfil Técnico Opallis FGM
                  <br/><br/>
                  Perfil técnico Vittra FGM
                  <br/><br/>
                  A arte do tratamento de restauração - Soluções inteligentes da GC para todos os seus desafios clínicos -
                  <br/><br/>
                  A solução ENAMEL PLUS HRI - O mesmo índice de refração do que o esmalte natural
                  <br/><br/>
                  IPS Empress Direct - Ivoclar Vivadent
                  <br/><br/>
                  Bula - Tetric N-Line - Composites for anterior and posterior restorations - Ivoclar Vivadent
                  <br/><br/>
                  Manual - Tetric N-Line Composites for anterior and posterior restorations - The efficient solution for all cavities
                  <br/><br/>
                  Harmonize Resina Composta Nanohíbrida Universal - Kerr Restoratives - 2020
                  <br/><br/>
                  Catálogo Herculite Classic Resina composto microhíbrida - Kerr restoratives
                  <br/><br/>
                  Catálogo Point 4 Resina composta microhíbrida - Kerr Restoratives
                  <br/><br/>
                  Charisma Informação do produto - Charisma agora é Charisma Classic - Saúde bucal nas melhores mãos - Kulzer Mitsu Chemicals Group
                  <br/><br/>
                  Charisma Informação do produto - Charisma Diamond - Descubra um novo conceito em beleza natural - Saúde nas melhores mãos - Kulzer Mitsu Chemicals Group
                  <br/><br/>
                  aura MATERIAL RESTAURADOR ULTRA UNIVERSAL INSTRUÇÕES DE USO
                  <br/><br/>
                  The aura of aesthetics - ultra universal restorative system
                  <br/><br/>
                  Tecnologia Giomer - Contribuindo em todas as áreas da odontologia - Giomer tree s-prg filler - surface pre-reacted glassionomer - Catálogo Shofu 2020
                  <br/><br/>
                  Atos ???
                  <br/><br/>
                  Estelite Omega Material Restorative Dental based-R
                  <br/><br/>
                  Omni ???
                  <br/><br/>
                  Palfique ???
                  <br/><br/>
                  Catálogo Ultradent - 2017 COVER PORTUGUESE.indd 1 - página 16 e 40 a 44 -
                  <br/><br/>
                  Manual - Ultradent Products Forma -
                  <br/><br/>
                  Manual Ultradent Products - Vitalescence - Resina Composta Fotopolimerizável
                  <br/><br/>
                  Material de restauração foto-polimerizável e de alta estética de acordo com 24049/ISO 4049
                  <br/><br/>
                </p>
              </>
          </Grid>
          </>

      </Box>
    </Box>
    </div>
    

    )}
    </>
  );
}
export default GuiaResinas