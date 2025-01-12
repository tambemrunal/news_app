import '../App.css'
import image from '../assets/news_img.jpg';
const NewsCard = ({News}) => {
    // console.log(News);
    // console.log(News.title,News.description,News.imgLink,News.srcLink);
  return (
    <>
      <div className="card NewsCard bg-dark text-white" >
        <img src={News.image_url ? News.image_url :image } className="card-img-top card-image" alt="news image" />
        <div className="card-body">
          <h5 className="card-title">{News.title}</h5>
          <p className="card-text">{News.description ?News.description.slice(0,90) + "..." :"extra I have to add an description" }</p>
          <a href={News.link} className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
