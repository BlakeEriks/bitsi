import { atom, useRecoilState } from 'recoil'

const viewState = atom({
    key: 'view',
    // get initial state from local storage to enable user to stay logged in
    default: 'dashboard'
})

export const useViewState = () => {
    return useRecoilState(viewState)
}