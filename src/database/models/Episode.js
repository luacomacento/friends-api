module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define("Episode", {
    episodeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'episodes'
  });

  return Episode;
};