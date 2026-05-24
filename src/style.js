/* ==========================================================================
 *  DESIGN ENGINE VARIABLES & IMMERSIVE DARK PATTERN
 *  ========================================================================== */
:root {
    /* Color Palette Specs */
    --color-bg: #090909;
    --color-surface: #111111;
    --color-surface-card: #161616;
    --color-text-main: #f4f4f0;
    --color-text-muted: #a0a0a5;
    --color-gold: #c5a880;
    --color-gold-glow: rgba(197, 168, 128, 0.15);
    --color-border-clean: rgba(255, 255, 255, 0.06);
    --color-border-focus: rgba(197, 168, 128, 0.4);

    /* Typography Structural Rules */
    --font-heading: 'Cormorant Garamond', serif;
    --font-functional: 'Plus Jakarta Sans', sans-serif;

    /* Architectural Finishes */
    --radius-premium: 24px;
    --radius-compact: 12px;

    /* Hardware Accelerated Damped Transitions */
    --bezier-premium: cubic-bezier(0.16, 1, 0.3, 1);
    --motion-fast: 0.25s var(--bezier-premium);
    --motion-main: 0.65s var(--bezier-premium);
    --motion-slow: 1.2s var(--bezier-premium);
}

/* ==========================================================================
 *  DEFENSIVE CORE RESET & LAYOUT DEFAULTS
 *  ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background-color: var(--color-bg);
    color: var(--color-text-main);
    font-family: var(--font-functional);
    overflow-x: hidden;
    line-height: 1.6;
}

/* Zero-Request Pure Data Matte Layer Texture */
.noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.012;
    z-index: 9999;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.container {
    width: min(92%, 1360px);
    margin-inline: auto;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    background-color: var(--color-surface); /* Defensive visual loader placeholder */
}

a {
    color: inherit;
    text-decoration: none;
    transition: color var(--motion-fast), transform var(--motion-fast);
}

/* Reusable Typographical Tags */
.editorial-tag {
    display: inline-block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: var(--color-gold);
    font-weight: 500;
    margin-bottom: 16px;
}

/* ==========================================================================
 *  DYNAMIC HEADER INTERFACE (SCROLL RESPONSIVE)
 *  ========================================================================== */
.site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    border-bottom: 1px solid var(--color-border-clean);
    background-color: rgba(9, 9, 9, 0.01);
    transition: background-color var(--motion-main), padding var(--motion-main), backdrop-filter var(--motion-main);
}

/* Triggered purely by high-performance JS scroll listener */
.site-header.scrolled-state {
    padding-vertical: 14px;
    background-color: rgba(9, 9, 9, 0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 90px;
}

.brand-logo {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 4px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-item {
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: var(--color-text-muted);
    position: relative;
    padding-vertical: 8px;
}

.nav-item:hover {
    color: var(--color-text-main);
}

.nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: var(--color-gold);
    transition: width var(--motion-fast) ease, left var(--motion-fast) ease;
}

.nav-item:hover::after {
    width: 100%;
    left: 0;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 24px;
}

.nav-btn-desktop {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 12px 28px;
    border-radius: 50px;
    border: 1px solid var(--color-border-clean);
    background-color: rgba(255, 255, 255, 0.02);
}

.nav-btn-desktop:hover {
    background-color: var(--color-text-main);
    color: var(--color-bg);
    border-color: var(--color-text-main);
}

.nav-btn-mobile {
    display: none;
}

/* Hamburger Micro-mechanics */
.mobile-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 26px;
    height: 14px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 200;
}

.mobile-toggle span {
    display: block;
    width: 100%;
    height: 1.5px;
    background-color: var(--color-text-main);
    transition: transform var(--motion-fast), background-color var(--motion-fast);
    transform-origin: center;
}

/* ==========================================================================
 *  IMMERSIVE HERO SECTION STAGE
 *  ========================================================================== */
.hero-stage {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 100px;
    overflow: hidden;
}

.hero-media-wrapper {
    position: absolute;
    inset: 0;
    z-index: -1;
}

.hero-img {
    width: 100%;
    height: 100%;
    transform: scale(1.03); /* Minimizes clean asset border flashing */
}

.hero-overlay {
    position: absolute;
    inset: 0;
    /* High-contrast mathematical balance layer protecting copy over dynamic visual tones */
    background: linear-gradient(90deg, #090909 0%, rgba(9, 9, 9, 0.85) 45%, rgba(9, 9, 9, 0.3) 100%);
}

.hero-content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-vertical: 60px;
}

