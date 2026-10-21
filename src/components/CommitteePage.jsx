import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import TeamMemberCard from './TeamMemberCard';
import './CommitteePage.css';

/**
 * CommitteePage
 * Reusable layout for each committee's dedicated page.
 *
 * Props:
 *   committee – committee object from committeesData.js
 *               { id, name, bio, banner, members[] }
 */
export default function CommitteePage({ committee }) {
  const { name, bio, banner, members } = committee;
  const memberCount = members.length;
  const leadCount = members.filter((m) => m.role === 'Team Lead').length;

  return (
    <div className="cp-root">
      {/* ── Banner header ── */}
      <header className="cp-banner">
        {/* Background image */}
        <Image
          src={banner}
          alt={`${name} banner`}
          fill
          unoptimized
          className="cp-banner-img"
          priority
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="cp-banner-overlay" aria-hidden="true" />

        {/* Text on top of banner */}
        <div className="cp-banner-content">
          <span className="cp-banner-label">TEDxIntegralUniversity</span>
          <h1 className="cp-banner-title">{name}</h1>
          <p className="cp-banner-bio">{bio}</p>
        </div>
      </header>

      {/* ── Members section ── */}
      <section className="cp-members-section" aria-labelledby="cp-members-heading">
        <div className="cp-members-header">
          <h2 className="cp-members-title" id="cp-members-heading">
            Our <span className="accent">Members</span>
          </h2>
          <span className="cp-member-count">
            {leadCount} Lead{leadCount !== 1 ? 's' : ''} · {memberCount - leadCount} Member{(memberCount - leadCount) !== 1 ? 's' : ''}
          </span>
          <div className="cp-members-divider" aria-hidden="true" />
        </div>

        <div className="cp-member-grid">
          {members.map((member, idx) => (
            <TeamMemberCard key={`${member.name}-${idx}`} member={member} />
          ))}
        </div>

        {/* ── Back to Team Button ── */}
        <div className="cp-back-bottom">
          <Link href="/team" className="cp-back-btn">
            <span className="cp-back-arrow" aria-hidden="true">←</span>
            Back to Team
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <div className="cp-footer-wrap">
        <Footer />
      </div>
    </div>
  );
}
