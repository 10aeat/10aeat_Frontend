'use client'

import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
  dec: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}))

function Counter() {
  const { count, inc, dec } = useStore()

  return (
    <div>
      <button type="button" onClick={dec}>
        one down
      </button>
      <span> {count} </span>
      <button type="button" onClick={inc}>
        one up
      </button>
    </div>
  )
}

export default Counter
