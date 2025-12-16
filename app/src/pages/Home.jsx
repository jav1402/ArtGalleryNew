import heroImg from "../assets/galeria_hero.png";

function Home() {
    return (
        <div className="home-wrap">
            <h1 className="home-title">Home</h1>
            <div
                className="home-main"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                }}
            ></div>
        </div>
    );
}

export default Home;