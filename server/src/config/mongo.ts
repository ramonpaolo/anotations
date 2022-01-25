import mongoose from 'mongoose'

const URL_MONGO_DB = 'mongodb://root:password@mongodb:27017/?authSource=admin'

export default async function connectionMongoDb(): Promise<void> {
    await mongoose.connect(URL_MONGO_DB).then(() => console.log('Success connect in mongodb')).catch((e) => console.log(e))
} 