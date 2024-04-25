// import EmailTemplate from '../../_components/EmailTemplate/EmailTemplate';
// import { Resend } from 'resend';


// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

// export async function POST(to, subject) {
//   try {
//     const data = await resend.emails.send({
//       from: 'dejanmaric259@gmail.com',
//       to,
//       subject,
//       react: EmailTemplate(),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }