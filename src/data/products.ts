import { Product } from "@/types/product";
import florescerDaCerejeiraImage from "@/assets/Florescer da Cerejeira.png";
import encantoDaPeoniaImage from "@/assets/Encanto da Peônia.png";
import difusorBloomImage from "@/assets/Difusor Bloom.png";
import bellaRoseImage from "@/assets/Bella Rose.png";
import triadeRefahImage from "@/assets/Tríade Refah.png";
import difusoraRefahImage from "@/assets/Difusora Refah.png";
import conjuntoSolarisImage from "@/assets/Conjunto solaris.png";
import eternoBouquetImage from "@/assets/Eterno Bouquet.png";
import discoNiemeyerImage from "@/assets/Disco Niemeyer.png";
import gotaDecorImage from "@/assets/Gota Decor.png";
import luniaImage from "@/assets/Lunia.png";
import serenitaImage from "@/assets/Serenita.png";

export const products: Product[] = [
  {
    id: "1",
    name: "Florescer da Cerejeira",
    slug: "florescer-da-cerejeira",
    price: 90,
    originalPrice: 110,
    description:
      "Vela decorativa com pequenas flores. Inspira leveza e renovação.",
    image: florescerDaCerejeiraImage,
    category: "decor",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Encanto da Peônia",
    slug: "encanto-da-peonia",
    price: 90,
    description:
      "Vela decorativa em formato de peônia. Um símbolo de beleza e sofisticação.",
    image: encantoDaPeoniaImage,
    category: "decor",
    inStock: true,
  },
  {
    id: "3",
    name: "Difusor Bloom",
    slug: "difusor-bloom",
    price: 100,
    originalPrice: 150,
    description:
      "Difusor decorativo com design moderno. Ideal para perfumar e valorizar sua decoração.",
    image: difusorBloomImage,
    category: "decor",
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Bella Rose",
    slug: "bella-rose",
    price: 80,
    description:
      "Vela em formato de rosa. Um toque romântico e encantador para sua decoração.",
    image: bellaRoseImage,
    category: "decor",
    inStock: true,
  },
  {
    id: "5",
    name: "Tríade Refah",
    slug: "triade-refah",
    price: 100,
    description:
      "Conjunto com três velas de diferentes tamanhos. Perfeito para composições elegantes e modernas.",
    image: triadeRefahImage,
    category: "decor",
    inStock: true,
  },
  {
    id: "6",
    name: "Difusora Refah",
    slug: "difusora-refah",
    price: 158,
    description:
      "Difusor com palitos decorativos. Elegância e perfume suave em um só item.",
    image: difusoraRefahImage,
    category: "decor",
    inStock: true,
  },
  {
    id: "7",
    name: "Conjunto Solaris",
    slug: "conjunto-solaris",
    price: 168,
    originalPrice: 182,
    description:
      "Conjunto com difusor e velas decorativas sobre bandeja. Um toque de elegância e conforto para qualquer ambiente.",
    image: conjuntoSolarisImage,
    category: "decor",
    inStock: true,
    featured: true,
  },
  {
    id: "8",
    name: "Eterno Bouquet",
    slug: "eterno-bouquet",
    price: 186,
    description:
      "Arranjo de flores secas com pote decorativo. Um detalhe delicado e atemporal para o lar.",
    image: eternoBouquetImage,
    category: "decor",
    inStock: true,
  },
  {
    id: "9",
    name: "Disco Niemeyer",
    slug: "disco-niemeyer",
    price: 210,
    description:
      "Escultura circular inspirada na arquitetura modernista brasileira do famoso arquiteto Oscar Niemeyer.",
    image: discoNiemeyerImage,
    category: "decor",
    inStock: true,
  },
  {``
    id: "10",
    name: "Gota Decor",
    slug: "gota-decor",
    price: 138,
    description:
      "Peça artesanal em formato de gota perfeita para compor nichos e estantes.",
    image: gotaDecorImage,
    category: "decor",
    inStock: true,
  },
  {
    id: "11",
    name: "Lunia",
    slug: "lunia",
    price: 142,
    description:
      "Vela de formato circular e design clean. Ideal para compor ambientes modernos e aconchegantes.",
    image: luniaImage,
    category: "decor",
    inStock: true,
  },
  {
    id: "12",
    name: "Serenita",
    slug: "serenita",
    price: 142,
    description:
      "Vela decorativa em formato de folha com pote de apoio. Transmite calma e harmonia ao ambiente.",
    image: serenitaImage,
    category: "decor",
    inStock: true,
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured).slice(0, 3);
};

export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug);
};
