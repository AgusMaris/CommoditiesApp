import axios from 'axios'

export interface IResponse {
  records: IRecord[]
}

export interface IRecord {
  datasetid: string
  recordid: string
  fields: Fields
}

export interface Fields {
  date: string
  price_index: number
  commodity: string
}

export default axios.create({
  timeout: 6000,
  baseURL:
    'https://data.opendatasoft.com/api/records/1.0/search/?dataset=commodity-prices%40public&q=&facet=date&facet=commodity&refine.date=',
})
