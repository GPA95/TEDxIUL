/**
 * committeesData.js
 * Central data source for all 9 TEDxIntegralUniversity committees.
 * Replace placeholder photos with actual member photos when available.
 * Social links: set to null if not applicable.
 */

// ── Banner images (event/venue photos used as committee banners) ──
import bannerAuditorium from '../assets/auditorium.png';
import bannerIULImage from '../assets/IUL-Image.png';
import bannerTedStage from '../assets/ted-stage.png';
import bannerIULawn from '../assets/IULawn.jpg';
import bannerIULogo from '../assets/iul-A.png';
import webDevBanner from '../assets/team-photos/web-dev/web-dev-ss.png';

// ── Placeholder member photo (replace with real photos per committee) ──
import placeholder from '../assets/team-photos/core-committee/Haider-Maseeh.jpg';

// ── Content committee member photos ──
// Replace each import with the real photo when available
import iba from '../assets/team-photos/content/IBA.png';
import faq from '../assets/team-photos/content/FAQ.jpg';
import aa1 from '../assets/team-photos/content/AA1.jpg';
import aa2 from '../assets/team-photos/content/AA2.jpg';
import at from '../assets/team-photos/content/AT.jpg';
import if1 from '../assets/team-photos/content/IF1.png';
import ma from '../assets/team-photos/content/MA.jpg';
import sm from '../assets/team-photos/content/SM.jpg';
import zf from '../assets/team-photos/content/ZF.jpg';
import if2 from '../assets/team-photos/content/IF2.png';
import ff from '../assets/team-photos/content/FF.jpg';

// ── Decor committee member photos ──
import gb from '../assets/team-photos/decor/GB.jpg';
import uk1 from '../assets/team-photos/decor/UK1.jpg';
import fak from '../assets/team-photos/decor/FAK.png';
import sfh from '../assets/team-photos/decor/SFH.jpg';
import aa3 from '../assets/team-photos/decor/AA.png';
import za from '../assets/team-photos/decor/ZA.jpg';
import ts from '../assets/team-photos/decor/TS.jpg';
import ns1 from '../assets/team-photos/decor/NS.jpg';
import nk from '../assets/team-photos/decor/NK.png';

// ── Graphics committee member photos ──
import aa4 from '../assets/team-photos/graphics/AA.jpg';
import au from '../assets/team-photos/graphics/AU.png';
import hz from '../assets/team-photos/graphics/HZ.jpg';
import ns2 from '../assets/team-photos/graphics/NS2.jpg';
import sma from '../assets/team-photos/graphics/SMA.png';
import rf from '../assets/team-photos/graphics/RF.jpeg';
import ak1 from '../assets/team-photos/graphics/AK1.jpg';

// ── Logistics committee member photos ──
import ik from '../assets/team-photos/logistics/IK.jpg';
import fr from '../assets/team-photos/logistics/FR.png';
import sr from '../assets/team-photos/logistics/SR.jpg';
import up from '../assets/team-photos/logistics/UP.jpg';
import wa from '../assets/team-photos/logistics/WA.jpeg';
import af from '../assets/team-photos/logistics/AF.png';
import mmk from '../assets/team-photos/logistics/MMK.jpg';
import mar from '../assets/team-photos/logistics/MAR.jpg';

// ── Outreach committee member photos ──
import outreachPlaceholder from '../assets/team-photos/outreach/placeholder.jpg';
import ms from '../assets/team-photos/outreach/MS.jpg';
import aaf from '../assets/team-photos/outreach/AAF.jpg';
import hm from '../assets/team-photos/outreach/HM.jpeg';
import bu from '../assets/team-photos/outreach/BU.jpg';

// ── Social Media committee member photos ──
import nq from '../assets/team-photos/social-media/NQ.jpg';
import zk from '../assets/team-photos/social-media/ZK.jpeg';
import kk from '../assets/team-photos/social-media/KK.jpeg';
import zn from '../assets/team-photos/social-media/ZN.jpg';
import mzs from '../assets/team-photos/social-media/MZS.jpg';
import mah from '../assets/team-photos/social-media/MAH.jpg';
import ag from '../assets/team-photos/social-media/AG.jpg';

// ── Sponsorship committee member photos ──
import aa5 from '../assets/team-photos/sponsorship/AA5.jpeg';
import hk from '../assets/team-photos/sponsorship/HK.jpg';
import uk2 from '../assets/team-photos/sponsorship/UK2.jpg';
import mf from '../assets/team-photos/sponsorship/MF.jpeg';

