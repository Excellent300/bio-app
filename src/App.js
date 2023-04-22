import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App" style={{boxShadow: "0 0 50px 15px #adc2f7"}}>
      <header className="App-header">
        <nav>
          <div className="">
            <h1 className="Nav-header">Excellent Thekwane</h1>
          </div>
        </nav>
      </header>
      <section style={{backgroundColor:"#A9c2fd", boxShadow:"0px 2px 5px #185cfc",marginBottom:"0px"}}>
      <div className="container">
        <div className="profile-picture">
          <img
            src="https://media.licdn.com/dms/image/D5603AQFm29xbC94B8w/profile-displayphoto-shrink_200_200/0/1679502100448?e=1687392000&v=beta&t=cHWQEXBBjEt-pD6cvwWtq6Sr3DJPFpqdF-xCJ1XJJXg"
            alt=""
          />
          <div className="overlay">
            <h2>Excellent</h2>
            <h2>Thekwane</h2>
          </div>
        </div>
      </div>

      </section>
 

      <section style={{backgroundColor:"#D2edf9", boxShadow:"0px 2px 5px #185cfc", padding:"10px"}}>
        
          <h1 style={{textAlign:"center"}}>About Me</h1>
          <p className="paragraphs">
            Hello, my name is Excellent Thekwane. I am a recent Tech Consultant
            intern at Oracle where I have had the opportunity to work on a MTN
            project which enabled me to gain valuable skills, and experience as
            well as contribute to the success of the MTN project.
          </p>
          <p className="paragraphs">
            I am someone that is passionate about technology and I am always
            excited about the opportunity to learn and grow. I believe that this
            internship will provide me with the opportunity to further develop
            my skills and contribute to the success of SovTech.
          </p>

          <p>
            I am someone that loves playing video games as a way to unwind and
            challenge myself. I also enjoy designing logos and graphics for my
            personal brand. Lastly, I love listening to music and discovering
            new artists and genres.
          </p>
          
      </section>
      <section style={{backgroundColor:"#E6e6e6", boxShadow:"0px 2px 5px #185cfc",padding:"10px"}}>
        <div>
          <h1 style={{textAlign:"center"}}>Why SovTech?</h1>
          <p>
            I am interested in working for SovTech because of the company's
            focus on innovation and cutting-edge technology. I believe that
            SovTech would provide me with the opportunity to work on challenging
            projects and collaborate with other talented developers. I am also
            impressed by SovTech's commitment to diversity and inclusion, and I
            would be proud to work for a company that values these principles.
          </p>
          </div>
      </section>
      
    </div>
    
  );
}

export default App;
