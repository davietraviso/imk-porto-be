module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("article", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING
    },
    referenceLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    referenceTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    referenceDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    referenceImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  });

  return Article;
};
