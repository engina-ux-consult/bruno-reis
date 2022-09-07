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
import { ArrowForward, Home, Instagram, LinkedIn, Output, YouTube, ArrowBack, Bolt, } from '@mui/icons-material';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
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
{/*CSS*/}
const purple = {
  color: "white",
  backgroundColor: "#382B57",
  padding: "1rem",
  borderRadius: "0.5rem"
};
const gray = {
  backgroundColor: "#F1F1F1",
  padding: "1rem",
  borderRadius: "0.5rem"
};
const padrao = {
  color: "#535353",
  fontFamily: "Open Sans"
};
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
        <img src="../imgs/guia-resinas/bgresina.jpg"  style={{width: "100%"}} alt="brand" /> 
        <Grid style={{width: '44.25rem', gap: '2rem', marginLeft: 'auto', marginRight: 'auto',color: "#535353",fontFamily: "Open Sans"}}>
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
              <img src="../imgs/guia-resinas/z1003m.jpg"  style={{width: "100%"}} alt="brand" />
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
                Tubete com 4g: R$50,00<br/>
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
                <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
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
                <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
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
                  <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
                  Tubete com 4g: R$260,00 <br/>
                  Preço por grama: R$65,00
                </p>
            </>
          { /* EPIC BIODINÂMICA */ }
            <>
              <img src="../imgs/guia-resinas/epic.jpg"  style={{width: "100%"}} alt="brand" />
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
                    <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
                    Tubete com 4g: R$43,00 <br/>
                    Preço por grama: R$10,77
                  </p>
            </>
          { /* NEO SPECTRA DENTSPLY */ }
            <>
              <img src="../imgs/guia-resinas/neo.jpg"  style={{width: "100%"}} alt="brand" />
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
                    <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
                    Tubete com 3g: R$ 173,90 <br/>
                    Preço por grama: R$ 57,96
                  </p>
            </>
          { /* OPALLIS FGM */ }
            <>
              <img src="../imgs/guia-resinas/opallis.jpg"  style={{width: "100%"}} alt="brand" />
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
                    <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
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
                    <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
                    Tubete com 4g: R$126,66 <br/>
                    Preço por grama: R$31,66                   
                  </p>
            </>
          { /* ESSENTIA GC */ }
            <>
              <img src="../imgs/guia-resinas/essentia.jpg"  style={{width: "100%"}} alt="brand" />
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
                    <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
                    Tubete com 2g: R$430 <br/>
                    Preço por grama: R$215
                  </p>
            </>
          { /* MICERIUM ENAMEL PLUS HRI ORALTECH*/ }
            <>
              <img src="../imgs/guia-resinas/micerium.jpg"  style={{width: "100%"}} alt="brand" />
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
                    <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
                    Tubete com 4g: R$492 <br/>
                    Preço por grama: R$123
                  </p>
            </>
          { /* EMPRESS DIRECT IVOCLAR */ }
            <>
              <img src="../imgs/guia-resinas/empress.jpg"  style={{width: "100%"}} alt="brand" />
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
                    <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
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
                    <h3><MonetizationOnOutlinedIcon/>Preço médio atual:</h3>
                    Tubete com 4g: R$136 <br/>
                    Preço por grama: R$39,14      
                  </p>
            </>
        </Grid>

      </Box>
    </Box>
        )}
    </>
  );
}
export default guiaResinas