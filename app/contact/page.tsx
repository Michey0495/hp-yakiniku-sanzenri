import type { Metadata } from "next";
import { Section, Separator, PhoneIcon } from "../components/section";
import { Footer } from "../components/footer";
import { MobilePhoneBar } from "../components/mobile-phone-bar";

export const metadata: Metadata = {
  title: "お問い合わせ | 炭火焼肉 三千里",
  description:
    "炭火焼肉 三千里へのお問い合わせ・ご予約。電話: 0154-91-3695。水曜〜日曜 17:00-21:00。",
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-14">
        {/* Header */}
        <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-sz-charcoal">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(184,148,62,0.1) 0%, transparent 70%)",
            }}
          />
          <h1 className="relative z-10 section-heading text-3xl md:text-5xl text-sz-cream text-center">
            お問い合わせ
          </h1>
        </section>

        <Separator />

        <Section className="text-center">
          <p className="font-maru text-sz-cream-dim/70 text-base md:text-lg mb-4">
            ご予約・お問い合わせはお電話にて承ります
          </p>
          <p className="font-maru text-sz-cream-dim/50 text-sm mb-10">
            営業時間内にお電話ください
          </p>

          <a href="tel:0154913695" className="phone-cta">
            <PhoneIcon />
            <span>0154-91-3695</span>
          </a>

          <div className="mt-16 max-w-sm mx-auto space-y-4 font-maru text-base leading-[1.8]">
            <div className="flex gap-6">
              <span className="text-sz-gold/70 whitespace-nowrap min-w-[5em] text-sm">
                営業時間
              </span>
              <span className="text-sz-cream-dim">17:00 - 21:00</span>
            </div>
            <div className="flex gap-6">
              <span className="text-sz-gold/70 whitespace-nowrap min-w-[5em] text-sm">
                営業日
              </span>
              <span className="text-sz-cream-dim">水曜〜日曜</span>
            </div>
            <div className="flex gap-6">
              <span className="text-sz-gold/70 whitespace-nowrap min-w-[5em] text-sm">
                定休日
              </span>
              <span className="text-sz-cream-dim">月曜日・火曜日</span>
            </div>
          </div>
        </Section>

        <Separator />

        {/* アクセス */}
        <Section>
          <h2 className="section-heading text-2xl md:text-3xl text-sz-cream mb-10 text-center">
            アクセス
          </h2>
          <div className="w-full aspect-[16/9] mb-8 overflow-hidden rounded">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=炭火焼肉+三千里+釧路市益浦2-18-5&zoom=15"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.3) brightness(0.75)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="炭火焼肉 三千里 所在地"
            />
          </div>
          <div className="text-center space-y-2">
            <p className="font-maru text-sz-cream-dim text-base">
              北海道釧路市益浦2-18-5
            </p>
            <p className="font-maru text-sz-cream-dim/60 text-sm">
              駐車場10台完備
            </p>
          </div>
        </Section>
      </main>

      <Footer />
      <MobilePhoneBar />
    </>
  );
}
