import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { ChevronLeft } from 'lucide-react';

interface TextItem {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

const textsData: TextItem[] = [
  {
    id: 1,
    title: 'Sobre as pinturas de Estevan Pelli',
    author: 'Pedro Koberle',
    date: 'Junho 2025',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.`
  },
  {
    id: 2,
    title: 'A poética do corpo em movimento',
    author: 'Maria Santos',
    date: 'Março 2025',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
  },
  {
    id: 3,
    title: 'Entre o sonho e a vigília',
    author: 'João Oliveira',
    date: 'Dezembro 2024',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`
  }
];

export function Texts() {
  const [selectedText, setSelectedText] = useState<TextItem | null>(null);

  if (selectedText) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => setSelectedText(null)}
            className="flex items-center gap-2 text-[#0000ff] hover:underline mb-8 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>

          {/* Text Title */}
          <h1 className="text-[24px] lg:text-[20px] md:text-[18px] font-bold text-soft-black mb-2">
            {selectedText.title}
          </h1>

          {/* Author and Date */}
          <p className="text-[15px] text-text-secondary mb-8">
            {selectedText.author} — {selectedText.date}
          </p>

          {/* Text Content */}
          <div className="space-y-6 text-[17px] lg:text-[16px] md:text-[15px] leading-[1.7] text-soft-black whitespace-pre-line">
            {selectedText.content}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        {/* Page Title */}
        <h1 className="text-[18px] font-semibold tracking-[0.05em] uppercase text-soft-black mb-8">
          Texts
        </h1>

        {/* Divider */}
        <hr className="border-t border-subtle-border mb-8" />

        {/* Texts List */}
        <div className="space-y-6">
          {textsData.map((text) => (
            <button
              key={text.id}
              onClick={() => setSelectedText(text)}
              className="w-full text-left group"
            >
              <h2 className="text-[20px] lg:text-[18px] md:text-[16px] font-normal text-soft-black group-hover:text-[#0000ff] group-hover:underline transition-all duration-200 mb-1">
                {text.title}
              </h2>
              <p className="text-[14px] text-text-secondary">
                {text.author} — {text.date}
              </p>
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}
