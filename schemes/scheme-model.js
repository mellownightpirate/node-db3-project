// select
// scheme_name,
// step_number,
// isntructions
// from steps
// join schemes
//   on schemes.id = stes.scheme_id
// where schemes.id - 2
// order by step_number;

// knex('users)
//     .join('contacts', 'users.id', '=', 'contacts.user_id')
//     .select('users.id', 'contacts.phone')

db('steps')
    .where('schemes.id', id)
    .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
    .select('scheme_name', 'step_number', '')