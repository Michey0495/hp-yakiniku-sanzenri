import type { Metadata } from "next";
import { Section, Separator } from "../components/section";
import { Footer } from "../components/footer";
import { MobilePhoneBar } from "../components/mobile-phone-bar";

export const metadata: Metadata = {
  title: "店舗情報 | 炭火焼肉 三千里",
  description:
    "炭火焼肉 三千里の店舗情報。住所: 北海道釧路市益浦2-18-5。35席、全席禁煙、駐車場10台。水曜〜日曜 17:00-21:00。",
};

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-6 py-4 border-b border-sz-gold/10 last:border-b-0">
      <span className="text-sz-gold/70 whitespace-nowrap min-w-[6em] text-sm font-kaisei">
        {label}
      </span>
      <span className="text-sz-cream-dim font-maru">{children}</span>
    </div>
  );
}

export default function InfoPage() {
  return (
    <>
      <main className="pt-14">
        {/* Header */}
        <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-sz-charcoal">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(139,26,26,0.15) 0%, transparent 70%)",
            }}
          />
          <h1 className="relative z-10 section-heading text-3xl md:text-5xl text-sz-cream text-center">
            店舗情報
          </h1>
        </section>

        <Separator />

        <Section>
          <div className="max-w-lg mx-auto">
            <InfoRow label="店名">炭火焼肉 三千里</InfoRow>
            <InfoRow label="住所">北海道釧路市益浦2-18-5</InfoRow>
            <InfoRow label="電話番号">
              <a
                href="tel:0154913695"
                className="hover:text-sz-gold transition-colors duration-200 cursor-pointer"
              >
                0154-91-3695
              </a>
            </InfoRow>
            <InfoRow label="営業時間">17:00 - 21:00</InfoRow>
            <InfoRow label="営業日">水曜〜日曜</InfoRow>
            <InfoRow label="定休日">月曜日・火曜日</InfoRow>
            <InfoRow label="座席数">35席</InfoRow>
            <InfoRow label="禁煙・喫煙">全席禁煙</InfoRow>
            <InfoRow label="駐車場">あり（10台）</InfoRow>
            <InfoRow label="テイクアウト">あり</InfoRow>
          </div>
        </Section>

        <Separator />

        {/* Google Map */}
        <Section id="map">
          <h2 className="section-heading text-2xl md:text-3xl text-sz-cream mb-10 text-center">
            アクセス
          </h2>
          <div className="w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded">
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
          <p className="text-center text-sz-cream-dim/60 text-sm mt-4 font-maru">
            駐車場10台完備
          </p>
        </Section>
      </main>

      <Footer />
      <MobilePhoneBar />
    </>
  );
}
