import As_img from '../assets/as.png';
import As_img1 from '../assets/mg.jpg';
import As_img2 from '../assets/iow.jpg';
function Article() {
   return ( 
      <>
            <div className="bbo">
            <p style={{width: "450px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe temporibus, vero odit ducimus labore quas. Omnis aliquid consectetur eaque accusantium eum ea perspiciatis perferendis, necessitatibus quae quos harum magnam.
            </p>
          <img src={As_img}  width={250} />
          </div>


          <div className="bbo" id="fx_img" style={{justifyContent: "flex-start"}}>
            <p style={{width: "450px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe temporibus, vero odit ducimus labore quas. Omnis aliquid consectetur eaque accusantium eum ea perspiciatis perferendis, necessitatibus quae quos harum magnam.
            </p>
          <img src={As_img1}  width={250} />
          </div>

          <div className="bbo" style={{justifyContent: "center"}}>
            <p style={{width: "450px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe temporibus, vero odit ducimus labore quas. Omnis aliquid consectetur eaque accusantium eum ea perspiciatis perferendis, necessitatibus quae quos harum magnam.
            </p>
          <img src={As_img2}  width={250}  style={{transform: 'scaleX(-1)'}}/>
          </div>

      </>
    );
}

export default Article;