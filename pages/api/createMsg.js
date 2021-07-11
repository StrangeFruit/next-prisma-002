import prisma from '../../lib/prisma';

export default async function handler(req, res) {
   if(req.method !== 'POST'){
       return res.status(405).json({message: "Method no allowed"})
   }
  
   const messageData = JSON.parse(req.body);

   const savedContact = await prisma.message.create({
       data:messageData
   })

    res.status(200).json(savedContact)
  }
  