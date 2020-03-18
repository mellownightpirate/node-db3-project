// select
// scheme_name,
// step_number,
// instructions
// from steps
// join schemes
//   on schemes.id = steps.scheme_id
// where schemes.id - 2
// order by step_number;

// knex('users)
//     .join('contacts', 'users.id', '=', 'contacts.user_id')
//     .select('users.id', 'contacts.phone')

// db('steps')
//     .where('schemes.id', id)
//     .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
//     .select('scheme_name', 'step_number', '')
const db = require("../data/db-config");

function find() {
  return db("schemes");
}

function findById(id) {
    return db("schemes")
      .where({ id: id })
      .first();
  }

function findSteps(id) {
  return db("steps")
    .join("schemes", "steps.scheme_id", "schemes.id")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where({ scheme_id: id })
    .orderBy("steps.step_number");
}

function add(scheme) {
    try {
      const [id] = await db("schemes").insert(scheme);
      return findById(id);
    } catch (error) {
      console.log(error);
    }
  }

function update(changes, id) {
    try {
      await db("schemes")
        .where({ id: id })
        .update(changes);
      return findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  function remove(id) {
    return db("schemes")
      .where({ id: id })
      .delete();
  }

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
