import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
import { Draggable, Droppable } from "react-beautiful-dnd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Card = ({ column, tasks }) => {

    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const handleStartClick = () => {
        const apiEndpoint = 'https://staging.gro-technologies.com/api/users/1133';
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZ0Bob3RtYXhpbGRkLmNvbSIsInN1YiI6MTEzMywiaWF0IjoxNjg3MDI3OTQ0LCJleHAiOjE2OTA5MTU5NDR9.ZWaFC-lKerutkfi2BYsqdhAQlj09FzLXXokabGcXgQs';

        axios
            .get(apiEndpoint, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                navigate('/case', { state: { data: response.data } });
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="col-xl-4 col-lg-6">
            <div className="card_box">
                <div className="card_top_text">
                    <h5>{column.title}<span> {tasks.length}</span></h5>
                </div>
                <Droppable droppableId={column.id}>
                    {(droppableProvided, droppableSnapshot) => (
                        <div
                            ref={droppableProvided.innerRef}
                            {...droppableProvided.droppableProps}
                        >
                            {tasks.map((task, index) => (
                                <Draggable
                                    key={task.id}
                                    draggableId={task.id.toString()}
                                    index={index}
                                >
                                    {(draggableProvided, draggableSnapshot) => (
                                        <>
                                            <div className="card" ref={draggableProvided.innerRef}
                                                {...draggableProvided.draggableProps}
                                                {...draggableProvided.dragHandleProps}>
                                                <div className="top_area">
                                                    <div className="left_side">
                                                        <div className="icon">
                                                            <i className="fa-solid fa-lightbulb" />
                                                        </div>
                                                    </div>
                                                    <div className="right_side">
                                                        <div className="top_text">
                                                            <h5>{task.content}</h5>
                                                            <p>because i am unable to even look at all of my tasks. You guys really need
                                                                to
                                                                help me because i am going to lose all of my progress for the entire
                                                                month.Al....</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bottom_area">
                                                    <div className="left_side">
                                                        <div className="text">
                                                            <h6>Time waiting: 1 day 24 minutes Priority: High</h6>
                                                            <h6>Priority: High</h6>
                                                            <h6>ID: 12839299938392</h6>
                                                        </div>
                                                    </div>
                                                    <div className="right_side">
                                                        <div className="profile_image">
                                                            <a onClick={handleShow}>
                                                                <img src="assets/img/profile.jpg" alt="profile-image" />
                                                            </a>
                                                            <Modal show={show} onHide={handleClose} id="exampleModal" centered>
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
                                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet,
                                                                                        quasi distinctio sunt inventore facere nihil molestias ad dolorum deleniti
                                                                                        sapiente voluptatem consequatur id nobis maiores illo hic. Atque soluta officia
                                                                                        necessitatibus, molestias...</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="left_message">
                                                                                <div className="message">
                                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet,
                                                                                        quasi distinctio sunt inventore facere nihil molestias ad dolorum deleniti
                                                                                        sapiente voluptatem consequatur id nobis maiores illo hic. Atque soluta officia
                                                                                        necessitatibus, molestias...</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="time_text">
                                                                                <p>Team notified today at 8:52PM</p>
                                                                            </div>
                                                                            <div className="right_message">
                                                                                <div className="message">
                                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam totam..
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
                                                                    </div>
                                                                    <div className="start_button text-center">
                                                                        <NavLink to={"/case"} onClick={handleStartClick}>Start</NavLink>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    )
}

export default Card