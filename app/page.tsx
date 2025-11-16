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
import { getStrings, getLinks } from "@/lib/content-loader";
import Image from "next/image";

export default function HomePage() {
  const strings = getStrings();
  const links = getLinks();

  return (
    <>
      <BoostBar />
      <LiquidGradient />
      <Header strings={strings} links={links} />
      
      <main id="main-content" className="relative">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
          <div className="relative z-10">
            <Image
              src="/logo.png"
              alt="Cosmic Toilet"
              width={320}
              height={320}
              className="mx-auto"
              priority
            />
          </div>
        </section>

        <RollingStrip messages={strings.strip} />
        
        <section id="why">
          <ReasonRow reasons={strings.reasons} />
        </section>
        
        <FlushWipe />
        
        <section id="lore">
          <NarrativeBurst 
            narrative={strings.narrativeBurst}
            buyCta={strings.hero.buyCta}
            buyEnabled={strings.buyEnabled}
            pumpLink={links.pump}
          />
        </section>
        
        <RollingStrip messages={strings.strip} />
        
        <section id="token">
          <BullishMenu 
            bullishMenu={strings.bullishMenu}
            buyCta={strings.hero.buyCta}
            buyEnabled={strings.buyEnabled}
            pumpLink={links.pump}
          />
        </section>
        
        <FlushWipe />
        
        <section id="roadmap">
          <RoadmapPreview roadmapPreview={strings.roadmapPreview} />
        </section>
        
        <RollingStrip messages={strings.strip} />
        
        <section id="community">
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
    </>
  );
}
