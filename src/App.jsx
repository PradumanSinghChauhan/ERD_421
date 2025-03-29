import { useState } from 'react'
import './App.css'
import snow from './assets/snow.svg'
import apps from './assets/Apple.png'
import playap from './assets/PLay.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'
import c1 from './assets/c1.png'
import c2 from './assets/c2.png'     
import c3 from './assets/c3.png'
import c4 from './assets/c4.png'
import c5 from './assets/c5.png'
import c6 from './assets/c6.png'  
import c7 from './assets/c7.png'
import c8 from './assets/c8.png'
import i1 from './assets/i1.png'
import i2 from './assets/i2.png'
import i3 from './assets/i3.png'
import i4 from './assets/i4.png'
import src1 from './assets/src1.png'
import src2 from './assets/src2.png'
import src3 from './assets/src3.png'
import src4 from './assets/src4.png'
import e1 from './assets/e1.png'
function App() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  const data = [{
    question:"Chamber reached do he nothing be?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  },{
    question:"Stuff sight equal of my woody?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  },{
    question:"At by pleasure of children be?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  },{
    question:"Amounted repeated as believed in confined?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  },{
    question:"In am do giving to afford parish settle easily garret?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  }]
  return (
    <>
     <header className='head'>
      <div className="left">
        <span className='yt'>Home</span>
        <span className='yt'>About</span>
        <span className='yt'>Testimonials</span>
        <span className='yt'  >Contact</span>
      </div>
      <div className="nc">smartHome</div>
      <div className="right">
        <a href="https://www.figma.com/login" target="blank">
        <button className="sig">Login</button>
        </a>
        <a href="https://www.figma.com/signup" target="blank">
        <button className="login">Sign Up</button>
        </a>
        
        </div>
     </header>
     <center className="Cent">Smart Home<br></br>Application<br></br></center>
     <center className="v">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon<br></br> him call mile. An pasture he himself believe ferrars besides cottage.</center>
     <div class="page1">
      <div class="ss-img">
        <a href="https://www.facebook.com/"><img class="ss" src={src1}></img></a>
        <a href=" https://www.instagram.com/ecell_nitb?igsh=bG1jc2xvMGZ0d2Ji"><img class="ss" src={src2}></img></a>
        <a href="https://www.linkedin.com/company/ecell-manit/"><img class="ss" src={src3}></img></a>
        <a href="https://x.com/messages/compose?recipient_id=1596464580753911810"><img class="ss" src={src4}></img></a>
      </div>
      <div><img src={snow} className="react-logo" alt="logo" /></div>
     </div>
      
      <div className="down">
        <a href="https://www.figma.com/downloads/" target="blank">
        <img src={apps} className="apl" alt="logo" />
        </a>
      <a href="https://www.figma.com/downloads/" target="blank">
      <img src={playap} className="pls" alt="logo" />
      </a>
      
      </div>
      <div className="About">About us</div>
      <div className='page2'>
          <div><img src={p2} className="p2" alt="logo" /></div>
            <div className='text'>
              <div className='text1'>Smart Home's Smart<br></br>Services</div>
              <div className='text2'>Ye am depending propriety sweetness<br></br> distrusts belonging collected. Smiling mention <br></br> he in thought equally musical. Wisdom new<br></br>  and valley answer. Contented it so is discourse<br></br>  recommend. Man its upon him call mile. An <br></br> pasture he himself believe ferrars besides <br></br> cottage.</div>
              <a href="https://www.figma.com/resource-library/ui-design/" target ="blank">
              <button class="learn">Learn More</button>
              </a>
              
            </div>
    
      </div>

      <div className='page21'>
            <div className='text-2'>
              <div className='control'>Control Electric<br></br>Appliences</div>
              <div className='text2'>Ye am depending propriety sweetness<br></br> distrusts belonging collected. Smiling mention <br></br> he in thought equally musical. Wisdom new<br></br>  and valley answer. Contented it so is discourse<br></br>  recommend. Man its upon him call mile. An <br></br> pasture he himself believe ferrars besides <br></br> cottage.</div>
              <a href="https://www.figma.com/resource-library/ui-design/" target ="blank">
              <button class="l1">Learn More</button>
              </a>
            </div>
            <img src={p3} className="p2" alt="logo" />
      </div>

      <div className='page3'>
          <div><img src={p4} className="p2" alt="logo" /></div>
            <div className='text'>
              <div className='control'>What App Can do<br></br>to your Appliences</div>
              <div className='text2'>Ye am depending propriety sweetness<br></br> distrusts belonging collected. Smiling mention <br></br> he in thought equally musical. Wisdom new<br></br>  and valley answer. Contented it so is discourse<br></br>  recommend. Man its upon him call mile. An <br></br> pasture he himself believe ferrars besides <br></br> cottage.</div>
              <a href="https://www.figma.com/resource-library/ui-design/" target ="blank">
              <button class="l1">Learn More</button>
              </a>
            </div>
              
      </div>
      <div class="our">
          <div class="client">Our Clients</div>
          <div class="wisdom">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon<br></br> him call mile. An pasture he himself believe ferrars besides cottage.</div>
      </div>
      
      <div class="images">
        <div class="img-1">
          <img src={c1} class="img10"></img>
          <img src={c2} class="img2"></img>
          <img src={c3} class="img3"></img>
          <img src={c4} class="img4"></img>
        </div>
        <div class="img-2">
          <img src={c5} class="img5"></img>
          <img src={c6} class="img6"></img>
          <img src={c7} class="img7"></img>
          <img src={c8}  class="img8"></img>
        </div>
      </div>

      <div class="test">Testimonials</div>
      <div class="new">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon<br></br> him call mile. An pasture he himself believe ferrars besides cottage.</div>
      <div className='testi1'>
         <div className='testi2'>
         <div className='com'>our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions
         </div> <div className="int"> <img src={i1} className="img1"></img><span className='to'>Cham<br></br><span className='de'>Product Design</span></span> </div>
         </div>
         <div className='meet'>
         <div className='com'>We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured</div>
         <div className='int'> <img src={i2} className="img1"></img><span className='to'>Scopic Software<br></br><span className='de'>Custom IT Solutions Firm</span></span></div>
         </div>
      </div>
      <div className='easy'>
         <div className='meet'>
         <div className='com'>It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done. </div> <div className="int"> <img src={i3} className="img1"></img><span className='to'>Russell Lee<br></br><span className='de'>Writer</span></span> </div>
         </div>
         <div className='meet'>
         <div className='com'>At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.</div>
         <div className='int'> <img src={i4} className="img1"></img><span className='to'>Solace Engineers Inc.<br></br><span className='de'>Engineering Firm</span></span></div>
         </div>
      </div>
      <div class="des">
      <img class="des-img" src={e1}></img>
      </div>
      <div class="faq">FAQ'S</div>
      <div class="outlinefaq">
        {data.map((item, i) => (
          <div class="faq1" key={i}>
           <div className='top'
           onClick={() => toggle(i)}>
           <div class="chamber"  >
            {selected === i ? <span class="m">_</span> : <span class="plus">+</span>}
            <span class='li'>{item.question}</span></div>
           </div>
          <div className={selected === i ? 'chamber12' : 'chamber1'}>{item.answer}</div>
          </div>
        ))}

      </div>
     
      <div className='page21'>
            <div className='text-2'>
              <div className='down11'>Download App</div>
              <div className='text2'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</div>
              <div className="down2">
                <a href="https://www.figma.com/downloads/" target="blank">
                <img src={apps} className="apl2" alt="logo" />
                </a>
      <a href="https://www.figma.com/downloads/" target="blank">
      <img src={playap} className="pls2" alt="logo" />
      </a>
      
      </div>
            </div>
            <img src={p2} className="p2" alt="logo" />
      </div>
      <div class="update">
        <div class="to-get">
          <div class="subscribe">Subscribe to get updated</div>
          <div class="at-vero">At vero eos et accusamus et iusto odio dignissimos ducimus qui<br></br> blanditiis praesentium voluptatum deleniti atque .</div>
        </div>
        <div class="get-div">
          <a href="https://smarthometechnologies.com/" target ="blank">
          <button class="get-button">Get Start</button>
            </a>
            </div>
      </div>

      <div class="footer1">
        <div class="home">smartHome</div>
        <div class="ab">CATEGORIES</div>
        <div class="ab">ABOUT</div>
        <div class="ab">Follow us</div>
      </div>
      <div class="footer2">
        <div class="your">Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.<br></br>
      
          <p class="p1">
          <input className="in" type="text" placeholder="Email"></input>
          <a href="https://smarthome.community/register" target="blank">
          <button class="rr">Register</button>
          </a>
          
            </p>
        </div>
        <div class="footer-content">
          <div class="p">Product Management</div>
          <div class="p">Design / Creatives</div>
          <div class="p">Education & Creative</div>
          <div class="p">UI/UX Designers</div>
          <div class="p">Development</div>
          <div class="p">Customer Support</div>
        </div>
        <div>
          <div class="p">About Us</div>
          <div class="p">Partnerships</div>
          <div class="p">Finanace Experts</div>
          <div class="p">Product Management</div>
          <div class="p">Product Manager</div>
          <div class="p">The Team</div>
        </div>
        <div>
          <div class="p">Facebook</div>
          <div class="p">Twitter</div>
          <div class="p">Instagram</div>
          <div class="p">Linkedin</div>
        </div>
        <div>

        </div>
      </div>
      <footer class="istn">
      Copyright © 2021 all rights reserved smartHome
      </footer>
    </>
  )
} 

export default App
