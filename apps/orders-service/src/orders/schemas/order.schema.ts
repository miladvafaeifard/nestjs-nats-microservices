import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  userId: string;

  @Prop({ required: true, type: [mongoose.Schema.Types.ObjectId] })
  products: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);