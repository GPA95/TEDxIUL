import Image from 'next/image';
import './TeamMemberCard.css';

function getInitials(name) {
  if (!name) return 'TED';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * TeamMemberCard
 * Renders a member card with full-bleed photo (3:4) matching main Teams page.
 * If photo is null, displays a sleek neutral dark avatar placeholder with initials.
 * Text overlay renders Name, descriptive Role, and Team Lead badge directly over photo.
 * Social icons (LinkedIn / Instagram) are revealed on hover.
 *
 * Props:
 *   member – { name, role, isTeamLead, photo, linkedin, instagram }
 */
export default function TeamMemberCard({ member }) {
  const { name, role, isTeamLead, photo, linkedin, instagram } = member;
  const initials = getInitials(name);

  return (
    <article className="tmc-card">
      {/* ── Full Photo or Neutral Avatar Placeholder ── */}
      <div className="tmc-photo-wrap">
        {photo ? (
          <Image
            unoptimized
            src={photo}
            alt={name}
            fill
            className="tmc-photo"
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="tmc-avatar-placeholder" aria-label={`${name} avatar`}>
            <div className="tmc-avatar-circle">
              <svg
                viewBox="0 0 24 24"
                className="tmc-avatar-svg"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
              </svg>
              <span className="tmc-avatar-initials">{initials}</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Top-Left: Team Lead Badge ── */}
      {isTeamLead && (
        <span className="tmc-lead-badge" aria-label="Team Lead">Team Lead</span>
      )}

      {/* ── Top-Right: Social icons (revealed on hover) ── */}
      {(linkedin || instagram) && (
        <div className="tmc-socials">
          {linkedin && (
            <a
              href={linkedin.startsWith('http') ? linkedin.trim() : `https://${linkedin.trim()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tmc-social-icon"
              aria-label={`${name} on LinkedIn`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
          {instagram && (
            <a
              href={instagram.startsWith('http') ? instagram.trim() : `https://${instagram.trim()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tmc-social-icon"
              aria-label={`${name} on Instagram`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          )}
        </div>
      )}

      {/* ── Bottom Overlay: Name & Role ── */}
      <div className="tmc-overlay">
        <h3 className="tmc-name">{name}</h3>
        <p className="tmc-role">{role}</p>
      </div>
    </article>
  );
}
