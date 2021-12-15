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

export const fetchAsyncCommodities = createAsyncThunk(
  'commodities/fetchCommodities',
  async ({ start, end }: fetchMoviesParams) => {
    const yearArr = makeYearRangeArray(start, end)
    const obj: Commodities = {
      commodities: {},
    }
    console.log(yearArr)
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
        [record.fields.date.substring(0, record.fields.date.indexOf('-'))]: record.fields.price_index,
      }
    })

    console.log(obj)
    return obj
  }
)

interface Commodities {
  commodities: {
    [name: string]: {
      [year: string]: number
    }
  }
}

const initialState: Commodities = {
  commodities: {},
}

export const commoditiesSlice = createSlice({
  name: 'commodities',
  initialState,
  reducers: {
    agregarCommodities: (state, action: PayloadAction<Commodities>) => {
      state.commodities = action.payload.commodities
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCommodities.pending, () => {
      console.log('pending')
    })
    builder.addCase(fetchAsyncCommodities.fulfilled, (state, { payload }) => {
      console.log('fullfilled')
      return { ...state, commodities: payload.commodities }
    })
    builder.addCase(fetchAsyncCommodities.rejected, () => {
      console.log('rejected')
    })
  },
})

export const { agregarCommodities } = commoditiesSlice.actions

export default commoditiesSlice.reducer
