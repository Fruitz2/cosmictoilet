import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiquidGradient from "@/components/LiquidGradient";
import { getStrings, getLinks, getMarkdownContent } from "@/lib/content-loader";

export default function TokenPage() {
  const strings = getStrings();
  const links = getLinks();
  const { content } = getMarkdownContent("tokenomics.md");

  return (
    <>
      <LiquidGradient />
      <Header strings={strings} links={links} />
      
      <main id="main-content" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }}
          />
        </div>
      </main>
      
      <Footer strings={strings} />
    </>
  );
}
