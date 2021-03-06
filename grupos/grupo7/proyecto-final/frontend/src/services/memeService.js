import axios from "axios";

export default class MemeService {
  static ultimoError;

  static async getMemes(pagina, categoria, usuario) {
    if (!categoria) categoria = "";
    if (!pagina) pagina = 1;

    const options = {
      url: process.env.REACT_APP_API_URL + "memes",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      params: {
        pagina,
        categoria,
        usuario,
      },
    };
    try {
      const response = await axios(options);
      if (response.data.result) {
        return {
          result: true,
          memes: response.data.memes,
          paginas: response.data.memes.length > 0 ? 100 : 0,
          mensaje: "",
        };
      } else {
        return {
          result: false,
          memes: [],
          paginas: 0,
          mensaje: "Error en API",
        };
      }
    } catch (error) {
      return {
        result: false,
        memes: [],
        paginas: 0,
        mensaje: "Error en API",
      };
    }
  }

  static async getMeme(id, usuario) {
    const options = {
      url: process.env.REACT_APP_API_URL + "memes/" + id,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      params: {
        usuario,
      },
    };
    try {
      const response = await axios(options);
      if (response.data.result) {
        return response.data.meme;
      } else {
        this.ultimoError = response.data.message;
        return null;
      }
    } catch (error) {
      this.ultimoError = error;
      return null;
    }
  }
}
