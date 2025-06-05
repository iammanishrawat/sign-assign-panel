import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from "@headlessui/react"
import {useEffect, useState} from "react"

import Icons from "../../../components/Icons"
import {
  deleteBusinessClient,
  listBusinessClient,
  type BusinessClient,
} from "../../../features/business-client/businessClientSlice"
import {formatAddress} from "../../../helpers"
import {useAppDispatch} from "../../../hooks/useAppDispatch"
import {useAppSelector} from "../../../hooks/useAppSelector"
import CreateForm from "./parts/create-form"
import "./style.scss"

const BusinessClientPage = () => {
  const dispatch = useAppDispatch()
  const {businessClients, status, error} = useAppSelector(state => state.businessClient)

  const [showForm, setShowForm] = useState(false)
  const [open, setOpen] = useState(false)
  const [selectedBusinessClient, setSelectedBusinessClient] = useState<BusinessClient | null>(null)
  const [selectedBusinessClientIdToDelete, setSelectedBusinessClientIdToDelete] = useState<
    number | null
  >(null)

  useEffect(() => {
    dispatch(listBusinessClient())
  }, [dispatch])

  useEffect(() => {
    if (!showForm) {
      setSelectedBusinessClient(null)
      dispatch(listBusinessClient())
    }
  }, [showForm])

  useEffect(() => {
    if (!open) {
      setSelectedBusinessClientIdToDelete(null)
      dispatch(listBusinessClient())
    }
  }, [open])

  const handleAddNewClick = (businessClient: BusinessClient | null = null) => {
    if (businessClient) {
      setSelectedBusinessClient(businessClient)
    }
    setShowForm(true)
  }

  const handleDeleteItem = (businessClientId: number) => {
    setSelectedBusinessClientIdToDelete(businessClientId)
    setOpen(true)
  }

  const onClickDelete = async () => {
    try {
      if (selectedBusinessClientIdToDelete) {
        const response = await dispatch(
          deleteBusinessClient({
            businessClientIds: [selectedBusinessClientIdToDelete],
          })
        )
        if (deleteBusinessClient.fulfilled.match(response)) {
          alert("Business client deleted successfully!")
          setOpen(false)
        } else if (deleteBusinessClient.rejected.match(response)) {
          // Handle error here
          alert(response.payload) // this is what you returned with rejectWithValue
        }
      }
    } catch (error) {
      console.log(`error ===`, error)
    }
  }

  return (
    <>
      {!showForm && (
        <>
          <div className="add-address-area">
            <h6>Clients:</h6>
            <button type="button" onClick={() => handleAddNewClick()}>
              <Icons name="Plus" /> Add new client
            </button>
          </div>
          <div className="address-card">
            {businessClients?.map((businessClient, index) => (
              <div className="inner" key={index}>
                <h6>
                  {businessClient?.firstName}
                  {(businessClient?.lastName ?? "").trim() !== ""
                    ? ` ${businessClient?.lastName}`
                    : ""}
                </h6>
                <p>{formatAddress(businessClient)}</p>
                <p>
                  <span>Phone Number:</span> {businessClient?.mobile}
                </p>
                <p>
                  <span>Email ID:</span> {businessClient?.email}
                </p>
                <div className="button-group">
                  <button
                    type="button"
                    onClick={() => (businessClient ? handleAddNewClick(businessClient) : {})}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      businessClient?.businessClientId
                        ? handleDeleteItem(businessClient.businessClientId)
                        : {}
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {showForm && (
        <CreateForm setShowForm={setShowForm} selectedBusinessClient={selectedBusinessClient} />
      )}

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                    <i className="fi fi-rr-triangle-warning"></i>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Delete client
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this client? All of your data will be
                        permanently removed. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={onClickDelete}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer"
                >
                  Delete
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default BusinessClientPage
