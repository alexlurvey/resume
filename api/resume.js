const fs = require('fs');

module.exports = async (_req, res) => {
  const pdf = fs.readFileSync('my_resume.pdf')
  res.status(200)
    .type('application/pdf')
    .send(pdf)
})
