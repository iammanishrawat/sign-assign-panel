import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function SignupModal({ isOpen, setIsOpen }: any) {
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
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Area */}
                  <div className="lg:w-1/2">
                    <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
                    <p className="text-gray-600">
                      Sign up today and enjoy 25% OFF your first purchase! Don’t
                      miss out—this special offer won’t last forever!
                    </p>
                  </div>

                  {/* Right Area - Signup Form */}
                  <div className="lg:w-1/2">
                    <form className="space-y-4">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="form-input w-1/2"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="form-input w-1/2"
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-input w-full"
                      />

                      <div className="flex gap-2">
                        <select className="form-select w-1/4">
                          <option>+91</option>
                        </select>
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          className="form-input w-3/4"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">
                          Register as -
                        </label>
                        <div className="flex gap-4 mt-1">
                          <label className="flex items-center gap-1">
                            <input
                              type="radio"
                              name="roleId"
                              value="2"
                              defaultChecked
                            />
                            Individual
                          </label>
                          <label className="flex items-center gap-1">
                            <input type="radio" name="roleId" value="3" />
                            Business
                          </label>
                        </div>
                      </div>

                      <input
                        type="text"
                        placeholder="Business Name"
                        className="form-input w-full"
                      />

                      <label className="flex items-start gap-2 text-sm">
                        <input type="checkbox" />
                        <span>
                          By agreeing, you'll receive offers via SMS, WhatsApp,
                          or Email. You can opt out anytime.
                        </span>
                      </label>

                      <button
                        type="button"
                        onClick={() => alert('Create Account')}
                        className="w-full bg-blue-600 text-white py-2 rounded"
                      >
                        Create Account
                      </button>
                    </form>

                    {/* SSO Section */}
                    <div className="mt-6">
                      <p className="text-center mb-3">Or sign up with</p>
                      <div className="flex justify-center gap-4">
                        {['facebook', 'google', 'social'].map((name, i) => (
                          <button
                            key={i}
                            className="flex flex-col items-center text-sm"
                          >
                            <img
                              src={`/images/login-page/${name}.png`}
                              alt={name}
                              className="w-8 h-8 mb-1"
                            />
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-center mt-4">
                      Already have an account?{' '}
                      <a href="#" className="text-blue-500 underline">
                        Log in
                      </a>
                    </p>
                    <p className="text-xs text-center mt-1">
                      Read Our{' '}
                      <a href="#" className="underline">
                        Terms And Conditions
                      </a>{' '}
                      And{' '}
                      <a href="#" className="underline">
                        Privacy Policy
                      </a>
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
