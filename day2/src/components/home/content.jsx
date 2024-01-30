import "../../styles/content.css";
import Card from "./home";
export default function Content() {
  return (
    <>
    <div className="new-content-container">
      <Card
        imgSrc="https://source.unsplash.com/WLUHO9A_xik/300x200/"
        spanTag="4 Day ago"
        constentHead="Post One"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="3224"
        views="7"
        comment="21"
        color="rgb(248, 51, 84)"
      />
      <Card
        imgSrc="https://source.unsplash.com/WLUHO9A_xik/300x200/"
        spanTag="1 week ago"
        constentHead="Post Two"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="1699"
        views="11"
        comment="27"
        color="orange"
      />
      <Card
        imgSrc="https://source.unsplash.com/WLUHO9A_xik/300x200/"
        spanTag="4 week ago"
        constentHead="Post Three"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="1624"
        views="4"
        comment="17"
        color="green"
      />
       <Card
        imgSrc="https://source.unsplash.com/WLUHO9A_xik/300x200/"
        spanTag="4 week ago"
        constentHead="Post Three"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="1624"
        views="4"
        comment="17"
        color="green"
      />
    </div>
    
     <div className="bodytournaments">
     <br></br><br></br><br></br><br></br>
     <center>
       <div className="tournament-heading">
       <div className="text-effect">
         <h1 className="neon" data-text="TOURNAMENTS" contentEditable>
           
         </h1>
         <div className="gradient"></div>
         <div className="spotlight"></div>
       </div>
       </div>
     </center>
     </div>
     </>
  );
}
