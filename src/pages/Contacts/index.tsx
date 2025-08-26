
import PageTemplate from '../PageTemplates'
import './style.css'

function Contacts() {
  

  return (
    <PageTemplate>
    
<div className="gallery-container">
      <div className="page-content">
      <h1>Contact Information</h1>
      </div>
      <div className="gallery-container"></div>
     <div className="page-content">
        <div className="text-block">
          <h2>Company Name</h2>
          <p>1234 Sample Street Austin Texas 76401</p>
        </div>
        </div>
      </div>

    
        <div className="gallery-container">
      <div className="page-content">
        <div className="text-block">
      <h3>512.333.2222</h3>
      <p>sampleemail@gmail.com</p>
      </div>
      </div>
      </div>
      
<div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5501.564724997732!2d-100.54000555596262!3d32.443127498235945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86561ca843e19d67%3A0xe77c3c4365155f84!2sRoscoe%20First%20United%20Methodist!5e0!3m2!1suk!2sua!4v1756229184759!5m2!1suk!2sua"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</div>

    </PageTemplate>
  )
}

export default Contacts

