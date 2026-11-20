import { ServiceBreadcrumbJsonLd } from "@/components/common/json-ld";
import { pageMetadata } from "@/utils/seo";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Omit<Props, "children">) {
  return pageMetadata(params, "equipment");
}

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <>
      <ServiceBreadcrumbJsonLd locale={locale} page="equipment" />
      {children}
    </>
  );
}
