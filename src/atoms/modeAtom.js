import { atom } from "recoil";

const modeState = atom({
    key: 'modeState',
    default: 'dark'
})

export { modeState }
