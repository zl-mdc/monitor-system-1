import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class FirstPaint {
  subtype: string;

  @Prop({ type: String, required: true })
  entryType: string;
    
}

export const FirstPaintSchema = SchemaFactory.createForClass(FirstPaint);