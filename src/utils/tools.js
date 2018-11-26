const Tools = {
  mapLanguage: (language) => {
    if (!language) {
      return 'en';
    }

    switch (language) {
      case 'en-us':
        return 'en';
      default:
        return language;
    }
  },
};

module.exports = Tools;
