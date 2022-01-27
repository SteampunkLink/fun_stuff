import { useState } from "react"
import SlamHead from "./components/SlamHead"
import SlamCoinSpinner from "./components/SlamCoinSpinner"

import SlamShop from "./SlamShop"
import SlamCollection from "./SlamCollection"
import SlamGame from "./SlamGame"

import "./Slam.scss"

const SlamApp = () => {
  const [menuSelected, selectMenu] = useState("collection")
  return (
    <div id="slam-app">
      <SlamHead active={menuSelected} handleSelect={selectMenu} />
      {menuSelected === "shop" && <SlamShop />}
      {menuSelected === "collection" && <SlamCollection />}
      {menuSelected === "game" && <SlamGame />}
      <SlamCoinSpinner />
    </div>
  )
}

export default SlamApp
