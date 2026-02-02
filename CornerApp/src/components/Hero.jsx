import './Hero.css'

function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-button">{ctaText}</button>
        </div>

        <div className="hero-image">
          <img src={image} alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero
