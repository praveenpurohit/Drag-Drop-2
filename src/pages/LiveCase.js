import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const LiveCase = () => {

    const location = useLocation();
    const { state } = location;
    const data = state?.data || {};

    return (
        <>
            {/* Header */}
            <header className="header to_do_list_header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="top_bar">
                            <div className="image">
                                <NavLink to={"/"}>
                                    <img src="assets/img/logo.png" alt="logo" />
                                </NavLink>
                            </div>
                            <div className="icon">
                                <div className="box">
                                    <i className="fa-solid fa-house-chimney" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Live Case Section */}
            <section className="live_case_section">
                <div className="container-fluid">
                    <div className="top_text text-center">
                        <h1>Live case</h1>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="left_side_box">
                                <div className="top_text">
                                    <h5> Overview</h5>
                                </div>
                                <div className="card">
                                    <div className="info">
                                        <div className="card_area">
                                            <h5>Account</h5>
                                        </div>
                                        <div className="text">
                                            <p>Active: {data.isActive?.toString() || 'null'}</p>
                                            <p>Verified: {data.isVerified?.toString() || 'null'}</p>
                                            <p>Creation date: {data.createdAt ? new Date(data.createdAt).toLocaleString() : 'null'}</p>
                                            <p>Update date: {data.updatedAt ? new Date(data.updatedAt).toLocaleString() : 'null'}</p>
                                            <p>Registration type: {data.register_type || 'null'}</p>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="card_area">
                                            <h5>Member</h5>
                                        </div>
                                        <div className="text">
                                            <p>Name: {data.fullname || 'null'}</p>
                                            <p>Birthday:  {data.birthday || 'null'}</p>
                                            <p>Username: {data.username || 'null'}</p>
                                            <p>Phone number:  {data.phone_number || 'null'}</p>
                                            <p>Email:  {data.email || 'null'}</p>
                                            <p>Time zone: {data.zone || 'null'}</p>
                                            <p>Member's current time: {new Date().toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="card_area">
                                            <h5>Premium</h5>
                                        </div>
                                        <div className="text">
                                            <p>Member: {data.isPremium?.toString() || 'null'}</p>
                                            <p>Since: {data.premium_since ? new Date(data.premium_since).toLocaleString() : 'null'}</p>
                                            <p>Expiration: {data.premium_expiration ? new Date(data.premium_expiration).toLocaleString() : 'null'}</p>
                                            <p>Expiration warning seen: {data.peNotifSeen?.toString() || 'null'}</p>
                                            <p>Days earned: {data.days_earned || 'null'}</p>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="card_area">
                                            <h5>Appearance</h5>
                                        </div>
                                        <div className="text">
                                            <p>App icon: {data.app_icon || 'null'}</p>
                                            <p>Star icon: {data.streaks} <span><i className="fa-solid fa-star" style={{ color: '#F4E550' }} /></span></p>
                                            <p>Streak icon: {data.streaks} <i class="fa-solid fa-fire" style={{ color: "#e25822" }}></i></p>
                                            <p>Theme color: {data.themeColor || 'null'}</p>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="card_area">
                                            <h5>School</h5>
                                        </div>
                                        <div className="text">
                                            <p>Student true: {data.isStudent?.toString() || 'null'}</p>
                                            <p>School ID: {data.schoolId || 'null'} </p>
                                            <p>School name: {data.schoolName || 'null'} </p>
                                            <p>Scholl email: {data.schoolEmail || 'null'}</p>
                                            <p>Scholl graduation year: {data.school_grad_year || 'null'}</p>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="card_area">
                                            <h5>Refrral</h5>
                                        </div>
                                        <div className="text">
                                            <p>Link: {data.referralLink || 'null'}</p>
                                            <p>Referrer's ID: {data.referrer || 'null'}</p>
                                            <p>Has invited someone: {data.isInviter?.toString() || 'null'} </p>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="card_area">
                                            <h5>Devices</h5>
                                        </div>
                                        <div className="text">
                                            <p>Id: {data.id || 'null'}</p>
                                            <p>Type: {data.register_type || 'null'} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-5 col-md-7">
                            <div className="bottom_side">
                                <div className="card_box">
                                    <div className="top_text">
                                        <h4>Chat</h4>
                                    </div>
                                    <div className="card">
                                        <div className="top_image_area">
                                            <div className="image">
                                                <img src="assets/img/profile.jpg" alt="profile" className="img-fluid" />
                                            </div>
                                            <div className="text text-center">
                                                <p>First name</p>
                                            </div>
                                        </div>
                                        <div className="chat_area">
                                            <div className="time_text">
                                                <p>Chat started with both at 8:55PM</p>
                                            </div>
                                            <div className="right_message">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
                                                        eveniet,
                                                        quasi distinctio sunt inventore facere nihil molestias ad dolorum
                                                        deleniti
                                                        sapiente voluptatem consequatur id nobis maiores illo hic. Atque soluta
                                                        officia
                                                        necessitatibus, molestias...</p>
                                                </div>
                                            </div>
                                            <div className="left_message">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
                                                        eveniet,
                                                        quasi distinctio sunt inventore facere nihil molestias ad dolorum
                                                        deleniti
                                                        sapiente voluptatem consequatur id nobis maiores illo hic. Atque soluta
                                                        officia
                                                        necessitatibus, molestias...</p>
                                                </div>
                                            </div>
                                            <div className="time_text">
                                                <p>Team notified today at 8:52PM</p>
                                            </div>
                                            <div className="right_message">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam
                                                        totam..
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="right_message">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet ...</p>
                                                </div>
                                            </div>
                                            <div className="time_text">
                                                <p>Chat started with FIRST NAME at 8:55PM</p>
                                            </div>
                                            <div className="right_message">
                                                <div className="message">
                                                    <p>Lorem ipsum dolor sit amet ...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom_chat">
                                            <div className="chat_field">
                                                <div className="icon">
                                                    <i className="fa-solid fa-link" />
                                                </div>
                                                <div className="chatt">
                                                    <input type="text" placeholder="Message" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6">
                            <div className="right_side_box">
                                <div className="top_text">
                                    <h5>Resouces</h5>
                                </div>
                                <div className="card">
                                    <div className="card_text">
                                        <a>Support search</a>
                                        <a>Training guide</a>
                                        <a>Ask a manager</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LiveCase