// ── Marketing committee member photos ──
import ak2 from '../assets/team-photos/marketing/AK2.jpg';
import hu from '../assets/team-photos/marketing/HU.jpeg';
import smsa from '../assets/team-photos/marketing/SMSA.jpg';
import aa6 from '../assets/team-photos/marketing/AA6.png';
import man from '../assets/team-photos/marketing/MAN.jpg';
import nak from '../assets/team-photos/marketing/NAK.jpg';
import kz from '../assets/team-photos/marketing/KZ.jpeg';

// ── Web Dev committee member photos ──
import aak1 from '../assets/team-photos/web-dev/AAK1.png';
import abdulMalik from '../assets/team-photos/web-dev/Abdul-Malik.jpg';
import auh from '../assets/team-photos/web-dev/AUH.png';
import orz from '../assets/team-photos/web-dev/ORZ.jpg';
import mak from '../assets/team-photos/web-dev/MAK.png';
import yzw from '../assets/team-photos/web-dev/YZW.jpg';

export const COMMITTEES = [
  {
    id: 'content',
    name: 'Content Committee',
    bio: 'The Content Committee is the creative backbone of TEDxIntegralUniversity, shaping the narrative through speaker curation, blog writing, editorial strategy, and storytelling that captures the spirit of TESSELLATION.',
    banner: bannerAuditorium,
    members: [
      { name: 'Imama Bint Anwar', role: 'Final Content Editor', isTeamLead: true, photo: iba, linkedin: "https://www.linkedin.com/in/imama-anwar/", instagram: null },
      { name: 'Faria Ahmad Quraishi', role: 'Content Manager', isTeamLead: true, photo: faq, linkedin: "https://www.linkedin.com/in/faria-ahmad-quraishi-b957b1375", instagram: null },
      { name: 'Aatika Aftab', role: 'Content Strategist', isTeamLead: false, photo: aa1, linkedin: "https://www.linkedin.com/in/aatika-aftab-6a5832373", instagram: null },
      { name: 'Anika Anthony', role: 'Speaker Bio Writer', isTeamLead: false, photo: aa2, linkedin: "https://in.linkedin.com/in/anika-anthony-06ab1532b", instagram: null },
      { name: 'Afia Tahseen', role: 'Research & Curation', isTeamLead: false, photo: at, linkedin: null, instagram: "https://www.instagram.com/afia_tahseen" },
      { name: 'Iqra Fatima', role: 'Copywriter', isTeamLead: false, photo: if1, linkedin: "https://www.linkedin.com/in/iqrafatima9095", instagram: null },
      { name: 'Muneeba Akhtar ', role: 'Speaker Liaison', isTeamLead: false, photo: ma, linkedin: "https://www.linkedin.com/in/muneeba-akhtar", instagram: "https://www.instagram.com/munulogue" },
      { name: 'Sanchari Mahato', role: 'Outreach Coordinator', isTeamLead: false, photo: sm, linkedin: "https://www.linkedin.com/in/sanchari-mahato-921652394", instagram: null },
      { name: 'Zainab Fatma', role: 'Content Organizer', isTeamLead: false, photo: zf, linkedin: "https://www.linkedin.com/in/zainab-fatma-237a84422", instagram: null },
      { name: 'Insha Fatima', role: 'Creative Creator', isTeamLead: false, photo: if2, linkedin: "https://www.linkedin.com/in/insha-fatima-807425307", instagram: "https://www.instagram.com/insh.jpg" },
      { name: 'Faiza Farooqui', role: 'Invitation Writer', isTeamLead: false, photo: ff, linkedin: "https://www.linkedin.com/in/faiza-farooqui-a22948402", instagram: null },
    ],
  },
  {
    id: 'decor',
    name: 'Decor Committee',
    bio: 'The Decor Committee transforms spaces into immersive TEDx experiences. From venue dressing to prop design, they craft the visual atmosphere that brings the TESSELLATION theme to life on event day.',
    banner: bannerIULImage,
    members: [
      { name: 'Gulafshan Bano', role: 'Stage Decor Lead', isTeamLead: true, photo: gb, linkedin: "https://www.linkedin.com/in/gulafshan-bano-337602380", instagram: null },
      { name: 'Umra Khanam', role: 'Origami & Craft Lead', isTeamLead: true, photo: uk1, linkedin: null, instagram: null },
      { name: 'Fazaz Ali Khan', role: 'Budget Analyst', isTeamLead: true, photo: fak, linkedin: "https://www.linkedin.com/in/faraz-ali-khan-a88368213", instagram: null },
      { name: 'Shiza Fatima Hashmi', role: 'Venue Decorator', isTeamLead: false, photo: sfh, linkedin: "https://www.linkedin.com/in/shiza-fatima-hashmi-57897b32b", instagram: null },
      { name: 'Arhama Ahmad', role: 'Operations Support', isTeamLead: false, photo: aa3, linkedin: "https://www.linkedin.com/in/arhama-arhama-192245425", instagram: "https://www.instagram.com/arhama5994a" },
      { name: 'Zikra Arshad', role: 'Decor Planner', isTeamLead: false, photo: za, linkedin: "https://www.linkedin.com/in/zikra-arshad-6aa956381", instagram: null },
      { name: 'Tasmiya Salim', role: 'Aesthetic Designer', isTeamLead: false, photo: ts, linkedin: null, instagram: null },
      { name: 'Numrah Siddiqui', role: 'Visual Setup', isTeamLead: false, photo: ns1, linkedin: "https://www.linkedin.com/in/numrah-siddiqui", instagram: null },
      { name: 'Nabeeha Khan', role: 'Decor Assistant', isTeamLead: false, photo: nk, linkedin: null, instagram: null },
    ],
  },
  {
    id: 'graphics',
    name: 'Graphics Committee',
    bio: 'The Graphics Committee defines the visual identity of TEDxIntegralUniversity. From posters and social assets to motion graphics and stage visuals, they ensure every pixel reflects the TESSELLATION ethos.',
    banner: bannerTedStage,
    members: [
      { name: 'Arman Ahmad', role: 'Creative Design Lead', isTeamLead: true, photo: aa4, linkedin: "https://www.linkedin.com/in/arman-ahmed-a14744382", instagram: null },
      { name: 'Areeb Usmani', role: 'Visual Identity Lead', isTeamLead: true, photo: au, linkedin: null, instagram: "https://www.instagram.com/areeb_.x.0" },
      { name: 'Hashmat Zahra', role: 'Digital Designer', isTeamLead: false, photo: hz, linkedin: "https://www.linkedin.com/in/hashmat-zahra", instagram: null },
      { name: 'Nemrah Saquib', role: 'Instagram Layout Designer', isTeamLead: false, photo: ns2, linkedin: "https://www.linkedin.com/in/nemrahsaquib12", instagram: null },
      { name: 'Syed Mohammad Aatif', role: 'Visual Content Designer', isTeamLead: false, photo: sma, linkedin: "https://www.linkedin.com/in/syed-mohammad-aatif-51b350397", instagram: null },
      { name: 'Reham Fahad', role: 'Promotional Designer', isTeamLead: false, photo: rf, linkedin: null, instagram: null },
      { name: 'Ammar Khan', role: 'Poster Artist', isTeamLead: false, photo: ak1, linkedin: "https://www.linkedin.com/in/ammar-khan-a3431b244", instagram: "https://www.instagram.com/i_am__ammar_khan" },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics Committee',
    bio: 'The Logistics Committee is the operational engine of TEDxIntegralUniversity, managing inventory, documentation, audit coordination, and on-ground operations to ensure seamless event execution.',
    banner: bannerIULawn,
    members: [
      { name: 'Iqra Khan', role: 'Event Campaign Manager', isTeamLead: true, photo: ik, linkedin: "https://www.linkedin.com/in/iqra-khan-z/", instagram: null },
      { name: 'Fiza Rizvi', role: 'Logistics & Operations Lead', isTeamLead: true, photo: fr, linkedin: "https://www.linkedin.com/in/fizzarizviii", instagram: null },
      { name: 'Devansh Srivastava', role: 'Logistics Lead', isTeamLead: true, photo: null, linkedin: null, instagram: null },
      { name: 'Shrishti Rai', role: 'Operations Coordinator', isTeamLead: false, photo: sr, linkedin: "https://www.linkedin.com/in/shristi-rai-93889138a", instagram: null },
      { name: 'Utkarsh Pandey', role: 'Event Flow Manager', isTeamLead: false, photo: up, linkedin: "https://www.linkedin.com/in/utkarsh-pandey-ba486032b/", instagram: null },
      { name: 'Waquar Ali', role: 'On-Ground Support', isTeamLead: false, photo: wa, linkedin: "https://www.linkedin.com/in/waquar-ali-34b6a4330", instagram: null },
      { name: 'Mohd Moinuddin Khan', role: 'Event Logistics', isTeamLead: false, photo: mmk, linkedin: "https://www.linkedin.com/in/mohd-moinuddin-khan-552aa4377", instagram: null },
      { name: 'Mohd Anadil Raza', role: 'Arrangements Coordinator', isTeamLead: false, photo: mar, linkedin: "https://www.linkedin.com/in/mohd-anadil-raza-a78a87324", instagram: null },
      { name: 'Aaisha Falah', role: 'Logistics Documentation', isTeamLead: false, photo: af, linkedin: null, instagram: null },
      { name: 'Alfayez Ahmed', role: 'Sponsorship Designer', isTeamLead: false, photo: null, linkedin: null, instagram: null },
    ],
  },
  {
    id: 'outreach',
    name: 'Outreach Committee',
    bio: 'The Outreach Committee bridges TEDxIntegralUniversity with the wider community, managing speaker relations, performer coordination, and formal institutional outreach to amplify the event\'s reach and impact.',
    banner: bannerAuditorium,
    members: [
      { name: 'Mansi Srivastava', role: 'Performances & Talent Curator', isTeamLead: true, photo: ms, linkedin: "https://www.linkedin.com/in/mansi-srivastava-661858367", instagram: "https://www.instagram.com/mansiksantulanokok" },
      { name: 'Ana Ajlal Farooqui', role: 'Speaker Liaison', isTeamLead: true, photo: aaf, linkedin: "https://www.linkedin.com/in/ana-ajlal-farooqui-578b30287", instagram: null },
      { name: 'Rohaan Khan', role: 'Speaker Coordinator', isTeamLead: true, photo: null, linkedin: null, instagram: null },
      { name: 'Hamza Mumtaz', role: 'Invitation Writer', isTeamLead: false, photo: hm, linkedin: "http://www.linkedin.com/in/hamza-mumtaz-6a8839383", instagram: null },
      { name: 'Barirah Usmani', role: 'Outreach Member', isTeamLead: false, photo: bu, linkedin: "https://www.linkedin.com/in/barirahusmani/", instagram: null },
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media Committee',
    bio: 'The Social Media Committee drives TEDxIntegralUniversity\'s digital presence, building audience engagement through strategic content, campaigns, and real-time storytelling across all platforms.',
    banner: bannerIULImage,
    members: [
      { name: 'Naqi Hasan', role: 'Social Media Strategy Lead', isTeamLead: true, photo: nq, linkedin: null, instagram: "https://www.instagram.com/by.naqiii_" },
      { name: 'Zaina Khan', role: 'Social Media Manager', isTeamLead: true, photo: zk, linkedin: null, instagram: null },
      { name: 'Mohammad Kashif Khan', role: 'Backend Coordinator', isTeamLead: false, photo: kk, linkedin: null, instagram: "https://www.instagram.com/kashiif.13" },
      { name: 'Zaid Nadeem', role: 'Promotional Editor', isTeamLead: false, photo: zn, linkedin: "https://www.linkedin.com/in/zaid-nadeem-850433232", instagram: "https://www.instagram.com/zaiddnadeem" },
      { name: 'Mohammad Zaid Siddiqui ', role: 'Interview Videographer', isTeamLead: false, photo: mzs, linkedin: "https://www.linkedin.com/in/mohd-zaid-siddiqui-737839383", instagram: "https://www.instagram.com/mezaid_" },
      { name: 'Mohammad Ahmad Hussain ', role: 'Creative Strategist', isTeamLead: false, photo: mah, linkedin: "https://www.linkedin.com/in/ahmad-husain", instagram: "https://www.instagram.com/ahmadvisualsx/" },
      { name: 'Akash Gupta', role: 'Video Editor', isTeamLead: false, photo: ag, linkedin: null, instagram: "https://www.instagram.com/akas_hgn" },
    ],
  },
  {
    id: 'sponsorship',
    name: 'Sponsorship Committee',
    bio: 'The Sponsorship Committee secures the partnerships that make TEDxIntegralUniversity possible, cultivating relationships with sponsors and donors through strategic networking and communications.',
    banner: bannerTedStage,
    members: [
      { name: 'Aarish Ahmad', role: 'Brand Partnerships', isTeamLead: true, photo: aa5, linkedin: "https://www.linkedin.com/in/aarishahmad", instagram: "https://www.instagram.com/eh.aerish" },
      { name: 'Humaira Khan', role: 'Sponsorship Coordinator', isTeamLead: true, photo: hk, linkedin: "https://www.linkedin.com/in/humaira-khan-3a505b250", instagram: null },
      { name: 'Umam Khan', role: 'Sponsorship Member', isTeamLead: false, photo: uk2, linkedin: null, instagram: null },
      { name: 'Mohammad Faraz', role: 'Speaker Relations', isTeamLead: false, photo: mf, linkedin: "https://in.linkedin.com/in/mohammad-faraz-b45446317", instagram: null },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing Committee',
    bio: 'The Marketing Committee positions TEDxIntegralUniversity as a premier ideas event, developing campaigns, brand strategy, and promotional materials that resonate with students, faculty, and the wider public.',
    banner: bannerIULawn,
    members: [
      { name: 'Abdullah Khan', role: 'Campaign Manager', isTeamLead: true, photo: ak2, linkedin: null, instagram: "https://www.instagram.com/iam_abdullahkhan_" },
      { name: 'Hamza Usmani', role: 'Marketing Lead', isTeamLead: true, photo: hu, linkedin: null, instagram: "https://www.instagram.com/unfiltered_hamza_" },
      { name: 'Syed Mohammad Sayem Ashraf', role: 'Social Media Promoter', isTeamLead: false, photo: smsa, linkedin: "https://www.linkedin.com/in/syed-mohd-sayem-ashraf-1415013a2https://www.instagram.com/s_syed0786" },
      { name: 'Aamna Ali', role: 'Marketing Strategist', isTeamLead: false, photo: aa6, linkedin: null, instagram: null },
      { name: 'Mohammad Areeb Nafis', role: 'Creative Marketer', isTeamLead: false, photo: man, linkedin: "https://www.linkedin.com/in/mohammad-areeb-nafis-588365361", instagram: null },
      { name: 'Nawaz Ahmad Khan', role: 'Marketing Member', isTeamLead: false, photo: nak, linkedin: "https://www.linkedin.com/in/nawaz-ahmad-khan-5b0b1036b", instagram: null },
      { name: 'Kaneez Zehra', role: 'Social Media Support', isTeamLead: false, photo: kz, linkedin: "https://www.linkedin.com/in/kaneez-zehra-75002236b", instagram: null },
    ],
  },
  {
    id: 'web-dev',
    name: 'Web Development Committee',
    bio: 'The Web Development Committee powers the TEDxIntegralUniversity digital experience, building and maintaining the official website, ensuring performance, accessibility, and a stunning first impression.',
    banner: webDevBanner,
    members: [
      { name: 'Mohammad Ashjaa Khan', role: 'Quality Assurance', isTeamLead: true, photo: mak, linkedin: "https://www.linkedin.com/in/ashjaa-khan-07387b25b/", instagram: null },
      { name: 'Arsalaan Ul Hasan', role: 'Booking Systems Engineer', isTeamLead: true, photo: auh, linkedin: "https://www.linkedin.com/in/arsalaan-ul-hasan-213080248/", instagram: null },
      { name: 'Abdul Malik', role: 'UI & Prototype Designer', isTeamLead: false, photo: abdulMalik, linkedin: "https://www.linkedin.com/in/abdul-malik-495790282", instagram: null },
      { name: 'Owais Raza', role: 'Frameworks Architect', isTeamLead: false, photo: orz, linkedin: "https://www.linkedin.com/in/owais-raza-383038325/", instagram: null },
      { name: 'Mohammad Yazdaan Wali Khan', role: 'Content Editor', isTeamLead: false, photo: yzw, linkedin: "https://www.linkedin.com/in/mohd-yazdaan-wali-khan-73bb14320/", instagram: null },
      { name: 'Ammaar Ahmad Khan', role: 'Frontend Architect', isTeamLead: false, photo: aak1, linkedin: "https://www.linkedin.com/in/ammaar-ahmad-khan/", instagram: "" },
    ],
  },
];

/** Lookup a committee by its URL id. Returns undefined if not found. */
export function getCommitteeById(id) {
  return COMMITTEES.find((c) => c.id === id);
}
