import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { decodeNrelay } from "@habla/nostr";
import Layout from "@habla/layouts/Wide";
import Metadata from "@habla/components/Metadata";
const Relay = dynamic(() => import("@habla/components/nostr/Relay"), {
  ssr: false,
});

export default function RelayPage() {
  const router = useRouter();
  const { nrelay } = router.query;
  const relay = decodeNrelay(nrelay);
  const metadata = {
    title: relay,
  };
  return (
    <>
      <Metadata metadata={metadata} />
      <Layout>
        {relay ? <Relay key={relay} relay={relay} /> : null}
      </Layout>
    </>
  );
}
