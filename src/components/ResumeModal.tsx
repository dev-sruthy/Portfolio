import React, { useState } from 'react';
import { X, Printer, Check, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ATTACHED_RESUME_PDF_PATH = '/assets/aistudio/Sruthy_Suresh_f23cf454.pdf';
const FALLBACK_RESUME_PDF_PATH = '/Sruthy_Suresh_Resume.pdf';

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success'>('idle');
  const [, setPrintStatus] = useState<'idle' | 'printing' | 'success'>('idle');

  if (!isOpen) return null;

  const triggerBlobDownload = (blob: Blob, filename: string) => {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
      URL.revokeObjectURL(blobUrl);
    }, 10000);
  };

  const handleDownload = async () => {
    setDownloadStatus('downloading');
    try {
      let response = await fetch(ATTACHED_RESUME_PDF_PATH, { cache: 'no-cache' });
      if (!response.ok) {
        response = await fetch(FALLBACK_RESUME_PDF_PATH, { cache: 'no-cache' });
      }
      if (!response.ok) {
        throw new Error(`Failed to fetch resume PDF (${response.status})`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
      triggerBlobDownload(pdfBlob, 'Sruthy_Suresh_Resume.pdf');
      setDownloadStatus('success');
    } catch (err) {
      console.error('Resume PDF download error:', err);
      setDownloadStatus('idle');
    }

    setTimeout(() => {
      setDownloadStatus('idle');
    }, 3500);
  };

  const generatePrintableResumeHtml = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Sruthy Suresh - Resume</title>
  <style>
    @page {
      size: A4;
      margin: 12mm 16mm 12mm 16mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    body {
      color: #111827;
      background: #ffffff;
      font-size: 9pt;
      line-height: 1.4;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .header {
      text-align: center;
      margin-bottom: 10px;
    }
    .name {
      font-size: 21pt;
      font-weight: 800;
      color: #111827;
      margin-bottom: 2px;
    }
    .role {
      font-size: 9.5pt;
      font-weight: 700;
      color: #1d4e89;
      letter-spacing: 0.4px;
      margin-bottom: 3px;
    }
    .contact-line {
      font-size: 8.5pt;
      color: #4b5563;
      margin-bottom: 2px;
    }
    .contact-line a {
      color: #1d4e89;
      text-decoration: none;
    }
    .section {
      margin-top: 9px;
      margin-bottom: 8px;
    }
    .section-title {
      font-size: 9.5pt;
      font-weight: 800;
      color: #111827;
      border-bottom: 1px solid #d1d5db;
      padding-bottom: 2px;
      margin-bottom: 5px;
      letter-spacing: 0.4px;
    }
    .summary-text {
      font-size: 8.7pt;
      line-height: 1.42;
      color: #1f2937;
    }
    ul {
      list-style-type: disc;
      padding-left: 16px;
    }
    li {
      font-size: 8.6pt;
      line-height: 1.38;
      margin-bottom: 2px;
      color: #1f2937;
    }
    .item-header {
      font-size: 9pt;
      font-weight: 700;
      color: #111827;
      margin-top: 5px;
      margin-bottom: 2px;
    }
    .accent {
      color: #1d4e89;
    }
    .muted {
      font-weight: 400;
      color: #4b5563;
    }
    .links-line {
      font-size: 8.3pt;
      color: #4b5563;
      margin-bottom: 3px;
    }
    .links-line a {
      color: #1d4e89;
      text-decoration: none;
    }
    .edu-block {
      margin-bottom: 4px;
      font-size: 8.7pt;
    }
    .edu-title {
      font-weight: 700;
      color: #111827;
    }
    .edu-school {
      color: #1f2937;
      padding-left: 10px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">Sruthy Suresh</div>
    <div class="role">UI/UX DESIGNER • PRODUCT DESIGNER</div>
    <div class="contact-line">Bengaluru, Karnataka, India • sruthysuresh.mail@gmail.com • +91 9980510855</div>
    <div class="contact-line">
      • Portfolio: <a href="https://portfolio-psi-orcin-5hqumbws31.vercel.app" target="_blank">portfolio-psi-orcin-5hqumbws31.vercel.app</a>
      • LinkedIn: <a href="https://linkedin.com/in/sruthy-suresh02" target="_blank">linkedin.com/in/sruthy-suresh02</a>
    </div>
  </div>

  <div class="section">
    <div class="section-title">PROFESSIONAL SUMMARY</div>
    <div class="summary-text">
      UI/UX and Product Designer with an MCA background, specializing in designing intuitive, scalable web and mobile experiences. Skilled in Figma, high-fidelity interactive prototyping, design systems, and user research. Experienced in contributing UI/UX design enhancements to live platforms and leveraging technical knowledge to bridge user-centered design with developer handoff for production-ready digital products.
    </div>
  </div>

  <div class="section">
    <div class="section-title">SKILLS &amp; COMPETENCIES</div>
    <ul>
      <li><strong>UI &amp; Interaction Design:</strong> Wireframing, High-Fidelity Prototyping, Interactive States, Design Systems, Auto Layout, Responsive Web/Mobile</li>
      <li><strong>UX Research &amp; Strategy:</strong> User Research, Usability Testing, Personas, Empathy Mapping, User Journey Mapping, Information Architecture</li>
      <li><strong>Design Tools:</strong> Figma, FigJam, Adobe Photoshop, Adobe Illustrator, Google Stitch, Google Antigravity, AI-Assisted Prototyping</li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">DESIGN EXPERIENCE &amp; CONTRIBUTIONS</div>
    <div class="item-header">
      Product Design Contributor — <span class="accent">Monkeys</span>
      <span class="muted">Nov 2026 – Present Open-Source Publishing &amp; Community Platform</span>
    </div>
    <ul>
      <li><strong>UX Audit &amp; Flow Optimization:</strong> Evaluating core web platform flows—including content publishing studio, community groups, and event discovery—to identify user friction points and streamline site navigation.</li>
      <li><strong>UI &amp; Component Design:</strong> Designing responsive layout components, interactive states, and accessible UI design patterns in Figma to modernize the web interface across desktop and mobile devices.</li>
      <li><strong>Developer Handoff &amp; Specifications:</strong> Partnering with core maintainers and developers to deliver pixel-perfect Figma prototypes, design tokens, and component documentation for seamless frontend implementation.</li>
      <li><strong>Content Feed Refinement:</strong> Enhancing visual hierarchy, typography, and card component layouts for interest-based feeds and event listings to boost reader engagement and content scannability.</li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">FEATURED UX PROJECTS</div>

    <div class="item-header">Receipts — <span class="accent">Daily Commitment &amp; Accountability Tracker</span></div>
    <div class="links-line">
      UI/UX Design Figma Prototype: <a href="https://figma.com/design/WYKT1tB1G8vSn8Jbj6vk71/Receipts" target="_blank">figma.com/design/WYKT1tB1G8vSn8Jbj6vk71/Receipts</a>
      • Live: <a href="https://receipts-goal-tracker.vercel.app" target="_blank">receipts-goal-tracker.vercel.app</a>
    </div>
    <ul>
      <li>Designed an app that turns daily goals into a receipt-style checklist, settled each day as a WIN or LOSS to make accountability tangible.</li>
      <li>Designed core flows: calendar with Today/Settled/Open states, goal setting (7-day, monthly, yearly) that auto-repeats on daily receipts, and a Brain Dump journal with past reflections.</li>
      <li>Created expressive feedback states (WIN/LOSS stamps, confirmation dialogs) and a dark/light theme with reusable Figma components.</li>
    </ul>

    <div class="item-header">Odyssey — <span class="accent">India Travel Discovery App</span></div>
    <div class="links-line">
      UI/UX Design Figma Prototype: <a href="https://figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India" target="_blank">figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India</a>
    </div>
    <ul>
      <li>Designed a comprehensive travel platform concept that aggregates regional attractions, local cuisine, wildlife, and nature spots across India into a single curated discovery experience.</li>
      <li>Developed two core user personas (first-time explorer &amp; seasoned traveler) to guide navigation flow structure and feature prioritization.</li>
      <li>Mapped end-to-end user flows and constructed interactive wireframes for Onboarding, Search, Exploration, Community, and Profile settings.</li>
      <li>Designed an interactive state-by-state map navigation; conducted usability testing with 5 participants, iterating filter mechanisms to increase navigation task success rate by 20%.</li>
    </ul>

    <div class="item-header">CoinGrow — <span class="accent">Gamified Budgeting App for Young Adults</span></div>
    <div class="links-line">
      UI/UX Design Figma Prototype: <a href="https://figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app" target="_blank">figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app</a>
    </div>
    <ul>
      <li>Created a financial health app tailored for first-time earners, combining habit-building gamification with intuitive money-tracking tools.</li>
      <li>Designed core user journeys: onboarding, authentication, dashboard overview (net worth, monthly spend, activity log), budget setup, and peer leaderboards.</li>
      <li>Implemented dynamic feedback UI states including validation error messages, active/disabled button states, and confirmation overlays.</li>
      <li>Incorporated gamification mechanics (Smart Money Points, savings milestone badges, peer streaks) and built custom visual design systems with reusable Figma components.</li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">CERTIFICATIONS</div>
    <div class="summary-text">
      <strong>Google UX Design Professional Certificate</strong> <span class="muted">Coursera 7-Course Specialization • Completed Oct 2026</span>
      Covered end-to-end UX lifecycle: empathize, define, ideate, low/high-fidelity prototyping, UX research, usability testing, and responsive design systems.
    </div>
  </div>

  <div class="section">
    <div class="section-title">EDUCATION</div>
    <div class="edu-block">
      <div class="edu-title">Master of Computer Applications (MCA) <span class="muted">2024 – 2026</span></div>
      <div class="edu-school">RV Institute of Technology and Management, Bengaluru</div>
    </div>
    <div class="edu-block">
      <div class="edu-title">Bachelor of Science (B.Sc.) <span class="muted">2021 – 2024</span></div>
      <div class="edu-school">St. Joseph's University / College, Bengaluru</div>
    </div>
  </div>
</body>
</html>`;
  };

  const handlePrint = () => {
    setPrintStatus('printing');
    void handleDownload();

    try {
      const existingFrame = document.getElementById('resume-print-iframe');
      if (existingFrame) {
        existingFrame.remove();
      }

      const printIframe = document.createElement('iframe');
      printIframe.id = 'resume-print-iframe';
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '10px';
      printIframe.style.height = '10px';
      printIframe.style.opacity = '0';
      printIframe.style.pointerEvents = 'none';
      printIframe.style.border = 'none';
      document.body.appendChild(printIframe);

      const frameDoc = printIframe.contentWindow?.document;
      if (frameDoc) {
        frameDoc.open();
        frameDoc.write(generatePrintableResumeHtml());
        frameDoc.close();

        setTimeout(() => {
          try {
            printIframe.contentWindow?.focus();
            printIframe.contentWindow?.print();
          } catch {
            window.print();
          }

          setTimeout(() => {
            if (document.body.contains(printIframe)) {
              document.body.removeChild(printIframe);
            }
          }, 3000);
        }, 300);
      }
    } catch {
      try {
        window.print();
      } catch (err) {
        console.warn('Direct print fallback:', err);
      }
    }

    setPrintStatus('success');
    setTimeout(() => {
      setPrintStatus('idle');
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div className="resume-modal-container fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static print:bg-white">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2D3319]/60 backdrop-blur-sm transition-opacity print:hidden"
        />

        {/* Resume Document Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="resume-modal-sheet relative w-full max-w-4xl max-h-[92vh] bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl border border-[#5A5A40]/15 overflow-hidden flex flex-col z-10 my-auto print:max-h-none print:shadow-none print:border-none print:rounded-none print:w-full"
        >
          {/* Top Bar Actions */}
          <div className="sticky top-0 z-20 bg-[#F5F5F0] px-4 sm:px-6 py-3.5 border-b border-[#5A5A40]/10 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5F6B12] animate-pulse" />
              <span className="text-xs font-bold text-[#2D3319] uppercase tracking-wider font-display">
                Official Resume • Sruthy Suresh
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95 ${
                  downloadStatus === 'success'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#5F6B12] text-white hover:bg-[#4E580D]'
                }`}
                title="Download resume PDF"
              >
                {downloadStatus === 'success' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Downloaded!</span>
                  </>
                ) : downloadStatus === 'downloading' ? (
                  <>
                    <Download className="w-3.5 h-3.5 animate-bounce" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Resume</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#2D3319] bg-stone-200/80 hover:bg-stone-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Print resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-[#2D3319] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close resume"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body Matching the Attached PDF */}
          <div className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-4 text-[#111827] bg-white print:p-8 font-sans leading-relaxed">
            {/* 1. HEADER */}
            <div className="text-center space-y-0.5 pb-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827]">
                Sruthy Suresh
              </h1>
              <p className="text-xs sm:text-sm font-bold text-[#1D4E89] tracking-wide uppercase">
                UI/UX DESIGNER • PRODUCT DESIGNER
              </p>
              <p className="text-xs text-[#4B5563] pt-0.5">
                <span>Bengaluru, Karnataka, India</span>
                {' • '}
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-[#4B5563]">
                  {PERSONAL_INFO.email}
                </a>
                {' • '}
                <span>+91 9980510855</span>
              </p>
              <p className="text-xs text-[#4B5563]">
                <span>• Portfolio: </span>
                <a
                  href="https://portfolio-psi-orcin-5hqumbws31.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#1D4E89] font-medium"
                >
                  portfolio-psi-orcin-5hqumbws31.vercel.app
                </a>
                {' • LinkedIn: '}
                <a
                  href="https://linkedin.com/in/sruthy-suresh02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#1D4E89] font-medium"
                >
                  linkedin.com/in/sruthy-suresh02
                </a>
              </p>
            </div>

            {/* 2. PROFESSIONAL SUMMARY */}
            <section className="space-y-1.5">
              <div className="border-b border-stone-300 pb-0.5">
                <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                  PROFESSIONAL SUMMARY
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[#1F2937] leading-relaxed">
                UI/UX and Product Designer with an MCA background, specializing in designing intuitive, scalable web and mobile experiences. Skilled in Figma, high-fidelity interactive prototyping, design systems, and user research. Experienced in contributing UI/UX design enhancements to live platforms and leveraging technical knowledge to bridge user-centered design with developer handoff for production-ready digital products.
              </p>
            </section>

            {/* 3. SKILLS & COMPETENCIES */}
            <section className="space-y-1.5">
              <div className="border-b border-stone-300 pb-0.5">
                <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                  SKILLS &amp; COMPETENCIES
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-[13px] text-[#1F2937] leading-relaxed">
                <li>
                  <span className="font-bold text-[#111827]">UI &amp; Interaction Design:</span>{' '}
                  Wireframing, High-Fidelity Prototyping, Interactive States, Design Systems, Auto Layout, Responsive Web/Mobile
                </li>
                <li>
                  <span className="font-bold text-[#111827]">UX Research &amp; Strategy:</span>{' '}
                  User Research, Usability Testing, Personas, Empathy Mapping, User Journey Mapping, Information Architecture
                </li>
                <li>
                  <span className="font-bold text-[#111827]">Design Tools:</span>{' '}
                  Figma, FigJam, Adobe Photoshop, Adobe Illustrator, Google Stitch, Google Antigravity, AI-Assisted Prototyping
                </li>
              </ul>
            </section>

            {/* 4. DESIGN EXPERIENCE & CONTRIBUTIONS */}
            <section className="space-y-1.5">
              <div className="border-b border-stone-300 pb-0.5">
                <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                  DESIGN EXPERIENCE &amp; CONTRIBUTIONS
                </h2>
              </div>

              <div className="space-y-1 text-xs sm:text-[13px]">
                <p className="font-bold text-[#111827]">
                  Product Design Contributor — <span className="text-[#1D4E89]">Monkeys</span>{' '}
                  <span className="font-normal text-[#4B5563]">
                    Nov 2026 – Present Open-Source Publishing &amp; Community Platform
                  </span>
                </p>

                <ul className="list-disc pl-5 space-y-0.5 text-[#1F2937] leading-relaxed">
                  <li>
                    <span className="font-bold text-[#111827]">UX Audit &amp; Flow Optimization:</span>{' '}
                    Evaluating core web platform flows—including content publishing studio, community groups, and event discovery—to identify user friction points and streamline site navigation.
                  </li>
                  <li>
                    <span className="font-bold text-[#111827]">UI &amp; Component Design:</span>{' '}
                    Designing responsive layout components, interactive states, and accessible UI design patterns in Figma to modernize the web interface across desktop and mobile devices.
                  </li>
                  <li>
                    <span className="font-bold text-[#111827]">Developer Handoff &amp; Specifications:</span>{' '}
                    Partnering with core maintainers and developers to deliver pixel-perfect Figma prototypes, design tokens, and component documentation for seamless frontend implementation.
                  </li>
                  <li>
                    <span className="font-bold text-[#111827]">Content Feed Refinement:</span>{' '}
                    Enhancing visual hierarchy, typography, and card component layouts for interest-based feeds and event listings to boost reader engagement and content scannability.
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. FEATURED UX PROJECTS */}
            <section className="space-y-2.5">
              <div className="border-b border-stone-300 pb-0.5">
                <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                  FEATURED UX PROJECTS
                </h2>
              </div>

              {/* Project 1: Receipts */}
              <div className="space-y-1 text-xs sm:text-[13px]">
                <p className="font-bold text-[#111827]">
                  Receipts — <span className="text-[#1D4E89]">Daily Commitment &amp; Accountability Tracker</span>
                </p>
                <p className="text-[12px] text-[#4B5563]">
                  <span>UI/UX Design Figma Prototype: </span>
                  <a
                    href="https://figma.com/design/WYKT1tB1G8vSn8Jbj6vk71/Receipts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1D4E89] hover:underline"
                  >
                    figma.com/design/WYKT1tB1G8vSn8Jbj6vk71/Receipts
                  </a>
                  <span> • Live: </span>
                  <a
                    href="https://receipts-goal-tracker.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1D4E89] hover:underline"
                  >
                    receipts-goal-tracker.vercel.app
                  </a>
                </p>
                <ul className="list-disc pl-5 space-y-0.5 text-[#1F2937] leading-relaxed">
                  <li>
                    Designed an app that turns daily goals into a receipt-style checklist, settled each day as a WIN or LOSS to make accountability tangible.
                  </li>
                  <li>
                    Designed core flows: calendar with Today/Settled/Open states, goal setting (7-day, monthly, yearly) that auto-repeats on daily receipts, and a Brain Dump journal with past reflections.
                  </li>
                  <li>
                    Created expressive feedback states (WIN/LOSS stamps, confirmation dialogs) and a dark/light theme with reusable Figma components.
                  </li>
                </ul>
              </div>

              {/* Project 2: Odyssey */}
              <div className="space-y-1 text-xs sm:text-[13px] pt-0.5">
                <p className="font-bold text-[#111827]">
                  Odyssey — <span className="text-[#1D4E89]">India Travel Discovery App</span>
                </p>
                <p className="text-[12px] text-[#4B5563]">
                  <span>UI/UX Design Figma Prototype: </span>
                  <a
                    href="https://figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1D4E89] hover:underline"
                  >
                    figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India
                  </a>
                </p>
                <ul className="list-disc pl-5 space-y-0.5 text-[#1F2937] leading-relaxed">
                  <li>
                    Designed a comprehensive travel platform concept that aggregates regional attractions, local cuisine, wildlife, and nature spots across India into a single curated discovery experience.
                  </li>
                  <li>
                    Developed two core user personas (first-time explorer &amp; seasoned traveler) to guide navigation flow structure and feature prioritization.
                  </li>
                  <li>
                    Mapped end-to-end user flows and constructed interactive wireframes for Onboarding, Search, Exploration, Community, and Profile settings.
                  </li>
                  <li>
                    Designed an interactive state-by-state map navigation; conducted usability testing with 5 participants, iterating filter mechanisms to increase navigation task success rate by 20%.
                  </li>
                </ul>
              </div>

              {/* Project 3: CoinGrow */}
              <div className="space-y-1 text-xs sm:text-[13px] pt-0.5">
                <p className="font-bold text-[#111827]">
                  CoinGrow — <span className="text-[#1D4E89]">Gamified Budgeting App for Young Adults</span>
                </p>
                <p className="text-[12px] text-[#4B5563]">
                  <span>UI/UX Design Figma Prototype: </span>
                  <a
                    href="https://figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1D4E89] hover:underline"
                  >
                    figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app
                  </a>
                </p>
                <ul className="list-disc pl-5 space-y-0.5 text-[#1F2937] leading-relaxed">
                  <li>
                    Created a financial health app tailored for first-time earners, combining habit-building gamification with intuitive money-tracking tools.
                  </li>
                  <li>
                    Designed core user journeys: onboarding, authentication, dashboard overview (net worth, monthly spend, activity log), budget setup, and peer leaderboards.
                  </li>
                  <li>
                    Implemented dynamic feedback UI states including validation error messages, active/disabled button states, and confirmation overlays.
                  </li>
                  <li>
                    Incorporated gamification mechanics (Smart Money Points, savings milestone badges, peer streaks) and built custom visual design systems with reusable Figma components.
                  </li>
                </ul>
              </div>
            </section>

            {/* 6. CERTIFICATIONS */}
            <section className="space-y-1">
              <div className="border-b border-stone-300 pb-0.5">
                <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                  CERTIFICATIONS
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[#1F2937] leading-relaxed">
                <span className="font-bold text-[#111827]">Google UX Design Professional Certificate</span>{' '}
                <span className="text-[#4B5563]">Coursera 7-Course Specialization • Completed Oct 2026</span>{' '}
                Covered end-to-end UX lifecycle: empathize, define, ideate, low/high-fidelity prototyping, UX research, usability testing, and responsive design systems.
              </p>
            </section>

            {/* 7. EDUCATION */}
            <section className="space-y-1.5">
              <div className="border-b border-stone-300 pb-0.5">
                <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111827]">
                  EDUCATION
                </h2>
              </div>
              <div className="space-y-1.5 text-xs sm:text-[13px] text-[#1F2937]">
                <div>
                  <p className="font-bold text-[#111827]">
                    Master of Computer Applications (MCA){' '}
                    <span className="font-normal text-[#4B5563]">2024 – 2026</span>
                  </p>
                  <p className="pl-3">RV Institute of Technology and Management, Bengaluru</p>
                </div>
                <div>
                  <p className="font-bold text-[#111827]">
                    Bachelor of Science (B.Sc.){' '}
                    <span className="font-normal text-[#4B5563]">2021 – 2024</span>
                  </p>
                  <p className="pl-3">St. Joseph's University / College, Bengaluru</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
