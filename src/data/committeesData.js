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
import IBA from '../assets/team-photos/content/IBA.png';
import FAQ from '../assets/team-photos/content/FAQ.jpg';
import AA1 from '../assets/team-photos/content/AA1.jpg';
import AA2 from '../assets/team-photos/content/AA2.jpg';
import AT from '../assets/team-photos/content/AT.jpg';
import IF1 from '../assets/team-photos/content/IF1.png';
import MA from '../assets/team-photos/content/MA.jpg';
import SM from '../assets/team-photos/content/SM.jpg';
import ZF from '../assets/team-photos/content/ZF.jpg';
import IF2 from '../assets/team-photos/content/IF2.png';
import FF from '../assets/team-photos/content/FF.jpg';

// ── Decor committee member photos ──
import GB from '../assets/team-photos/decor/GB.jpg';
import UK1 from '../assets/team-photos/decor/UK1.jpg';
import FAK from '../assets/team-photos/decor/FAK.png';
import SFH from '../assets/team-photos/decor/SFH.jpg';
import AA3 from '../assets/team-photos/decor/AA.png';
import ZA from '../assets/team-photos/decor/ZA.jpg';
import TS from '../assets/team-photos/decor/TS.jpg';
import NS1 from '../assets/team-photos/decor/NS.jpg';
import NK from '../assets/team-photos/decor/NK.png';

// ── Graphics committee member photos ──
import AA4 from '../assets/team-photos/graphics/AA.jpg';
import AU from '../assets/team-photos/graphics/AU.png';
import HZ from '../assets/team-photos/graphics/HZ.jpg';
import NS2 from '../assets/team-photos/graphics/NS2.jpg';
import SMA from '../assets/team-photos/graphics/SMA.png';
import RF from '../assets/team-photos/graphics/RF.jpeg';
import AK1 from '../assets/team-photos/graphics/AK1.jpg';

// ── Logistics committee member photos ──
import IK from '../assets/team-photos/logistics/IK.jpg';
import FR from '../assets/team-photos/logistics/FR.png';
import SR from '../assets/team-photos/logistics/SR.jpg';
import UP from '../assets/team-photos/logistics/UP.jpg';
import WA from '../assets/team-photos/logistics/WA.jpeg';
import AF from '../assets/team-photos/logistics/AF.png';
import MMK from '../assets/team-photos/logistics/MMK.jpg';
import MAR from '../assets/team-photos/logistics/MAR.jpg';

// ── Outreach committee member photos ──
import outreachPlaceholder from '../assets/team-photos/outreach/placeholder.jpg';
import MS from '../assets/team-photos/outreach/MS.jpg';
import AAF from '../assets/team-photos/outreach/AAF.jpg';
import HM from '../assets/team-photos/outreach/HM.jpeg';
import BU from '../assets/team-photos/outreach/BU.jpg';

// ── Social Media committee member photos ──
import NQ from '../assets/team-photos/social-media/NQ.jpg';
import ZK from '../assets/team-photos/social-media/ZK.jpeg';
import KK from '../assets/team-photos/social-media/KK.jpeg';
import ZN from '../assets/team-photos/social-media/ZN.jpg';
import MZS from '../assets/team-photos/social-media/MZS.jpg';
import MAH from '../assets/team-photos/social-media/MAH.jpg';
import AG from '../assets/team-photos/social-media/AG.jpg';

// ── Sponsorship committee member photos ──
import AA5 from '../assets/team-photos/sponsorship/AA5.jpeg';
import HK from '../assets/team-photos/sponsorship/HK.jpg';
import UK2 from '../assets/team-photos/sponsorship/UK2.jpg';
import MF from '../assets/team-photos/sponsorship/MF.jpeg';

// ── Marketing committee member photos ──
import AK2 from '../assets/team-photos/marketing/AK2.jpg';
import HU from '../assets/team-photos/marketing/HU.jpeg';
import SMSA from '../assets/team-photos/marketing/SMSA.jpg';
import AA6 from '../assets/team-photos/marketing/AA6.png';
import MAN from '../assets/team-photos/marketing/MAN.jpg';
import NAK from '../assets/team-photos/marketing/NAK.jpg';
import KZ from '../assets/team-photos/marketing/KZ.jpeg';

