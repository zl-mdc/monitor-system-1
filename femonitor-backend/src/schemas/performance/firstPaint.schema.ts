import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class FirstPaint {
  @Prop({ type: String, required: true })
  entryType: string;
  
  @Prop({ type: String, required: true })
  pageURL: string;
}

export const FirstPaintSchema = SchemaFactory.createForClass(FirstPaint);