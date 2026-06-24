import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { nip05, nip19 } from "nostr-tools";

import Layout from "@habla/layouts/Wide";

const Nip05Address = dynamic(
  () => import("@habla/components/nostr/Nip05Address"),
  {
    ssr: false,
  }
);

export default function Profile() {
  const router = useRouter();
  const { nip05, slug } = router.query;
  return (
    <Layout>
      <Nip05Address key={`${nip05}-${slug}`} identifier={slug} query={nip05} />
    </Layout>
  );
}
