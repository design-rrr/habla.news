import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Layout from "@habla/layouts/Wide";

const HablaPost = dynamic(() => import("@habla/components/nostr/HablaPost"), {
  ssr: false,
});

export default function Post() {
  const router = useRouter();
  const { handle, slug } = router.query;

  return (
    <Layout>
      <HablaPost pubkey={handle as string} slug={slug as string} />
    </Layout>
  );
}