.hero-content-block {
    max-width: 720px;
    margin-top: auto;
    margin-bottom: auto;
}

.hero-stage h1 {
    font-family: var(--font-heading);
    font-size: clamp(2.8rem, 6vw, 5.8rem);
    font-weight: 300;
    line-height: 1.05;
    letter-spacing: -0.5px;
    margin-bottom: 24px;
}

.hero-stage h1 span {
    color: var(--color-gold);
    font-style: italic;
}

.hero-stage p {
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    color: var(--color-text-muted);
    font-weight: 300;
    max-width: 560px;
    margin-bottom: 40px;
}

.hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.action-btn {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 18px 38px;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.btn-solid {
    background-color: var(--color-gold);
    color: #090909;
}

.btn-solid:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px var(--color-gold-glow);
}

.btn-outline {
    border: 1px solid var(--color-border-clean);
    background-color: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.btn-outline:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-3px);
}

.hero-metrics {
    display: flex;
    gap: 60px;
    margin-top: auto;
    border-top: 1px solid var(--color-border-clean);
    padding-top: 40px;
    width: 100%;
}

.metric-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.metric-number {
    font-family: var(--font-heading);
    font-size: 2.2rem;
    color: var(--color-gold);
    font-weight: 400;
    line-height: 1;
}

.metric-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--color-text-muted);
}

/* ==========================================================================
 *  PHILOSOPHY MANIFESTO SECTION (EDITORIAL LAYOUT)
 *  ========================================================================== */
.philosophy-section {
    padding-vertical: clamp(5rem, 10vw, 9rem);
}

.architecture-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(3rem, 7vw, 7rem);
    align-items: center;
}

.philosophy-visual {
    position: relative;
    border-radius: var(--radius-premium);
    overflow: hidden;
}

.philosophy-visual img {
    width: 100%;
    height: 600px;
    transition: transform var(--motion-slow);
}

.philosophy-visual:hover img {
    transform: scale(1.04);
}

.philosophy-content h2 {
    font-family: var(--font-heading);
    font-size: clamp(2.2rem, 4.5vw, 3.8rem);
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 28px;
}

.manifesto-lead {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--color-text-main);
    margin-bottom: 24px;
    line-height: 1.6;
}

.manifesto-body {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    font-weight: 300;
    margin-bottom: 32px;
}

.manifesto-quote {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-style: italic;
    color: var(--color-gold);
    border-left: 2px solid var(--color-gold);
    padding-left: 24px;
    line-height: 1.5;
}

/* ==========================================================================
 *  SERVICES EXPERTISE GRID (DEFENSIVE RESILIENT SYSTEM)
 *  ========================================================================== */
.services-section {
    background-color: var(--color-surface);
    padding-vertical: clamp(5rem, 10vw, 9rem);
}

.section-lead-block {
    margin-bottom: clamp(3rem, 5vw, 5.5rem);
}

.section-lead-block h2 {
    font-family: var(--font-heading);
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 300;
}

.fluid-services-grid {
    display: grid;
    /* CSS Grid math rules ensure no container collapses below 290px safely on any monitor */
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 32px;
}

.service-card {
    background-color: var(--color-surface-card);
    border: 1px solid var(--color-border-clean);
    padding: 48px 40px;
    border-radius: var(--radius-premium);
    transition: transform var(--motion-main), border-color var(--motion-main), box-shadow var(--motion-main);
}

.card-icon {
    color: var(--color-gold);
    margin-bottom: 32px;
    display: inline-flex;
}

.service-card h3 {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 16px;
}

.service-card p {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    font-weight: 300;
    line-height: 1.65;
}

.service-card:hover {
    transform: translateY(-8px);
    border-color: var(--color-border-focus);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
}

/* ==========================================================================
 *  ASYMMETRIC PORTFOLIO ARCHIVE GALLERY
 *  ========================================================================== */
.portfolio-section {
    padding-vertical: clamp(5rem, 10vw, 9rem);
}

.asymmetric-gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
}

.gallery-item {
    position: relative;
    border-radius: var(--radius-premium);
    overflow: hidden;
    min-height: 480px;
    cursor: pointer;
}

/* Dynamic structural sizing across rows */
.gallery-item.item-wide {
    grid-column: span 2;
    min-height: 560px;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    transition: transform var(--motion-slow);
}

