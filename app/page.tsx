import Image from "next/image";
import Link from "next/link";
import { Section, Separator } from "./components/section";
import { Footer } from "./components/footer";
import { MobilePhoneBar } from "./components/mobile-phone-bar";

export default function Home() {
  return (
    <>
      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&h=1080&fit=crop&q=80"
            alt="炭火焼肉"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(139,26,26,0.2) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <p className="font-maru text-sz-gold/70 text-xs md:text-sm tracking-[0.4em] mb-6">
              北海道釧路市
            </p>

            <h1 className="font-kaisei text-5xl md:text-7xl lg:text-8xl text-sz-cream font-bold tracking-wider leading-tight">
              炭火焼肉
              <br />
              三千里
            </h1>

            <p className="font-maru text-sz-cream/70 text-base md:text-lg tracking-[0.15em] mt-8 max-w-md">
              炭の香り、肉の旨み。
              <br />
              一切れ一切れを、丁寧に。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link
                href="/menu"
                className="px-8 py-3 bg-sz-red border border-sz-red-bright/30 text-sz-cream font-kaisei text-sm tracking-widest hover:bg-sz-red-bright/80 transition-all duration-200 cursor-pointer"
              >
                メニューを見る
              </Link>
              <Link
                href="/info"
                className="px-8 py-3 border border-sz-gold/40 text-sz-cream font-kaisei text-sm tracking-widest hover:bg-sz-gold/10 transition-all duration-200 cursor-pointer"
              >
                店舗情報
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="font-maru text-[10px] tracking-[0.3em] text-sz-cream-dim/50">
              SCROLL
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="animate-bounce"
              aria-hidden="true"
            >
              <path
                d="M8 4L8 18M8 18L2 12M8 18L14 12"
                stroke="#B8943E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </div>
        </section>

        {/* ═══ こだわり ═══ */}
        <Separator />
        <Section id="concept">
          <h2 className="section-heading text-2xl md:text-3xl text-sz-cream mb-10 text-center">
            炭火へのこだわり
          </h2>
          <div className="mb-10 overflow-hidden rounded">
            <Image
              src="https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=500&fit=crop&q=80"
              alt="炭火イメージ"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 font-maru text-base md:text-lg leading-[1.9] text-sz-cream-dim/80">
            <p>
              三千里では、すべてのお肉を炭火で焼き上げます。
              <br className="hidden md:block" />
              遠赤外線でじっくり火を通すことで、
              <br className="hidden md:block" />
              外は香ばしく、中はジューシーに。
            </p>
            <p>
              ガスでは出せない、炭ならではの香りと旨み。
              <br className="hidden md:block" />
              一切れ一切れに、職人の想いを込めて。
            </p>
          </div>
        </Section>

        {/* ═══ 営業案内 ═══ */}
        <Separator />
        <Section id="hours">
          <h2 className="section-heading text-2xl md:text-3xl text-sz-cream mb-10 text-center">
            営業案内
          </h2>
          <div className="max-w-sm mx-auto space-y-5 font-maru text-base leading-[1.8]">
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

        {/* ═══ アクセス ═══ */}
        <Separator />
        <Section id="access">
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
