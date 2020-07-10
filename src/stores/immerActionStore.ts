// Adapted from https://monad.fi/en/svelte-custom-stores/

import { writable } from 'svelte/store'
import produce, { Immutable } from 'immer'

type StateMutator<T> = (state: T, payload?: any) => T | void

type StoreActions<T> = {
  [key: string]: StateMutator<T>
}

export const buildImmerActionStore = <T>(
  actions: StoreActions<T>,
  initial: T,
) => {
  const store = writable(initial)

  const mappedActions = Object.keys(actions).reduce(
    (acc, actionName: string) => {
      acc[actionName] = (payload: any) =>
        store.update(
          (state) =>
            produce(actions[actionName])(state as Immutable<T>, payload) as T,
        )
      return acc
    },
    {},
  )

  return {
    actions: mappedActions,
    subscribe: store.subscribe,
  }
}
