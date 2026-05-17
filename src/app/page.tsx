"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, CheckCircle, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="aurora"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
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
      background={{ variant: "plain" }}
      title="Ihr zuverlässiger Partner für Heizung, Lüftung & Sanitär in Koblenz"
      description="Meisterhafte Handwerksqualität aus Tradition. Wir sorgen für Wärme, frische Luft und erstklassige Bäder – pünktlich, sauber und absolut professionell."
      buttons={[
        { text: "Termin vereinbaren", href: "#contact" },
        { text: "WhatsApp Hilfe", href: "https://wa.me/4926124203" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779036258809-5z59u6v0.jpg?_wi=1"
      mediaAnimation="slide-up"
      imageAlt="Heizung und Sanitär Handwerk"
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779036258809-p6b5g1w4.jpg", alt: "Kunde" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779036258809-p4rxyyrb.jpg", alt: "Kunde" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779036258809-a5qzvu98.jpg", alt: "Kunde" }
      ]}
      avatarText="Über 500+ zufriedene Kunden in Koblenz"
      marqueeItems={[
        { type: "text-icon", text: "Meisterbetrieb", icon: CheckCircle },
        { type: "text-icon", text: "24/7 Notdienst", icon: Phone },
        { type: "text-icon", text: "Qualitätsgarantie", icon: ShieldCheck },
        { type: "text-icon", text: "Koblenz Lokal", icon: MapPin },
        { type: "text-icon", text: "Erfahrung", icon: Award },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Benno Riehl GmbH – Meisterbetrieb aus Koblenz"
      description="Wir stehen für Zuverlässigkeit und höchste Handwerksqualität. Seit Jahren begleiten wir Privatkunden und Unternehmen in Koblenz mit Expertise in Heiztechnik, Badmodernisierung und Sanitärinstallationen. Sauberkeit ist für uns kein Versprechen, sondern Standard."
      bulletPoints={[
        { title: "Meisterqualität", description: "Fachliche Exzellenz durch erfahrene Meisterhand." },
        { title: "Pünktlich & Sauber", description: "Ihr Zuhause ist uns wichtig – wir hinterlassen alles tadellos." },
        { title: "Schnelle Hilfe", description: "Unser Notdienst ist in Notfällen für Sie da." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779036258809-5z59u6v0.jpg?_wi=2"
      mediaAnimation="slide-up"
      imageAlt="Heizungstechnik"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { id: "f1", title: "Heiztechnik", tags: ["Wartung", "Modernisierung"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779036258809-p6b5g1w4.jpg" },
        { id: "f2", title: "Badsanierung", tags: ["Planung", "Einbau"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779036258809-p4rxyyrb.jpg" },
        { id: "f3", title: "Lüftung & Klima", tags: ["Optimierung"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779036258809-a5qzvu98.jpg" },
      ]}
      title="Unsere Leistungen für Koblenz"
      description="Alles aus einer Hand für Ihr Zuhause oder Büro."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "s1", badge: "Notdienst", price: "Notfall-Service", subtitle: "Schnelle Hilfe bei Problemen", buttons: [{ text: "Notdienst anrufen", href: "tel:026124203" }], features: ["24/7 Erreichbarkeit", "Direkte Hilfe"] },
        { id: "s2", badge: "Wartung", price: "Wartungs-Check", subtitle: "Sicherer Betrieb Ihrer Anlagen", buttons: [{ text: "Angebot anfragen", href: "#contact" }], features: ["Sicherheitsprüfung", "Energieeffizienz", "Werterhalt"] },
      ]}
      title="Transparenz und Vertrauen"
      description="Wir setzen auf faire Preise und klare Kommunikation."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Die Benno Riehl GmbH hat unser Bad perfekt renoviert. Sehr sauber, schnell und absolut kompetent. Wir sind begeistert von der Zuverlässigkeit!"
      rating={5}
      author="Familie Weber, Koblenz"
      avatars={[{ src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DrJqxA6utyvknanUlhm2vma0sO/uploaded-1779036258809-p6b5g1w4.jpg", alt: "Kunde" }]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Vaillant", "Viessmann", "Grohe", "Geberit", "Buderus", "Hansgrohe", "Danfoss"]}
      title="Unsere Partner & Zertifizierungen"
      description="Qualitätsmarken, denen wir vertrauen."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Bieten Sie Notdienst an?", content: "Ja, wir sind in dringenden Notfällen für unsere Kunden erreichbar." },
        { id: "q2", title: "Wie schnell bekommen wir einen Termin?", content: "Wir bemühen uns stets um eine zeitnahe Terminvergabe, besonders bei Modernisierungswünschen." },
        { id: "q3", title: "Arbeiten Sie sauber?", content: "Sauberkeit und ein gepflegter Arbeitsplatz sind für unsere Meisterbetrieb-Werte essentiell." },
      ]}
      title="Häufige Fragen"
      description="Hier finden Sie schnelle Antworten."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      text="Jetzt Termin vereinbaren – Ihr Meisterbetrieb für Koblenz und Umgebung: 0261 24203."
      buttons={[
        { text: "Jetzt anrufen", href: "tel:026124203" },
        { text: "WhatsApp schreiben", href: "https://wa.me/4926124203" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Benno Riehl GmbH"
      columns={[
        { title: "Kontakt", items: [{ label: "Aachener Straße 10", href: "#" }, { label: "56072 Koblenz", href: "#" }, { label: "0261 24203", href: "tel:026124203" }] },
        { title: "Service", items: [{ label: "Heizung", href: "#" }, { label: "Badsanierung", href: "#" }, { label: "Notdienst", href: "#" }] },
        { title: "Rechtliches", items: [{ label: "Impressum", href: "#" }, { label: "Datenschutz", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}