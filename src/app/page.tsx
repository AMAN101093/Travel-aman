'use client'

import { useRef, useState, useEffect } from 'react'

/* ============================================================
   DATA
   ============================================================ */
const TRIPS = [
  {
    country: 'Ladakh · India',
    duration: '7 NIGHTS',
    title: 'Ladakh Bike & Backpacking Expedition',
    price: '₹26,999',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dcaa0f1d2fd8.jpg',
  },
  {
    country: 'Bhutan',
    duration: '7 NIGHTS',
    title: 'Bhutan Bike & Backpacking Trip',
    price: '₹43,999',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/744f3a8f1e03.jpg',
  },
  {
    country: 'Sikkim · India',
    duration: '7 NIGHTS',
    title: 'Sikkim Mountain Expedition — Bike & Backpacking',
    price: '₹23,500',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ae4490c8bf44.jpg',
  },
  {
    country: 'Spiti · Himachal',
    duration: '6 NIGHTS',
    title: 'Spiti Valley Backpacking Expedition',
    price: '₹16,900',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8f17e3386218.png',
  },
  {
    country: 'Nagaland · India',
    duration: '5 NIGHTS',
    title: 'Hornbill Festival Nagaland',
    price: '₹23,500',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/915eae3183e9.jpg',
  },
  {
    country: 'Vietnam',
    duration: '8 NIGHTS',
    title: 'Vietnam Escapades',
    price: '₹43,999',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c20edf953bad.jpeg',
  },
  {
    country: 'Bali · Indonesia',
    duration: '7 NIGHTS',
    title: 'The Bali Adventure',
    price: '₹39,999',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e3dbb54b3efe.jpg',
  },
  {
    country: 'Arunachal · India',
    duration: '8 NIGHTS',
    title: 'Tawang Bike Trip & Backpacking Expedition',
    price: '₹28,999',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1c45562e0055.jpg',
  },
]

const FEATURED = [
  {
    tag: 'Signature Expedition',
    country: 'Sikkim · India',
    duration: '7 NIGHTS / 8 DAYS',
    title: 'Sikkim Mountain Expedition',
    sub: 'Bike & Backpacking Edition',
    desc: 'Ride through the silk-route switchbacks of North Sikkim, sleep under stars at Gurudongmar Lake, and trace monasteries from Rumtek to Pelling. A curated blend of two wheels and walking boots, designed for travellers who want both altitude and atmosphere.',
    price: '₹23,500',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ae4490c8bf44.jpg',
  },
  {
    tag: 'Cross-Border',
    country: 'Bhutan',
    duration: '7 NIGHTS / 8 DAYS',
    title: 'Bhutan Bike & Backpacking Trip',
    sub: 'Land of the Thunder Dragon',
    desc: 'From the smoky border of Phuentsholing to the cliff-clinging Tiger\'s Nest, this is Bhutan as it was meant to be seen — slowly, with the wind in your face and prayer flags overhead. Mountain passes, dzongs, and the quiet joy of a kingdom that measures Gross National Happiness.',
    price: '₹43,999',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/744f3a8f1e03.jpg',
  },
]

const DESTINATIONS = [
  {
    name: 'Bike & Backpacking Tours',
    count: '6 Tours',
    price: 'From ₹16,900',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dcaa0f1d2fd8.jpg',
  },
  {
    name: 'Himachal Tours',
    count: '4 Tours',
    price: 'From ₹16,900',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/56b80678a8ba.jpg',
  },
  {
    name: 'International Tours',
    count: '6 Tours',
    price: 'From ₹43,999',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e3dbb54b3efe.jpg',
  },
  {
    name: 'Northeast India Tours',
    count: '2 Tours',
    price: 'From ₹23,500',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/915eae3183e9.jpg',
  },
  {
    name: 'Backpacking Tour Collection',
    count: '10 Tours',
    price: 'From ₹16,900',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c20edf953bad.jpeg',
  },
  {
    name: 'Bike Expeditions',
    count: '5 Tours',
    price: 'From ₹26,999',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1c45562e0055.jpg',
  },
]

/* ============================================================
   ICONS (inline SVG)
   ============================================================ */
const SearchIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)
const MenuIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)
const UserIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)
const PhoneIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const ArrowRight = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)
const ArrowLeft = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)
const MailIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)
const InstagramIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const FacebookIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const WhatsappIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.748-.985zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
)
const StarIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
const PlayIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <polygon points="6 4 20 12 6 20 6 4" />
  </svg>
)

/* ============================================================
   COMPONENTS
   ============================================================ */

function TopBar() {
  return (
    <div className="hidden md:block bg-[#1a201c] text-white/70 text-[11px] tracking-luxe">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+917249309036" className="flex items-center gap-2 hover:text-white smooth-hover">
            <PhoneIcon className="w-3 h-3" />
            <span>+91 724 930 9036</span>
          </a>
          <a href="mailto:info.traviator@gmail.com" className="flex items-center gap-2 hover:text-white smooth-hover">
            <MailIcon className="w-3 h-3" />
            <span>info.traviator@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="tracking-wide-luxe text-white/80">SINCE 2016 · INDIA & BEYOND</span>
          <div className="flex items-center gap-3 text-white/50">
            <InstagramIcon className="w-3.5 h-3.5 hover:text-white cursor-pointer smooth-hover" />
            <FacebookIcon className="w-3.5 h-3.5 hover:text-white cursor-pointer smooth-hover" />
            <WhatsappIcon className="w-3.5 h-3.5 hover:text-white cursor-pointer smooth-hover" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? 'shadow-2xl' : ''}`}>
      <TopBar />
      <nav className="nav-gradient text-white">
        <div className={`max-w-[1500px] mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[68px]' : 'h-[82px]'}`}>
          {/* Logo */}
          <a href="#" className="flex flex-col items-start leading-[0.85] group">
            <span style={{ fontFamily: 'var(--font-bebas), sans-serif' }} className="text-[26px] tracking-[0.04em]">
              TRAVIATOR
            </span>
            <span className="text-[8px] tracking-wide-luxe text-white/60 mt-0.5">ADVENTURES & OUTDOORS</span>
          </a>

          {/* Center nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button aria-label="Search" className="p-1 hover:opacity-70 smooth-hover">
              <SearchIcon className="w-[18px] h-[18px]" />
            </button>
            {['DESTINATIONS', 'EXPERIENCES', 'ABOUT'].map((item) => (
              <a key={item} href="#" className="nav-link-underline text-[12px] tracking-wide-luxe font-semibold smooth-hover">
                {item}
              </a>
            ))}
            <button aria-label="Menu" className="p-1 hover:opacity-70 smooth-hover">
              <MenuIcon className="w-[18px] h-[18px]" />
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <a href="tel:+917249309036" className="hidden md:flex items-center gap-2 text-[13px] font-medium tracking-wide hover:opacity-80 smooth-hover">
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>+91 724 930 9036</span>
            </a>
            <button aria-label="Account" className="hidden md:block hover:opacity-70 smooth-hover">
              <UserIcon className="w-[20px] h-[20px]" />
            </button>
            <button className="btn-enquire">
              <span>ENQUIRE NOW</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative w-full h-[88vh] min-h-[560px] overflow-hidden bg-black">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d21d782e33b1.jpeg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 lg:px-10 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="fade-up" style={{ animationDelay: '100ms' }}>
            <span className="inline-flex items-center gap-3 text-white/80 text-[11px] tracking-wide-luxe mb-7">
              <span className="w-12 h-px bg-[#ec4899]" />
              SINCE 2016 · INDIA & BEYOND
            </span>
          </div>
          <h1
            className="fade-up text-white text-[44px] md:text-[68px] lg:text-[78px] leading-[1.02] font-light tracking-tight"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 300, animationDelay: '200ms' }}
          >
            Be a <span className="italic font-serif" style={{ fontFamily: 'Georgia, serif' }}>Traviator</span>,
            <br />
            <span className="font-extralight text-white/85">we&apos;ll be your Navigator.</span>
          </h1>
          <p className="fade-up mt-7 text-white/75 text-base md:text-lg max-w-xl leading-relaxed" style={{ animationDelay: '350ms' }}>
            Premium bike &amp; backpacking expeditions across the Himalayas, the Northeast and beyond — crafted for travellers who refuse the obvious.
          </p>
          <div className="fade-up mt-10 flex flex-wrap items-center gap-5" style={{ animationDelay: '500ms' }}>
            <button className="btn-enquire"><span>VIEW TOURS</span></button>
            <a href="#explore" className="group flex items-center gap-3 text-white text-[12px] tracking-wide-luxe font-semibold hover:text-[#ec4899] smooth-hover">
              EXPLORE OUR TRIPS
              <span className="w-10 h-px bg-white group-hover:bg-[#ec4899] transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] tracking-wide-luxe">SCROLL</span>
        <span className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  )
}

function ExploreTrips() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    if (!scrollRef.current) return
    const amount = Math.min(scrollRef.current.clientWidth * 0.8, 380)
    scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="explore" className="topo-bg grain relative py-24 lg:py-32 text-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <span className="text-[#ec4899] text-[11px] tracking-wide-luxe font-semibold">— OUR COLLECTION</span>
            <h2
              className="mt-5 text-[42px] md:text-[56px] leading-[1.05] font-light"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Explore Our Trips
            </h2>
            <p className="mt-5 text-white/60 text-base max-w-md leading-relaxed">
              Remarkable experiences to inspire the mind. Curated expeditions, not itineraries — every route shaped by seasons spent in the mountains.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black smooth-hover"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black smooth-hover"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="tour-scroll no-scrollbar flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-px-6"
        >
          {TRIPS.map((trip, i) => (
            <article
              key={i}
              className="premium-card snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] h-[520px] relative overflow-hidden bg-neutral-900 group cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={trip.img}
                  alt={trip.title}
                  className="premium-card-img w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10" />

              {/* Duration top-right */}
              <div className="absolute top-5 right-5 text-[11px] tracking-wide-luxe font-semibold text-white/90 z-10">
                {trip.duration}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                <div className="text-[11px] tracking-wide-luxe font-bold text-white mb-2.5">
                  {trip.country.toUpperCase()}
                </div>
                <h3
                  className="text-white text-[19px] font-bold leading-tight mb-4"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {trip.title.toUpperCase()}
                </h3>
                <div className="flex items-center justify-between">
                  <button className="btn-outline-light">Explore Trip</button>
                  <span className="text-white/80 text-[13px] font-semibold">{trip.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedTours() {
  return (
    <section className="bg-[#f8f6f2] py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#e6378a] text-[11px] tracking-wide-luxe font-semibold">— FEATURED TOURS</span>
          <h2 className="mt-5 text-[38px] md:text-[48px] leading-tight font-light text-neutral-900" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Two routes that define a Traviator
          </h2>
          <p className="mt-5 text-neutral-600 text-base leading-relaxed">
            Hand-picked from a decade of expeditions — these are the journeys that built our reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED.map((tour, i) => (
            <article
              key={i}
              className="premium-card relative overflow-hidden bg-neutral-900 h-[560px] lg:h-[620px] group cursor-pointer"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img src={tour.img} alt={tour.title} className="premium-card-img w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

              <div className="absolute top-6 left-6 z-10">
                <span className="inline-block bg-[#e6378a] text-white text-[10px] tracking-wide-luxe font-bold px-3 py-1.5">
                  {tour.tag.toUpperCase()}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 z-10 text-white">
                <div className="flex items-center gap-3 text-[11px] tracking-wide-luxe font-semibold text-white/90 mb-3">
                  <span>{tour.country.toUpperCase()}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ec4899]" />
                  <span>{tour.duration}</span>
                </div>
                <h3 className="text-[32px] md:text-[40px] leading-[1.05] font-light mb-1.5" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {tour.title}
                </h3>
                <div className="text-white/70 italic mb-5 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  {tour.sub}
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-7 max-w-md">{tour.desc}</p>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <button className="btn-outline-light">View Itinerary</button>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/60 text-[10px] tracking-wide-luxe">FROM</span>
                    <span className="text-white text-xl font-semibold">{tour.price}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Destinations() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-[#e6378a] text-[11px] tracking-wide-luxe font-semibold">— DESTINATIONS</span>
            <h2 className="mt-5 text-[38px] md:text-[48px] leading-tight font-light text-neutral-900" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Places we can take you to
            </h2>
          </div>
          <a href="#" className="group flex items-center gap-3 text-neutral-900 text-[12px] tracking-wide-luxe font-semibold hover:text-[#e6378a] smooth-hover">
            VIEW ALL DESTINATIONS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((d, i) => (
            <a
              key={i}
              href="#"
              className="premium-card relative overflow-hidden bg-neutral-100 group block h-[380px]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img src={d.img} alt={d.name} className="premium-card-img w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-wide-luxe font-semibold text-white/80">{d.count}</span>
                  <span className="text-[10px] tracking-wide-luxe font-bold text-[#ec4899]">{d.price}</span>
                </div>
                <h3 className="text-[22px] font-bold leading-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {d.name}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-[11px] tracking-wide-luxe text-white/0 group-hover:text-white/80 smooth-hover">
                  EXPLORE
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="bg-[#1f2922] text-white py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img
          src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/eecfddbf3b8d.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1f2922] via-[#1f2922]/85 to-transparent" />
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[#ec4899] text-[11px] tracking-wide-luxe font-semibold">— WHO WE ARE</span>
          <h2 className="mt-5 text-[38px] md:text-[52px] leading-[1.08] font-light" style={{ fontFamily: 'var(--font-montserrat)' }}>
            A decade on the road,<br />
            <span className="italic font-serif" style={{ fontFamily: 'Georgia, serif' }}>and we&apos;re just getting started.</span>
          </h2>
          <p className="mt-7 text-white/75 text-base md:text-lg leading-relaxed">
            Since 2016, Traviator Adventures &amp; Outdoors has been quietly building India&apos;s most-loved community of riders, backpackers and unrepentant wanderers. What started with a single Ladakh convoy has become a network of expeditions across the Himalayas, the Northeast and 6 international destinations — every one led by people who&apos;ve actually lived the route.
          </p>
          <p className="mt-5 text-white/65 text-base leading-relaxed">
            We don&apos;t sell tours. We curate the kind of trips you can&apos;t stop talking about five years later — the ones where the stories outlast the photographs.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            <div>
              <div className="text-4xl font-light" style={{ fontFamily: 'var(--font-montserrat)' }}>10<span className="text-[#ec4899]">+</span></div>
              <div className="text-[10px] tracking-wide-luxe text-white/55 mt-1.5">YEARS ON THE ROAD</div>
            </div>
            <div>
              <div className="text-4xl font-light" style={{ fontFamily: 'var(--font-montserrat)' }}>5.4K<span className="text-[#ec4899]">+</span></div>
              <div className="text-[10px] tracking-wide-luxe text-white/55 mt-1.5">FOLLOWERS</div>
            </div>
            <div>
              <div className="text-4xl font-light" style={{ fontFamily: 'var(--font-montserrat)' }}>30<span className="text-[#ec4899]">+</span></div>
              <div className="text-[10px] tracking-wide-luxe text-white/55 mt-1.5">EXPEDITIONS LED</div>
            </div>
          </div>

          <button className="btn-enquire mt-12"><span>MEET THE TEAM</span></button>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    {
      quote: 'The Ladakh expedition was the first time I genuinely lost cell signal and didn\'t mind. Every detail — backup bikes, oxygen, food — was already handled. I just rode.',
      author: 'Rohan M.',
      detail: 'Ladakh Bike Expedition · 2025',
    },
    {
      quote: 'I went solo to Bhutan expecting a tour. I came back with eleven friends. The Traviator crew treat you like family from day one.',
      author: 'Ananya R.',
      detail: 'Bhutan Bike & Backpacking · 2024',
    },
    {
      quote: 'Spiti in October sounded insane. It was. And it was the best week of my year. These people know the mountains in their bones.',
      author: 'Karan V.',
      detail: 'Spiti Backpacking Expedition · 2025',
    },
  ]
  return (
    <section className="bg-[#f8f6f2] py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#e6378a] text-[11px] tracking-wide-luxe font-semibold">— TESTIMONIALS</span>
          <h2 className="mt-5 text-[38px] md:text-[48px] leading-tight font-light text-neutral-900" style={{ fontFamily: 'var(--font-montserrat)' }}>
            What Traviators say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article key={i} className="bg-white p-8 lg:p-9 border border-neutral-200/80 flex flex-col">
              <div className="flex gap-1 mb-5">
                {[0,1,2,3,4].map((s) => (
                  <StarIcon key={s} className="w-3.5 h-3.5 text-[#ec4899]" />
                ))}
              </div>
              <p className="text-neutral-800 text-[15px] leading-relaxed italic flex-1" style={{ fontFamily: 'Georgia, serif' }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-neutral-200">
                <div className="text-sm font-semibold text-neutral-900">{r.author}</div>
                <div className="text-[11px] tracking-wide-luxe text-neutral-500 mt-1">{r.detail.toUpperCase()}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/597fe9a477ca.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />
      </div>
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 py-28 lg:py-36 text-white">
        <div className="max-w-2xl">
          <span className="text-[#ec4899] text-[11px] tracking-wide-luxe font-semibold">— READY WHEN YOU ARE</span>
          <h2 className="mt-5 text-[38px] md:text-[56px] leading-[1.05] font-light" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Your next expedition<br />
            <span className="italic font-serif" style={{ fontFamily: 'Georgia, serif' }}>is one enquiry away.</span>
          </h2>
          <p className="mt-6 text-white/75 text-base md:text-lg leading-relaxed max-w-lg">
            Tell us where you&apos;ve been dreaming of. We&apos;ll tell you the best season, the right route, and the crew to take you there.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="btn-enquire"><span>ENQUIRE NOW</span></button>
            <a
              href="https://wa.me/917249309036"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-white text-[12px] tracking-wide-luxe font-semibold hover:text-[#ec4899] smooth-hover"
            >
              <WhatsappIcon className="w-4 h-4" />
              CHAT ON WHATSAPP
              <span className="w-10 h-px bg-white group-hover:bg-[#ec4899] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/70 pt-20 pb-10">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex flex-col leading-[0.85]">
              <span style={{ fontFamily: 'var(--font-bebas)' }} className="text-[28px] tracking-[0.04em] text-white">
                TRAVIATOR
              </span>
              <span className="text-[9px] tracking-wide-luxe text-white/50 mt-1">ADVENTURES & OUTDOORS</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/55 max-w-xs">
              Be a Traviator, we&apos;ll be your Navigator. Premium expeditions across India &amp; beyond, since 2016.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <InstagramIcon className="w-4 h-4 hover:text-white cursor-pointer smooth-hover" />
              <FacebookIcon className="w-4 h-4 hover:text-white cursor-pointer smooth-hover" />
              <WhatsappIcon className="w-4 h-4 hover:text-white cursor-pointer smooth-hover" />
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-wide-luxe font-bold text-white mb-5">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white smooth-hover">About Us</a></li>
              <li><a href="#" className="hover:text-white smooth-hover">Contact Us</a></li>
              <li><a href="#" className="hover:text-white smooth-hover">Blog</a></li>
              <li><a href="#" className="hover:text-white smooth-hover">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-wide-luxe font-bold text-white mb-5">TOURS</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white smooth-hover">Bike & Backpacking</a></li>
              <li><a href="#" className="hover:text-white smooth-hover">International Tours</a></li>
              <li><a href="#" className="hover:text-white smooth-hover">Domestic Tours</a></li>
              <li><a href="#" className="hover:text-white smooth-hover">All Tours</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-wide-luxe font-bold text-white mb-5">SUPPORT</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white smooth-hover">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white smooth-hover">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white smooth-hover">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white smooth-hover">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-wide-luxe font-bold text-white mb-5">GET IN TOUCH</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="w-3.5 h-3.5 text-[#ec4899]" />
                <a href="tel:+917249309036" className="hover:text-white smooth-hover">+91 724 930 9036</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="w-3.5 h-3.5 text-[#ec4899]" />
                <a href="mailto:info.traviator@gmail.com" className="hover:text-white smooth-hover">info.traviator@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© 2026 Traviator Adventures &amp; Outdoors. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>Crafted with care in India</span>
            <span className="text-[#ec4899]">·</span>
            <a href="#" className="hover:text-white smooth-hover">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ExploreTrips />
      <FeaturedTours />
      <Destinations />
      <About />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
