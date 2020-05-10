import mongoose, { Document, Schema } from 'mongoose'

type Schedule = Document & {
    code: string;
    name: string;
    classroom: string;
    discipline: string;
    class: string;
    category: string;
    day: string;
    hour:string;
    period: string;
    completeSchedule(): object
}

const ScheduleSchema = new Schema(
  {
    code: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    name: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    classroom: {
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
      unique: false,
      required: true
    },
    class: {
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
    },
    period: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    }
  }
)

ScheduleSchema.methods.completeSchedule = function (): object {
  return {
    name: this.name,
    code: this.code,
    classroom: this.classroom,
    discipline: this.discipline,
    class: this.class,
    category: this.category,
    schedule: {
      day: this.day,
      hour: this.hour
    },
    period: this.period
  }
}

export default mongoose.model<Schedule>('Schedule', ScheduleSchema)
