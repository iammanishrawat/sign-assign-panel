import {Dialog, Transition} from "@headlessui/react"
import {Fragment, useState} from "react"
import {Link} from "react-router-dom"
import "../../websiteAuth.scss"
import facebookIcon from "../../assets/images/panel-images/auth-images/facebook.png"
import googleIcon from "../../assets/images/panel-images/auth-images/google.png"
import amazonIcon from "../../assets/images/panel-images/auth-images/social.png"

export default function SignupModal({isModalOpen, setIsModalOpen}: any) {
  const [selectedRole, setSelectedRole] = useState("1") // default to 'Individual'
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
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
                <div className="auth-inner signup">
                  <div className="left-area">
                    <h1>Sign Up</h1>
                    <p>
                      Sign up today and enjoy 25% OFF your first purchase! Whether you're just
                      getting started or looking to take things to the next level, this is the
                      perfect time to jump in and save. Don’t miss out—this special offer won’t last
                      forever!
                    </p>
                  </div>

                  <div className="right-area" id="registerFormContainer">
                    <form>
                      <div className="form-group">
                        <div className="flex-inner">
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                          />
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <div className="flex-inner">
                          <select name="" id="" className="form-select" style={{flex: "1 1 25%"}}>
                            <option value="">
                              <div>
                                <span>+91</span>
                              </div>
                            </option>
                            <option value="">
                              <div>
                                <span>+91</span>
                              </div>
                            </option>
                            <option value="">
                              <div>
                                <span>+91</span>
                              </div>
                            </option>
                          </select>
                          <input
                            type="tel"
                            className="form-control"
                            style={{flex: "1 1 75%"}}
                            id="mobile"
                            name="mobile"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Register as -</label>
                        <div className="flex-radiobtn">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="roleId"
                                value="1"
                                checked={selectedRole === "1"}
                                onChange={e => setSelectedRole(e.target.value)}
                              />
                              Individual
                            </label>
                          </div>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="roleId"
                                value="2"
                                checked={selectedRole === "2"}
                                onChange={e => setSelectedRole(e.target.value)}
                              />
                              Business
                            </label>
                          </div>
                        </div>
                      </div>
                      {selectedRole === "2" && (
                        <div id="businessDetailsContainer" className="form-group">
                          <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            className="form-control"
                            placeholder="Business name"
                          />
                        </div>
                      )}
                      <div className="form-group">
                        <label htmlFor="terms">
                          <input type="checkbox" id="terms" />
                          By agreeing, you'll receive the latest promotional offers, updates, and
                          creative ideas from us via SMS, WhatsApp, or Email. You can opt out
                          anytime you wish to.
                        </label>
                      </div>
                      <div className="form-group mt-3">
                        <Link to={"/"} className="submit-btn">
                          Create Account
                        </Link>
                      </div>
                    </form>

                    <div className="sso-area mt-4">
                      <p>Or sign up with</p>
                      <div className="social-icons-inner">
                        <Link to={"/"}>
                          <img src={facebookIcon} alt="" />
                          Facebook
                        </Link>
                        <Link to={"/"}>
                          <img src={googleIcon} alt="" />
                          Google
                        </Link>
                        <Link to={"/"}>
                          <img src={amazonIcon} alt="" />
                          Amazon
                        </Link>
                      </div>
                    </div>

                    <p>
                      Already have an account? <a href="#">Log in</a>
                    </p>
                    <p>
                      Read Our <a href="#">Terms And Conditions</a> And{" "}
                      <a href="#">Privacy Policy</a>
                    </p>
                  </div>

                  {/* <div className="right-area" id="verifyAndSetPasswordContainer" style="display: none;">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="otp" name="otp" placeholder="OTP">
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password">
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password">
                            </div>
                            <div className="form-group mt-3">
                                <a onclick="resendOTP()" className="submit-btn">Resend OTP</a>
                            </div>
                            <div className="form-group mt-3">
                                <a onclick="verifyAndSetPassword()" className="submit-btn">Complete Setup</a>
                            </div>
                        </form>
                    </div> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
