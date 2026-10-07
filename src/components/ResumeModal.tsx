import React, { useState } from 'react';
import { X, Printer, ExternalLink, Check, Download, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, RESUME_DATA, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [printStatus, setPrintStatus] = useState<'idle' | 'printing' | 'success'>('idle');

  if (!isOpen) return null;

  const exportPdfDocument = () => {
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = 210;
      const marginX = 20;
      const contentWidth = pageWidth - marginX * 2; // 170mm
      let y = 22;

      // 1. HEADER (Perfect horizontal centering)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(20, 20, 20);
      doc.text('SRUTHY SURESH', pageWidth / 2, y, { align: 'center' });
      y += 6.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      doc.setTextColor(35, 35, 35);
      doc.text('Product Design | UI/UX Design', pageWidth / 2, y, { align: 'center' });
      y += 5.2;

      doc.setFontSize(9);
      doc.setTextColor(55, 55, 55);
      doc.text('sruthysuresh.mail@gmail.com | 9980510855 | Bangalore, India', pageWidth / 2, y, { align: 'center' });
      y += 4.5;

      doc.setTextColor(40, 40, 40);
      doc.text('https://portfolio-psi-orcin-5hqumbws3l.vercel.app/ | linkedin.com/in/sruthy-suresh02', pageWidth / 2, y, { align: 'center' });
      y += 3;

      // Section Heading with full-width underline
      const addSectionHeading = (title: string) => {
        y += 6.5;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.2);
        doc.setTextColor(20, 20, 20);
        doc.text(title, marginX, y);

        const lineY = y + 1.5;
        doc.setDrawColor(25, 25, 25);
        doc.setLineWidth(0.3);
        doc.line(marginX, lineY, marginX + contentWidth, lineY);

        y = lineY + 4.2;
      };

      // Bullet Point with clean circular vector bullet and hanging indent
      const renderBullet = (text: string) => {
        const bulletX = marginX + 2.0;
        const textX = marginX + 5.5;
        const textWidth = contentWidth - 5.5;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.2);
        doc.setTextColor(35, 35, 35);

        const lines = doc.splitTextToSize(text, textWidth);

        // Vector circle bullet aligned with the first line's cap height
        doc.setFillColor(25, 25, 25);
        doc.circle(bulletX, y - 1.1, 0.65, 'F');

        doc.text(lines, textX, y);
        y += lines.length * 4.1 + 1.4;
      };

      // Inline Bold Label followed by regular text with proper word-wrapping across all lines
      const renderInlineBoldText = (boldPrefix: string, normalText: string) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.2);
        const prefixWidth = doc.getTextWidth(boldPrefix);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.2);

        const words = normalText.split(/\s+/);
        const lines: string[] = [];
        let currentLine = '';
        let isFirstLine = true;

        for (let i = 0; i < words.length; i++) {
          const testLine = currentLine ? currentLine + ' ' + words[i] : words[i];
          const maxW = isFirstLine ? contentWidth - prefixWidth : contentWidth;

          if (doc.getTextWidth(testLine) > maxW && currentLine) {
            lines.push(currentLine);
            currentLine = words[i];
            isFirstLine = false;
          } else {
            currentLine = testLine;
          }
        }
        if (currentLine) {
          lines.push(currentLine);
        }

        for (let i = 0; i < lines.length; i++) {
          if (i === 0) {
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(20, 20, 20);
            doc.text(boldPrefix, marginX, y);

            doc.setFont('helvetica', 'normal');
            doc.setTextColor(35, 35, 35);
            doc.text(lines[i], marginX + prefixWidth, y);
          } else {
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(35, 35, 35);
            doc.text(lines[i], marginX, y);
          }
          y += 4.2;
        }
        y += 0.8;
      };

      // 2. ABOUT SECTION
      addSectionHeading('ABOUT');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.2);
      doc.setTextColor(35, 35, 35);
      const aboutLines = doc.splitTextToSize(
        'Aspiring Product Designer and UI/UX designer with hands-on experience designing intuitive, user-centered digital experiences across web and mobile. Skilled in translating requirements into user flows, wireframes, and interaction-ready prototypes in Figma, with attention to accessibility, design systems, and consistent component-based design. Comfortable collaborating cross-functionally and eager to learn modern UX/UI practices in a fast-paced, product-driven environment.',
        contentWidth
      );
      doc.text(aboutLines, marginX, y);
      y += aboutLines.length * 4.1 + 0.5;

      // 3. PROJECTS SECTION
      addSectionHeading('PROJECTS');

      // Odyssey
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.6);
      doc.setTextColor(20, 20, 20);
      doc.text('Odyssey — India Travel Discovery App', marginX, y);
      const odyWidth = doc.getTextWidth('Odyssey — India Travel Discovery App');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.text(' | UI/UX Design, Figma', marginX + odyWidth, y);
      y += 4.3;

      renderBullet(
        'Designed end-to-end user flows and wireframes — onboarding, sign-in, explore, and community pages — progressing from low-fidelity wireframes to interaction-ready, high-fidelity prototypes in Figma.'
      );
      renderBullet(
        'Applied accessibility and user-first thinking by designing for error, empty, and success states across key flows.'
      );
      renderBullet(
        'Created an interactive state-by-state map of India as primary navigation, translating a complex information architecture into a simple, intuitive interface for browsing places, food, wildlife, and nature spots by region.'
      );
      y += 2.0;

      // CoinGrow
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.6);
      doc.setTextColor(20, 20, 20);
      doc.text('CoinGrow — Budgeting App for Young Adults', marginX, y);
      const coinWidth = doc.getTextWidth('CoinGrow — Budgeting App for Young Adults');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.text(' | UI/UX Design, Figma', marginX + coinWidth, y);
      y += 4.3;

      renderBullet(
        'Designed core user flows and mockups — onboarding, dashboard, budget tracker, achievements, and peer challenges — maintaining consistent, component-based visual design across screens.'
      );
      renderBullet(
        'Explored two full visual directions and used a playful illustrated design system to make personal finance approachable for first-time earners, balancing user needs with product goals.'
      );
      y += 1.0;

      // 4. SKILLS SECTION
      addSectionHeading('SKILLS');
      renderInlineBoldText(
        'Design skills: ',
        'Wireframing, user flows, prototyping, visual design, interaction design, design systems, component-based design, typography, layout, accessibility'
      );
      renderInlineBoldText(
        'Design tools: ',
        'Figma, FigJam, Adobe Photoshop, Adobe Illustrator'
      );
      renderInlineBoldText(
        'Emerging practices: ',
        'Vibecoding'
      );
      renderInlineBoldText(
        'Collaboration: ',
        'Cross-functional teamwork with product and engineering, design handoff and documentation, strong communication'
      );
      y += 1.0;

      // 5. EDUCATION SECTION
      addSectionHeading('EDUCATION');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.2);
      doc.setTextColor(20, 20, 20);
      doc.text('Master of Computer Applications (MCA)', marginX, y);
      const mcaWidth = doc.getTextWidth('Master of Computer Applications (MCA)');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      doc.text(' — RVITM, Bangalore | 2024 – 2026', marginX + mcaWidth, y);
      y += 4.5;

      doc.setFont('helvetica', 'bold');
      doc.text('Bachelor of Science (BSc)', marginX, y);
      const bscWidth = doc.getTextWidth('Bachelor of Science (BSc)');
      doc.setFont('helvetica', 'normal');
      doc.text(" — St. Joseph's College | 2021 – 2024", marginX + bscWidth, y);
      y += 2.0;

      // 6. CERTIFICATIONS SECTION
      addSectionHeading('CERTIFICATIONS');
      const certBulletX = marginX + 2.0;
      const certTextX = marginX + 5.5;

      doc.setFillColor(25, 25, 25);
      doc.circle(certBulletX, y - 1.1, 0.65, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.2);
      doc.setTextColor(30, 30, 30);
      doc.text('Google UX Design Professional Certificate', certTextX, y);
      const certWidth = doc.getTextWidth('Google UX Design Professional Certificate');
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(60, 60, 60);
      doc.text(' — in progress', certTextX + certWidth, y);

      // Save PDF directly to trigger browser file download
      doc.save('Sruthy_Suresh_Resume.pdf');
      return true;
    } catch (err) {
      console.error('PDF Generation Error:', err);
      return false;
    }
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
      margin: 16mm 18mm 16mm 18mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    body {
      color: #111111;
      background: #ffffff;
      font-size: 10pt;
      line-height: 1.45;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .header {
      text-align: center;
      margin-bottom: 14px;
    }
    .name {
      font-size: 20pt;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: #111111;
      margin-bottom: 3px;
    }
    .role {
      font-size: 11pt;
      font-weight: 600;
      color: #222222;
      margin-bottom: 4px;
    }
    .contact-line {
      font-size: 9.5pt;
      color: #333333;
      margin-bottom: 2px;
    }
    .contact-line a {
      color: #333333;
      text-decoration: underline;
    }
    .section {
      margin-top: 14px;
    }
    .section-title {
      font-size: 10.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid #222222;
      padding-bottom: 2px;
      margin-bottom: 6px;
      color: #111111;
    }
    .about-text {
      font-size: 9.5pt;
      line-height: 1.45;
      color: #222222;
      text-align: justify;
    }
    .project-item {
      margin-bottom: 10px;
    }
    .project-header {
      font-size: 10pt;
      font-weight: 700;
      color: #111111;
      margin-bottom: 2px;
    }
    .project-sub {
      font-weight: 400;
      color: #444444;
    }
    ul {
      margin-left: 20px;
      margin-top: 2px;
    }
    li {
      font-size: 9.5pt;
      line-height: 1.42;
      margin-bottom: 3px;
      color: #222222;
    }
    .skill-row {
      font-size: 9.5pt;
      line-height: 1.45;
      margin-bottom: 4px;
      color: #222222;
    }
    .skill-row strong {
      font-weight: 700;
      color: #111111;
    }
    .edu-item {
      font-size: 9.5pt;
      line-height: 1.5;
      margin-bottom: 3px;
      color: #111111;
    }
    .cert-item {
      font-size: 9.5pt;
      line-height: 1.4;
      margin-left: 20px;
      margin-top: 2px;
      color: #222222;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">SRUTHY SURESH</div>
    <div class="role">Product Design | UI/UX Design</div>
    <div class="contact-line">sruthysuresh.mail@gmail.com | 9980510855 | Bangalore, India</div>
    <div class="contact-line">
      <a href="https://portfolio-psi-orcin-5hqumbws3l.vercel.app/" target="_blank">https://portfolio-psi-orcin-5hqumbws3l.vercel.app/</a>
      |
      <a href="https://www.linkedin.com/in/sruthy-suresh02/" target="_blank">linkedin.com/in/sruthy-suresh02</a>
    </div>
  </div>

  <div class="section">
    <div class="section-title">ABOUT</div>
    <div class="about-text">
      Aspiring Product Designer and UI/UX designer with hands-on experience designing intuitive, user-centered digital
      experiences across web and mobile. Skilled in translating requirements into user flows, wireframes, and interaction-ready
      prototypes in Figma, with attention to accessibility, design systems, and consistent component-based design. Comfortable
      collaborating cross-functionally and eager to learn modern UX/UI practices in a fast-paced, product-driven environment.
    </div>
  </div>

  <div class="section">
    <div class="section-title">PROJECTS</div>
    <div class="project-item">
      <div class="project-header">
        Odyssey — India Travel Discovery App <span class="project-sub">| UI/UX Design, Figma</span>
      </div>
      <ul>
        <li>Designed end-to-end user flows and wireframes — onboarding, sign-in, explore, and community pages — progressing from low-fidelity wireframes to interaction-ready, high-fidelity prototypes in Figma.</li>
        <li>Applied accessibility and user-first thinking by designing for error, empty, and success states across key flows.</li>
        <li>Created an interactive state-by-state map of India as primary navigation, translating a complex information architecture into a simple, intuitive interface for browsing places, food, wildlife, and nature spots by region.</li>
      </ul>
    </div>

    <div class="project-item">
      <div class="project-header">
        CoinGrow — Budgeting App for Young Adults <span class="project-sub">| UI/UX Design, Figma</span>
      </div>
      <ul>
        <li>Designed core user flows and mockups — onboarding, dashboard, budget tracker, achievements, and peer challenges — maintaining consistent, component-based visual design across screens.</li>
        <li>Explored two full visual directions and used a playful illustrated design system to make personal finance approachable for first-time earners, balancing user needs with product goals.</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="section-title">SKILLS</div>
    <div class="skill-row">
      <strong>Design skills:</strong> Wireframing, user flows, prototyping, visual design, interaction design, design systems, component-based design, typography, layout, accessibility
    </div>
    <div class="skill-row">
      <strong>Design tools:</strong> Figma, FigJam, Adobe Photoshop, Adobe Illustrator
    </div>
    <div class="skill-row">
      <strong>Emerging practices:</strong> Vibecoding
    </div>
    <div class="skill-row">
      <strong>Collaboration:</strong> Cross-functional teamwork with product and engineering, design handoff and documentation, strong communication
    </div>
  </div>

  <div class="section">
    <div class="section-title">EDUCATION</div>
    <div class="edu-item">
      <strong>Master of Computer Applications (MCA)</strong> — RVITM, Bangalore | 2024 – 2026
    </div>
    <div class="edu-item">
      <strong>Bachelor of Science (BSc)</strong> — St. Joseph's College | 2021 – 2024
    </div>
  </div>

  <div class="section">
    <div class="section-title">CERTIFICATIONS</div>
    <ul class="cert-item">
      <li>Google UX Design Professional Certificate — in progress</li>
    </ul>
  </div>
</body>
</html>`;
  };

  const handlePrint = () => {
    setPrintStatus('printing');

    // 1. Immediately generate and download the authentic vector PDF
    exportPdfDocument();

    // 2. Trigger browser print dialog for environments that allow it
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
        console.warn('Direct print blocked by sandbox:', err);
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
          <div className="sticky top-0 z-20 bg-[#F5F5F0] px-6 py-3.5 border-b border-[#5A5A40]/10 flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5F6B12] animate-pulse" />
              <span className="text-xs font-bold text-[#2D3319] uppercase tracking-wider font-display">
                Official Resume • Sruthy Suresh
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95 ${
                  printStatus === 'success'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#5F6B12] text-white hover:bg-[#4E580D]'
                }`}
              >
                {printStatus === 'success' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>PDF Downloaded & Ready!</span>
                  </>
                ) : printStatus === 'printing' ? (
                  <>
                    <Printer className="w-3.5 h-3.5 animate-pulse" />
                    <span>Preparing PDF...</span>
                  </>
                ) : (
                  <>
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / Save PDF</span>
                  </>
                )}
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

          {/* Resume Body Styled Exactly Like The Attached PDF */}
          <div className="p-8 sm:p-12 md:p-14 overflow-y-auto space-y-6 text-[#1A1F10] bg-white print:p-8 font-sans-clean leading-relaxed">
            
            {/* 1. HEADER (Centered, Bold, Clean) */}
            <div className="text-center space-y-1 pb-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#1A1F10] uppercase font-display">
                SRUTHY SURESH
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#2D3319] tracking-wide">
                Product Design | UI/UX Design
              </p>
              <p className="text-xs text-[#2D3319] opacity-90 pt-0.5">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-[#2D3319]">
                  {PERSONAL_INFO.email}
                </a>
                {' '}|{' '}
                <span>{PERSONAL_INFO.phone}</span>
                {' '}|{' '}
                <span>{PERSONAL_INFO.location}</span>
              </p>
              <p className="text-xs text-[#2D3319] opacity-90">
                <a
                  href="https://portfolio-psi-orcin-5hqumbws3l.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-[#5F6B12] font-medium"
                >
                  https://portfolio-psi-orcin-5hqumbws3l.vercel.app/
                </a>
                {' '}|{' '}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-[#5F6B12] font-medium"
                >
                  linkedin.com/in/sruthy-suresh02
                </a>
              </p>
            </div>

            {/* 2. ABOUT SECTION */}
            <div className="space-y-2">
              <div className="border-b border-[#2D3319] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  ABOUT
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[#2D3319] opacity-90 leading-relaxed text-justify">
                Aspiring Product Designer and UI/UX designer with hands-on experience designing intuitive, user-centered digital experiences across web and mobile. Skilled in translating requirements into user flows, wireframes, and interaction-ready prototypes in Figma, with attention to accessibility, design systems, and consistent component-based design. Comfortable collaborating cross-functionally and eager to learn modern UX/UI practices in a fast-paced, product-driven environment.
              </p>
            </div>

            {/* 3. PROJECTS SECTION */}
            <div className="space-y-4">
              <div className="border-b border-[#2D3319] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  PROJECTS
                </h2>
              </div>

              {/* Project 1: Odyssey */}
              <div className="space-y-1.5 text-xs sm:text-[13px]">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="font-bold text-[#1A1F10]">
                    Odyssey — India Travel Discovery App{' '}
                    <span className="font-normal text-[#4A5520]">| UI/UX Design, Figma</span>
                  </p>
                  <a
                    href={PROJECTS[0].figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-semibold text-[#5F6B12] hover:underline inline-flex items-center gap-1 print:hidden"
                  >
                    <span>Figma Link</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <ul className="list-disc pl-5 space-y-1 text-[#2D3319] opacity-90 leading-relaxed">
                  <li>
                    Designed end-to-end user flows and wireframes — onboarding, sign-in, explore, and community pages — progressing from low-fidelity wireframes to interaction-ready, high-fidelity prototypes in Figma.
                  </li>
                  <li>
                    Applied accessibility and user-first thinking by designing for error, empty, and success states across key flows.
                  </li>
                  <li>
                    Created an interactive state-by-state map of India as primary navigation, translating a complex information architecture into a simple, intuitive interface for browsing places, food, wildlife, and nature spots by region.
                  </li>
                </ul>
              </div>

              {/* Project 2: CoinGrow */}
              <div className="space-y-1.5 text-xs sm:text-[13px] pt-1">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="font-bold text-[#1A1F10]">
                    CoinGrow — Budgeting App for Young Adults{' '}
                    <span className="font-normal text-[#4A5520]">| UI/UX Design, Figma</span>
                  </p>
                  <a
                    href={PROJECTS[1].figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-semibold text-[#5F6B12] hover:underline inline-flex items-center gap-1 print:hidden"
                  >
                    <span>Figma Link</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <ul className="list-disc pl-5 space-y-1 text-[#2D3319] opacity-90 leading-relaxed">
                  <li>
                    Designed core user flows and mockups — onboarding, dashboard, budget tracker, achievements, and peer challenges — maintaining consistent, component-based visual design across screens.
                  </li>
                  <li>
                    Explored two full visual directions and used a playful illustrated design system to make personal finance approachable for first-time earners, balancing user needs with product goals.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. SKILLS SECTION */}
            <div className="space-y-2.5">
              <div className="border-b border-[#2D3319] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  SKILLS
                </h2>
              </div>

              <div className="space-y-1.5 text-xs sm:text-[13px] text-[#2D3319] opacity-90 leading-relaxed">
                <div>
                  <span className="font-bold text-[#1A1F10]">Design skills:</span>{' '}
                  <span>Wireframing, user flows, prototyping, visual design, interaction design, design systems, component-based design, typography, layout, accessibility</span>
                </div>

                <div>
                  <span className="font-bold text-[#1A1F10]">Design tools:</span>{' '}
                  <span>Figma, FigJam, Adobe Photoshop, Adobe Illustrator</span>
                </div>

                <div>
                  <span className="font-bold text-[#1A1F10]">Emerging practices:</span>{' '}
                  <span>Vibecoding</span>
                </div>

                <div>
                  <span className="font-bold text-[#1A1F10]">Collaboration:</span>{' '}
                  <span>Cross-functional teamwork with product and engineering, design handoff and documentation, strong communication</span>
                </div>
              </div>
            </div>

            {/* 5. EDUCATION SECTION */}
            <div className="space-y-2">
              <div className="border-b border-[#2D3319] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  EDUCATION
                </h2>
              </div>

              <div className="space-y-1 text-xs sm:text-[13px] text-[#2D3319] opacity-90">
                <p className="text-[#1A1F10]">
                  <span className="font-bold">Master of Computer Applications (MCA)</span> — RVITM, Bangalore | 2024 – 2026
                </p>
                <p className="text-[#1A1F10]">
                  <span className="font-bold">Bachelor of Science (BSc)</span> — St. Joseph's College | 2021 – 2024
                </p>
              </div>
            </div>

            {/* 6. CERTIFICATIONS SECTION */}
            <div className="space-y-2">
              <div className="border-b border-[#2D3319] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  CERTIFICATIONS
                </h2>
              </div>

              <ul className="list-disc pl-5 text-xs sm:text-[13px] text-[#2D3319] opacity-90">
                <li>
                  <span className="font-medium">Google UX Design Professional Certificate</span> — <span className="italic">in progress</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

