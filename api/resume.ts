import { readFileSync } from 'fs';

const handler = async (_req, res) => {
  const pdf = readFileSync('resume.pdf')
  res.status(200)
    .type('application/pdf')
    .send(pdf)
})

export default handler;
