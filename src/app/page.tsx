"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, CheckCircle, MapPin, Phone, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Start", id: "hero" },
        { name: "Über uns", id: "about" },
        { name: "Leistungen", id: "features" },
        { name: "Referenzen", id: "testimonials" },
        { name: "Kontakt", id: "contact" },
      ]}
      brandName="Benno Riehl GmbH"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "gradient-bars" }}
      title="Exzellente Heizungs- & Sanitärlösungen in Koblenz"
      description="Ihr Meisterbetrieb für ästhetische Badgestaltungen und moderne Heizsysteme. Wir kombinieren traditionelles Handwerk mit innovativer Technik für Ihr Zuhause."
      buttons={[
        { text: "Jetzt anfragen", href: "#contact" },
        { text: "WhatsApp Soforthilfe", href: "https://wa.me/4926124203" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779038385067-pu9tk96q.jpg"
      mediaAnimation="blur-reveal"
      imageAlt="Benno Riehl GmbH Heizung Sanitär Koblenz"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Ihr Partner für moderne Wohnqualität"
      description="Als familiengeführter Meisterbetrieb in Koblenz steht die Benno Riehl GmbH seit Generationen für höchste Präzision. Wir begleiten Sie von der ersten Planung bis zur finalen Umsetzung bei Heizungsmodernisierungen und exklusiven Badumbauten."
      bulletPoints={[
        { title: "Meisterhand", description: "Qualität bis ins kleinste Detail.", icon: Award },
        { title: "Schnell zur Stelle", description: "Unser Notdienst lässt Sie nicht im Kalten sitzen.", icon: Zap },
        { title: "Transparenz", description: "Klare Abläufe und faire Beratung.", icon: ShieldCheck },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779038385067-pu9tk96q.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { id: "f1", title: "Heizungstechnik", tags: ["Wartung", "Modernisierung"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779038385067-pu9tk96q.jpg" },
        { id: "f2", title: "Badmodernisierung", tags: ["Design", "Barrierefrei"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779038385067-pu9tk96q.jpg" },
        { id: "f3", title: "Klimasysteme", tags: ["Wartung", "Lüftung"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779038385067-pu9tk96q.jpg" },
      ]}
      title="Leistungsspektrum"
      description="Maßgeschneiderte Lösungen für Ihre Anforderungen."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      testimonial="Die Benno Riehl GmbH hat unser komplettes Heizsystem in Koblenz auf den neuesten Stand gebracht. Höchste Professionalität und ein absolut sauberes Ergebnis."
      rating={5}
      author="Christian L., Koblenz"
      avatars={[{ src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779038385067-pu9tk96q.jpg", alt: "Kunde" }]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
      useInvertedBackground={false}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      names={["Vaillant", "Viessmann", "Geberit", "Hansgrohe", "Buderus"]}
      title="Unsere Qualitätspartner"
      description="Wir arbeiten ausschließlich mit Premium-Komponenten."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="Notdienst & Kontakt"
      title="Wir sind für Sie da"
      description="Dringender Notfall? Haben Sie ein Projekt geplant oder benötigen Sie eine Beratung? Schreiben Sie uns oder rufen Sie uns direkt an."
      background={{ variant: "gradient-bars" }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779038385067-pu9tk96q.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Benno Riehl GmbH"
      columns={[
        { title: "Kontakt", items: [{ label: "Koblenz", href: "#" }, { label: "0261 24203", href: "tel:026124203" }] },
        { title: "Service", items: [{ label: "Heizung", href: "#" }, { label: "Sanitär", href: "#" }, { label: "24h Notdienst", href: "#" }] },
        { title: "Rechtliches", items: [{ label: "Impressum", href: "#" }, { label: "Datenschutz", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}