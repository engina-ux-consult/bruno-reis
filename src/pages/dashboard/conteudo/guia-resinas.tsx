import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Box, Chip } from "@mui/material";
import theme from "../../../theme";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { AuthGuard } from "../../../components/authentication/auth-guard";
import { DashboardLayout } from "../../../components/dashboard/dashboard-layout";
import { HeaderPage } from "../../../components/dashboard/header-page";
import { SidebarIndex } from "../../../components/sidebar-index";
import { Index } from "../../../types";

const indexesMenu: Index[] = [
  {
    name: "INÍCIO",
    active: true,
  },
  {
    name: "3M",
    active: false,
  },
  {
    name: "BIODINAMICA",
    active: false,
  },
  {
    name: "DENTSPLY",
    active: false,
  },
  {
    name: "FGM",
    active: false,
  },
  {
    name: "GC",
    active: false,
  },
  {
    name: "ORALTECH",
    active: false,
  },
  {
    name: "IVOCLAR",
    active: false,
  },
  {
    name: "KERR",
    active: false,
  },
  {
    name: "KULZER",
    active: false,
  },
  {
    name: "SDI",
    active: false,
  },
  {
    name: "SHOFU",
    active: false,
  },
  {
    name: "SMARTDENT",
    active: false,
  },
  {
    name: "TOKUYAMA",
    active: false,
  },
  {
    name: "ULTRADENT",
    active: false,
  },
  {
    name: "VOCO",
    active: false,
  },
];

const purple = {
  color: "white",
  backgroundColor: "#382B57",
  padding: "1.5rem",
  borderRadius: "0.5rem",
  marginBottom: "4rem",
};

const gray = {
  backgroundColor: "#F1F1F1",
  padding: "1rem",
  borderRadius: "0.5rem",
};

