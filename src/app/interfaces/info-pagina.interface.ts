
export interface InfoPagina {
    titulo?: string;
    email?: string;
    nombre_corto?: string;
    pagina_autor?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    equipo_trabajo?: any[];
}

export interface Equipo {
    frase?: string;
    nombre?: string;
    subtitulo?: string;
    twitter?: string;
    url?: string;
}

export interface Producto {
  categoria: string;
  cod: string;
  titulo: string;
  url: string;
}
