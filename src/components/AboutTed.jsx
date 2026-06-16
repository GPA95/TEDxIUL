import './AboutTed.css';

export default function AboutTed() {
  return (
    <section id="about-ted">
      <div className="ted-card fade-in">
        <span className="ted-card-label">About TED</span>
        <h3 className="ted-card-heading">
          Ideas Worth <em>Spreading</em>
        </h3>
        <p className="ted-card-body">
          TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
        </p>
        <a
          href="https://www.ted.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline ted-card-btn"
        >
          Learn About TED
        </a>
      </div>

      <div className="ted-card fade-in">
        <span className="ted-card-label">About TEDx</span>
        <h3 className="ted-card-heading">
          Ideas Worth Spreading, <em>Locally</em>
        </h3>
        <p className="ted-card-body">
          In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where <em>x</em> = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.
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
  );
}
