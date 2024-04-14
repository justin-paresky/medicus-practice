import GlobalFooter from '../GlobalFooter';

import GlobalHeader from '@/components/GlobalHeader';
import ResponsiveContainer from '@/components/ResponsiveContainer';
import { createClient } from '@/prismicio';

export default async function Main({ children }: { children: React.ReactNode }) {
  const client = createClient();
  const header = await client.getSingle('global_header');
  const footer = await client.getSingle('global_footer');
  const footerPopup = await client.getSingle('footer_popup');

  return (
    <>
      <GlobalHeader {...header.data} />
      <div className="pt-[96px]">
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
      <GlobalFooter {...footer.data} footerPopup={footerPopup.data} />
    </>
  );
}
