import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BurgerContext from "./Contex/BurgerContext";

import Layout from './Layouts/Layout'
import Home from "./Pages/Home";
import BurgerMaker from "./Pages/BurgerMaker";

function App() {

  // menginisiasi state 'ingredients' & setter 'setIngredients'
  const [ingredients, setIngredients] = useState([])

  // Handler untuk menambahkan ingredient
  const addIngredientsHandler = (ingredient) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients(prevState => {
      // Menduplikasi state 'ingredients' lama dan menambahkan ingredient baru pada index 0
      const newState = [ingredient, ...prevState]
      // Me return data baru untuk state 'ingredients'
      return newState
    })
  }

  // Handler untuk mengurangi ingredient
  const removeIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients(prevState => {
      // Menduplikasi state 'ingredients' lama 
      const newState = [...prevState]
      // Menghapus ingredient pada state ingredients' berdasarkan indexnya
      newState.splice(index, 1)
      // Me return data baru untuk state 'ingredients'
      return newState
    })
  }
  // Handler untuk menggeser ingredient keatas 1 tingkat
  const moveUpIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients(prevState => {
      // Menduplikasi state 'ingredients' lama 
      const newState = [...prevState]
      // Menduplikasi item pada index sebelum index ingredient yang akan digeser ke atas dan disimpan di variable 'temp'
      const temp = newState[index - 1]
      // Meng asign ingredient yang akan digeser ke index sebelum index saat ini
      newState[index - 1] = newState[index]
      // Meng asign variable temp ke index saat ini
      newState[index] = temp
      // Me return data baru untuk state 'ingredients'
      return newState
    })
  }

  // Handler untuk menggeser ingredient kebawah 1 tingkat
  const moveDownIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients(prevState => {
      // Menduplikasi state 'ingredients' lama 
      const newState = [...prevState]
      // Menduplikasi item pada index sebelum index ingredient yang akan digeser ke atas dan disimpan di variable 'temp'
      const temp = newState[index + 1]
      // Meng asign ingredient yang akan digeser ke index sebelum index saat ini
      newState[index + 1] = newState[index]
      // Meng asign variable temp ke index saat ini
      newState[index] = temp
      // Me return data baru untuk state 'ingredients'
      return newState
    })
  }



  return (
    <BurgerContext.Provider value={{ ingredients, setIngredients, addIngredientsHandler, removeIngredientsHandler, moveUpIngredientsHandler, moveDownIngredientsHandler }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/burger-maker" element={<BurgerMaker />} />
        </Routes>
      </Layout>
    </BurgerContext.Provider>
  );
}

export default App;