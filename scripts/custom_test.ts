import { getQueryClient } from "./util";

const run = async () => {
  const queryClient = await getQueryClient();
  queryClient
    .queryContractSmart(
      "osmo1cukxwvaeewnul4un7h5wc3m6kwmsheestvlmryrlyhhsleqsqfvstzxjy3",
      {
        query_global_stats: {},
      }
    )
    .then((res) => {
      console.log(res);
    });
};

run();
