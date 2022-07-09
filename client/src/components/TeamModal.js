import React, { useEffect, useState } from 'react'
import { Team } from '../API/Team-Mock-Data'

const TeamModal = () => {
    const [team, setTeam] = useState([]);

    const handleTeam = () => {
        setTeam(Team);
    }

    useEffect(() => {
        handleTeam();
    });

    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <section id="instructors" className="p-5 text-dark">
                                <div className="container">
                                    <h2 className="text-center">Our Team</h2>
                                    <p className="lead text-center mb-5">
                                        Our developers all have 5+ years working as a web developer and graphics (UX/UI) designers in the
                                        industry
                                    </p>
                                    <div className="row g-4">
                                        {team.map(t => (
                                            <div className="col-md-6 col-lg-6" key={t.id}>
                                                <div className="card bg-light">
                                                    <div className="card-body text-center">
                                                        <img
                                                            src={t.picture}
                                                            className="rounded-circle img-fluid mb-3"
                                                            alt=""
                                                        />
                                                        <h3 className="card-title mb-3">{t.name}</h3>
                                                        <p className="card-text">
                                                            {t.content}
                                                        </p>
                                                        <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                                                        <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                                                        <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                                                        <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamModal
