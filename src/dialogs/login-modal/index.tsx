import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../websiteAuth.scss'
import facebookIcon from '../../assets/images/panel-images/auth-images/facebook.png'
import googleIcon from '../../assets/images/panel-images/auth-images/google.png'
import amazonIcon from '../../assets/images/panel-images/auth-images/social.png'

export default function LoginModal({ isOpen, setIsOpen }: any) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="auth-inner login">
                  <div className="left-area">
                    <h1>Login</h1>
                    <p>
                      Welcome back! Please log in to your account to view your
                      order history, track shipments, and enjoy a faster
                      checkout experience. If you’re new here, create an account
                      to access exclusive deals, manage your wishlist, and stay
                      updated on the latest products.
                    </p>
                  </div>
                  <div className="right-area">
                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          id="loginEmail"
                          name="loginEmail"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          id="loginPassword"
                          name="loginPassword"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group mt-3">
                        <div className="flex-inner">
                          {/* <!-- <a href="#">Get Email OTP</a> --> */}
                          <a href="#">Forget Password?</a>
                        </div>
                      </div>

                      <div className="form-group mt-4">
                        <Link to={'/'} className="submit-btn">
                          Login
                        </Link>
                      </div>
                    </form>

                    <div className="sso-area mt-4">
                      <p>Or login with</p>
                      <div className="login-social-icons-inner">
                        <Link to={'/'}>
                          <img src={facebookIcon} alt="" />
                          Facebook
                        </Link>
                        <Link to={'/'}>
                          <img src={googleIcon} alt="" />
                          Google
                        </Link>
                        <Link to={'/'}>
                          <img src={amazonIcon} alt="" />
                          Amazon
                        </Link>
                      </div>
                    </div>

                    <p>
                      Don't have an account? <Link to={'/'}>Sign up</Link>
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
