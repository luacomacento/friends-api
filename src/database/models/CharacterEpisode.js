module.exports = (sequelize, DataTypes) => {
  const CharacterEpisode = sequelize.define("CharacterEpisode", {
    characterId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
    episodeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'characters_episodes'
  });

  CharacterEpisode.associate = (models) => {
    models.Character.belongsToMany(models.Episode, {
      through: CharacterEpisode,
      as: 'episodes',
      foreignKey: 'characterId',
      otherKey: 'episodeId',
    });

    models.Episode.belongsToMany(models.Character, {
      through: CharacterEpisode,
      as: 'characters',
      foreignKey: 'episodeId',
      otherKey: 'characterId',
    });
  }

  return CharacterEpisode;
};