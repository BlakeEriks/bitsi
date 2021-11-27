import { atom, useRecoilState } from 'recoil'

const chartState = atom({
    key: 'chartState',
    default: {mode: 'portfolio'}
})

export const useChartState = () => {
    return useRecoilState(chartState)
}