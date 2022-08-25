module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define("Job", {
    jobId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    jobTitle: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'jobs'
  });

  Job.associate = (models) => {
    Job.hasMany(models.Character, {
      foreignKey: "jobId",
      as: "characters"
    });
  };

  return Job;
};