// import { useState } from 'react';
import { PromoBar, ArticleBox } from '@atoms';
import { NavBar, Banner } from '@molecules';
import './App.css';
import { Section } from '@organisms';
function App() {

  return (
    <>
      <PromoBar />

      <NavBar />

      <section className="home  bg-[rgb(242,240,241)]">
        <div className="w-5/6 mx-auto h-[663px] flex flex-colum">
          <div className="pt-[100px]">
            <div className="font-integral-heavy font-extrabold text-6xl tracking-tighter ">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </div>
            <p className="font-light py-6">
              Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out
              individuality and cater to your sense of style.
            </p>
            <button className="w-[210px] h-[52px] bg-black text-white rounded-3xl mb-8">Shop Now</button>
            <article className="flex sm-390:pb-[219px]">
              <ArticleBox title="200+" Phrase="International Brands"></ArticleBox>
              <ArticleBox title="2,000+" Phrase="High-Quality Products"></ArticleBox>
              <ArticleBox title="30,000+" Phrase="Happy Customers"></ArticleBox>
            </article>
          </div>
          <div className="overflow-hidden bg-pareja bg-cover w-full bg-top bg-no-repeat"></div>
        </div>
      </section>

      <Banner />

      <Section title="NEW ARRIVALS" onClick={() => console.log('Boton clickeado')}></Section>

      <div className="w-5/6 bg-[rgb(153,153,153)] border mx-auto"></div>

      <Section title="TOP SELLING" onClick={() => console.log('Boton clickeado')} />

      <div className="w-5/6 bg-[rgb(153,153,153)] border mx-auto"></div>

      <section>TOP SELLING</section>
      <article>Browse by dress style</article>
      <article>Our happy customers/ comentarios</article>
      <footer>Shop.co</footer>
    </>
  );
}

export default App;
