var repo = function() {
    let called = 0;

    let save = function(task) {
        called++;
        console.log('saving '+ task + ' Called' + called + 'times');
    }
    console.log('new');

    return {
        save: save
    }
}
module.exports = repo(); // making it retun function resukts in caching making sunsequent calls singleton