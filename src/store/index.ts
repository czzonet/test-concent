import { run } from "concent";
import { produce } from "immer";

export const initStore = () =>
  run({
    counter: {
      state: {
        count: 1,
      },
      reducer: {
        inc(payload, state) {
          const res = produce(state, (d) => {
            d.count += 1;
          });
          return res;
        },
      },
    },
  });
