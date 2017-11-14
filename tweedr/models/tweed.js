const db = require('../db/config');

const Tweed = {};

Tweed.findAll = () => {
  return db.query(
    `SELECT * FROM tweeds SORT BY id ASC`
  );
};

Tweed.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM tweeds
    WHERE id = $1`, 
    [id]
  );
};

Tweed.create = (tweed) => {
  return db.one(
    `
    INSERT INTO tweeds (tweed_text, tweed_time)
    VALUES ($1, $2)
    RETURNING *`,
    [tweed.tweed, tweed.time]
  );
};

Tweed.update = (tweed, id) => {
  return db.one(
    `
      UPDATE tweeds SET
      tweed_text = $1
      WHERE id = $2
      RETURNING *
    `, [tweed.tweed, id]
  );
};

Tweed.destroy = id => {
  return db.none(
    `
      DELETE FROM tweeds
      WHERE id = $1
    `, [id]
  );
};

module.exports = Tweed;