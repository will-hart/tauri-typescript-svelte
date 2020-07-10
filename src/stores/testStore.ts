import { buildImmerActionStore } from './immerActionStore'

const initial = {
  tested: 0,
}

const store = buildImmerActionStore<typeof initial>(
  {
    test(state) {
      state.tested = state.tested + 1
    },
  },
  initial,
)

export default store
