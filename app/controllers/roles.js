const db = require('../models');

const rolesCtrl = {
  /**
   * Get all roles
   * Route: GET: /roles
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} no returns
   */
  index(req, res) {
    db.Role.findAll().then((roles) => {
      res.send(roles);
    });
  },

  /**
   * Create a role
   * Route: POST: /roles
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} no returns
   */
  create(req, res) {
    db.Role.create(req.body)
      .then((role) => {
        res.status(201).send(role);
      })
      .catch((err) => {
        res.status(400).send(err.errors);
      });
  },

  /**
   * Get a particular role
   * Route: GET: /roles/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void|Response} response object or void
   */
  show(req, res) {
    db.Role.findById(req.params.id)
      .then((role) => {
        if (!role) {
          return res.status(404)
            .send({ message: `Role with id: ${req.params.id} not found` });
        }

        res.send(role);
      });
  },

  /**
   * Update a particular role
   * Route: PUT: /roles/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response|void} response object or void
   */
  edit(req, res) {
    db.Role.findById(req.params.id)
      .then((role) => {
        if (!role) {
          return res.status(404)
            .send({ message: `Role with id: ${req.params.id} not found` });
        }

        role.update(req.body)
          .then((updatedRole) => {
            res.send(updatedRole);
          });
      });
  },

  /**
   * Delete a particular role
   * Route: DELETE: /roles/:id
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response|void} response object or void
   */
  destroy(req, res) {
    db.Role.findById(req.params.id)
      .then((role) => {
        if (!role) {
          return res.status(404)
            .send({ message: `Role with id: ${req.params.id} not found` });
        }

        role.destroy()
          .then(() => res.send({ message: 'Role deleted successfully.' }));
      });
  }
};

module.exports = rolesCtrl;
