import PageTemplate from './pages/PageTemplates';
import './App.css';

function Main() {
  return (
    <PageTemplate>
      <div className="page-content">
        <div className="texting">
          <h1>Project Lorum</h1>
        </div>
        <div className="image-block">
          <img
            src="https://amiel.club/uploads/posts/2022-09/1664424914_1-amiel-club-p-krasivii-zagorodnii-dom-krasivo-1.jpg"
            alt="Будинок"
            className="my-image"
          />
         
        </div>
      </div>

      <div className="page-content">
        <div className="texting">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quos debitis mollitia eaque animi porro quod ipsum illum voluptatem esse? Nisi, quasi amet? Maiores quas totam dolore, aut asperiores modi?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae, error iure ad excepturi placeat hic libero cumque aliquid voluptatum nulla ratione impedit nihil, numquam vitae non harum officia totam!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi architecto ab, tempora maxime expedita quis, et fugit laborum sit reprehenderit voluptate beatae nisi? Harum obcaecati hic eos cum! Ea, rem?</p>
        </div>
        <div className="image-block">
          <img
            src="https://static.espreso.tv/uploads/article/216593/images/im-63_main_ukr.jpg"
            alt="Будинки"
            className="mi-image"
          />
           <img
            src="https://budport.com.ua/assets/upload/userfiles/0off_fotoNOVOSTI/1_346.jpg"
            alt="Будинки"
            className="mi-image"
          />
           <img
            src="https://i.nerukhomi.ua/gallery/2022/8/30/a-giant-ring-like-structure-is-proposed-to-encircle-dubais-burj-khalif1.jpg"
            alt="Будинки"
            className="mi-image"
          />
         
        </div>
      </div>

      <div className="container">
        <h2>Main Focus/Mission Statement</h2>
      <div className="texts-container">
        <div className="texting">
          <h1>1</h1>
        </div>
      <div className="text-left">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero eveniet voluptas vel deserunt! Deserunt, laudantium beatae velit ab, commodi, laboriosam consequuntur iusto sunt nemo explicabo sit optio saepe maiores.</p>
      </div>
      <div className="texting">
          <h1>2</h1>
        </div>
      <div className="text-right">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nisi id quisquam cumque sapiente recusandae quod tempora incidunt. Est, nam. Dolorem cupiditate porro sequi voluptatem minus voluptatibus accusamus sit quos.</p>
    </div>
  </div>
</div>

   
    <div className="gallery-container">
      <div className="texting">
      <h1>Our Projects</h1>
      </div>
      <div className="top-row">
        <img src="https://apostrophe.ua/uploads/image/b268988a737781bad12468891ffda083.jpg" alt="Будівля 1" />
        <img src="https://static.apostrophe.ua/uploads/image/5fda69f94c4ec2a1eb773b468f33d659.jpg" alt="Будівля 2" />
      </div>
      <div className="bottom-row">
        <img src="https://vsviti.com.ua/wp-content/uploads/2013/01/16.jpg" alt="Будівля  3" />
        <img src="https://vikna.if.ua/assets/gallery/2017/10/05/76316/Praha_Tancici_dum.jpg" alt="Будівля  4" />
        <img src="https://tourism.com.de/wp-content/uploads/2021/11/post-465490-619400a4d41dc.webp" alt="Будівля  5" />
      </div>
    </div>

     <div className="page-content">
        <div className="texting">
          <h1>Contact Us</h1>
          <p>+1234567890</p>
        </div>
        </div>
        


    </PageTemplate>
  );
}

export default Main;

