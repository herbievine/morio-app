import { create as createClient, IPFSHTTPClient } from "ipfs-http-client";

const ipfs = (): IPFSHTTPClient => {
  const auth =
    "Basic " +
    Buffer.from(
      process.env.NEXT_PUBLIC_IPFS_ID +
        ":" +
        process.env.NEXT_PUBLIC_IPFS_SECRET
    ).toString("base64");

  return createClient({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });
};

export { ipfs };
