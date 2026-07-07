import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/AboutTed.css";

export default function AboutTED() {
  return (
    <>
      <Navbar />
     
    <section id="about-ted">
      <div className="ted-card fade-in">
        <span className="ted-card-label">About TED</span>
        <h3 className="ted-card-heading">
          Ideas Worth <em>Spreading</em>
        </h3>
        <p className="ted-card-body">
          Great ideas have the power to change the world, but only when they are shared. TED is a global platform that brings together thinkers, innovators, creators, and changemakers to share ideas that inspire action and spark meaningful conversations.
       From science and technology to education, art, and social impact, TED Talks encourage curiosity, challenge perspectives, and help people discover new ways of thinking. Every talk begins with one idea—and that idea can inspire millions.
        </p>
        <Link
  to="/about-ted"
  className="btn-outline ted-card-btn"
>
  Learn About TED
</Link>
      </div>

      <div className="ted-card fade-in">
        <span className="ted-card-label">About TEDx</span>
        <h3 className="ted-card-heading">
          Ideas Worth Spreading, <em>Locally</em>
        </h3>
        <p className="ted-card-body">
        TEDx brings the spirit of TED to local communities, creating a space where ideas, stories, and experiences come together. These independently organized events connect passionate individuals who want to learn, share, and inspire positive change.
         At TEDxIUL, students, innovators, entrepreneurs, and leaders come together to explore bold ideas, meaningful conversations, and fresh perspectives. It is more than an event—it is an opportunity to connect, grow, and become part of a community driven by curiosity and impact.
        </p>
        <a
          href="https://www.ted.com/about/programs-initiatives/tedx-program"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline ted-card-btn"
        >
          Explore TEDx Program
        </a>
      </div>
    </section>
  

      <Footer />
    </>
  );
}