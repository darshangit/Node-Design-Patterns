var repo = function () {

    var get = function(id) {
        console.log('Getting Task ' + id);

        return {
            name: 'new task from DB'
        }
    }

    var save =function(task) {
        console.log('Saving : ' + task.name + ', to Database');
    }

    return {
        get: get
,       save: save
    }
}

module.exports = repo();