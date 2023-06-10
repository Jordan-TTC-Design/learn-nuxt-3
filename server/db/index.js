import mongoose from 'mongoose';

export default async _nitroApp => {
  try {
    mongoose.set('strictQuery', true); // 嚴格模式
    await mongoose.connect(
      'mongodb+srv://tingchun0131:jordan12345678@jordan-nuxt3.gxjeo9q.mongodb.net/jordan-test-nuxt3',
    );
    console.log('連接 MongoDB');
  } catch (e) {
    console.error('Error MongoDB =>', e);
  }
};
