const Task = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    description: DataTypes.STRING,
  });

  return Task;
};

module.exports = Task;