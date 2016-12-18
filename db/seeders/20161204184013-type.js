module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Types', [
      {
        id: 1,
        title: 'legal',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        title: 'report',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        title: 'financial',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('Types', {
      id: [1, 2, 3]
    });
  }
};
