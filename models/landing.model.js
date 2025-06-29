module.exports = (sequelize, DataTypes) => {
  const Landing = sequelize.define("landing", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtitle: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    github: {
      type: DataTypes.STRING
    },
    linkedin: {
      type: DataTypes.STRING
    },
    xdotcom: {
      type: DataTypes.STRING
    },
    youtube: {
      type: DataTypes.STRING
    },
    resumeLink: {
      type: DataTypes.STRING
    },

    // Tentang section
    tentangText: { type: DataTypes.TEXT },
    pengalaman: { type: DataTypes.STRING },
    proyekCount: { type: DataTypes.STRING },
    layanan: { type: DataTypes.STRING },

    // Skills section (as JSON string)
    skills: {
      type: DataTypes.TEXT,
      get() {
        const rawValue = this.getDataValue('skills');
        try {
          return JSON.parse(rawValue);
        } catch (e) {
          return [];
        }
      },
      set(value) {
        this.setDataValue('skills', JSON.stringify(value));
      }
    },

  });

  return Landing;
};
