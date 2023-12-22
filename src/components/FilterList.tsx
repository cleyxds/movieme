import { useState } from "react"

import Modal from "@mui/material/Modal"

import { useResetRecoilState } from "recoil"
import { MovieSearchInput } from "../atoms/Movies/search"

import { CategoriesList } from "./CategoriesList"
import { Search } from "./Search"

export function FilterList() {
  const resetSearchInput = useResetRecoilState(MovieSearchInput)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    resetSearchInput()
    setOpen(false)
  }

  return (
    <div className="fixed bottom-8 w-full flex justify-center">
      <button
        onClick={handleOpen}
        className="px-3 py-1 bg-[#F3CC4F] rounded-full shadow-md"
      >
        Open filters
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="gap-6 flex flex-col py-6 absolute bg-white h-full w-full max-h-[100vh] overflow-y-auto">
          <div className="px-4">
            <Search />
          </div>

          <CategoriesList />

          <div className="fixed bottom-8 w-full flex justify-center">
            <button
              onClick={handleClose}
              className="px-4 py-1 bg-[#F3CC4F] rounded-full shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
