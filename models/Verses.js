import db from "./Model.js"

export async function verses(req) {
  let { texto } = req.query
  console.log(req.query)
  if (texto) {
    let data = req.params;
    if (data) {
      console.log(data)
      try {
        const book = await db('versiculos').where(data).where('ver_texto','like',`%${texto}%`);
        return {
          success: true,
          status: 200,
          data: book
        }
      } catch (error) {
        return {
          success: false,
          status: 500,
          data: error
        }
      }
    } else {
      return {
        success: false,
        status: 400,
        data: 'Rota não existe'
      }
    }
  } else {
    let data = req.params;
    if (data) {
      console.log(data)
      try {
        const book = await db('versiculos').where(data);
        return {
          success: true,
          status: 200,
          data: book
        }
      } catch (error) {
        return {
          success: false,
          status: 500,
          data: error
        }
      }
    } else {
      return {
        success: false,
        status: 400,
        data: 'Rota não existe'
      }
    }
  }

}