.gallery-hover-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(9, 9, 9, 0) 40%, rgba(9, 9, 9, 0.95) 100%);
    display: flex;
    align-items: flex-end;
    padding: 40px;
    opacity: 0;
    transition: opacity var(--motion-main);
}

.overlay-details {
    transform: translateY(20px);
    transition: transform var(--motion-main);
}

.project-category {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--color-gold);
    margin-bottom: 8px;
    display: block;
}

.overlay-details h3 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 4px;
}

.overlay-details p {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    font-weight: 300;
}

/* Hover Physics */
.gallery-item:hover img {
    transform: scale(1.05);
}

.gallery-item:hover .gallery-hover-overlay {
    opacity: 1;
}

.gallery-item:hover .overlay-details {
    transform: translateY(0);
}

/* ==========================================================================
 *  TESTIMONIAL ACCENT SUITE
 *  ========================================================================== */
.testimonial-section {
    padding-vertical: clamp(4rem, 8vw, 7rem);
    background-color: var(--color-surface);
}

.editorial-quote-card {
    text-align: center;
    max-width: 900px;
    margin-inline: auto;
    padding-horizontal: 20px;
}

.quote-text {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 3vw, 2.3rem);
    font-weight: 300;
    line-height: 1.5;
    color: var(--color-text-main);
    margin-bottom: 32px;
}

.quote-author {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--color-gold);
    margin-bottom: 4px;
}

.quote-destination {
    font-size: 0.8rem;
    color: var(--color-text-muted);
    font-weight: 300;
}

/* ==========================================================================
 *  PREMIUM CONSULTATION INTERACTIVE INTERFACE
 *  ========================================================================== */
.contact-section {
    padding-vertical: clamp(5rem, 10vw, 9rem);
}

.contact-wrapper-card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border-clean);
    border-radius: calc(var(--radius-premium) * 1.5);
    display: grid;
    grid-template-columns: 0.90fr 1.1fr;
    overflow: hidden;
}

.contact-intro-column {
    padding: clamp(2.5rem, 5vw, 5rem);
    border-right: 1px solid var(--color-border-clean);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contact-intro-column h2 {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    font-weight: 300;
    line-height: 1.15;
    margin-bottom: 24px;
}

.contact-intro-column p {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    font-weight: 300;
    margin-bottom: 40px;
}

.channel-block span {
    display: block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--color-gold);
    margin-bottom: 8px;
}

.channel-block a {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    color: var(--color-text-main);
}

.channel-block a:hover {
    color: var(--color-gold);
}

.contact-form-column {
    padding: clamp(2.5rem, 5vw, 5rem);
    background-color: rgba(255, 255, 255, 0.01);
    display: flex;
    align-items: center;
}

.premium-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.form-group-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.field-element {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
}

.field-element label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-text-muted);
    font-weight: 500;
}

.premium-form input,
.premium-form select,
.premium-form textarea {
    width: 100%;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border-clean);
    border-radius: var(--radius-compact);
    padding: 16px 20px;
    color: var(--color-text-main);
    font-family: var(--font-functional);
    font-size: 0.9rem;
    transition: border-color var(--motion-fast), box-shadow var(--motion-fast);
    -webkit-appearance: none; /* Disables generic OS wrappers natively */
}

/* Architectural clean dropdown select indicator custom rendering */
.field-element select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a0a0a5' stroke-width='1.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 20px center;
    padding-right: 48px;
}

.premium-form input:focus,
.premium-form select:focus,
.premium-form textarea:focus {
    outline: none;
    border-color: var(--color-gold);
    box-shadow: 0 0 0 4px var(--color-gold-glow);
}

/* Defensive client-side error layout classes */
.field-element.validation-error input,
.field-element.validation-error textarea {
    border-color: #e26a6a;
}

.error-msg {
    font-size: 0.75rem;
    color: #e26a6a;
    margin-top: 4px;
    min-height: 16px;
}

.form-submit-btn {
    background-color: var(--color-text-main);
    color: var(--color-bg);
    border: none;
    border-radius: 50px;
    padding: 20px 40px;
    font-family: var(--font-functional);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transition: background-color var(--motion-fast), transform var(--motion-fast);
}

.form-submit-btn:hover {
    background-color: var(--color-gold);
    transform: translateY(-2px);
}

.form-submit-btn svg {
    transition: transform var(--motion-fast);
}

.form-submit-btn:hover svg {
    transform: translateX(4px);
}

