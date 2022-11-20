import {atom} from "recoil"

const AtomKeyEnum = {
  Score: 'Score',
  LeaderboardAllTime: 'LeaderboardAllTime',
  LeaderboardWeek: 'LeaderboardWeek'
} as const
type AtomKey = keyof typeof AtomKeyEnum

export const scoreAtom = atom<number>({
  key: AtomKeyEnum.Score,
  default: 0,
})

// export const groupListAtom = atom<Group[]>({
//   key: 'groupList',
//   default: []
// })
//
// export const participatingGroupAtom = atom<Group | null>({
//   key: 'participatingGroup',
//   default: null
// })
//
// export const localStreamAtom = atom<MediaStream | null>({
//   key: 'localStream',
//   default: null
// })
//
// export const remoteStreamAtom = atom<MediaStream | null>({
//   key: 'remoteStream',
//   default: null
// })
//
// export const callBottomSheetIndexAtom = atom<number>({
//   key: 'callBottomSheetIndex',
//   default: -1
// })
//
// export const userAtom = atom<User | null>({
//   key: 'user',
//   default: null
// })
