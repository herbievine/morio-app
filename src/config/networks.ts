import { Network } from "../types/network";

const networks: Network[] = [
  {
    name: "Avalanche",
    chainId: 43114,
    currency: "AVAX",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo=",
    explorer: "https://snowtrace.io/",
    contractAddress: "",
    environment: "production",
    metamaskChainPayload: {
      chainId: "0xA86A",
      chainName: "Avalanche Mainnet",
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://snowtrace.io/"],
    },
  },
  {
    name: "Polygon",
    chainId: 137,
    currency: "MATIC",
    logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOC40IDMzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4LjQgMzMuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4MjQ3RTU7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOSwxMC4yYy0wLjctMC40LTEuNi0wLjQtMi40LDBMMjEsMTMuNWwtMy44LDIuMWwtNS41LDMuM2MtMC43LDAuNC0xLjYsMC40LTIuNCwwTDUsMTYuMwoJCWMtMC43LTAuNC0xLjItMS4yLTEuMi0yLjF2LTVjMC0wLjgsMC40LTEuNiwxLjItMi4xbDQuMy0yLjVjMC43LTAuNCwxLjYtMC40LDIuNCwwTDE2LDcuMmMwLjcsMC40LDEuMiwxLjIsMS4yLDIuMXYzLjNsMy44LTIuMlY3CgkJYzAtMC44LTAuNC0xLjYtMS4yLTIuMWwtOC00LjdjLTAuNy0wLjQtMS42LTAuNC0yLjQsMEwxLjIsNUMwLjQsNS40LDAsNi4yLDAsN3Y5LjRjMCwwLjgsMC40LDEuNiwxLjIsMi4xbDguMSw0LjcKCQljMC43LDAuNCwxLjYsMC40LDIuNCwwbDUuNS0zLjJsMy44LTIuMmw1LjUtMy4yYzAuNy0wLjQsMS42LTAuNCwyLjQsMGw0LjMsMi41YzAuNywwLjQsMS4yLDEuMiwxLjIsMi4xdjVjMCwwLjgtMC40LDEuNi0xLjIsMi4xCgkJTDI5LDI4LjhjLTAuNywwLjQtMS42LDAuNC0yLjQsMGwtNC4zLTIuNWMtMC43LTAuNC0xLjItMS4yLTEuMi0yLjFWMjFsLTMuOCwyLjJ2My4zYzAsMC44LDAuNCwxLjYsMS4yLDIuMWw4LjEsNC43CgkJYzAuNywwLjQsMS42LDAuNCwyLjQsMGw4LjEtNC43YzAuNy0wLjQsMS4yLTEuMiwxLjItMi4xVjE3YzAtMC44LTAuNC0xLjYtMS4yLTIuMUwyOSwxMC4yeiIvPgo8L2c+Cjwvc3ZnPgo=",
    explorer: "https://www.polygonscan.com/",
    contractAddress: "",
    environment: "production",
    metamaskChainPayload: {
      chainId: "0x89",
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "Polygon",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mainnet.maticvigil.com"],
      blockExplorerUrls: ["https://www.polygonscan.com/"],
    },
  },
  {
    name: "Fuji",
    chainId: 43113,
    currency: "AVAX",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo=",
    explorer: "https://testnet.snowtrace.io/",
    contractAddress: "0x66693dC98fe8244291D8a3f70a58174aB9278399",
    environment: "development",
    metamaskChainPayload: {
      chainId: "0xA869",
      chainName: "Avalanche Testnet",
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://testnet.snowtrace.io/"],
    },
  },
  {
    name: "Mumbai",
    chainId: 80001,
    currency: "MATIC",
    logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOC40IDMzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4LjQgMzMuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4MjQ3RTU7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOSwxMC4yYy0wLjctMC40LTEuNi0wLjQtMi40LDBMMjEsMTMuNWwtMy44LDIuMWwtNS41LDMuM2MtMC43LDAuNC0xLjYsMC40LTIuNCwwTDUsMTYuMwoJCWMtMC43LTAuNC0xLjItMS4yLTEuMi0yLjF2LTVjMC0wLjgsMC40LTEuNiwxLjItMi4xbDQuMy0yLjVjMC43LTAuNCwxLjYtMC40LDIuNCwwTDE2LDcuMmMwLjcsMC40LDEuMiwxLjIsMS4yLDIuMXYzLjNsMy44LTIuMlY3CgkJYzAtMC44LTAuNC0xLjYtMS4yLTIuMWwtOC00LjdjLTAuNy0wLjQtMS42LTAuNC0yLjQsMEwxLjIsNUMwLjQsNS40LDAsNi4yLDAsN3Y5LjRjMCwwLjgsMC40LDEuNiwxLjIsMi4xbDguMSw0LjcKCQljMC43LDAuNCwxLjYsMC40LDIuNCwwbDUuNS0zLjJsMy44LTIuMmw1LjUtMy4yYzAuNy0wLjQsMS42LTAuNCwyLjQsMGw0LjMsMi41YzAuNywwLjQsMS4yLDEuMiwxLjIsMi4xdjVjMCwwLjgtMC40LDEuNi0xLjIsMi4xCgkJTDI5LDI4LjhjLTAuNywwLjQtMS42LDAuNC0yLjQsMGwtNC4zLTIuNWMtMC43LTAuNC0xLjItMS4yLTEuMi0yLjFWMjFsLTMuOCwyLjJ2My4zYzAsMC44LDAuNCwxLjYsMS4yLDIuMWw4LjEsNC43CgkJYzAuNywwLjQsMS42LDAuNCwyLjQsMGw4LjEtNC43YzAuNy0wLjQsMS4yLTEuMiwxLjItMi4xVjE3YzAtMC44LTAuNC0xLjYtMS4yLTIuMUwyOSwxMC4yeiIvPgo8L2c+Cjwvc3ZnPgo=",
    explorer: "https://mumbai.polygonscan.com/",
    contractAddress: "0x757922D460a5cFF5774BE6E8896BCd735EcbDa91",
    environment: "development",
    metamaskChainPayload: {
      chainId: "0x13881",
      chainName: "Polygon Testnet",
      nativeCurrency: {
        name: "Polygon",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
  },
];

export { networks };
