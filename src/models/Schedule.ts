import mongoose, { Document, Schema } from 'mongoose'

type Schedule = Document & {
    name: string;
    classrom: string;
    discipline: string;
    class: string;
    teacher: string;
    category: string;
    newPPCperiod: string;
    oldPPCperiod: string;
    day: string;
    hour:string
}

const ScheduleSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    },
    classrom: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    discipline: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    },
    class: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    teacher: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    category: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    newPPCperiod: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    oldPPCperiod: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    day: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    hour: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    }
  }
)

export default mongoose.model<Schedule>('Schedule', ScheduleSchema)