// ── Web Dev committee member photos ──
import AAK1 from '../assets/team-photos/web-dev/AAK1.png';
import AbdulMalik from '../assets/team-photos/web-dev/Abdul-Malik.jpg';
import AUH from '../assets/team-photos/web-dev/AUH.png';
import ORZ from '../assets/team-photos/web-dev/ORZ.jpg';
import MAK from '../assets/team-photos/web-dev/MAK.png';
import YZW from '../assets/team-photos/web-dev/YZW.jpg';

export const COMMITTEES = [
  {
    id: 'content',
    name: 'Content Committee',
    bio: 'The Content Committee is the creative backbone of TEDxIntegralUniversity, shaping the narrative through speaker curation, blog writing, editorial strategy, and storytelling that captures the spirit of TESSELLATION.',
    banner: bannerAuditorium,
    members: [
      { name: 'Imama Bint Anwar', role: 'Final Content Editor', isTeamLead: true, photo: IBA, linkedin: "https://www.linkedin.com/in/imama-anwar/", instagram: null },
      { name: 'Faria Ahmad Quraishi', role: 'Content Manager', isTeamLead: true, photo: FAQ, linkedin: "https://www.linkedin.com/in/faria-ahmad-quraishi-b957b1375", instagram: null },
      { name: 'Aatika Aftab', role: 'Content Strategist', isTeamLead: false, photo: AA1, linkedin: "https://www.linkedin.com/in/aatika-aftab-6a5832373", instagram: null },
      { name: 'Anika Anthony', role: 'Speaker Bio Writer', isTeamLead: false, photo: AA2, linkedin: "https://in.linkedin.com/in/anika-anthony-06ab1532b", instagram: null },
      { name: 'Afia Tahseen', role: 'Research & Curation', isTeamLead: false, photo: AT, linkedin: null, instagram: "https://www.instagram.com/afia_tahseen" },
      { name: 'Iqra Fatima', role: 'Copywriter', isTeamLead: false, photo: IF1, linkedin: "https://www.linkedin.com/in/iqrafatima9095", instagram: null },
      { name: 'Muneeba Akhtar ', role: 'Speaker Liaison', isTeamLead: false, photo: MA, linkedin: "https://www.linkedin.com/in/muneeba-akhtar", instagram: "https://www.instagram.com/munulogue" },
      { name: 'Sanchari Mahato', role: 'Outreach Coordinator', isTeamLead: false, photo: SM, linkedin: "https://www.linkedin.com/in/sanchari-mahato-921652394", instagram: null },
      { name: 'Zainab Fatma', role: 'Content Organizer', isTeamLead: false, photo: ZF, linkedin: "https://www.linkedin.com/in/zainab-fatma-237a84422", instagram: null },
      { name: 'Insha Fatima', role: 'Creative Creator', isTeamLead: false, photo: IF2, linkedin: "https://www.linkedin.com/in/insha-fatima-807425307", instagram: "https://www.instagram.com/insh.jpg" },
      { name: 'Faiza Farooqui', role: 'Invitation Writer', isTeamLead: false, photo: FF, linkedin: "https://www.linkedin.com/in/faiza-farooqui-a22948402", instagram: null },
    ],
  },
  {
    id: 'decor',
    name: 'Decor Committee',
    bio: 'The Decor Committee transforms spaces into immersive TEDx experiences. From venue dressing to prop design, they craft the visual atmosphere that brings the TESSELLATION theme to life on event day.',
    banner: bannerIULImage,
    members: [
      { name: 'Gulafshan Bano', role: 'Stage Decor Lead', isTeamLead: true, photo: GB, linkedin: "https://www.linkedin.com/in/gulafshan-bano-337602380", instagram: null },
      { name: 'Umra Khanam', role: 'Origami & Craft Lead', isTeamLead: true, photo: UK1, linkedin: null, instagram: null },
      { name: 'Fazaz Ali Khan', role: 'Budget Analyst', isTeamLead: true, photo: FAK, linkedin: "https://www.linkedin.com/in/faraz-ali-khan-a88368213", instagram: null },
      { name: 'Shiza Fatima Hashmi', role: 'Venue Decorator', isTeamLead: false, photo: SFH, linkedin: "https://www.linkedin.com/in/shiza-fatima-hashmi-57897b32b", instagram: null },
      { name: 'Arhama Ahmad', role: 'Operations Support', isTeamLead: false, photo: AA3, linkedin: "https://www.linkedin.com/in/arhama-arhama-192245425", instagram: "https://www.instagram.com/arhama5994a" },
      { name: 'Zikra Arshad', role: 'Decor Planner', isTeamLead: false, photo: ZA, linkedin: "https://www.linkedin.com/in/zikra-arshad-6aa956381", instagram: null },
      { name: 'Tasmiya Salim', role: 'Aesthetic Designer', isTeamLead: false, photo: TS, linkedin: null, instagram: null },
      { name: 'Numrah Siddiqui', role: 'Visual Setup', isTeamLead: false, photo: NS1, linkedin: "https://www.linkedin.com/in/numrah-siddiqui", instagram: null },
      { name: 'Nabeeha Khan', role: 'Decor Assistant', isTeamLead: false, photo: NK, linkedin: null, instagram: null },
    ],
  },
  {
    id: 'graphics',
    name: 'Graphics Committee',
    bio: 'The Graphics Committee defines the visual identity of TEDxIntegralUniversity. From posters and social assets to motion graphics and stage visuals, they ensure every pixel reflects the TESSELLATION ethos.',
    banner: bannerTedStage,
    members: [
      { name: 'Arman Ahmad', role: 'Creative Design Lead', isTeamLead: true, photo: AA4, linkedin: "https://www.linkedin.com/in/arman-ahmed-a14744382", instagram: null },
      { name: 'Areeb Usmani', role: 'Visual Identity Lead', isTeamLead: true, photo: AU, linkedin: null, instagram: "https://www.instagram.com/areeb_.x.0" },
      { name: 'Hashmat Zahra', role: 'Digital Designer', isTeamLead: false, photo: HZ, linkedin: "https://www.linkedin.com/in/hashmat-zahra", instagram: null },
      { name: 'Nemrah Saquib', role: 'Instagram Layout Designer', isTeamLead: false, photo: NS2, linkedin: "https://www.linkedin.com/in/nemrahsaquib12", instagram: null },
      { name: 'Syed Mohammad Aatif', role: 'Visual Content Designer', isTeamLead: false, photo: SMA, linkedin: "https://www.linkedin.com/in/syed-mohammad-aatif-51b350397", instagram: null },
      { name: 'Reham Fahad', role: 'Promotional Designer', isTeamLead: false, photo: RF, linkedin: null, instagram: null },
      { name: 'Ammar Khan', role: 'Poster Artist', isTeamLead: false, photo: AK1, linkedin: "https://www.linkedin.com/in/ammar-khan-a3431b244", instagram: "https://www.instagram.com/i_am__ammar_khan" },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics Committee',
    bio: 'The Logistics Committee is the operational engine of TEDxIntegralUniversity, managing inventory, documentation, audit coordination, and on-ground operations to ensure seamless event execution.',
    banner: bannerIULawn,
    members: [
      { name: 'Iqra Khan', role: 'Event Campaign Manager', isTeamLead: true, photo: IK, linkedin: "https://www.linkedin.com/in/iqra-khan-z/", instagram: null },
      { name: 'Fiza Rizvi', role: 'Logistics & Operations Lead', isTeamLead: true, photo: FR, linkedin: "https://www.linkedin.com/in/fizzarizviii", instagram: null },
      { name: 'Devansh Srivastava', role: 'Logistics Lead', isTeamLead: true, photo: null, linkedin: null, instagram: null },
      { name: 'Shrishti Rai', role: 'Operations Coordinator', isTeamLead: false, photo: SR, linkedin: "https://www.linkedin.com/in/shristi-rai-93889138a", instagram: null },
      { name: 'Utkarsh Pandey', role: 'Event Flow Manager', isTeamLead: false, photo: UP, linkedin: "https://www.linkedin.com/in/utkarsh-pandey-ba486032b/", instagram: null },
      { name: 'Waquar Ali', role: 'On-Ground Support', isTeamLead: false, photo: WA, linkedin: "https://www.linkedin.com/in/waquar-ali-34b6a4330", instagram: null },
      { name: 'Mohd Moinuddin Khan', role: 'Event Logistics', isTeamLead: false, photo: MMK, linkedin: "https://www.linkedin.com/in/mohd-moinuddin-khan-552aa4377", instagram: null },
      { name: 'Mohd Anadil Raza', role: 'Arrangements Coordinator', isTeamLead: false, photo: MAR, linkedin: "https://www.linkedin.com/in/mohd-anadil-raza-a78a87324", instagram: null },
      { name: 'Aaisha Falah', role: 'Logistics Documentation', isTeamLead: false, photo: AF, linkedin: null, instagram: null },
      { name: 'Alfayez Ahmed', role: 'Sponsorship Designer', isTeamLead: false, photo: null, linkedin: null, instagram: null },
    ],
  },
  {
    id: 'outreach',
    name: 'Outreach Committee',
    bio: 'The Outreach Committee bridges TEDxIntegralUniversity with the wider community, managing speaker relations, performer coordination, and formal institutional outreach to amplify the event\'s reach and impact.',
    banner: bannerAuditorium,
    members: [
      { name: 'Mansi Srivastava', role: 'Performances & Talent Curator', isTeamLead: true, photo: MS, linkedin: "https://www.linkedin.com/in/mansi-srivastava-661858367", instagram: "https://www.instagram.com/mansiksantulanokok" },
      { name: 'Ana Ajlal Farooqui', role: 'Speaker Liaison', isTeamLead: true, photo: AAF, linkedin: "https://www.linkedin.com/in/ana-ajlal-farooqui-578b30287", instagram: null },
      { name: 'Rohaan Khan', role: 'Speaker Coordinator', isTeamLead: true, photo: null, linkedin: null, instagram: null },
      { name: 'Hamza Mumtaz', role: 'Invitation Writer', isTeamLead: false, photo: HM, linkedin: "http://www.linkedin.com/in/hamza-mumtaz-6a8839383", instagram: null },
      { name: 'Barirah Usmani', role: 'Outreach Member', isTeamLead: false, photo: BU, linkedin: "https://www.linkedin.com/in/barirahusmani/", instagram: null },
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media Committee',
    bio: 'The Social Media Committee drives TEDxIntegralUniversity\'s digital presence, building audience engagement through strategic content, campaigns, and real-time storytelling across all platforms.',
    banner: bannerIULImage,
    members: [
      { name: 'Naqi Hasan', role: 'Social Media Strategy Lead', isTeamLead: true, photo: NQ, linkedin: null, instagram: "https://www.instagram.com/by.naqiii_" },
      { name: 'Zaina Khan', role: 'Social Media Manager', isTeamLead: true, photo: ZK, linkedin: null, instagram: null },
      { name: 'Mohammad Kashif Khan', role: 'Backend Coordinator', isTeamLead: false, photo: KK, linkedin: null, instagram: "https://www.instagram.com/kashiif.13" },
      { name: 'Zaid Nadeem', role: 'Promotional Editor', isTeamLead: false, photo: ZN, linkedin: "https://www.linkedin.com/in/zaid-nadeem-850433232", instagram: "https://www.instagram.com/zaiddnadeem" },
      { name: 'Mohammad Zaid Siddiqui ', role: 'Interview Videographer', isTeamLead: false, photo: MZS, linkedin: "https://www.linkedin.com/in/mohd-zaid-siddiqui-737839383", instagram: "https://www.instagram.com/mezaid_" },
      { name: 'Mohammad Ahmad Hussain ', role: 'Creative Strategist', isTeamLead: false, photo: MAH, linkedin: "https://www.linkedin.com/in/ahmad-husain", instagram: "https://www.instagram.com/ahmadvisualsx/" },
      { name: 'Akash Gupta', role: 'Video Editor', isTeamLead: false, photo: AG, linkedin: null, instagram: "https://www.instagram.com/akas_hgn" },
    ],
  },
  {
    id: 'sponsorship',
    name: 'Sponsorship Committee',
    bio: 'The Sponsorship Committee secures the partnerships that make TEDxIntegralUniversity possible, cultivating relationships with sponsors and donors through strategic networking and communications.',
    banner: bannerTedStage,
    members: [
      { name: 'Aarish Ahmad', role: 'Brand Partnerships', isTeamLead: true, photo: AA5, linkedin: "https://www.linkedin.com/in/aarishahmad", instagram: "https://www.instagram.com/eh.aerish" },
      { name: 'Humaira Khan', role: 'Sponsorship Coordinator', isTeamLead: true, photo: HK, linkedin: "https://www.linkedin.com/in/humaira-khan-3a505b250", instagram: null },
      { name: 'Umam Khan', role: 'Sponsorship Member', isTeamLead: false, photo: UK2, linkedin: null, instagram: null },
      { name: 'Mohammad Faraz', role: 'Speaker Relations', isTeamLead: false, photo: MF, linkedin: "https://in.linkedin.com/in/mohammad-faraz-b45446317", instagram: null },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing Committee',
    bio: 'The Marketing Committee positions TEDxIntegralUniversity as a premier ideas event, developing campaigns, brand strategy, and promotional materials that resonate with students, faculty, and the wider public.',
    banner: bannerIULawn,
    members: [
      { name: 'Abdullah Khan', role: 'Campaign Manager', isTeamLead: true, photo: AK2, linkedin: null, instagram: "https://www.instagram.com/iam_abdullahkhan_" },
      { name: 'Hamza Usmani', role: 'Marketing Lead', isTeamLead: true, photo: HU, linkedin: null, instagram: "https://www.instagram.com/unfiltered_hamza_" },
      { name: 'Syed Mohammad Sayem Ashraf', role: 'Social Media Promoter', isTeamLead: false, photo: SMSA, linkedin: "https://www.linkedin.com/in/syed-mohd-sayem-ashraf-1415013a2https://www.instagram.com/s_syed0786" },
      { name: 'Aamna Ali', role: 'Marketing Strategist', isTeamLead: false, photo: AA6, linkedin: null, instagram: null },
      { name: 'Mohammad Areeb Nafis', role: 'Creative Marketer', isTeamLead: false, photo: MAN, linkedin: "https://www.linkedin.com/in/mohammad-areeb-nafis-588365361", instagram: null },
      { name: 'Nawaz Ahmad Khan', role: 'Marketing Member', isTeamLead: false, photo: NAK, linkedin: "https://www.linkedin.com/in/nawaz-ahmad-khan-5b0b1036b", instagram: null },
      { name: 'Kaneez Zehra', role: 'Social Media Support', isTeamLead: false, photo: KZ, linkedin: "https://www.linkedin.com/in/kaneez-zehra-75002236b", instagram: null },
    ],
  },
  {
    id: 'web-dev',
    name: 'Web Development Committee',
    bio: 'The Web Development Committee powers the TEDxIntegralUniversity digital experience, building and maintaining the official website, ensuring performance, accessibility, and a stunning first impression.',
    banner: webDevBanner,
    members: [
      { name: 'Mohammad Ashjaa Khan', role: 'Quality Assurance', isTeamLead: true, photo: MAK, linkedin: "https://www.linkedin.com/in/ashjaa-khan-07387b25b/", instagram: null },
      { name: 'Arsalaan Ul Hasan', role: 'Booking Systems Engineer', isTeamLead: true, photo: AUH, linkedin: "https://www.linkedin.com/in/arsalaan-ul-hasan-213080248/", instagram: null },
      { name: 'Abdul Malik', role: 'UI & Prototype Designer', isTeamLead: false, photo: AbdulMalik, linkedin: "https://www.linkedin.com/in/abdul-malik-495790282", instagram: null },
      { name: 'Owais Raza', role: 'Frameworks Architect', isTeamLead: false, photo: ORZ, linkedin: "https://www.linkedin.com/in/owais-raza-383038325/", instagram: null },
      { name: 'Mohammad Yazdaan Wali Khan', role: 'Content Editor', isTeamLead: false, photo: YZW, linkedin: "https://www.linkedin.com/in/mohd-yazdaan-wali-khan-73bb14320/", instagram: null },
      { name: 'Ammaar Ahmad Khan', role: 'Frontend Architect', isTeamLead: false, photo: AAK1, linkedin: "https://www.linkedin.com/in/ammaar-ahmad-khan/", instagram: "" },
    ],
  },
];

/** Lookup a committee by its URL id. Returns undefined if not found. */
export function getCommitteeById(id) {
  return COMMITTEES.find((c) => c.id === id);
}
