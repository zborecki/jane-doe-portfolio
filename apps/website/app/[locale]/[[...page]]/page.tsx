import { getTranslations } from 'next-intl/server';

const Page = async () => {
  const t = await getTranslations();

  return (
    <main>
      {t('common.hello')}
    </main>
  );
};

export default Page;
