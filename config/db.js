import mongoose from 'mongoose';

const connectToDB = async () => {
     try {
         //  await mongoose.connect(process.env.LOCAL_MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
         await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
          console.log('Database Connected');
     } catch (e) {
          console.log('Database Connection Error:', e);
          process.exit(1);
     }
};

export default connectToDB;
