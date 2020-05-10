import mongoose, { Document, Schema } from 'mongoose'

type Schedule = Document & {
    code: string;
    name: string;
    classroom: string;
    class: string;
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
    class: {
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
    class: this.class,
    period: this.period,
    schedule: {
      day: this.day,
      hour: this.hour
    }
  }
}

export default mongoose.model<Schedule>('Schedule', ScheduleSchema)
