import { Link } from "react-router-dom";
import heroVideo from '../../public/hero.mp4';  

export default function Hero() {

  const heroSectionStyle = {
    position: 'relative',
    height: 'auto',
    minHeight: '400px',
    width: '100%',
    marginLeft: "0",
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '2rem',
  };

  const heroHeadingStyle = {
    fontSize: '25px',
    color: "black",
    marginTop:"15px",
    fontFamily:"timesnewroman",
    fontWeight:"bold",
    marginBottom: '1rem',
    zIndex: 1,  
  };

  const ctaButtonStyle = {
    backgroundColor: '#6FBD9F',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: "none",
    zIndex: 1,  
  };

  const ctaButtonHoverStyle = {
    backgroundColor: '#AF2F64',
    
  };

  return (
    <div>
      {/* Hero Section with background video */}
      <section style={heroSectionStyle}>
        {/* Background video */}
        <video 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',  
            zIndex: -1, 
          }} 
          autoPlay 
          loop 
          muted
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content above the video */}
        <div style={{backgroundColor:'rgba(255,255,255,0.8)',width:"500px",height:"150px",marginTop:"150px"}}>
        <h1 style={heroHeadingStyle}>
        Improve your skills on your own To prepare for a better future
        </h1>
        <Link
          to="/prendre-rendezvous"
          style={{ ...ctaButtonStyle, ...ctaButtonHoverStyle }}
        >
          Register now
        </Link>
        </div>
      </section>
    </div>
  );
}
