import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import commoditiesApi, { IRecord, IResponse } from '@services/commoditiesApi'
import { AxiosResponse } from 'axios'

interface fetchMoviesParams {
  start: string
  end: string
}

const makeYearRangeArray = (start: string, end: string) => {
  const arr: string[] = []
  for (let i = +start; i <= +end; i++) {
    arr.push(i.toString())
  }
  return arr
}

function roundTwoDec(num: number) {
  return Math.round(num * 100) / 100
}

export const fetchAsyncCommodities = createAsyncThunk(
  'commodities/fetchCommodities',
  async ({ start, end }: fetchMoviesParams) => {
    const yearArr = makeYearRangeArray(start, end)
    const obj: Commodities = {
      commodities: {},
      error: '',
      isLoading: false,
    }
    const responses: IRecord[] = []
    await Promise.all(
      yearArr.map(async (year) => {
        const res: AxiosResponse<IResponse> = await commoditiesApi.get(year)
        responses.push(...res.data.records)
      })
    )
    responses.forEach((record) => {
      obj.commodities[record.fields.commodity] = {
        ...obj.commodities[record.fields.commodity],
        [record.fields.date.substring(0, record.fields.date.indexOf('-'))]: roundTwoDec(record.fields.price_index),
      }
    })

    //Agrego los años que faltan como vacios
    Object.keys(obj.commodities).forEach((commodity) => {
      const years = Object.keys(obj.commodities[commodity])
      const missingYears = makeYearRangeArray(start, end).filter((year) => !years.includes(year))
      missingYears.forEach((year) => {
        obj.commodities[commodity][year] = null
      })
    })

    return obj
  }
)

interface Commodities {
  commodities: {
    [name: string]: {
      [year: string]: number | null
    }
  }
  error: string
  isLoading: boolean
}

const initialState: Commodities = {
  commodities: {},
  error: '',
  isLoading: false,
}

export const commoditiesSlice = createSlice({
  name: 'commodities',
  initialState,
  reducers: {
    vaciarListaCommodities: (state) => {
      state.commodities = {}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCommodities.pending, (state) => {
      return { ...state, isLoading: true }
    })
    builder.addCase(fetchAsyncCommodities.fulfilled, (state, { payload }) => {
      return { commodities: payload.commodities, isLoading: false, error: '' }
    })
    builder.addCase(fetchAsyncCommodities.rejected, (state) => {
      return { ...state, error: 'Server error', isLoading: false }
    })
  },
})

export const { vaciarListaCommodities } = commoditiesSlice.actions

export default commoditiesSlice.reducer
