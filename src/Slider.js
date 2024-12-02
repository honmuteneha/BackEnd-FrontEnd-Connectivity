
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
function Slider()
{

return(
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-item active">
      <img src="https://s31898.pcdn.co/wp-content/uploads/2021/02/shutterstock_322133351-800x430.jpg" className="d-block w-80 h-10 mt-10 m-4" alt="..."/>
    </div>
  <div className="carousel-inner">
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/c5/ea/78/c5ea78b7aa0f47a0d7472199d8b54a99.jpg" className="d-block w-80 h-10" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/7c/d1/60/7cd1603e7e5b9f10bdb8329207c9378c.jpg" className="d-block w-80 h-10" alt="..."/>
    </div>
  </div >
  <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
)
}
export default Slider;