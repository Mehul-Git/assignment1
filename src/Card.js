import {React,useEffect,useState} from 'react'
import "./card.css"
import {FaRegHeart,FaPencilAlt,FaTrash,FaEnvelope,FaPhoneAlt,FaGlobe} from "react-icons/fa"




const Card = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("/update")
          .then((response) => response.json())
          .then((data) => console.log(data));
            
  }
  useEffect(() => {
    fetchData();
  },[])



    const CardInfo = [
        { image : "https://api.dicebear.com/5.x/adventurer/svg?seed=Abby", title: "enoos", email:"anista@k.com",phone:"74839201",website:"hdjsfhdjks.com"},
        { image : "https://api.dicebear.com/5.x/adventurer/svg?seed=Charlie", title: "charlie", email:"cahrlie@l.com",phone:"56473892",website:"hdjshdsjds.com"},
        { image : "https://api.dicebear.com/5.x/adventurer/svg?seed=Coco", title: "coco", email:"coco@j.com",phone:"65473829",website:"ndmscnxmz.com"},
        { image : "https://api.dicebear.com/5.x/adventurer/svg?seed=Maggie", title: "maggie", email:"fhdjskdn@k.com",phone:"5743829",website:"fdsmdnsm.com"},
        { image : "https://api.dicebear.com/5.x/adventurer/svg?seed=Angel", title: "angel", email:"bdsnmahdsja@x.com",phone:"6473829",website:"fhdjsjdsk.com"},
        { image : "https://api.dicebear.com/5.x/adventurer/svg?seed=Lily", title: "lily", email:"fhdjsahdjs@.com",phone:"0987653",website:"ew9q049302.com"},
        { image : "https://api.dicebear.com/5.x/adventurer/svg?seed=Cali", title: "cali", email:"fdsmabdsnm@.com",phone:"657483291",website:"fhdjskla.com"},
        { image : "https://api.dicebear.com/5.x/adventurer/svg?seed=Lola", title: "lola", email:"fbdnjskladhjsak@l.com",phone:"345678943",website:"fhdjskajfdksl.com"},
        { image : "https://api.dicebear.com/5.x/adventurer/svg?seed=Luna", title: "luna", email:"fhdjsdsm@g.com",phone:"654732891",website:"bfndms,ajfdks.com"}
        
    ]

    const RenderCard = (card, index) => {
 
        return (
          <>
            <div className="box" style={{width: "18rem"}} key={index}>
            <img src={card.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <hr />
              <h2 className="card-title">{card.title}</h2>
            </div>
            
              <h6 className="list-group-item"><FaEnvelope/><span className='mail'>{card.email}</span></h6>
              <h6 className="list-group-item"><FaPhoneAlt/><span className='mail'>{card.phone}</span></h6>
              <h6 className="list-group-item"><FaGlobe/><span className='mail'>{card.website}</span></h6>
              <hr />
            
            
            <button > <span className="heart"><FaRegHeart/> </span> </button>
            
            <span className='line'>|</span>
            <button> <span className = "function"><FaPencilAlt/>
            </span></button>
            
            <span className='line'>|</span>
            <button> <span className = "function"><FaTrash/></span>
            </button>
            </div>
            </>
        
        )
    }
  return (
    <div className="grid">
        
   {CardInfo.map(RenderCard)}
   </div>

  )
}

export default Card
 