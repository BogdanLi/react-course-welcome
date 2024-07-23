import ExtensionItem from '@/components/extensions/ExtensionItem';

export function generateMetadata() {
  return {
    title: 'Расширения',
    description: 'Все нужные расширения для VS Code',
    openGraph: {
      title: 'Расширения',
      description: 'Все нужные расширения для VS Code',
    },
  };
}

const ExtensionsPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 px-8 py-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-8">
        {Array.from(Array(20).keys()).map((el) => (
          <ExtensionItem
            href="/"
            title="Title"
            description="
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        aperiam ab quibusdam fuga?"
            key={el}
          />
        ))}
      </div>
    </div>
  );
};

export default ExtensionsPage;
