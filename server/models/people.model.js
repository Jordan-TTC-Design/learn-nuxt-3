import mongoose from 'mongoose';

// people schema
const PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: String,
  },
});

const People = mongoose.model('jordan-test-nuxt3', PeopleSchema, 'people');

// people model
export default People;