const GuiaResinas: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Iknow - Guia completo de resinas composta</title>
      </Head>
      <HeaderPage
        title="Guia completo de resinas compostas [Conteúdo exclusivo]"
        onClick={() => router.push("/dashboard")}
      />

      <Box component="main" id="Início" className="index_selection">
        {/* BANNER */}
        <Box
          sx={{
            maxWidth: "1800px",
            width: "100%",
            height: { xs: "150px", md: "300px" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            alt="banner"
            src="/imgs/guia-resinas/bgresina.jpg"
            layout="fill"
            sizes="100vw"
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

        {/* CONTENT PAGE */}
        <Box>
          {/* SIDEBAR LEFT */}
          <SidebarIndex indexMenu={indexesMenu} />

          <Box
            sx={{
              width: "calc(100% - 255px)",
              maxWidth: "1088px",
              gap: "2rem",
              margin: "0 auto",
              color: "#535353",
              padding: "0 12px",
              [theme.breakpoints.up("lg")]: {
                margin: "0 0 0 255px",
              },
            }}
          >
            {/* Introdução */}
            <Box id="3M" className="index_selection">
              {/* Introdução */}
              <Box>
                <h1>Guia completo de resinas compostas</h1>
                <p style={gray}>
                  Este conteúdo foi desenvolvido para auxiliar
                  cirurgiões-dentistas no momento de escolha de uma resina
                  composta. Para que funcione como um guia, iremos relembrar a
                  seguir, alguns conceitos importantes (composição, cores e
                  opacidades) das resinas compostas:
                </p>
                <h2>Entendendo a composição</h2>
                <p>
                  As resinas compostas são formadas por três componentes
                  principais:matriz orgânica altamente cruzada reforçada pela
                  dispersão de partículas de carga de vidro, sílica, cristalina,
                  óxidos metálicos ou mesmo resina ou combinações entre estas ou
                  ainda de fibras curtas, que são aderidas à matriz resinosa por
                  um agente silânico de união.Os esquemas a seguir, resumem a
                  função de cada componente principal:
                </p>
                <Image
                  src="/imgs/guia-resinas/legenda.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={295}
                />
                <h2>Matriz orgânica:</h2>
                <p>
                  É baseada em uma mistura de monômeros dimetacrilato aromáticos
                  e/ou alifáticos:
                  <br />
                  Os principais monômeros utilizados nas resinas compostas e
                  suas respectivas características:
                </p>
                <Image
                  src="/imgs/guia-resinas/udma.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={730}
                />
                <p>
                  Monômeros que são adicionados para melhorar a manipulação e
                  suas respesctivas características:
                </p>
                <Image
                  src="/imgs/guia-resinas/tegdma.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={734}
                />
                <h2>Carga inorgânica:</h2>
                <p>
                  Vários tipos de carga mineral transparentes são usados para
                  fortalecer e reforçar compósitos, assim como diminuir a
                  contração de polimerização e a expansão térmica (geralmente em
                  torno de 30 a 70% em volume ou 50 a 80% em peso de um
                  compósito).
                  <br />
                  Entre eles estão os chamados de “vidros moles” e “vidros
                  duros” de borossilicato, quartzo fundido, silicato de
                  alumínio, silicato de lítio-alumínio (beta eucriptita, que tem
                  coeficiente de expansão térmica linear negativo), fluoreto de
                  itérbio e vidros de bário (Ba), estrôncio (Sr), zircônio (Zr)
                  e zinco (Zn). Os últimos 5 tipos também conferem radiopacidade
                  em virtude de seus átomos de metais pesados.
                  <br />O alto conteúdo de carga reduz a contração de
                  polimerização proporcionalmente ao volume de carga. Embora a
                  contração varie de uma marca comercial para outra, os valores
                  tipicamente ficam em torno de 1% até 4% em volume.
                </p>
                <p style={gray}>
                  Partículas maiores, como nas resinas macroparticuladas, o
                  volume de carga é menor, pois é difícil que as partículas se
                  encaixem e preencham todos os espaços. Quando passamos para
                  resinas que contém partículas menores, sendo elas híbridas ou
                  não, todos os espaços passam a ser melhores preenchidos,
                  garantindo um excelente volume de carga e, consequentemente,
                  uma maior resistência.
                </p>
                <h2>Ou seja:</h2>
                <Image
                  src="/imgs/guia-resinas/ouseja.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={984}
                />
                <p>
                  A carga é a principal responsável por diversas características
                  principais das resinas. Por isso, as resinas são classificadas
                  de acordo com o tamanho das suas partículas:
                </p>
                <Image
                  src="/imgs/guia-resinas/resinasparticulas.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={834}
                />
                <h2>Agente de união:</h2>
                <p>
                  É essencial que as partículas de carga sejam aderidas à matriz
                  resinosa. Isso permite que a matriz polimérica, mais flexível,
                  transfira tensões para as partículas de carga, que são mais
                  rígidas. A união química entre essas duas fases é dada pelo
                  agente de união silânico que é uma molécula bifuncional com
                  atividade de superfície que se liga ás partículas de carga e
                  também copolimeriza com os monômeros que formam a matriz
                  resinosa.
                  <br />
                  Um agente de união corretamente aplicado também pode
                  contribuir para melhores propriedades físicas e químicas e
                  inibir a lixiviação através da prevenção da penetração de água
                  ao longo da interface partícula-resina. Apesar de titanatos e
                  zirconatos poderem ser usados como agentes de união,
                  organo-silanos (como γ-metacriloxipropiltrimetoxi silano) são
                  mais comumente usados.
                </p>
                <p style={gray}>
                  Além desses componentes principais, as resinas compostas
                  contêm vários outros componentes, incluindo sistemas
                  ativador-iniciador, necessários para converter a resina de uma
                  pasta maleável em uma restauração rígida e durável. Pigmentos
                  são adicionados para conferir cor próxima do dente.
                  Absorventes ultravioleta (UV) e outros aditivos são
                  incorporados para melhorar a estabilidade de cor, inibidores
                  de polimerização estendem o período de validade e aumentam o
                  tempo de trabalho, especialmente para resinas quimicamente
                  ativadas. Outros componentes podem ser incluídos para melhorar
                  o desempenho, a aparência e a durabilidade.
                </p>
                <Image
                  src="/imgs/guia-resinas/agenteuniao.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={761}
                />
                <h2>Indicações das resinas:</h2>
                <p>
                  As resinas encontradas hoje no mercado possuem indicação
                  universal, podendo ser utilizadas em todos os tipos de
                  restauração em áreas de estética ou de demanda por resistência
                  (dentes anteriores ou posteriores).
                  <br />
                  <br />
                  As exceções para essa regra são as resinas híbridas e
                  microparticuladas:
                  <br />
                  <br />
                  Híbridas: é interessante evitar o uso em áreas estéticas,
                  principalmente como última camada de facetas de resina, porque
                  são resinas mais difíceis de polir e de manter o polimento.
                  <br />
                  <br />
                  Microparticuladas: por não possuírem grande quantidade de
                  carga, não devem ser utilizadas em áreas de concentração de
                  forças, como em dentes posteriores ou na face palatina de
                  dentes anteriores.
                  <br />
                  <br />
                  As demais resinas, seja micro-híbrida, nano-híbrida ou
                  nanoparticulada, podem ser usadas em todas as situações.
                  <br />
                  <br />
                  Dessa forma, fica claro que a categoria da maior parte das
                  resinas não interfere na sua indicação, mas podem interferir
                  em outras características, como na técnica de polimento e
                  manutenção.
                  <br />
                  <br />
                  REFERÊNCIA: Wobido AR, periódico científico Iknow Journal.
                </p>
                <Image
                  src="/imgs/guia-resinas/indicacoesresinas.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={683}
                />
                <h2>Entendendo as cores:</h2>
                <Image
                  src="/imgs/guia-resinas/matriz.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={590}
                />
                <Image
                  src="/imgs/guia-resinas/croma.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={320}
                />
                <Image
                  src="/imgs/guia-resinas/valor.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={818}
                />
                <Image
                  src="/imgs/guia-resinas/a2d.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={610}
                />
                <p style={gray}>
                  Observação: Há variações na nomenclatura. Nem todos os
                  fabricantes seguem essa regra do exemplo acima. O valor
                  costuma ser descrito em primeiro ou último lugar (A2D ou DA2,
                  por exemplo).
                </p>
                <h2>Entendendo as opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/opacidades.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={1890}
                />
                <h2>Substratos e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/subopatb.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={934}
                />
                <Image
                  src="/imgs/guia-resinas/subopapass.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={742}
                />
                <Image
                  src="/imgs/guia-resinas/subopaobs.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={856}
                />
                <h2>Observações:</h2>
                <p style={gray}>
                  1: Este conteúdo apresenta a média dos preços atuais de
                  resinas compostas de diferentes marcas comerciais. Essa média
                  foi calculada a partir dos valores disponíveis nos sites da
                  Dental Surya, Dental Cremer e Dental Speed.
                </p>
                <p style={gray}>
                  2: Os dados sobre cada resina composta foram obtidos a partir
                  das informações comerciais que os fabricantes oferecem em seus
                  sites oficiais por meio de bulas, catálogos e outros materiais
                  disponíveis.
                </p>
              </Box>
              {/* Z1003M */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/z1003m.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={681}
                />
                <h2>Classificação da partícula:</h2>
                <p>Microhíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: Bis-GMA e TEGDMA.
                  <br />
                  Parte inorgânica: Zircônia/Sílica com 84,5% em peso e 66% em
                  volume.
                  <br />
                  Tamanho médio das partículas: 0,6 micrometros.
                </p>
                <h2>Indicação:</h2>
                <ul>
                  <li>
                    Restaurações em dentes anteriores e posteriores (Classes
                    I,II, III, IV e V);
                  </li>
                  <li>Fechamento de diastemas;</li>
                  <li>Esplintagem de dentes com mobilidade.</li>
                </ul>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/apresentcores.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={720}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/aplicli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={361}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$50,00 <br />
                  Preço por grama: R$12,50
                </p>
              </Box>
              {/* Z2503M */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/z2503m.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={681}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nanohíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: Bis-GMA, UDMA, Bis-EMA, PEGDMA e TEGDMA.
                  <br />
                  Matriz inorgânica (carga): Zircônia/Sílica com 81,8% em peso e
                  67,8% em volume.
                  <br />
                  Tamanho médio das partículas é de 20nm.
                </p>
                <h2>Indicação:</h2>
                <ul>
                  <li>
                    Restaurações diretas e indiretas em dentes anteriores e
                    posteriores (Classes I, II, III, IV e V) incluindo
                    superfícies oclusais;
                  </li>
                  <li>
                    Fechamento de diastemas; confecção de núcleos de
                    preenchimento;
                  </li>
                  <li>Ancoragem de dentes com mobilidade (esplintagem);</li>
                  <li>
                    Restaurações diretas e indiretas (inlays e onlays) e facetas
                    diretas e indiretas (veneers);
                  </li>
                  <li>Fechamento de diastemas.</li>
                </ul>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/250apre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={719}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/250apli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={719}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$105,00 <br />
                  Preço por grama: R$27,00
                </p>
              </Box>
              {/* Z3503M */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/z3503m.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={681}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nanoparticulada</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: Bis-GMA; UDMA; Teg-DMA; Peg-DMA e Bis-EMA.
                  <br />
                  Parte inorgânica (carga): Sílica e zircônia em 72,5% do peso e
                  55,5% em volume.
                  <br />
                  Tamanho médio das partículas: 0,6µm a 20µm
                </p>
                <h2>Indicação:</h2>
                <p>
                  Aplicabilidade universal: restaurações diretas (incluindo
                  superfícies oclusais) e indiretas (inlay, onlay e overlay),
                  confecçãode núcleos de preenchimento e até mesmo em
                  esplintagens, desde que, o protocolo operacional seja aplicado
                  corretamente.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/350apre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={758}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/350apli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={361}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$250,00 <br />
                  Preço por grama: R$63,00
                </p>
              </Box>
              {/* FILTEK UNIVERSAL 3M*/}
              <Box>
                <Image
                  src="/imgs/guia-resinas/filtek.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={681}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nanoparticulada</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: AUDMA, AFM, diuretano-DMA e 1,12-dodecanoDMA.
                  Parte inorgânica (carga): sílica não-aglomerada/não-agregada,
                  zircônia não-aglomerada/não-agregada, aglomerados de zircônia
                  e sílica e aglomerados de partículas nanométricas de itérbio
                  com aproximadamente 76,5% em peso e 58,4% em volume tamanho
                  das partículas: 100% de nanopartículas de até 100 nm
                </p>
                <h2>Indicação:</h2>
                <ul>
                  <li>
                    Restaurações diretas em dentes anteriores e posteriores
                    (incluindo superfícies oclusais).
                  </li>
                  <li>Confecção de núcleos de preenchimento.</li>
                  <li>Esplintagem.</li>
                  <li>
                    Restaurações indiretas, incluindo inlays, onlays e facetas.
                  </li>
                </ul>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/filtekapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={467}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/filtekapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={425}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$260,00 <br />
                  Preço por grama: R$65,00
                </p>
              </Box>
            </Box>

            {/* EPIC BIODINÂMICA */}
            <Box id="BIODINAMICA" className="index_selection">
              <Image
                src="/imgs/guia-resinas/epic.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={709}
              />
              <h2>Classificação da partícula:</h2>
              <p>Nanohíbrida</p>
              <h2>Composição:</h2>
              <p>
                Matriz Orgânica: BisGMA ; BisEMA ; UDMA ; TEGDMA ; <br />
                Carga inorgânica: Vidro de borosilicato de alumínio e bário;{" "}
                <br />
                Dióxido de silício ; Silicato de Zircônio. 79% em peso e 60% em
                volume
              </p>
              <h2>Indicação:</h2>
              <ul>
                <li>
                  Restaurações dentárias estéticas definitivas anteriores e
                  posteriores;
                </li>
                <li>Fixação de dentes com mobilidade</li>
                <li>Reparos de próteses e restaurações indiretas.</li>
              </ul>
              <h2>Apresentação de cores e opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/epicapre.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={1165}
              />
              <h2>Aplicação clínica das opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/epicapli.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={361}
              />
              <p style={purple}>
                <Chip
                  style={{
                    color: "#FFFFFF",
                    background: "#382B57",
                    marginLeft: "-1rem",
                  }}
                  icon={
                    <MonetizationOnOutlinedIcon style={{ color: "#FFFFFF" }} />
                  }
                  label={<h3>Preço médio atual:</h3>}
                />
                <br />
                Tubete com 4g: R$43,00 <br />
                Preço por grama: R$10,77
              </p>
            </Box>

            {/* NEO SPECTRA DENTSPLY */}
            <Box id="DENTSPLY" className="index_selection">
              <Image
                src="/imgs/guia-resinas/neo.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={593}
              />
              <h2>Classificação da partícula:</h2>
              <p>Micro-hibrída</p>
              <h2>Composição:</h2>
              <p>
                A nova tecnologia Sphere TEC® possibilita que ambas as
                estruturas, orgânica e inorgânica, trabalhem em harmonia,
                oferecendo mais força e resistência à manchas.
              </p>
              <h2>Indicação:</h2>
              <ul>
                <li>Restaurações Diretas Classe I; II; III; IV e V</li>
                <li>Restaurações Indiretas</li>
                <li>Facetas Diretas</li>
                <li>Attachments Estéticos em Ortodontia</li>
              </ul>
              <h2>Apresentação de cores e opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/neoapre.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={679}
              />
              <h2>Aplicação clínica das opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/neoapli.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={361}
              />
              <p style={purple}>
                <Chip
                  style={{
                    color: "#FFFFFF",
                    background: "#382B57",
                    marginLeft: "-1rem",
                  }}
                  icon={
                    <MonetizationOnOutlinedIcon style={{ color: "#FFFFFF" }} />
                  }
                  label={<h3>Preço médio atual:</h3>}
                />
                <br />
                Tubete com 3g: R$ 173,90 <br />
                Preço por grama: R$ 57,96
              </p>
            </Box>

            {/* OPALLIS FGM */}
            <Box id="FGM" className="index_selection">
              <Box>
                <Image
                  src="/imgs/guia-resinas/opallis.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={624}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nanohíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: Bis-GMA (Bis-Fenol A di-Glicidil
                  Metacrilato), BisEMA (Bis-Fenol A di-Glicidil Metacrilato
                  etoxilado), TEGDMA (Trietileno glicol dimetacrilato), UDMA
                  (Uretano dimetacrilato), canforquinona, co-iniciador e silano.
                  Matriz inorgânica: vidro de bário-alumino silicato silanizado,
                  pigmentos e sílicas. <br />
                  O conteúdo total de carga em peso é de 78,5 a 79,8% e volume
                  57,0 a 58,0% de carga inorgânica.
                  <br />
                  Tamanho médio de partículas: 0,5 microns.
                </p>
                <h2>Indicação:</h2>
                <p>Restauração direta de dentes anteriores e posteriores.</p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/opallisapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={740}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/opallisapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={361}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$72,32 <br />
                  Preço por grama: R$18,08
                </p>
              </Box>
              {/* VITTRA FGM */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/vittra.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={586}
                />
                <h2>Classificação da partícula:</h2>
                <p>Submicrométrica ????</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: UDMA (Uretano Dimetacrilato) e TEGDMA
                  (Trietileno Glicol Dimetacrilato). Matriz inorgânica: carga de
                  zircônia, sílica. <br />
                  Tamanho médio das partículas: 200nm <br />
                  Conteúdo total de carga inorgânica em peso de 72% a 82% (52% a
                  60% em volume).
                </p>
                <h2>Indicação:</h2>
                <p>
                  Restaurações de todas as classes em dentes anteriores e
                  posteriores
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/vittraapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={622}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/vittraapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={362}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$126,66 <br />
                  Preço por grama: R$31,66
                </p>
              </Box>
            </Box>

            {/* ESSENTIA GC */}
            <Box id="GC" className="index_selection">
              <Image
                src="/imgs/guia-resinas/essentia.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={590}
              />
              <h2>Classificação da partícula:</h2>
              <p>Na</p>
              <h2>Composição:</h2>
              <p>Matriz</p>
              <h2>Indicação:</h2>
              <ul>
                <li>
                  Indicado para restaurações anteriores e posteriores,
                  fechamento de diastemas;
                </li>
                <li>Extremamente estético;</li>
                <li>
                  Indicado também para facetas diretas e lentes de contato.
                </li>
              </ul>
              <h2>Apresentação de cores e opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/essentiaapre.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={1000}
              />
              <h2>Aplicação clínica das opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/essentiaapli.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={361}
              />
              <p style={purple}>
                <Chip
                  style={{
                    color: "#FFFFFF",
                    background: "#382B57",
                    marginLeft: "-1rem",
                  }}
                  icon={
                    <MonetizationOnOutlinedIcon style={{ color: "#FFFFFF" }} />
                  }
                  label={<h3>Preço médio atual:</h3>}
                />
                <br />
                Tubete com 2g: R$430 <br />
                Preço por grama: R$215
              </p>
            </Box>

            {/* MICERIUM ENAMEL PLUS HRI ORALTECH*/}
            <Box id="ORALTECH" className="index_selection">
              <Image
                src="/imgs/guia-resinas/micerium.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={760}
              />
              <h2>Classificação da partícula:</h2>
              <p>Nanohíbrida</p>
              <h2>Composição:</h2>
              <p>
                Composição CARGA (80% DE PESO - 63% VOLUME) - Óxido de Zircónio
                Nano tratamento superfície com alto índice de refracção (12% de
                peso) - Novo tipo de vidro com carga com alto índice de
                refracção (68% de peso)
              </p>
              <h2>Indicação:</h2>
              <p>Restauração de dentes anteriores e posteriores.</p>
              <h2>Apresentação de cores e opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/miceriumapre.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={768}
              />
              <h2>Aplicação clínica das opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/miceriumapli.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={361}
              />
              <p style={purple}>
                <Chip
                  style={{
                    color: "#FFFFFF",
                    background: "#382B57",
                    marginLeft: "-1rem",
                  }}
                  icon={
                    <MonetizationOnOutlinedIcon style={{ color: "#FFFFFF" }} />
                  }
                  label={<h3>Preço médio atual:</h3>}
                />
                <br />
                Tubete com 4g: R$492 <br />
                Preço por grama: R$123
              </p>
            </Box>

            {/* EMPRESS DIRECT IVOCLAR */}
            <Box id="IVOCLAR" className="index_selection">
              {/* EMPRESS DIRECT IVOCLAR */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/empress.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={1125}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nanohíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: composta de dimetacrilatos <br />
                  Matriz inorgânica: vidro de bário, trifluoreto de itérbio,
                  óxido misto, dióxido de silício e copolímero.
                  <br />
                  Sendo, 75-79% em peso ou 52-59% em volume (opalescente 60,5%
                  em peso ou 45% em volume).
                  <br />O tamanho médio de partícula é de 550 nm.
                </p>
                <h2>Indicação:</h2>
                <ul>
                  <li>Restaurações anteriores e posteriores</li>
                  <li>Restaurações do colo do dente</li>
                  <li>
                    Correções das posições dos dentes e da forma dos dentes (por
                    exemplo, fechamento de diastemas, fechamento de “triângulos
                    pretos” interdentais, alongamento da borda incisal)
                  </li>
                  <li>Facetas diretas</li>
                </ul>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/empressapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={718}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/empressapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={362}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 3g: R$328,90 <br />
                  Preço por grama: R$109,63
                </p>
              </Box>
              {/* TETRIC IVOCLAR*/}
              <Box>
                <Image
                  src="/imgs/guia-resinas/tetric.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={619}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nanohíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: dimetacrilatos (19-20% em peso). <br />
                  Matriz inorgânica: vidro de bário, trifluoreto de itérbio,
                  óxido misto e copolímeros (80-81% em peso).
                  <br />
                  O conteúdo total de cargas inorgânicas é de 55–57 vol.%.
                  <br />O tamanho de partícula de cargas inorgânicas está entre
                  40 nm e 3000 nm
                </p>
                <h2>Indicação:</h2>
                <p>Todas as classes de restaurações;</p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/tetricapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={587}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/tetricapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={362}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$136 <br />
                  Preço por grama: R$39,14
                </p>
              </Box>
            </Box>

            {/* HARMONIZE KERR */}
            <Box id="KERR" className="index_selection">
              {/* HARMONIZE KERR */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/harmonize.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={578}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nanohíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: <br />
                  Matriz inorgânica: Sílica e zircônia (81% de carga e 64,5% de
                  volume) associadas a componentes orgânicos, iniciadores e
                  agentes de união.
                  <br />
                  Carga em peso: 81%
                  <br />
                  Carga em volume: 64,5%
                  <br />
                  Tamanho das partículas: 5nm - 400nm)
                </p>
                <h2>Indicação:</h2>
                <p>Dentes anteriores e posteriores.</p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/harmonizeapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={696}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/harmonizeapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={696}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$247,00 <br />
                  Preço por grama: R$82,30
                </p>
              </Box>
              {/* HERCULITE CLASSIC KERR */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/hercc.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Microhíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: BIS-GMA, tri-etilenoglicol-dimetacrilato
                  (resina diluente-solvente)
                  <br />
                  Canforoquinona (fotoiniciador), amina (ativador), pigmentos de
                  óxido de ferro
                  <br />
                  Matriz inorgânica: vidro de borossilicato de alumínio, sílica
                  Coloidal (SiO2).
                  <br />
                  Carga em peso: 79%.
                  <br />
                  Carga em volume: 59%
                  <br />
                  Tamanho médio das partículas: 0,6µm
                </p>
                <h2>Indicação:</h2>
                <p>
                  Restauração de dentes anteriores e posteriores. Uso direto e
                  indireto.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/herccapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/herccapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$57,90 <br />
                  Preço por grama: R$11,58
                </p>
              </Box>
              {/* HERCULITE PRÉCIS KERR */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/hercp.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nanohíbrida</p>
                <h2>Composição:</h2>
                <p></p>
                <h2>Indicação:</h2>
                <p>
                  Indicada para todas as classes de cavidade em dentes
                  anteriores e posteriores.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/hercpapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/hercpapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$115,90 <br />
                  Preço por grama: R$28,97
                </p>
              </Box>
              {/* point 4 KERR */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/point.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Microhíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: BIS-GMA, tri-etilenoglicol-dimetacrilato e
                  EBADM
                  <br />
                  Carga inorgânica: dióxido de sílico, alumínio borosilicato de
                  bário e outros.
                  <br />
                  Carga em peso: 77%
                  <br />
                  Carga em volume: 57%
                  <br />
                  Tamanho médio das partículas: 0,4μm
                </p>
                <h2>Indicação:</h2>
                <p>
                  Restauração de dentes anteriores e de uso direto e indireto.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/pointapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/pointapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$48,23 <br />
                  Preço por grama: R$12,08
                </p>
              </Box>
            </Box>

            {/* CHARISMA CLASSIC KULZER */}
            <Box id="KULZER" className="index_selection">
              {/* CHARISMA CLASSIC KULZER */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/charismac.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Microhíbrida</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: Bis-GMA
                  <br />
                  Carga inorgânica: vidro de bário alumínio fluoretado e
                  partículas pré-polimerizadas.
                  <br />
                  Tamanhos que variam de 0,005µm a 10µm. Porcentagem de carga em
                  volume: 61%.
                </p>
                <h2>Indicação:</h2>
                <p>Restaurações anteriores e posteriores.</p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/charismacapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/charismacapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$62,90 <br />
                  Preço por grama: R$15,72
                </p>
              </Box>
              {/* CHARISMA DIAMOND KULZER */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/charismad.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nano-híbrida universal</p>
                <h2>Composição:</h2>
                <p>
                  Fórmula baseada no monômero TCD-DI-HEA, desenvolvido e
                  patenteado pela Kulzer, Charisma® Diamond apresenta um sistema
                  de carga otimizado que inclui nanopartículas especiais de
                  sílica.
                </p>
                <h2>Indicação:</h2>
                <p>
                  Dentes anteriores e posteriores utilizando as técnicas de
                  camada única ou de estratificação e contar com um sistema de
                  cores que abrange todos os casos.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/charismadapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/charismadapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$149,90 <br />
                  Preço por grama: R$37,47
                </p>
              </Box>
            </Box>

            {/* AURA SDI */}
            <Box id="SDI" className="index_selection">
              <Image
                src="/imgs/guia-resinas/aura.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={475}
              />
              <h2>Classificação da partícula:</h2>
              <p>Microparticulada</p>
              <h2>Composição:</h2>
              <p>
                <h3>Resinas de dentina: </h3>
                Matriz orgânica: UDMA ; BisGMA ; BisEMA.
                <br />
                Matriz inorgânica: aluminossilicato de bário pré-polimerizado,
                dióxido de silício amorfo. <br />
                81% em peso, 65% em volume
                <br />
                Tamanho das partículas: 0,02 - 0,4 mícron
                <br />
                <br />
                <h3>Resinas de esmalte:</h3>
                Matriz orgânica: UDMA; TEGDMA
                <br />
                Matriz inorgânica: Silica
                <br />
                51% em peso
                <br />
                Tamanho das partículas: 0,02 - 0,4 mícron
              </p>
              <h2>Indicação:</h2>
              <p>
                Restaurações anteriores; Restaurações posteriores; Restaurações
                indiretas inlays, onlays e facetas; Construção de núcleo;
                Ferulização; Técnica sanduíche com ionômero de vidro;
              </p>
              <h2>Apresentação de cores e opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/auraapre.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={475}
              />
              <h2>Aplicação clínica das opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/auraapli.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={475}
              />
              <p style={purple}>
                <Chip
                  style={{
                    color: "#FFFFFF",
                    background: "#382B57",
                    marginLeft: "-1rem",
                  }}
                  icon={
                    <MonetizationOnOutlinedIcon style={{ color: "#FFFFFF" }} />
                  }
                  label={<h3>Preço médio atual:</h3>}
                />
                <br />
                Tubete com 4g: R$134,40 <br />
                Preço por grama: R$33,60
              </p>
            </Box>

            {/* BEAUTIFILL SHOFU */}
            <Box id="SHOFU" className="index_selection">
              <Image
                src="/imgs/guia-resinas/beautifill.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={475}
              />
              <h2>Classificação da partícula:</h2>
              <p>Nanohíbrida</p>
              <h2>Composição:</h2>
              <p>
                <h3>Matriz orgânica:</h3>
                <h3>Matriz inorgânica:</h3>
              </p>
              <h2>Indicação:</h2>
              <ul>
                <li>
                  Restaurações diretas que requerem níveis ótimos de estética e
                  biocompatibilidade;
                </li>
                <li>Ajustes estéticos diretos;</li>
                <li>Restaurações em Cavidades Classes I a V;</li>
                <li>
                  Restaurações de cáries radiculares e lesões cervicais por
                  erosão; - Reparo de bordas incisais fraturadas;
                </li>
                <li>Facetas laminadas e reconstruções de núcleos.</li>
              </ul>
              <h2>Apresentação de cores e opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/beautifillapre.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={475}
              />
              <h2>Aplicação clínica das opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/beautifillapli.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={475}
              />
              <p style={purple}>
                <Chip
                  style={{
                    color: "#FFFFFF",
                    background: "#382B57",
                    marginLeft: "-1rem",
                  }}
                  icon={
                    <MonetizationOnOutlinedIcon style={{ color: "#FFFFFF" }} />
                  }
                  label={<h3>Preço médio atual:</h3>}
                />
                <br />
                Tubete com 4g: R$243 <br />
                Preço por grama: R$54
              </p>
            </Box>

            {/* ATOS SMARTDENT */}
            <Box id="SMARTDENT" className="index_selection">
              <Image
                src="/imgs/guia-resinas/atos.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={475}
              />
              <h2>Classificação da partícula:</h2>
              <p>Nano-híbrida</p>
              <h2>Composição:</h2>
              <p>
                <h3>Matriz orgânica:</h3> BisGMA, UDMA, TEGDMA, DDDMA e BisEMA
                <br />
                <h3>Matriz inorgânica:</h3> Bário-Alumino e nanopartículas de
                Sílica principalmente Nano Silicato de Zircônio
              </p>
              <h2>Indicação:</h2>
              <ul>
                <li>
                  Restaurações de dentes permanentes e deciduos, anteriores e
                  <br />
                  posteriores de classes I, II, III, IV e V [todas as classes]
                </li>
                <li>Facetas diretas em resina composta</li>
                <li>Colagem de fragmentos de dentes</li>
                <li>Ancoragem de dentes (esplinta gem)</li>
                <li>Correção da forma de dentes [Ex: conoides]</li>
                <li>Redução ou fechamento de diastemas</li>
                <li>Confecção de núcleos de preenchimento</li>
                <li>Lesões cervicais não cariosas</li>
                <li>Reparos em porcelana e/ou compósito</li>
                <li>Restaurações indiretas, como inlays, onlays e facetas</li>
                <li>
                  Cimentação de peças protéticas (conforme técnica da resina
                  termo-modificada)
                </li>
              </ul>
              <h2>Apresentação de cores e opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/atosapre.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={475}
              />
              <h2>Aplicação clínica das opacidades:</h2>
              <Image
                src="/imgs/guia-resinas/atosapli.jpg"
                style={{ width: "100%", height: "auto" }}
                alt="brand"
                layout="responsive"
                sizes="100vw"
                width={1416}
                height={475}
              />
              <p style={purple}>
                <Chip
                  style={{
                    color: "#FFFFFF",
                    background: "#382B57",
                    marginLeft: "-1rem",
                  }}
                  icon={
                    <MonetizationOnOutlinedIcon style={{ color: "#FFFFFF" }} />
                  }
                  label={<h3>Preço médio atual:</h3>}
                />
                <br />
                Tubete com 4g: R$82,00 <br />
                Preço por grama: R$20,50
              </p>
            </Box>

            {/* ESTELITE OMEGA TOKUYAMA */}
            <Box id="TOKUYAMA" className="index_selection">
              {/* ESTELITE OMEGA TOKUYAMA */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/estelite.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Supra- nanométrica</p>
                <h2>Composição:</h2>
                <p>
                  Matriz orgânica: 2-hydroxy propoxy, Bis-GMA, TEGDMA
                  <br />
                  Matriz inorgânica: silica-zirconia 82% peso, sendo 71% de
                  volume
                  <br />
                  Tamanho médio das partículas de 200nm
                </p>
                <h2>Indicação:</h2>
                <p>
                  Restaurações diretas anteriores e posteriores incluindo
                  superfícies oclusais.
                  <br />
                  Fechamento de diastemas.
                  <br />
                  Reparo de porcelanas/resinas.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/esteliteapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/esteliteapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$ 536,33 <br />
                  Preço por grama: R$134,08
                </p>
              </Box>
              {/* PALFIQUE LX5 TOKUYAMA */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/palfique.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
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
                <p>
                  Indicado para restauração de dentes anteriores e posteriores,
                  todas as classes.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/palfiqueapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/palfiqueapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$302,21 <br />
                  Preço por grama: 79,52
                </p>
              </Box>
              {/* OMNICHROMA TOKUYAMA */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/omnichroma.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Supra Nano-híbrida</p>
                <h2>Composição:</h2>
                <p>
                  <h3>Matriz inorgânica:</h3> SiO2-ZrO2 esférico 260nm
                </p>
                <h2>Indicação:</h2>
                <p>
                  Restaurações diretas anteriores e posteriores incluindo
                  superfícies oclusais.
                  <br />
                  Fechamento de diastemas.
                  <br />
                  Reparo de porcelanas/resinas.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/omnichromaapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/omnichromaapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$295,00 <br />
                  Preço por grama: 73,75
                </p>
              </Box>
            </Box>

            {/* FORMA ULTRADENT */}
            <Box id="ULTRADENT" className="index_selection">
              {/* FORMA ULTRADENT */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/forma.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nano-híbrida</p>
                <h2>Composição:</h2>
                <p>
                  <h3>Carga orgânica:</h3> bisfenol-A Diglicidil Dimetacrilato
                  (Bis-GMA), Trietileno Glicol Dimetacrilato (TEGDMA),
                  Bisfenol-A Diglicidil Dimetacrilato Etoxilado (Bis-EMA) e
                  Uretano Dimetacrilato (UDMA).
                  <br />
                  <h3>Carga inorgânica:</h3> Sílica/zircônia e vidro de Bário.
                  <br />
                  67% de peso e 54% de volume
                </p>
                <h2>Indicação:</h2>
                <p>
                  Indicada para quaisquer tipos de restaurações, sejam elas
                  realizadas tanto em dentes anteriores quanto posteriores.
                  Apresenta também indicação para realização de restaurações
                  indiretas de facetas, inlays e onlays.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/formaapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/formaapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$111,06 <br />
                  Preço por grama: R$27,76
                </p>
              </Box>

              {/* VITALESCENCE ULTRADENT */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/vitalescence.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Micro-híbrida</p>
                <h2>Composição:</h2>
                <p>
                  Resina à base de Bis-GMA. Apresenta 75% do peso de carga e 52%
                  do volume de carga, com tamanho médio de partícula de 0.7μm.
                </p>
                <h2>Indicação:</h2>
                <p>
                  Restaurações anteriores artísticas em resina composta,
                  incluindo facetas diretas. Sua resistência mecânica também
                  permite que seja indicada para o uso em dentes posteriores.
                </p>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/vitalescenceapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/vitalescenceapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 2,5g: R$236 <br />
                  Preço por grama: R$94,40
                </p>
              </Box>
            </Box>

            {/* AMARIS VOCO */}
            <Box id="VOCO" className="index_selection">
              {/* AMARIS VOCO */}
              <Box>
                <Image
                  src="/imgs/guia-resinas/amaris.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Classificação da partícula:</h2>
                <p>Nano-híbrida</p>
                <h2>Composição:</h2>
                <p>
                  <h3>Matriz orgânica:</h3> matriz de metacrilato (Bis-GMA,
                  UDMA, TEGDMA)
                  <br />
                  <h3>Matriz inorgânica:</h3> contem 80% de carga na radiopaca e
                  64% nas cores HT e HO
                </p>
                <h2>Indicação:</h2>
                <ul>
                  <li>
                    Restaurações estéticas de cavidades de classes III, IV e V
                    em dentes anteriores
                  </li>
                  <li>
                    Restaurações estéticas de cavidades de classes I, II e V em
                    dentes posteriores
                  </li>
                  <li>Reconstrução de dentes anteriores fraturados</li>
                  <li>
                    Construção de facetas diretas e indiretas em compósito e
                    revestimento de dentes anteriores com alteração de cor
                  </li>
                  <li>Correcção de forma e cor para melhorar a estética</li>
                  <li>
                    Reparação de restaurações em cerâmica de alta estética e
                    facetas
                  </li>
                  <li>Ferulização de dentes anteriores</li>
                </ul>
                <h2>Apresentação de cores e opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/amarisapre.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <h2>Aplicação clínica das opacidades:</h2>
                <Image
                  src="/imgs/guia-resinas/amarisapli.jpg"
                  style={{ width: "100%", height: "auto" }}
                  alt="brand"
                  layout="responsive"
                  sizes="100vw"
                  width={1416}
                  height={475}
                />
                <p style={purple}>
                  <Chip
                    style={{
                      color: "#FFFFFF",
                      background: "#382B57",
                      marginLeft: "-1rem",
                    }}
                    icon={
                      <MonetizationOnOutlinedIcon
                        style={{ color: "#FFFFFF" }}
                      />
                    }
                    label={<h3>Preço médio atual:</h3>}
                  />
                  <br />
                  Tubete com 4g: R$265,68 <br />
                  Preço por grama: R$66,42
                </p>
              </Box>

              {/* REFERÊNCIAS */}
              <Box>
                <h1>Referências:</h1>
                <p>
                  ANUSAVICE, Kenneth J. Phillips materiais dentários. Elsevier
                  Brasil, 2013.
                  <br />
                  <br />
                  ikj
                  <br />
                  <br />
                  Livro Método One
                  <br />
                  <br />
                  Manuais dos fabricantes: exemplo: AMERICAN PSYCHOLOGICAL
                  ASSOCIATION. Manual de publicação da American Psychological
                  Association. Tradução de Daniel Bueno. Porto Alegre: ARTMED,
                  2002. 329 p.
                  <br />
                  <br />
                  Perfil técnico do produto Filtek - Z350 XT Resina Composta
                  Universal - 3M ESPE
                  <br />
                  <br />
                  EPIC Resina composta nano-híbrida fotopolimerizável. Manual da
                  Biodinâmica. M 003582 Rev. 02 19/10/2020
                  <br />
                  <br />
                  Efficient esthetics with Neo Spectra™ ST composites
                  <br />
                  <br />
                  Perfil Técnico Opallis FGM
                  <br />
                  <br />
                  Perfil técnico Vittra FGM
                  <br />
                  <br />
                  A arte do tratamento de restauração - Soluções inteligentes da
                  GC para todos os seus desafios clínicos -
                  <br />
                  <br />
                  A solução ENAMEL PLUS HRI - O mesmo índice de refração do que
                  o esmalte natural
                  <br />
                  <br />
                  IPS Empress Direct - Ivoclar Vivadent
                  <br />
                  <br />
                  Bula - Tetric N-Line - Composites for anterior and posterior
                  restorations - Ivoclar Vivadent
                  <br />
                  <br />
                  Manual - Tetric N-Line Composites for anterior and posterior
                  restorations - The efficient solution for all cavities
                  <br />
                  <br />
                  Harmonize Resina Composta Nanohíbrida Universal - Kerr
                  Restoratives - 2020
                  <br />
                  <br />
                  Catálogo Herculite Classic Resina composto microhíbrida - Kerr
                  restoratives
                  <br />
                  <br />
                  Catálogo Point 4 Resina composta microhíbrida - Kerr
                  Restoratives
                  <br />
                  <br />
                  Charisma Informação do produto - Charisma agora é Charisma
                  Classic - Saúde bucal nas melhores mãos - Kulzer Mitsu
                  Chemicals Group
                  <br />
                  <br />
                  Charisma Informação do produto - Charisma Diamond - Descubra
                  um novo conceito em beleza natural - Saúde nas melhores mãos -
                  Kulzer Mitsu Chemicals Group
                  <br />
                  <br />
                  aura MATERIAL RESTAURADOR ULTRA UNIVERSAL INSTRUÇÕES DE USO
                  <br />
                  <br />
                  The aura of aesthetics - ultra universal restorative system
                  <br />
                  <br />
                  Tecnologia Giomer - Contribuindo em todas as áreas da
                  odontologia - Giomer tree s-prg filler - surface pre-reacted
                  glassionomer - Catálogo Shofu 2020
                  <br />
                  <br />
                  Atos ???
                  <br />
                  <br />
                  Estelite Omega Material Restorative Dental based-R
                  <br />
                  <br />
                  Omni ???
                  <br />
                  <br />
                  Palfique ???
                  <br />
                  <br />
                  Catálogo Ultradent - 2017 COVER PORTUGUESE.indd 1 - página 16
                  e 40 a 44 -
                  <br />
                  <br />
                  Manual - Ultradent Products Forma -
                  <br />
                  <br />
                  Manual Ultradent Products - Vitalescence - Resina Composta
                  Fotopolimerizável
                  <br />
                  <br />
                  Material de restauração foto-polimerizável e de alta estética
                  de acordo com 24049/ISO 4049
                  <br />
                  <br />
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

GuiaResinas.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);
export default GuiaResinas;
