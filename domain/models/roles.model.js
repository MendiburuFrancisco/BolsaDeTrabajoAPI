const { attributes } = require("structure");

const Roles = attributes({
  id: {
    type: Number,
    default: 0,
    // alowNull: false,
  },
  name: {
    type: String,
    alowNull: false,
  },
  description: {
    type: String,
    alowNull: true,

  },
  created_at: {
    type: Date,
    nullable: true,
  },
  updated_At: {
    type: Date,
    nullable: true,
  },
 
})(class Roles{})

module.exports = Roles;
