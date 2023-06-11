import peopleModel from '~/server/models/people.model';

export default defineEventHandler(async event => {
  // 讀取 request body
  const body = await readBody(event);
  console.log(body);
  const { name, email, age } = body;
  // 建立一筆新的資料
  const people = new peopleModel({
    name,
    email,
    age,
  });
  // 儲存資料
  await people.save();
  // 回傳成功
  return {
    success: true,
    data: people,
  };
});
