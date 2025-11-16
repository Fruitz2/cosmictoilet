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
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
          <SwirlPortal />
          <TextOrbit />
          
          <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan/70">
              {strings.hero.eyebrow}
            </p>
            
            <Image
              src="/logo.png"
              alt="Cosmic Toilet"
              width={200}
              height={200}
              className="mx-auto animate-float"
              priority
            />
            
            <KineticType variants={strings.hero.h1Variants} />
            
            <p className="text-xl md:text-2xl text-fg/70 max-w-2xl mx-auto">
              {strings.hero.sub}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              {strings.buyEnabled && links.pump && (
                <a
                  href={links.pump}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {strings.hero.buyCta}
                </a>
              )}
              
              <a
                href={links.tg}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {strings.hero.secondaryCtas[0]}
              </a>
              
              <a
                href={links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {strings.hero.secondaryCtas[1]}
              </a>
            </div>
          </div>
        </section>

        <RollingStrip messages={strings.strip} />
        
        <ReasonRow reasons={strings.reasons} />
        
        <RollingStrip messages={strings.strip} />
        
        <NarrativeBurst 
          narrative={strings.narrativeBurst}
          buyCta={strings.hero.buyCta}
          buyEnabled={strings.buyEnabled}
          pumpLink={links.pump}
        />
        
        <BullishMenu 
          bullishMenu={strings.bullishMenu}
          buyCta={strings.hero.buyCta}
          buyEnabled={strings.buyEnabled}
          pumpLink={links.pump}
        />
        
        <CommunityBoard 
          community={strings.community}
          tgLink={links.tg}
        />
        
        <RoadmapPreview 
          roadmapPreview={strings.roadmapPreview}
          buyCta={strings.hero.buyCta}
          buyEnabled={strings.buyEnabled}
          pumpLink={links.pump}
        />
      </main>
      
      <Footer strings={strings} />
      
      <MobileBuyDock
        buyEnabled={strings.buyEnabled}
        pumpLink={links.pump}
        buyCta={strings.hero.buyCta}
      />
    </>
  );
}