/* ==========================================================================
 *  STRUCTURAL FOOTER INTERFACE
 *  ========================================================================== */
.site-footer {
    border-top: 1px solid var(--color-border-clean);
    padding-vertical: 48px;
    font-size: 0.8rem;
    color: var(--color-text-muted);
}

.footer-content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
}

.footer-logo {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    letter-spacing: 3px;
    color: var(--color-text-main);
    display: block;
    margin-bottom: 8px;
}

.footer-legal-links {
    display: flex;
    list-style: none;
    gap: 32px;
}

.footer-legal-links a:hover {
    color: var(--color-gold);
}

/* ==========================================================================
 *  PERFORMANCE-BASED INTERSECTION REVEALS
 *  ========================================================================== */
.animate-reveal {
    opacity: 0;
    transform: translateY(30px);
    will-change: transform, opacity;
    animation: revealCurve 1.2s var(--bezier-premium) forwards;
}

.delay-1 { animation-delay: 0.15s; }
.delay-2 { animation-delay: 0.3s; }
.delay-3 { animation-delay: 0.45s; }
.delay-4 { animation-delay: 0.6s; }

@keyframes revealCurve {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Scroll native setup via Javascript Intersection Engine */
.scroll-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1s var(--bezier-premium), transform 1s var(--bezier-premium);
    will-change: transform, opacity;
}

.scroll-reveal.reveal-active {
    opacity: 1;
    transform: translateY(0);
}

/* ==========================================================================
 *  MOBILE-FIRST HIGHLY ADAPTIVE MEDIA QUERY LAYER
 *  ========================================================================== */

/* Tablet & Intermediate Desktop Adaptation viewports */
@media (max-width: 1024px) {
    .architecture-grid,
    .contact-wrapper-card {
        grid-template-columns: 1fr;
    }

    .contact-intro-column {
        border-right: none;
        border-bottom: 1px solid var(--color-border-clean);
    }

    .philosophy-visual img {
        height: 440px;
    }
}

/* Dedicated Mobile Device Breakpoint Engine */
@media (max-width: 768px) {
    .site-header {
        background-color: rgba(9, 9, 9, 0.85);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        padding-vertical: 5px;
    }

    .mobile-toggle {
        display: flex;
    }

    /* Core Mobile Drawer Isolation Mechanics */
    .main-navigation {
        position: fixed;
        top: 0;
        right: -100%;
        width: min(80%, 380px);
        height: 100vh;
        background-color: #0d0d0d;
        z-index: 150;
        padding: 130px 40px 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-left: 1px solid var(--color-border-clean);
        transition: right 0.6s cubic-bezier(0.76, 0, 0.24, 1);
    }

    /* Active state injected by performance JS handler */
    .main-navigation.drawer-active {
        right: 0;
    }

    .nav-links {
        flex-direction: column;
        gap: 32px;
    }

    .nav-item {
        font-size: 1.4rem;
        font-family: var(--font-heading);
        color: var(--color-text-main);
        display: block;
    }

    .nav-btn-desktop {
        display: none;
    }

    .nav-btn-mobile {
        display: block;
        text-align: center;
        background-color: var(--color-gold);
        color: #090909;
        padding: 16px;
        border-radius: 50px;
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    /* Hamburger Cross Morphing States */
    .mobile-toggle.toggle-active span:first-child {
        transform: translateY(6px) rotate(45deg);
    }

    .mobile-toggle.toggle-active span:last-child {
        transform: translateY(-6px) rotate(-45deg);
    }

    .menu-backdrop {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 20;
        opacity: 0;
        visibility: hidden;
        transition: opacity var(--motion-main), visibility var(--motion-main);
    }

    .menu-backdrop.backdrop-active {
        opacity: 1;
        visibility: visible;
    }

    /* Layout structural shifts to clean standard single columns */
    .asymmetric-gallery-grid {
        grid-template-columns: 1fr;
    }

    .gallery-item.item-wide {
        grid-column: span 1;
    }

    .gallery-item {
        min-height: 380px;
    }

    .gallery-hover-overlay {
        opacity: 1;
        background: linear-gradient(180deg, rgba(9, 9, 9, 0) 50%, rgba(9, 9, 9, 0.85) 100%);
        padding: 24px;
    }

    .overlay-details {
        transform: translateY(0);
    }

    .form-group-row {
        grid-template-columns: 1fr;
        gap: 28px;
    }

    .hero-metrics {
        flex-direction: column;
        gap: 24px;
    }
}
