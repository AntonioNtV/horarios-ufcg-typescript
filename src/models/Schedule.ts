import mongoose, { Document, Schema } from 'mongoose'

type Schedule = Document & {
    code: string;
    name: string;
    class: string;
    period: string;
    schedule: object;
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
    period: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true
    },
    schedule: [
      {
        type: String,
        required: false
      }
    ]
  }
)

ScheduleSchema.methods.completeSchedule = function (): object {
  return {
    name: this.name,
    code: this.code,
    class: this.class,
    period: this.period,
    schedule: this.schule
  }
}

export default mongoose.model<Schedule>('Schedule', ScheduleSchema)
