import { useAppDispatch, useAppSelector } from '@hooks/appHooks'
import { fetchAsyncCommodities } from '@store/commoditiesSlice'
import React, { createContext, useEffect, useMemo, useState } from 'react'

interface ProviderProps {
  children: React.ReactNode
}

export interface CommoditiesRender {
  name: string
  values: {
    year: string
    value: number | null
  }[]
}

const initialState = {
  start: '',
  end: '',
  error: '',
  isLoading: false,
}

interface SearchContextProps {
  isLoading: boolean
  start: string
  end: string
  error: string
  commodities: CommoditiesRender[]
  handleDateChange: (key: string, value: string) => void
  handleSubmit: () => void
}

const SearchContext = createContext<SearchContextProps>({} as SearchContextProps)
export default SearchContext

export const SearchContextProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState<typeof initialState>(initialState)
  const { end, error, start, isLoading } = state
  const dispatch = useAppDispatch()
  const commodities = useAppSelector((state) => state.commodities)
  const commoditiesArr = useMemo(() => {
    console.log('running memo')
    const keys: string[] = Object.keys(commodities.commodities)

    const arr: CommoditiesRender[] = keys.map((key) => {
      const yearKeys: string[] = Object.keys(commodities.commodities[key])
      return {
        name: key,
        values: yearKeys.map((yearKey) => ({ year: yearKey, value: commodities.commodities[key][yearKey] })),
      }
    })
    console.log(arr)
    return arr
  }, [commodities])

  useEffect(() => {
    if (commodities.error !== '') {
      setState((prevState) => ({ ...prevState, error: commodities.error, isLoading: false }))
    } else {
      setState((prevState) => ({ ...prevState, isLoading: false }))
    }
  }, [commodities])

  const handleDateChange = (key: string, value: string) => {
    if (isNaN(+value) || value.indexOf('.') !== -1 || value.indexOf(' ') !== -1) {
      return
    }
    setState((prev) => ({ ...prev, [key]: value, error: '' }))
  }
  const handleSubmit = () => {
    if (+start > +end) {
      setState((prev) => ({ ...prev, error: 'End date must be greater than start date' }))
      return
    }
    setState((prev) => ({ ...prev, isLoading: true }))
    dispatch(fetchAsyncCommodities({ start: state.start, end: state.end }))
  }

  return (
    <SearchContext.Provider
      value={{ start, end, error, handleDateChange, handleSubmit, commodities: commoditiesArr, isLoading }}
    >
      {children}
    </SearchContext.Provider>
  )
}
