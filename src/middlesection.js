import {useState} from "react";
import fifalogo from "./images/fifalogo.jpeg"

import "./style.css"
function Fifa() {


  const[card,setcard]= useState([
    {id:1,picture:"./first.png",title:"Football Unites the world", description:"Matuidi:Football has the power to create a better world.",date:"18 Nov 2022"}
  ,{id:2,picture:"./second.jpeg",title:"Football Unites the world", description:"Mario Yepes: Football needs to provide a 'bridge' education",date:"15 Nov 2022"}
   ,{id:3,picture:"./third.jpeg",title:"Football Unites the world", description:"Lylod: Every Worldcup has its own highs and lows.",date:"14 Nov 2022"}

  ])
  const [news,setNews]=useState([
    {id:0,title:"Football Unites the world",content:"Global stars join FIFA in launching Football unites the World campaign.",img:"./fourth.jpeg"},
    {id:1,title:"Football Unites the world",content:"Benatia: The world Cup is the most watched event on the planet.",img:"./fifth.png"},
    {id:2,title:"Football Unites the world",content:"Paulo Wanchope:'The world Cup is a magical event'",img:"./sixth.png"},
    {id:3,title:"Football Unites the world",content:"Alex Lalas:The World Cup is something that is above, beyond everything that you do kicking the ball.",img:"./seventh.png"},
    {id:4,title:"Football Unites the world",content:"Alex Lalas:The World Cup is something that is above, beyond everything that you do kicking the ball.",img:"./seventh.png"},
    {id:5,title:"Football Unites the world",content:"Benatia: The world Cup is the most watched event on the planet.",img:"./fifth.png"},

   ])

   const [men,setMen]=useState([
    {rk:1, team:"./brazil.jpeg", country:"Brazil", tpoints:"1841.30"},
    {rk:2, team:"./belgium.jpeg", country:"Belgium", tpoints:"1816.71"},
    {rk:3, team:"argentina.jpeg", country:"Argentina", tpoints:"1773.88"},
    {rk:4, team:"france.jpeg", country:"France", tpoints:"1759.88"},
    {rk:5, team:"england.jpeg", country:"England", tpoints:"728.47      "},
]);

const [women,setWomen]=useState([
 {rk:1, team:"./usa.png", country:"USA", tpoints:"2087.48"},
 {rk:2, team:"./sweden.png", country:"Sweden", tpoints:"2066.30"},
 {rk:3, team:"germany.jpeg", country:"Germany", tpoints:"2064.75"},
 {rk:4, team:"france.jpeg", country:"France", tpoints:"2051.61"},
 {rk:5, team:"england.jpeg", country:"England", tpoints:"2023.09"},
]);

 function handleDelete(cid){
 const filteredData= news.filter((sid)=> sid.id!=cid)
 setNews(filteredData);
 }

    return (
        <div>

            <div style={{marginTop:"150px"}} className="row">
                <div className="col-lg-2">
                <div className="row" style={{marginLeft:"",display:"flex",flexDirection:"column", width:"1200px"}}>

                {card.map((setcard,key)=>
(


<div className="card" style={{width:"15rem",backgroundColor:"white",marginLeft:5,height:350,marginTop: "20px"}} >
<img className="card-img-top"  style={{marginLeft:"-13px",width:245,height:120}} src={setcard.picture} alt="Card image cap"/>
<div className="card-body">
    <p className="card-text" style={{marginLeft:"8%",fontFamily:"serif",fontSize:16}}>{setcard.title}</p>
    <h3 style={{marginLeft:"8%" ,fontFamily:"Serif", marginTop:"-15px"}}>{setcard.description}</h3>
    <p1 style={{marginLeft:"8%", marginTop:"-15px"}}>{setcard.date}</p1>
    {/* <button onClick={()=>handleDelete(setcard.id)}>delete</button> */}
  </div>

</div>






))
}
</div>
                </div>
                
                <div className="col-lg-10" >
                    <div className="row">
                        <div className="col-lg-12">
                        <div style={{backgroundColor:" rgb(15, 133, 162)",marginRight:"20px",marginTop:"-10px",position:"relative",width:"1400px", height:"800px"}}>
<div style={{backgroundColor:" rgb(15, 133, 162)",marginRight:"20px",height:390,width:250,position:"static",marginTop:"10px"}}>
      <h1  className="h1">Football Unites the World</h1>
      <p className="p"> Football unites the world as a global movement to inspire, unite and develop through football.</p>
      <h2 className="h2">More from this topic</h2>
      <h1 style={{marginLeft:"380px", marginTop:"100px"}} className="More">MORE</h1>
      </div>


<div className="row" style={{display:"flex",flexDirection:"row",marginLeft:300,position:"absolute",marginTop:"-400px"}}>
{card.map((setcard,key)=>
(


<div className="card" style={{width:"17rem",backgroundColor:"white",marginLeft:5,height:350,marginTop: "20px"}} >
<img className="card-img-top"  style={{marginLeft:"-13px",width:272,height:120}} src={setcard.picture} alt="Card image cap"/>
<div className="card-body">
    <p className="card-text" style={{marginLeft:"8%",fontFamily:"serif",fontSize:16}}>{setcard.title}</p>
    <h3 style={{marginLeft:"8%" ,fontFamily:"Serif", marginTop:"-15px"}}>{setcard.description}</h3>
    <p1 style={{marginLeft:"8%", marginTop:"-15px"}}>{setcard.date}</p1>
    {/* <button onClick={()=>handleDelete(setcard.id)}>delete</button> */}
  </div>

</div>






))
}


  <h2 style={{marginTop:"50px"}} className="line"></h2>

  <div className="row" style={{marginLeft:"",display:"flex",flexDirection:"row", width:"1200px"}}>

{    news.map((setNews,key)=>(
    (

      <div className="card" style={{marginLeft:"20px",width:"22rem",backgroundColor:"white",height:120,marginTop: "20px"}} >
<img className="card-img-top"  style={{width:90,height:90}} src={setNews.img} alt="Card image cap"/>
<div className="card-body">
<p className="card-text" style={{marginLeft:"30px",fontStyle:"", fontSize:14,marginTop:"-35%"}}>{setNews.title}</p>
<h3 style={{marginLeft:"110px" ,fontFamily:"calibri", fontStyle:"bold",marginTop:"-18px",fontSize:18}}>{setNews.content}</h3>
<button onClick={()=>handleDelete(setNews.id)}>delete</button>
</div>

</div>

)))}
</div>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-lg-12" >
                        <div style={{width:"300px",height:"80%"}}>
<img src={fifalogo} alt="Logo" style={{width:"200px",height:"70px",marginTop:"70px"}} />
<br/>
<br/>
<h2 style={{marginLeft:"0px"}}>WORLD RAKING</h2>
<br/>
<p style={{marginLeft:"0px"}}>The official world ranking of <br/> internaltional men and women <br/> teams.</p>
<br/>
<h6 style={{marginLeft:"0px",color:"blue"}}>FIFA/COCA-COLA WORLD <br/> RANKING</h6>
</div>

<div style={{width:"400px",height:"80%",marginLeft:"300px",marginTop:"-380px"}}>

<h4>MEN</h4>
<table className="table table-bordered">

<tr>
<td>RK</td>
<td>TEAM</td>
<td></td>
<td>TOTAL POINTS</td>
</tr>
{
    men.map((index,key)=>(
    <tr key={index.rk}>
    <th>{index.rk}</th>
    <th><img src={index.team} style={{width:"120px",height:"70px"}}/></th>
    <th>{index.country}</th>
    <th>{index.tpoints}</th>
    </tr>
))
}
</table>
<p>Updated 6 October 2022</p>
<h6 style={{color:"blue"}}>Check full men's ranking table </h6>
</div>

<div style={{width:"400px",height:"100%",marginLeft:"750px",marginTop:"-450px"}}>

 <h4>WOMEN</h4>
 <table className="table table-bordered">

<tr>
<td>RK</td>
<td>TEAM</td>
<td></td>
<td>TOTAL POINTS</td>
</tr>
{
    women.map((index,key)=>(
    <tr key={index.rk}>
    <th>{index.rk}</th>
    <th><img src={index.team} style={{width:"120px",height:"70px"}}/></th>
    <th>{index.country}</th>
    <th>{index.tpoints}</th>
    </tr>
))
}
</table>
<p>Updated 13 October 2022</p>
<h6 style={{color:"blue"}}>Check full women's ranking table </h6>
</div>


                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="row">
                <div className="col-lg-12" style={{ border: "1px solid black" }}>
                    abcd 5
                </div>
            </div>
             */}

        </div>
        </div>
    </div>
    );
}

export default Fifa;