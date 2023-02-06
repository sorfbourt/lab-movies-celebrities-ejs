//  Add your code here
const { Schema, model } = require('mongoose')

const celebSchema = new Schema(
  {
    name: String,
    occupation : String,
    catchPhrase: String
    }
,
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Celebrity = model('Celebrity', celebSchema)

module.exports = Celebrity