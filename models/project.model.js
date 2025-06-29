module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    link: {
      type: DataTypes.STRING
    }
  });

  return Project;
};
