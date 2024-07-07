import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb://praveenrajthomas:NstarsYWbRbW6Wcm@ac-8zu7jks-shard-00-00.vggg8kt.mongodb.net:27017,ac-8zu7jks-shard-00-01.vggg8kt.mongodb.net:27017,ac-8zu7jks-shard-00-02.vggg8kt.mongodb.net:27017/portfolio?replicaSet=atlas-gsxuqs-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Db connected");
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
