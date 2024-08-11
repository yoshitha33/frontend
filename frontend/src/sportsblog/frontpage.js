import React from 'react';
import './styles.css'; // Make sure to create this CSS file as well

// Header component
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#articles">Articles</a></li>
                <li><a href="#videos">Videos</a></li>
                <li><a href="#podcasts">Podcasts</a></li>
                <li><a href="#forums">Forums</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
);

// ContentItem component
const ContentItem = ({ title, description }) => (
    <div className="content-item">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

// Main component
const Main = () => (
    <main>
        <section id="home">
            <h1>Welcome to the Sports and Yoga Blogging Community</h1>
            <p>Share your passion for sports, fitness, yoga, mindfulness, and holistic health.</p>
        </section>

        <section id="articles">
            <h2>Latest Articles</h2>
            <div className="content-grid">
                <ContentItem title="Article Title" description="Brief description of the article..." />
                {/* Add more ContentItem components here */}
            </div>
        </section>

        <section id="videos">
            <h2>Latest Videos</h2>
            <div className="content-grid">
                <ContentItem title="Video Title" description="Brief description of the video..." />
                {/* Add more ContentItem components here */}
            </div>
        </section>

        <section id="podcasts">
            <h2>Latest Podcasts</h2>
            <div className="content-grid">
                <ContentItem title="Podcast Title" description="Brief description of the podcast..." />
                {/* Add more ContentItem components here */}
            </div>
        </section>
    </main>
);

// Footer component
const Footer = () => (
    <footer>
        <p>© 2024 Sports and Yoga Blogging Community. All rights reserved.</p>
    </footer>
);





export default App;
