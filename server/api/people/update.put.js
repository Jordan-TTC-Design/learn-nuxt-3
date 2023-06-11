import peopleModel from '~/server/models/people.model';

export default defineEventHandler(async event => {
  const body = await readBody(event);
  const { name, _id } = body;
  const people = await peopleModel.findOneAndUpdate(
    { _id },
    {
      name,
    },
    { new: true },
  );
  console.log(people);
  await people.save();
  return {
    success: true,
  };
});
