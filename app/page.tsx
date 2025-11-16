import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiquidGradient from "@/components/LiquidGradient";
import SwirlPortal from "@/components/SwirlPortal";
import AmbientWordmark from "@/components/AmbientWordmark";
import TextOrbit from "@/components/TextOrbit";
import KineticType from "@/components/KineticType";
import RollingStrip from "@/components/RollingStrip";
import ReasonRow from "@/components/ReasonRow";
import NarrativeBurst from "@/components/NarrativeBurst";
import BullishMenu from "@/components/BullishMenu";
import CommunityBoard from "@/components/CommunityBoard";
import RoadmapPreview from "@/components/RoadmapPreview";
import UrgencyRibbon from "@/components/UrgencyRibbon";
import MobileBuyDock from "@/components/MobileBuyDock";
import BoostBar from "@/components/BoostBar";
import TextConfetti from "@/components/TextConfetti";
import FlushWipe from "@/components/FlushWipe";
import StickySideBuy from "@/components/StickySideBuy";
import TextUnderline from "@/components/TextUnderline";
import { getStrings, getLinks } from "@/lib/content-loader";
import Image from "next/image";

export default function HomePage() {
  const strings = getStrings();
  const links = getLinks();

  return (
    <>
      <BoostBar />
      <LiquidGradient />
      <AmbientWordmark />
      <Header strings={strings} links={links} />
      <UrgencyRibbon 
        showUrgencyRibbon={strings.showUrgencyRibbon} 
        urgencyMessages={strings.urgencyMessages} 
      />
      
      <main id="main-content" className="relative">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-12 md:py-20">
          <AmbientWordmark text="FLUSH" />
          <TextOrbit />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
            <SwirlPortal>
              <Image
                src="/logo.png"
                alt="Cosmic Toilet"
                width={180}
                height={180}
                className="mx-auto animate-float"
                priority
              />
            </SwirlPortal>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-magenta via-cyan to-magenta bg-clip-text text-transparent animate-shimmer">
              The Cosmic Bowl Never Clogs
            </h1>
            
            <p className="text-lg md:text-xl text-fg/80 max-w-2xl mx-auto leading-relaxed">
              Where bears get flushed and bulls orbit to Valhalla. <br className="hidden md:block" />
              The first intergalactic restroom for true degens.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              {strings.buyEnabled && links.pump && (
                <TextConfetti>
                  <a
                    href={links.pump}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {strings.hero.buyCta}
                  </a>
                </TextConfetti>
              )}
              
              <a
                href={links.tg}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {strings.hero.secondaryCtas[0]}
              </a>
            </div>
          </div>
        </section>

        <RollingStrip messages={strings.strip} />
        
        <section id="why" className="py-12 md:py-20">
          <ReasonRow reasons={strings.reasons} />
        </section>
        
        <FlushWipe />
        
        <section id="lore" className="py-12 md:py-20">
          <NarrativeBurst 
            narrative={strings.narrativeBurst}
            buyCta={strings.hero.buyCta}
            buyEnabled={strings.buyEnabled}
            pumpLink={links.pump}
          />
        </section>
        
        <RollingStrip messages={strings.strip} />
        
        <section id="token" className="py-12 md:py-20">
          <BullishMenu 
            bullishMenu={strings.bullishMenu}
            buyCta={strings.hero.buyCta}
            buyEnabled={strings.buyEnabled}
            pumpLink={links.pump}
          />
        </section>
        
        <FlushWipe />
        
        <section id="roadmap" className="py-12 md:py-20">
          <RoadmapPreview roadmapPreview={strings.roadmapPreview} />
        </section>
        
        <RollingStrip messages={strings.strip} />
        
        <section id="community" className="py-12 md:py-20">
          <CommunityBoard 
            community={strings.community}
            socials={strings.socials}
          />
        </section>
      </main>
      
      <Footer strings={strings} />
      
      <MobileBuyDock
        buyEnabled={strings.buyEnabled}
        pumpLink={links.pump}
        buyCta={strings.hero.buyCta}
      />
      
      <StickySideBuy
        buyEnabled={strings.buyEnabled}
        pumpLink={links.pump}
        buyCta={strings.hero.buyCta}
      />
    </>
  );
}
