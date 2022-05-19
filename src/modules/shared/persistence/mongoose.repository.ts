import { Model } from 'mongoose';

export abstract class MongooseRepository<T> {
  protected abstract model(): Model<T>;

  protected async persist(id: string, data: T): Promise<void> {
    const model = await this.model();

    const document = { ...data, _id: id, id: undefined };

    await model.updateOne({ _id: id }, { $set: document }, { upsert: true });
  }
}
