module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define("Character", {
    characterId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    jobId: DataTypes.INTEGER,
  }, {
    updatedAt: false,
    underscored: true,
    tableName: 'characters'
  });

  Character.associate = (models) => {
    Character.belongsTo(models.Job, {
      foreignKey: "jobId",
      as: "job"
    });
  };

  return Character;
};