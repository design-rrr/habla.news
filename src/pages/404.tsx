import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "@habla/layouts/Wide";
import NotFound from "@habla/components/NotFound";
import Metadata from "@habla/components/Metadata";

const DYNAMIC_PREFIXES = ["/p/", "/a/", "/e/", "/n/", "/c/", "/r/", "/t/", "/u/"];

export default function Error() {
  const router = useRouter();
  const redirected = useRef(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    if (redirected.current) return;
    const asPath = router.asPath;
    const isDynamicRedirect = DYNAMIC_PREFIXES.some((p) => asPath.startsWith(p));
    if (isDynamicRedirect) {
      redirected.current = true;
      router.replace(asPath);
    }
  }, [router]);

  const metadata = {
    title: t("oops"),
  };
  return (
    <>
      <Metadata metadata={metadata} />
      <Layout>
        <NotFound />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}
