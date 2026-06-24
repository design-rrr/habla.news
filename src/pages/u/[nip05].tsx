import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { Text } from "@chakra-ui/react";
import { nip05 } from "nostr-tools";

import Layout from "@habla/layouts/Wide";

const NProfile = dynamic(() => import("@habla/components/nostr/NostrAddress"), {
  ssr: false,
});

export default function Profile() {
  const router = useRouter();
  const { nip05 } = router.query;
  return (
    <Layout>
      <NProfile query={nip05} key={nip05} />
    </Layout>
  );
}
