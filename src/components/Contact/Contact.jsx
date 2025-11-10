import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content animate-on-scroll">
          <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:hello@example.com" className="btn btn-secondary">Email Me</a>
            <a href="https://github.com" className="btn btn-secondary">GitHub</a>
            <a href="https://linkedin.com" className="btn btn-secondary">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
