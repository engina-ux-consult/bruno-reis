import { TCardHome } from "../types/card-home";

export const dataCard: TCardHome[] = [
  {
    isNew: true,
    type: "BLOG",
    url: "/dashboard/conteudo/guia-resinas",
    thumbnail: "/imgs/guia-resinas.jpg",
    title: "Guia completo de resinas compostas",
    description:
      "Este conteúdo foi desenvolvido para auxiliar cirurgiões-dentistas no momento de escolha de uma resina composta.",
  },
  {
    isNew: true,
    type: "VIDEO",
    url: "/dashboard/videos/resinas-compostas",
    thumbnail: "/imgs/thumb-video-resina-composta.jpg",
    title: "Vídeos exclusivos sobre resinas compostas",
    description:
      "Vídeos com alta resolução com dicas para expandir seus conhecimentos sobre as resinas e como garantir ótimos resultados.",
  },
  {
    isNew: true,
    type: "EBOOK",
    url: "/dashboard/ebook/ebooks-exclusivos",
    thumbnail: "/imgs/thumb-video-adesivos.jpg",
    title: "E-books de conteúdos exclusivos",
    description:
      "Leia os melhores conteúdos sobre odontologia com e-books elaborados pelo Dr. Bruno Reis.",
  },
];
