import { pageMetadata } from "@/utils/seo";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Omit<Props, "children">) {
  return pageMetadata(params, "services");
}

export default function Layout({ children }: Props) {
  return children;
}
