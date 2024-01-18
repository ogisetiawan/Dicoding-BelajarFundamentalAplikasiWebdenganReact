import React from "react";
import { HiOutlineBookmark } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";

function NoteApp() {
    return <main>
    <h2 className="sixth">Active Notes</h2>
    <section>
      <div className="allCardsContainer">
        <div className="eachCard">
          <div className="cardContent">
            <div className="cardInfo">
              <h5 className="cardTitle">Babel</h5>
              <h6 className="cardSubTitle">Kamis, 14 April 2022</h6>
              <p className="cardText">Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel seri</p>
            </div>
          </div>
          <div className="userActions">
            <button className="btn-secondary"><HiOutlineBookmark  /> Archives</button>
            <button className="btn-danger"><HiOutlineTrash  /> Delete</button>
          </div>
        </div>
        <div className="eachCard">
          <div className="cardContent">
            <div className="cardInfo">
              <h5 className="cardTitle">Babel</h5>
              <h6 className="cardSubTitle">Kamis, 14 April 2022</h6>
              <p className="cardText">Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel seri</p>
            </div>
          </div>
          <div className="userActions">
            <button className="btn-secondary"><HiOutlineBookmark  /> Archives</button>
            <button className="btn-danger"><HiOutlineTrash  /> Delete</button>
          </div>
        </div>
        <div className="eachCard">
          <div className="cardContent">
            <div className="cardInfo">
              <h5 className="cardTitle">Babel</h5>
              <h6 className="cardSubTitle">Kamis, 14 April 2022</h6>
              <p className="cardText">Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel seri</p>
            </div>
          </div>
          <div className="userActions">
            <button className="btn-secondary"><HiOutlineBookmark  /> Archives</button>
            <button className="btn-danger"><HiOutlineTrash  /> Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>;
}

export default NoteApp;
