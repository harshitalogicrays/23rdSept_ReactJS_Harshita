import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useCart } from './CartContext'
import { toast } from 'react-toastify'
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks'
import { useDispatch, useSelector } from 'react-redux'
import { logout_user, selectName } from '../redux/userSlice'
import { filter_by_search } from '../redux/filterSlice'
import { fetchProducts, selectProducts } from '../redux/productSlice'

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'About', href: '/about'},
  { name: 'Products', href: '/products'},
  { name: 'Contact', href: '/contact' },
]

const FNavbar = () => {
  const cartcon =  useCart()
  const redirect = useNavigate()
  const dispatch = useDispatch()
  const handleLogout=()=>{
    // if(sessionStorage.getItem('23rdsept') != null){
    //   sessionStorage.removeItem('23rdsept')
      toast.success("loggedOut Successfully")
      dispatch(logout_user())
      redirect('/')
    // }
  }
  // console.log(cartcon)

  // const username = useSelector((state)=>state.user.name)
  const username = useSelector(selectName)

  //search - 
  useEffect(()=>{  dispatch(fetchProducts())},[]) 
  const products = useSelector(selectProducts)
  let [search,setSearch] =useState('')
  useEffect(()=>{
      dispatch(filter_by_search({products,search}))
  },[search])
  
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-2">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <span className='text-white'>logo</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                     isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}>{item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <input name="search" type="text"
           className="block w-48 me-9 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" placeholder='search here'
            value={search} onChange={(e)=>setSearch(e.target.value)}  />
         <ShowOnLogout>
          <NavLink to="/login"  className={({ isActive }) =>
           isActive ? "bg-gray-900 text-white rounded-md px-3 me-6  py-2 text-sm font-medium" : "rounded-md px-3 py-2 me-6 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}>Login</NavLink>
      
         <NavLink to="/register"  className={({ isActive }) =>
           isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium me-6 " : "rounded-md px-3 py-2 me-6 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}>Register</NavLink>
          </ShowOnLogout>
            <ShowOnLogin>
            <Link to='/cart'
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            > 
         
            <ShoppingCartIcon aria-hidden="true" className="h-8 w-8" />
            <span className='bg-red-800 text-white py-1 px-1 text-sm absolute -top-1 -right-1 rounded-full'>{cartcon.cartItems.length}</span>
            </Link>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative text-white flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {/* <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  /> */}
                  Welcome {username}
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            </ShowOnLogin>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
              <NavLink to={item.href}  key={item.name} className={({ isActive }) =>
                     isActive ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}> {item.name}</NavLink>
          ))}
        </div>
      </DisclosurePanel>

      
    </Disclosure>
  
  )
}

export default FNavbar
