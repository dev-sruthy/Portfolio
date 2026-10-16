import React, { useState } from 'react';
import { X, Printer, ExternalLink, Check, Download, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success'>('idle');
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
      const marginX = 18;
      const contentWidth = pageWidth - marginX * 2; // 174mm
      let y = 18;

      // Header
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(15, 15, 15);
      doc.text('Sruthy Suresh', pageWidth / 2, y, { align: 'center' });
      y += 6.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      doc.setTextColor(35, 35, 35);
      doc.text('UI/UX Designer  |  Product Designer', pageWidth / 2, y, { align: 'center' });
      y += 5.2;

      doc.setFontSize(9);
      doc.setTextColor(50, 50, 50);
      doc.text('Bangalore, India  |  sruthysuresh.mail@gmail.com  |  9980510855', pageWidth / 2, y, { align: 'center' });
      y += 4.5;

      // Portfolio and LinkedIn line
      const linkLinePrefix = 'Portfolio: ';
      const portUrl = 'portfolio-psi-orcin-5hqumbws3l.vercel.app';
      const midSep = '  |  LinkedIn: ';
      const linkedInUrl = 'linkedin.com/in/sruthy-suresh02';

      doc.setFontSize(8.8);
      doc.setTextColor(30, 30, 30);
      const fullText = `${linkLinePrefix}${portUrl}${midSep}${linkedInUrl}`;
      const totalTextWidth = doc.getTextWidth(fullText);
      let curX = (pageWidth - totalTextWidth) / 2;

      doc.text(linkLinePrefix, curX, y);
      curX += doc.getTextWidth(linkLinePrefix);

      doc.setTextColor(0, 85, 175);
      doc.text(portUrl, curX, y);
      doc.link(curX, y - 3, doc.getTextWidth(portUrl), 4, { url: 'https://' + portUrl });
      curX += doc.getTextWidth(portUrl);

      doc.setTextColor(30, 30, 30);
      doc.text(midSep, curX, y);
      curX += doc.getTextWidth(midSep);

      doc.setTextColor(0, 85, 175);
      doc.text(linkedInUrl, curX, y);
      doc.link(curX, y - 3, doc.getTextWidth(linkedInUrl), 4, { url: 'https://www.' + linkedInUrl });

      y += 3.0;

      // Section heading helper
      const addSectionHeader = (title: string) => {
        y += 5.8;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(15, 15, 15);
        doc.text(title, marginX, y);

        const lineY = y + 1.4;
        doc.setDrawColor(30, 30, 30);
        doc.setLineWidth(0.3);
        doc.line(marginX, lineY, marginX + contentWidth, lineY);
        y = lineY + 3.8;
      };

      // 1. PROFESSIONAL SUMMARY
      addSectionHeader('PROFESSIONAL SUMMARY');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(35, 35, 35);
      const summaryText =
        'UI/UX and Product Designer with an MCA background, focused on creating intuitive, user-centered web and mobile experiences. Skilled in Figma, high-fidelity prototyping, wireframing, interaction design, user research, and information architecture. I combine design thinking with technical knowledge to create accessible, usable, and development-ready digital products.';
      const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
      doc.text(summaryLines, marginX, y);
      y += summaryLines.length * 3.9 + 1.2;

      // 2. SKILLS
      addSectionHeader('SKILLS');
      const skills = [
        { label: 'Design: ', content: 'wireframing, user flows, prototyping, visual design, interaction design, design systems, component-based design, typography, layout, responsive design, accessibility' },
        { label: 'Research: ', content: 'user research, usability testing, personas, empathy maps, journey maps, information architecture' },
        { label: 'Tools: ', content: 'Figma, FigJam, Adobe Photoshop, Adobe Illustrator, AI-assisted prototyping (vibe coding)' },
        { label: 'Collaboration: ', content: 'working with product and engineering teams, design handoff, documentation' },
      ];

      skills.forEach((s) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(20, 20, 20);
        const labelW = doc.getTextWidth(s.label);
        doc.text(s.label, marginX, y);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(40, 40, 40);
        const words = s.content.split(/\s+/);
        let line = '';
        let first = true;
        for (let i = 0; i < words.length; i++) {
          const test = line ? line + ' ' + words[i] : words[i];
          const maxW = first ? contentWidth - labelW : contentWidth;
          if (doc.getTextWidth(test) <= maxW) {
            line = test;
          } else {
            doc.text(line, first ? marginX + labelW : marginX, y);
            y += 3.8;
            line = words[i];
            first = false;
          }
        }
        if (line) {
          doc.text(line, first ? marginX + labelW : marginX, y);
          y += 3.8;
        }
        y += 0.4;
      });

      // 3. PROJECTS
      addSectionHeader('PROJECTS');

      const renderBullet = (text: string) => {
        const bulletX = marginX + 1.8;
        const textX = marginX + 4.8;
        const textWidth = contentWidth - 4.8;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.9);
        doc.setTextColor(40, 40, 40);
        const lines = doc.splitTextToSize(text, textWidth);

        doc.setFillColor(30, 30, 30);
        doc.circle(bulletX, y - 1.0, 0.55, 'F');
        doc.text(lines, textX, y);
        y += lines.length * 3.7 + 1.2;
      };

      // Odyssey
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 15, 15);
      doc.text('Odyssey: India Travel Discovery App', marginX, y);
      const odyW = doc.getTextWidth('Odyssey: India Travel Discovery App');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(55, 55, 55);
      doc.text('  |  UI/UX Design, Figma', marginX + odyW, y);
      y += 4.2;

      // Figma link line
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.8);
      doc.setTextColor(20, 20, 20);
      doc.text('Figma: ', marginX, y);
      const figmaLabelW = doc.getTextWidth('Figma: ');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 85, 175);
      const odyLink = 'figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India';
      doc.text(odyLink, marginX + figmaLabelW, y);
      doc.link(marginX + figmaLabelW, y - 3, doc.getTextWidth(odyLink), 4, { url: 'https://' + odyLink });
      y += 4.0;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.9);
      doc.setTextColor(40, 40, 40);
      const odyDesc =
        'A website concept for travelers who want to find places, local food, wildlife, and nature spots across India without piecing it together from social media and search.';
      const odyDescLines = doc.splitTextToSize(odyDesc, contentWidth);
      doc.text(odyDescLines, marginX, y);
      y += odyDescLines.length * 3.7 + 1.2;

      renderBullet('Created two personas, a curious first-time explorer and an experienced traveler who shares hidden places, to guide design decisions.');
      renderBullet('Mapped user flows and designed wireframes for onboarding, sign-in, explore, community, search, and profile, then built a high-fidelity clickable prototype in Figma.');
      renderBullet('Designed an interactive state-by-state map of India as the main navigation. Picking a state, like Kerala, opens its places, food, wildlife, and nature spots with ratings, likes, and save options. Improved navigation success rate by 20% after changes based on usability testing.');
      renderBullet('Added Community Picks, a recommend-a-place feature, and category and climate filters. Designed error, empty, and success states across key flows.');

      y += 1.5;

      // CoinGrow
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 15, 15);
      doc.text('CoinGrow: Budgeting App for Young Adults', marginX, y);
      const coinW = doc.getTextWidth('CoinGrow: Budgeting App for Young Adults');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(55, 55, 55);
      doc.text('  |  UI/UX Design, Figma', marginX + coinW, y);
      y += 4.2;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.8);
      doc.setTextColor(20, 20, 20);
      doc.text('Figma: ', marginX, y);
      const coinFigmaLabelW = doc.getTextWidth('Figma: ');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 85, 175);
      const coinLink = 'figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app';
      doc.text(coinLink, marginX + coinFigmaLabelW, y);
      doc.link(marginX + coinFigmaLabelW, y - 3, doc.getTextWidth(coinLink), 4, { url: 'https://' + coinLink });
      y += 4.0;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.9);
      doc.setTextColor(40, 40, 40);
      const coinDesc =
        'A mobile app that helps first-time earners track their money and build good habits through points, achievements, and friendly competition with peers.';
      const coinDescLines = doc.splitTextToSize(coinDesc, contentWidth);
      doc.text(coinDescLines, marginX, y);
      y += coinDescLines.length * 3.7 + 1.2;

      renderBullet('Designed the core mobile flows: onboarding, sign-up and log in, a home dashboard (net worth, monthly summary, recent activity), budget tracker, achievements, and a weekly peer challenge with a leaderboard.');
      renderBullet('Designed sign-up and log in feedback: error messages for age, email, and password, wrong-credentials alerts, success states, and default, pressed, and disabled buttons.');
      renderBullet('Added gamification to keep users coming back: Smart Money Points, badges for consistent saving, and peer streaks.');
      renderBullet('Explored two full visual directions (yellow and blue, and soft pink) with a piggy-bank mascot and reusable components to make budgeting feel friendly.');

      y += 1.5;

      // 4. CERTIFICATIONS
      addSectionHeader('CERTIFICATIONS');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.2);
      doc.setTextColor(15, 15, 15);
      doc.text('Google UX Design Professional Certificate (Coursera)', marginX, y);
      
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(40, 40, 40);
      doc.text('Completed October 2026', marginX + contentWidth, y, { align: 'right' });
      y += 4.2;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.8);
      doc.setTextColor(40, 40, 40);
      const certDesc =
        'All 7 courses completed, covering UX foundations, empathize/define/ideate, wireframes and low-fidelity prototypes, UX research and usability testing, high-fidelity prototyping in Figma, responsive web UI design, and a social good design project.';
      const certLines = doc.splitTextToSize(certDesc, contentWidth);
      doc.text(certLines, marginX, y);
      y += certLines.length * 3.7 + 1.5;

      // 5. EDUCATION
      addSectionHeader('EDUCATION');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.2);
      doc.setTextColor(15, 15, 15);
      doc.text('Master of Computer Applications (MCA), RVITM', marginX, y);
      doc.text('2024 – 2026', marginX + contentWidth, y, { align: 'right' });
      y += 4.4;

      doc.setFont('helvetica', 'bold');
      doc.text("Bachelor of Science (B.Sc.), St. Joseph's College", marginX, y);
      doc.text('2021 – 2024', marginX + contentWidth, y, { align: 'right' });

      return doc;
    } catch (err) {
      console.error('PDF Generation Error:', err);
      return null;
    }
  };

  const handleDownload = () => {
    setDownloadStatus('downloading');
    try {
      const doc = exportPdfDocument();
      if (!doc) {
        throw new Error('Failed to generate PDF document');
      }

      // Method 1: In-memory Blob URL (safest, never navigates tab or opens broken PDF viewer)
      try {
        const blob = doc.output('blob');
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = blobUrl;
        link.download = 'Sruthy_Suresh_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          if (document.body.contains(link)) {
            document.body.removeChild(link);
          }
          URL.revokeObjectURL(blobUrl);
        }, 10000);
        setDownloadStatus('success');
      } catch {
        // Method 2: jsPDF direct save
        doc.save('Sruthy_Suresh_Resume.pdf');
        setDownloadStatus('success');
      }
    } catch (err) {
      console.error('Download failure:', err);
      // Method 3: fetch as arrayBuffer from server and trigger blob download
      fetch('/Sruthy_Suresh_Resume.pdf')
        .then((res) => res.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.style.display = 'none';
          link.href = blobUrl;
          link.download = 'Sruthy_Suresh_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          setTimeout(() => {
            if (document.body.contains(link)) document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
          }, 10000);
          setDownloadStatus('success');
        })
        .catch((fetchErr) => {
          console.error('Static fetch fallback error:', fetchErr);
          setDownloadStatus('idle');
        });
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
      font-size: 9.5pt;
      line-height: 1.45;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .header {
      text-align: center;
      margin-bottom: 12px;
    }
    .name {
      font-size: 22pt;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: #111111;
      margin-bottom: 2px;
    }
    .role {
      font-size: 10.5pt;
      font-weight: 600;
      color: #222222;
      margin-bottom: 3px;
    }
    .contact-line {
      font-size: 9pt;
      color: #444444;
      margin-bottom: 2px;
    }
    .contact-line a {
      color: #0055af;
      text-decoration: underline;
    }
    .section {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .section-title {
      font-size: 10pt;
      font-weight: 700;
      color: #111111;
      border-bottom: 1px solid #222222;
      padding-bottom: 2px;
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }
    .summary-text {
      font-size: 9pt;
      line-height: 1.45;
      color: #222222;
      text-align: justify;
    }
    .skill-row {
      font-size: 9pt;
      line-height: 1.45;
      margin-bottom: 3px;
      color: #222222;
    }
    .skill-row strong {
      font-weight: 700;
      color: #111111;
    }
    .project-item {
      margin-bottom: 8px;
    }
    .project-header {
      font-size: 9.5pt;
      font-weight: 700;
      color: #111111;
      margin-bottom: 2px;
    }
    .project-sub {
      font-weight: 400;
      color: #444444;
    }
    .figma-link {
      font-size: 8.8pt;
      margin-bottom: 2px;
    }
    .figma-link strong {
      font-weight: 700;
    }
    .figma-link a {
      color: #0055af;
      text-decoration: underline;
    }
    .project-desc {
      font-size: 9pt;
      color: #333333;
      margin-bottom: 4px;
      line-height: 1.4;
    }
    ul {
      list-style-type: disc;
      padding-left: 18px;
      margin-bottom: 4px;
    }
    li {
      font-size: 8.9pt;
      line-height: 1.4;
      margin-bottom: 2px;
      color: #222222;
    }
    .split-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 9.2pt;
      font-weight: 700;
      color: #111111;
      margin-bottom: 3px;
    }
    .cert-desc {
      font-size: 8.8pt;
      line-height: 1.4;
      color: #333333;
      margin-top: 2px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">Sruthy Suresh</div>
    <div class="role">UI/UX Designer | Product Designer</div>
    <div class="contact-line">Bangalore, India | sruthysuresh.mail@gmail.com | 9980510855</div>
    <div class="contact-line">
      Portfolio: <a href="https://portfolio-psi-orcin-5hqumbws3l.vercel.app/" target="_blank">portfolio-psi-orcin-5hqumbws3l.vercel.app</a>
      | LinkedIn: <a href="https://www.linkedin.com/in/sruthy-suresh02" target="_blank">linkedin.com/in/sruthy-suresh02</a>
    </div>
  </div>

  <div class="section">
    <div class="section-title">PROFESSIONAL SUMMARY</div>
    <div class="summary-text">
      UI/UX and Product Designer with an MCA background, focused on creating intuitive, user-centered web and mobile experiences. Skilled in Figma, high-fidelity prototyping, wireframing, interaction design, user research, and information architecture. I combine design thinking with technical knowledge to create accessible, usable, and development-ready digital products.
    </div>
  </div>

  <div class="section">
    <div class="section-title">SKILLS</div>
    <div class="skill-row"><strong>Design:</strong> wireframing, user flows, prototyping, visual design, interaction design, design systems, component-based design, typography, layout, responsive design, accessibility</div>
    <div class="skill-row"><strong>Research:</strong> user research, usability testing, personas, empathy maps, journey maps, information architecture</div>
    <div class="skill-row"><strong>Tools:</strong> Figma, FigJam, Adobe Photoshop, Adobe Illustrator, AI-assisted prototyping (vibe coding)</div>
    <div class="skill-row"><strong>Collaboration:</strong> working with product and engineering teams, design handoff, documentation</div>
  </div>

  <div class="section">
    <div class="section-title">PROJECTS</div>
    
    <div class="project-item">
      <div class="project-header">
        Odyssey: India Travel Discovery App <span class="project-sub">| UI/UX Design, Figma</span>
      </div>
      <div class="figma-link">
        <strong>Figma:</strong> <a href="https://figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India" target="_blank">figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India</a>
      </div>
      <div class="project-desc">
        A website concept for travelers who want to find places, local food, wildlife, and nature spots across India without piecing it together from social media and search.
      </div>
      <ul>
        <li>Created two personas, a curious first-time explorer and an experienced traveler who shares hidden places, to guide design decisions.</li>
        <li>Mapped user flows and designed wireframes for onboarding, sign-in, explore, community, search, and profile, then built a high-fidelity clickable prototype in Figma.</li>
        <li>Designed an interactive state-by-state map of India as the main navigation. Picking a state, like Kerala, opens its places, food, wildlife, and nature spots with ratings, likes, and save options. Improved navigation success rate by 20% after changes based on usability testing.</li>
        <li>Added Community Picks, a recommend-a-place feature, and category and climate filters. Designed error, empty, and success states across key flows.</li>
      </ul>
    </div>

    <div class="project-item">
      <div class="project-header">
        CoinGrow: Budgeting App for Young Adults <span class="project-sub">| UI/UX Design, Figma</span>
      </div>
      <div class="figma-link">
        <strong>Figma:</strong> <a href="https://figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app" target="_blank">figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app</a>
      </div>
      <div class="project-desc">
        A mobile app that helps first-time earners track their money and build good habits through points, achievements, and friendly competition with peers.
      </div>
      <ul>
        <li>Designed the core mobile flows: onboarding, sign-up and log in, a home dashboard (net worth, monthly summary, recent activity), budget tracker, achievements, and a weekly peer challenge with a leaderboard.</li>
        <li>Designed sign-up and log in feedback: error messages for age, email, and password, wrong-credentials alerts, success states, and default, pressed, and disabled buttons.</li>
        <li>Added gamification to keep users coming back: Smart Money Points, badges for consistent saving, and peer streaks.</li>
        <li>Explored two full visual directions (yellow and blue, and soft pink) with a piggy-bank mascot and reusable components to make budgeting feel friendly.</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="section-title">CERTIFICATIONS</div>
    <div class="split-row">
      <span>Google UX Design Professional Certificate (Coursera)</span>
      <span>Completed October 2026</span>
    </div>
    <div class="cert-desc">
      All 7 courses completed, covering UX foundations, empathize/define/ideate, wireframes and low-fidelity prototypes, UX research and usability testing, high-fidelity prototyping in Figma, responsive web UI design, and a social good design project.
    </div>
  </div>

  <div class="section">
    <div class="section-title">EDUCATION</div>
    <div class="split-row">
      <span>Master of Computer Applications (MCA), RVITM</span>
      <span>2024 – 2026</span>
    </div>
    <div class="split-row">
      <span>Bachelor of Science (B.Sc.), St. Joseph's College</span>
      <span>2021 – 2024</span>
    </div>
  </div>
</body>
</html>`;
  };

  const handlePrint = () => {
    setPrintStatus('printing');

    // Also initiate download to ensure user has the file
    handleDownload();

    // Trigger iframe print
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
              {/* PRIMARY ACTION: Download Attached Resume File */}
              <button
                onClick={handleDownload}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95 ${
                  downloadStatus === 'success'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#5F6B12] text-white hover:bg-[#4E580D]'
                }`}
                title="Download original resume PDF"
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

              {/* SECONDARY ACTION: Print */}
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

          {/* Resume Body Styled Exactly Like The Attached PDF */}
          <div className="p-6 sm:p-10 md:p-14 overflow-y-auto space-y-5 text-[#111111] bg-white print:p-8 font-sans leading-relaxed">
            
            {/* 1. HEADER (Centered, Crisp, Clean) */}
            <div className="text-center space-y-1 pb-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] font-display">
                Sruthy Suresh
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#222222] tracking-wide">
                UI/UX Designer | Product Designer
              </p>
              <p className="text-xs text-[#444444] pt-0.5">
                <span>Bangalore, India</span>
                {' '}|{' '}
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-[#222222]">
                  {PERSONAL_INFO.email}
                </a>
                {' '}|{' '}
                <span>{PERSONAL_INFO.phone}</span>
              </p>
              <p className="text-xs text-[#444444]">
                <span>Portfolio: </span>
                <a
                  href="https://portfolio-psi-orcin-5hqumbws3l.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-[#0055af] font-medium"
                >
                  portfolio-psi-orcin-5hqumbws3l.vercel.app
                </a>
                {' '}|{' '}
                <span>LinkedIn: </span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-[#0055af] font-medium"
                >
                  linkedin.com/in/sruthy-suresh02
                </a>
              </p>
            </div>

            {/* 2. PROFESSIONAL SUMMARY */}
            <div className="space-y-1.5">
              <div className="border-b border-[#222222] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] font-display">
                  PROFESSIONAL SUMMARY
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[#222222] leading-relaxed text-justify">
                UI/UX and Product Designer with an MCA background, focused on creating intuitive, user-centered web and mobile experiences. Skilled in Figma, high-fidelity prototyping, wireframing, interaction design, user research, and information architecture. I combine design thinking with technical knowledge to create accessible, usable, and development-ready digital products.
              </p>
            </div>

            {/* 3. SKILLS SECTION */}
            <div className="space-y-1.5">
              <div className="border-b border-[#222222] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] font-display">
                  SKILLS
                </h2>
              </div>

              <div className="space-y-1 text-xs sm:text-[13px] text-[#222222] leading-relaxed">
                <div>
                  <span className="font-bold text-[#111111]">Design:</span>{' '}
                  <span>wireframing, user flows, prototyping, visual design, interaction design, design systems, component-based design, typography, layout, responsive design, accessibility</span>
                </div>

                <div>
                  <span className="font-bold text-[#111111]">Research:</span>{' '}
                  <span>user research, usability testing, personas, empathy maps, journey maps, information architecture</span>
                </div>

                <div>
                  <span className="font-bold text-[#111111]">Tools:</span>{' '}
                  <span>Figma, FigJam, Adobe Photoshop, Adobe Illustrator, AI-assisted prototyping (vibe coding)</span>
                </div>

                <div>
                  <span className="font-bold text-[#111111]">Collaboration:</span>{' '}
                  <span>working with product and engineering teams, design handoff, documentation</span>
                </div>
              </div>
            </div>

            {/* 4. PROJECTS SECTION */}
            <div className="space-y-3.5">
              <div className="border-b border-[#222222] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] font-display">
                  PROJECTS
                </h2>
              </div>

              {/* Project 1: Odyssey */}
              <div className="space-y-1 text-xs sm:text-[13px]">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="font-bold text-[#111111]">
                    Odyssey: India Travel Discovery App{' '}
                    <span className="font-normal text-[#555555]">| UI/UX Design, Figma</span>
                  </p>
                </div>
                
                <p className="text-[12px]">
                  <span className="font-bold text-[#111111]">Figma: </span>
                  <a
                    href="https://figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0055af] hover:underline"
                  >
                    figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India
                  </a>
                </p>

                <p className="text-[#333333] leading-relaxed">
                  A website concept for travelers who want to find places, local food, wildlife, and nature spots across India without piecing it together from social media and search.
                </p>

                <ul className="list-disc pl-5 space-y-0.5 text-[#222222] leading-relaxed">
                  <li>
                    Created two personas, a curious first-time explorer and an experienced traveler who shares hidden places, to guide design decisions.
                  </li>
                  <li>
                    Mapped user flows and designed wireframes for onboarding, sign-in, explore, community, search, and profile, then built a high-fidelity clickable prototype in Figma.
                  </li>
                  <li>
                    Designed an interactive state-by-state map of India as the main navigation. Picking a state, like Kerala, opens its places, food, wildlife, and nature spots with ratings, likes, and save options. Improved navigation success rate by 20% after changes based on usability testing.
                  </li>
                  <li>
                    Added Community Picks, a recommend-a-place feature, and category and climate filters. Designed error, empty, and success states across key flows.
                  </li>
                </ul>
              </div>

              {/* Project 2: CoinGrow */}
              <div className="space-y-1 text-xs sm:text-[13px] pt-1">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="font-bold text-[#111111]">
                    CoinGrow: Budgeting App for Young Adults{' '}
                    <span className="font-normal text-[#555555]">| UI/UX Design, Figma</span>
                  </p>
                </div>

                <p className="text-[12px]">
                  <span className="font-bold text-[#111111]">Figma: </span>
                  <a
                    href="https://figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0055af] hover:underline"
                  >
                    figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app
                  </a>
                </p>

                <p className="text-[#333333] leading-relaxed">
                  A mobile app that helps first-time earners track their money and build good habits through points, achievements, and friendly competition with peers.
                </p>

                <ul className="list-disc pl-5 space-y-0.5 text-[#222222] leading-relaxed">
                  <li>
                    Designed the core mobile flows: onboarding, sign-up and log in, a home dashboard (net worth, monthly summary, recent activity), budget tracker, achievements, and a weekly peer challenge with a leaderboard.
                  </li>
                  <li>
                    Designed sign-up and log in feedback: error messages for age, email, and password, wrong-credentials alerts, success states, and default, pressed, and disabled buttons.
                  </li>
                  <li>
                    Added gamification to keep users coming back: Smart Money Points, badges for consistent saving, and peer streaks.
                  </li>
                  <li>
                    Explored two full visual directions (yellow and blue, and soft pink) with a piggy-bank mascot and reusable components to make budgeting feel friendly.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. CERTIFICATIONS SECTION */}
            <div className="space-y-1.5">
              <div className="border-b border-[#222222] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] font-display">
                  CERTIFICATIONS
                </h2>
              </div>

              <div className="text-xs sm:text-[13px] space-y-0.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1 font-bold text-[#111111]">
                  <span>Google UX Design Professional Certificate (Coursera)</span>
                  <span className="text-[#444444]">Completed October 2026</span>
                </div>
                <p className="text-[#333333] leading-relaxed">
                  All 7 courses completed, covering UX foundations, empathize/define/ideate, wireframes and low-fidelity prototypes, UX research and usability testing, high-fidelity prototyping in Figma, responsive web UI design, and a social good design project.
                </p>
              </div>
            </div>

            {/* 6. EDUCATION SECTION */}
            <div className="space-y-1.5">
              <div className="border-b border-[#222222] pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] font-display">
                  EDUCATION
                </h2>
              </div>

              <div className="space-y-1 text-xs sm:text-[13px] text-[#111111]">
                <div className="flex flex-wrap items-baseline justify-between gap-1 font-bold">
                  <span>Master of Computer Applications (MCA), RVITM</span>
                  <span className="font-normal text-[#444444]">2024 – 2026</span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-1 font-bold">
                  <span>Bachelor of Science (B.Sc.), St. Joseph's College</span>
                  <span className="font-normal text-[#444444]">2021 – 2024</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
