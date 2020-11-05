import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import weaponsAPI from '../services/dsApi';
import music from '../soundtrack/dssound.mp3';
import battleAxe from '../images/battle_axe.png';
import blackBow from '../images/black_bow_of_pharis.png';
import alba from '../images/arbalest.png';
import avel from '../images/avelyn.png';
import band from '../images/bandits_knife.png';
import bkg from '../images/bkg.png';
import bastard from '../images/bastard_sword.png';
import bg from '../images/blackglaive.png';
import bb from '../images/black_blade.png';
import astor from '../images/arstors.png';
import ags from '../images/ags.png';
import ass from '../images/ass.png';
import bss from '../images/bss.png';
import anri from '../images/anri.png';
import bkgs from '../images/bkgs.png';
import astorags from '../images/astorags.png';
import bks from '../images/bks.png';
import adg from '../images/adg.png';
import big from '../images/big.png';
import aqua from '../images/aqua.png';

const qualq = {
  'Battle Axe': battleAxe,
  'Black Bow of Pharis': blackBow,
  'Arbalest': alba,
  'Avelyn': avel,
  "Bandit's Knife": band,
  'Black Knight Greataxe': bkg,
  'Bastard Sword': bastard,
  'Black Knight Glaive': bg,
  'Black Blade': bb,
  "Arstor's Spear": astor,
  "Archdeacon's Great Staff": ags,
  'Astora Straight Sword': ass,
  'Barbed Straight Sword': bss,
  "Anri's Straight Sword": anri,
  'Black Knight Greatsword': bkgs,
  'Astora Greatsword': astorags,
  'Black Knight Shield': bks,
  'Ancient Dragon Greatshield': adg,
  'Black Iron Greatshield': big,
  'Aquamarine Dagger': aqua,
};

const HomePage = () => {
  const [weapon, setWeapon] = useState([]);
  useEffect(() => {
    weaponsAPI().then((resp) => {
      setWeapon(Object.values(resp.ds3_weapons));
    });
  }, []);
  console.log(weapon);
  return (
    <section className="carousel">
      <ReactAudioPlayer autoPlay loop src={music} volume={0.3} />
      {weapon.map((Post) => (
        <div className="item">
          <img src={qualq[Post.name]} width="150px" height="270px" alt="img"/><br></br><br></br>
          <div>{Post.name}</div>
          <div>Damage: {Post.base_damage.slice(1, 4)}</div>
          <div>Type: {Post.weapon_type}</div>
          <div>Weight: {Post.weight}kg</div>
          <br></br>
        </div>
      ))}
    </section>
  );
};

export default HomePage;
