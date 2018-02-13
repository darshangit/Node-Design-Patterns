let myrepo = require('./repo')

let taskHandler = function () {
    return {
        save : function() {
            myrepo.save('Hi fro taskhandler')
        }
    }
}

module.exports = taskHandler();