import React from 'react'
import sarfo from '../assets/sarfo.jpg'
import solo from '../assets/images.png'

const Management = () => {
    const teamMembers = [
  {
    name: 'Clifford Sarfo',
    title: 'Chief Executive Officer',
    image: sarfo,
  },
  {
    name: 'Frimpong Ohene Solomon',
    title: 'Lead Technician',
    image: solo,
  },
  {
    name: 'Mary Johnson',
    title: 'Industrial Wiring Specialist',
    image: '/images/mary.jpg',
  },
  // Add more as needed
];

  return (
    <section className="py-5 bg-light" id="team">
      <div className="container text-center">
        <h2 className="mb-5 text-dark">Meet the Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={member.image}
                  className="card-img-top img-fluid rounded-circle p-4"
                  alt={member.name}
                  style={{ height: '320px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text text-muted">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Management
