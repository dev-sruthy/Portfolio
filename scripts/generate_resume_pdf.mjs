import fs from 'fs';
import { jsPDF } from 'jspdf';

export function buildResumeDoc() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
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
  const addSectionHeader = (title) => {
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

  // Helper for bullet items
  const renderBullet = (text) => {
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
}

const doc = buildResumeDoc();
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

fs.writeFileSync('public/Sruthy_Suresh_Resume.pdf', pdfBuffer);
console.log('Successfully written public/Sruthy_Suresh_Resume.pdf. Total pages:', doc.internal.pages.length - 1);
