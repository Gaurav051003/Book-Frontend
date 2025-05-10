import React from 'react';

const AboutUs = () => {
  return (
    <>
      <style>{`
        .about-us {
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .about-us h1 {
          font-size: 32px;
          margin-bottom: 20px;
          color: #333;
        }

        .about-us h2 {
          font-size: 24px;
          margin-top: 30px;
          color: #444;
        }

        .about-us p {
          font-size: 16px;
          margin-bottom: 15px;
          color: #555;
        }

        .about-us ul {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .about-us ul li {
          margin-bottom: 10px;
          color: #333;
        }

        .about-us .closing {
          font-style: italic;
          color: #777;
          margin-top: 30px;
        }
      `}</style>

      <div className="about-us">
        <h1>About TriSpark</h1>
        <p>
          <strong>TriSpark</strong> is a unified digital platform designed to empower students through learning, exploration, and innovation.
          With our tagline <em>"Learn | Shop | Ask"</em>, we are committed to transforming how students access educational content,
          solve doubts, and purchase affordable books.
        </p>

        <h2>Our Mission</h2>
        <p>
          5 Developers, 3 Ideas, 1 Mission — To provide a seamless, intelligent, and accessible learning environment for students everywhere.
        </p>

        <h2>Our Modules</h2>
        <ul>
          <li><strong>Book E-Store:</strong> Affordable & trusted books with features like filters, wishlist, reviews, and coupons.</li>
          <li><strong>Vidya Setu:</strong> A free learning platform offering GATE content, DSA, Web Development, Git, MCQs, and more.</li>
          <li><strong>Genius AI Assistant:</strong> Smart assistant for doubt-solving, lecture search, and concept recommendations using Google APIs.</li>
        </ul>

        <h2>Our Team</h2>
        <ul>
          <li>Gaurav Arya</li>
          <li>Kamlesh Kumar</li>
          <li>Pankaj Kumar Mishra</li>
          <li>Md Shabir Ansari</li>
          <li>Bhavik Katara</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          We aim to expand TriSpark with used book exchanges, certification programs, interactive tools, and community-driven initiatives — all while keeping education affordable and accessible.
        </p>

        <p className="closing">Join us in transforming the way we learn and grow together.</p>
      </div>
    </>
  );
};

export default AboutUs;
