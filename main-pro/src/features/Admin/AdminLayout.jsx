import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = () => {
  return (
    <>
      <ToastContainer position="bottom-left" autoClose={2000}
hideProgressBar={false} newestOnTop={false} closeOnClick
rtl={false} pauseOnFocusLoss={false}
draggable pauseOnHover={false} theme="colored"
/>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <AdminHeader />
        <main className="p-6 bg-gray-50 flex-grow overflow-y-auto">
            <Outlet/>
        </main>
      </div>
    </div>
    </>
  )
}

export default AdminLayout
