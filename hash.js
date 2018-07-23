const sha = require('sha256'
)
module.exports = function(input){
  return sha(input)
}
