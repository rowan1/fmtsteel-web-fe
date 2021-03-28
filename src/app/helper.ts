export const readImageFromBuffer=(file:any)=>{
    const buffer = file.data
    const b64 = new Buffer(buffer).toString('base64')
    return b64;
  }