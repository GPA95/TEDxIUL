import Link from 'next/link';
import Footer from '../components/Footer';
import './pages.css';
import Image from 'next/image';

import syedwaseemAkhtar from '../assets/team-photos/leadership/syed-waseem-akhtar.png';
import furqanqamar from '../assets/team-photos/leadership/furqan-qamar.png';
import shishAhmad from '../assets/team-photos/leadership/shish-ahmad.png';
import anumKamal from '../assets/team-photos/leadership/anum-kamal.png';
import syedNadeemAkhtar from '../assets/team-photos/leadership/syed-nadeem-akhtar-new.png';

import maazsiddiqui from '../assets/team-photos/organizers/Maaz-Siddiqui.jpg';
import reemhamraz from '../assets/team-photos/organizers/Reem-Hamraz.png';

import aliyahmohammadazam from '../assets/team-photos/core-committee/Aliyah_Mohammad_Azam.jpg';
import arifsheikh from '../assets/team-photos/core-committee/Arif_Sheikh.jpeg';
import haidermaseeh from '../assets/team-photos/core-committee/Haider-Maseeh.png';
import jamizqamar from '../assets/team-photos/core-committee/Jamiz-Qamar.jpg';

export default function TeamPage() {
    return (
        <div className="page-root">
            <div className="page-hero">
                <div className="page-hero-label">People</div>
                <h1>Our <span className="accent">Team</span></h1>
                <p className="page-hero-sub">
                    Meet the students who are working together to bring the inaugural TEDxIntegralUniversity
                    to life through our theme, <strong>TESSELLATION</strong>.
                </p>
            </div>
            <section className="team-stats">
                <div className="stat-card">
                    <h2>79</h2>
                    <p>Team Members</p>
                </div>

                <div className="stat-card">
                    <h2>9</h2>
                    <p>Departments</p>
                </div>

                <div className="stat-card">
                    <h2>2</h2>
                    <p>Organizing Coordinators</p>
                </div>

                <div className="stat-card">
                    <h2>4</h2>
                    <p>Core Committee</p>
                </div>
            </section>
            <section className="team-section leadership-section">
                <div className="section-divider"></div>

                <div className="team-section-header">
                    <h2 className="section-title">
                        Leadership <span className="accent">Team</span>
                    </h2>

                    <p className="section-subtitle">
                        The leadership and academic guidance behind TEDxIntegralUniversity.
                    </p>
                </div>
                <div className="team-grid">

                    <div className="team-card">
                        <Image
                            unoptimized
                            width={1200}
                            height={900}
                            src={syedwaseemAkhtar}
                            alt="Prof. Syed Mohammad waseem Akhtar"
                            className="team-image"
                        />

                        <div className="team-overlay">
                            <h3>Prof. Syed Waseem Akhtar</h3>

                            <p className="team-role">
                                Chief Patron
                            </p>

                            <span className="team-badge">
                                Chancellor, Integral University
                            </span>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>
                        </div>
                    </div>
                    <div className="team-card">
                        <Image
                            src={syedNadeemAkhtar}
                            alt="Prof. Dr. Syed  Mohammad Nadeem Akhtar"
                            className="team-image"
                            width={1200}
                            height={900}
                        />

                        <div className="team-overlay">
                            <h3>Dr. Syed Nadeem Akhtar</h3>

                            <p className="team-role">
                                Chief Patron
                            </p>

                            <span className="team-badge">
                                Pro-Chancellor, Integral University
                            </span>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>
                        </div>
                    </div>


                    <div className="team-card">
                        <Image
                            unoptimized
                            width={1200}
                            height={900}
                            src={furqanqamar}
                            alt="Dr. Furqan qamar"
                            className="team-image"
                        />

                        <div className="team-overlay">
                            <h3>Prof. Furqan Qamar</h3>

                            <p className="team-role">
                                Patron
                            </p>
                            <span className="team-badge">
                                Vice-Chancellor, Integral University
                            </span>
                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>
                        </div>
                    </div>
                    <div className="team-card">
                        <Image
                            src={shishAhmad}
                            alt="Dr. Shish Ahmad"
                            className="team-image"
                            width={1200}
                            height={900}
                        />

                        <div className="team-overlay">
                            <h3>Dr. Shish Ahmad</h3>

                            <p className="team-role">
                                Mentor
                            </p>

                            <span className="team-badge">
                                Head Of CSE Dept., Integral University
                            </span>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>
                        </div>
                    </div>
                    <div className="team-card">
                        <Image
                            src={anumKamal}
                            alt="Dr. Anum Kamal"
                            className="team-image"
                            width={1200}
                            height={900}
                        />

                        <div className="team-overlay">
                            <h3>Dr. Anum Kamal</h3>

                            <p className="team-role">
                                Faculty Advisor
                            </p>

                            <span className="team-badge">
                                Asst. Professor, CSE, Integral University
                            </span>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="team-section">
                <div className="section-divider"></div>

                <div className="team-section-header">
                    <h2 className="section-title">
                        Organizing <span className="accent">Coordinators</span>
                    </h2>
                    <p className="section-subtitle">
                        The visionaries shaping the inaugural
                        TEDxIntegralUniversity experience through leadership,
                        innovation, and collaboration.
                    </p>
                </div>

                <div className="team-grid">
                    <div className="team-card">

                        <Image unoptimized width={1200} height={900}
                            src={reemhamraz}
                            alt="Reem Hamraz"
                            className="team-image"
                        />

                        <div className="team-overlay">

                            <h3>Reem Hamraz</h3>

                            <p className="team-role">
                                Lead Organizer
                            </p>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>

                        </div>

                    </div>
                    <div className="team-card">

                        <Image unoptimized width={1200} height={900}
                            src={maazsiddiqui}
                            alt="Mohamad Maaz Siddiqui"
                            className="team-image"
                        />

                        <div className="team-overlay">

                            <h3>Mohammad Maaz Siddiqui</h3>

                            <p className="team-role">
                                Co-Organizer
                            </p>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>

                        </div>

                    </div>
                </div>


            </section>
            <section className="team-section">

                <div className="section-divider"></div>

                <div className="team-section-header">

                    <h2 className="section-title">
                        Core <span className="accent">Committee</span>
                    </h2>

                    <p className="section-subtitle">
                        The strategic minds driving creativity, operations, logistics,
                        and execution behind TEDxIntegralUniversity.
                    </p>

                </div>

                <div className="team-grid">
                    <div className="team-card">

                        <Image unoptimized width={1200} height={900}
                            src={aliyahmohammadazam}
                            alt="Aliyah Mohammad Azam"
                            className="team-image"
                        />

                        <div className="team-overlay">

                            <h3>Aliyah Mohammad Azam</h3>

                            <p className="team-role">
                                Creative Specialist
                            </p>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>

                        </div>
                    </div>
                    <div className="team-card">

                        <Image unoptimized width={1200} height={900}
                            src={arifsheikh}
                            alt="Arif Sheikh"
                            className="team-image"
                        />

                        <div className="team-overlay">

                            <h3>Arif Sheikh</h3>

                            <p className="team-role">
                                Media Executive
                            </p>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>

                        </div>
                    </div>

                    <div className="team-card">

                        <Image unoptimized width={1200} height={900}
                            src={haidermaseeh}
                            alt="Haider Maseeh"
                            className="team-image"
                        />

                        <div className="team-overlay">

                            <h3>Haider Maseeh</h3>

                            <p className="team-role">
                                Field Supervisor
                            </p>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>

                        </div>
                    </div>

                    <div className="team-card">

                        <Image unoptimized width={1200} height={900}
                            src={jamizqamar}
                            alt="Jamiz Qamar"
                            className="team-image"
                        />

                        <div className="team-overlay">

                            <h3>Jamiz Qamar</h3>

                            <p className="team-role">
                                Treasurer
                            </p>

                            <div className="team-divider"></div>

                            <p className="team-event">
                                TEDxIntegralUniversity
                            </p>

                        </div>
                    </div>
                </div>

            </section>
            <section className="team-section">

                <div className="section-divider"></div>

                <div className="team-section-header">

                    <h2 className="section-title">
                        Team <span className="accent">Leads</span>
                    </h2>

                    <p className="section-subtitle">
                        Meet the passionate committee leads responsible for planning,
                        collaboration and execution across every department of
                        TEDxIntegralUniversity.
                    </p>

                </div>

                <div className="committee-grid">
                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Content Committee</h3>

                            <span className="committee-count">
                                2 Leads
                            </span>

                        </div>
                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Imama Bint Anwar</h4>
                                <p>Content Curator</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Faria Ahmad Quraishi</h4>
                                <p>Content Lead</p>
                            </div>

                        </div>

                        <Link href="/team/content" className="committee-view-btn">
                            View Committee
                            <span className="committee-view-btn-arrow">→</span>
                        </Link>

                    </div>

                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Decor Committee</h3>

                            <span className="committee-count">
                                3 Leads
                            </span>

                        </div>
                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Gulafshan Bano</h4>
                                <p>Stage Decor Lead</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Umra Khanam</h4>
                                <p>Creative Consultant</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Fazaz Ali Khan</h4>
                                <p>Budget Analyst</p>
                            </div>

                        </div>

                        <Link href="/team/decor" className="committee-view-btn">
                            View Committee
                            <span className="committee-view-btn-arrow">→</span>
                        </Link>

                    </div>

                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Graphics Committee</h3>

                            <span className="committee-count">
                                2 Leads
                            </span>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Arman Ahmad</h4>
                                <p>Creative Director</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Areeb Usmani</h4>
                                <p>Visual Identity Lead</p>
                            </div>

                        </div>

                        <Link href="/team/graphics" className="committee-view-btn">
                            View Committee
                            <span className="committee-view-btn-arrow">→</span>
                        </Link>
                    </div>

                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Logistics Committee</h3>

                            <span className="committee-count">
                                3 Leads
                            </span>

                        </div>

                        {/*
                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Jamiz Qamar</h4>
                                <p>Inventory</p>
                            </div>

                        </div>
                        */}

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Iqra Khan</h4>
                                <p>Event Campaign Planner</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Fiza Rizvi</h4>
                                <p>Logistics Lead</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Devansh Srivastava</h4>
                                <p>Inventory</p>
                            </div>

                        </div>

                        <Link href="/team/logistics" className="committee-view-btn">
                            View Committee
                            <span className="committee-view-btn-arrow">→</span>
                        </Link>

                    </div>

                    {/*
                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Media Committee</h3>

                            <span className="committee-count">
                                2 Leads
                            </span>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Not assigned</h4>
                                <p>Curation Lead</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Not assigned</h4>
                                <p>Content Lead</p>
                            </div>

                        </div>
                    </div>
                    */}

                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Outreach Committee</h3>

                            <span className="committee-count">
                                3 Leads
                            </span>

                        </div>


                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Mansi Srivastava</h4>
                                <p>Talent Curator</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Ana Ajlal Farooqui</h4>
                                <p>Speaker Liaison</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Rohaan Khan</h4>
                                <p>Speaker Coordinator</p>
                            </div>

                        </div>

                        <Link href="/team/outreach" className="committee-view-btn">
                            View Committee
                            <span className="committee-view-btn-arrow">→</span>
                        </Link>

                    </div>

                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Social Media Committee</h3>

                            <span className="committee-count">
                                2 Leads
                            </span>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Naqi Hasan</h4>
                                <p>Strategy &amp; Content</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Zaina Khan</h4>
                                <p>Digital Engagement</p>
                            </div>

                        </div>

                        <Link href="/team/social-media" className="committee-view-btn">
                            View Committee
                            <span className="committee-view-btn-arrow">→</span>
                        </Link>

                    </div>

                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Marketing Committee</h3>

                            <span className="committee-count">
                                2 Leads
                            </span>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Abdullah Khan</h4>
                                <p>Campaigns &amp; Strategy</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Brand &amp; Promotions Lead</h4>
                                <p>Brand Strategy</p>
                            </div>

                        </div>

                        <Link href="/team/marketing" className="committee-view-btn">
                            View Committee
                            <span className="committee-view-btn-arrow">→</span>
                        </Link>

                    </div>

                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Sponsorship Committee</h3>

                            <span className="committee-count">
                                2 Leads
                            </span>

                        </div>


                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Aarish Ahmad</h4>
                                <p>Brand Partnerships</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Humaira Khan</h4>
                                <p>Sponsorship Coordinator</p>
                            </div>

                        </div>

                        <Link href="/team/sponsorship" className="committee-view-btn">
                            View Committee
                            <span className="committee-view-btn-arrow">→</span>
                        </Link>
                    </div>

                    <div className="committee-card">

                        <div className="committee-header">

                            <h3>Web Development Committee</h3>

                            <span className="committee-count">
                                2 Leads
                            </span>

                        </div>


                        <div className="committee-member">

                            <div className="member-dot"></div>
                            <div className="member-info">
                                <h4>Mohammad Ashjaa Khan</h4>
                                <p>Quality Assurance</p>
                            </div>

                        </div>

                        <div className="committee-member">

                            <div className="member-dot"></div>

                            <div className="member-info">
                                <h4>Arsalaan Ul Hasan</h4>
                                <p>Ticket Booking Systems</p>
                            </div>

                        </div>

                        <Link href="/team/web-dev" className="committee-view-btn">
                            View Committee
                            <span className="committee-view-btn-arrow">→</span>
                        </Link>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
}
