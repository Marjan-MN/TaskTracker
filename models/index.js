const User =  require('./user');
const Tasks = require('./Tasks');
const Tasklist = require('./Tasklist');

Tasks.belongsTo(User, {
  foreignKey: 'user_id'
});

Tasklist.belongsTo(User, {
   foreignKey: 'user_id'
});
   

Tasks.belongsTo(Tasklist, {
  foreignKey: 'task_id'
});




module.exports = { User, Tasks, Tasklist};
