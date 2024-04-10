import db from "./Model.js"

export  async function  books(){
  try {
    const books = await db('livros');
    return {
      success:true,
      status:200,
      data:books
    }
  } catch (error) {
    return {
      success:false,
      status:500,
      data:error
    }
  }
  
}
export  async function  book(req){
  let data = req.params;
  if(data){
    console.log(data)
    try {
      const book = await db('livros').where(data).orWhere({liv_nome:data.liv_abreviado});
      return{
        success:true,
        status:200,
        data:book
      }
    } catch (error) {
      return {
        success:false,
        status:500,
        data:error
      }
    }
  }else{
    return {
      success:false,
      status:400,
      data:'Rota não existe'
    }
  }
 
  
}