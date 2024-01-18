import mongoose from 'mongoose'

const Schema = mongoose.Schema

const weatherSchema = new Schema({
  cityName: String,
  weatherIcon: String,
  currentTempInK: Number
  
}, {
  timestamps: true,
})

const Weather = mongoose.model('Weather', weatherSchema)

export {
  Weather
}
