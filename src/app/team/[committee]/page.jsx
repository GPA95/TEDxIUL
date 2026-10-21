import { notFound } from 'next/navigation';
import { COMMITTEES, getCommitteeById } from '../../../data/committeesData';
import CommitteePage from '../../../components/CommitteePage';

/**
 * Static params — pre-generates all 9 committee pages at build time.
 */
export function generateStaticParams() {
  return COMMITTEES.map((c) => ({ committee: c.id }));
}

/**
 * Dynamic metadata per committee.
 */
export async function generateMetadata({ params }) {
  const { committee: committeeId } = await params;
  const committee = getCommitteeById(committeeId);
  if (!committee) {
    return { title: 'Committee Not Found – TEDxIntegralUniversity' };
  }
  return {
    title: `${committee.name} – TEDxIntegralUniversity`,
    description: committee.bio,
  };
}

/**
 * /team/[committee] — dynamic committee page.
 * Returns 404 for unknown committee IDs.
 */
export default async function CommitteeRoutePage({ params }) {
  const { committee: committeeId } = await params;
  const committee = getCommitteeById(committeeId);

  if (!committee) {
    notFound();
  }

  return <CommitteePage committee={committee} />;
}
