import prisma from '../../lib/prisma';

export default async function handler(req, res) {
   if(req.method !== 'GET'){
       return res.status(405).json({message: "Method no allowed"})
   }
  
   const message = await prisma.message.findMany();
   
    res.status(200).json(message)
  }

