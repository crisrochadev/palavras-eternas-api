import db from "./Model.js"

export default async function  version(){
  try {
    const versions = await db('versoes');
    return {
      success:true,
      status:200,
      data:versions
    }
  } catch (error) {
    return {
      success:false,
      status:500,
      data:error
    }
  }
  
}