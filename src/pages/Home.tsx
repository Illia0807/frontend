import NavBar from '../components/NavBar';
import { homInfo } from '../Utils';
import img from '../assets/Home.svg';
import style from'../ui/home.module.css';

const Home = () => {
  return (
    <div className={style.pageHome}>
      <NavBar />
      <section>
        <div>
          <h2>always clean</h2>
          <h1>HOME & OFFICE</h1>
          <p>{homInfo}</p>
        </div>
        <div>
          <img src={img} alt="home page" />
        </div>
      </section>
    </div>
  );
};

export default Home;
